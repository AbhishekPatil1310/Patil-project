// src/api/contactApi.js
import axios from 'axios';
const BASE_URL = import.meta.env.VITE_API_URL || 'https://patil-project-axrt.vercel.app';

export const sendContactMessage = async (data) => {
  const res = await axios.post(`${BASE_URL}/contact`, data);
  return res.data;
};
