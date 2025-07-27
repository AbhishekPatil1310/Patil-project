// src/plugins/jwt.js
const fp = require('fastify-plugin');
const env = require('../config/env');
const User = require('../models/user.model');
const {
  generateRefreshToken,
  revokeRefreshToken,
  seconds,
} = require('../utils/token.util');

function setAuthCookies(reply, accessToken, refreshToken) {
  reply
.setCookie('accessToken', accessToken, {
  httpOnly: true,
  sameSite: 'none',   // <- important for cross-site
  secure: true,       // <- must be true for SameSite: 'none'
  path: '/',
  maxAge: seconds(env.JWT_ACCESS_EXPIRES_IN),
})
.setCookie('refreshToken', refreshToken, {
  httpOnly: true,
  sameSite: 'none',   // <- important for cross-site
  secure: true,       // <- must be true for SameSite: 'none'
  path: '/api/v1',
  maxAge: seconds(env.JWT_REFRESH_EXPIRES_IN),
});

}

async function jwtPlugin(fastify) {
  /* 2️⃣  JWT plugin with cookie name */
  fastify.register(require('@fastify/jwt'), {
    secret: env.JWT_SECRET,
    sign: { expiresIn: env.JWT_ACCESS_EXPIRES_IN },
    cookie: {
      cookieName: 'accessToken',
      signed: false,
    },
  });

  /* 3️⃣  Auth decorator with auto‑refresh */
  fastify.decorate('authenticate', async function (request, reply) {
    try {
      // Try normal access‑token verification first
      await request.jwtVerify();
    } catch (err) {
      /* Access‑token missing / expired → try refresh‑token flow */
      const refreshToken = request.cookies.refreshToken;
      if (!refreshToken) {
        return reply.unauthorized('Not authenticated');
      }

      // Verify refresh token
      let decoded;
      try {
        decoded = await this.jwt.verify(refreshToken);
      } catch {
        return reply.unauthorized('Invalid refresh token');
      }

      // Ensure user still exists
      const user = await User.findById(decoded.sub).select('-password');
      if (!user) return reply.unauthorized('User not found');

      // 🔄  issue new access token (reuse existing refresh token)
      const newAccess = await reply.jwtSign({
        sub: user._id,
        role: user.role,
      });

      setAuthCookies(reply, newAccess, refreshToken);

      // Attach payload so downstream handlers have user info
      request.user = { sub: user._id, role: user.role };
    }

    /* attach full user object for controllers */
    const fullUser = await User.findById(request.user.sub).select('-password');
    if (!fullUser) return reply.unauthorized('User not found');
    request.userData = fullUser;
  });
}

module.exports = fp(jwtPlugin);
