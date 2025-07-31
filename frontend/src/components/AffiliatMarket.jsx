import React from 'react';
import AffiliateProductCard from './CardForAffiliat';

const products = [
  {
    title: 'soundcore by Anker Q20i Wireless Bluetooth Over-Ear Headphones with Hybrid Active Noise Cancelling, 40h Playtime in ANC Mode, Hi-Res Audio, Deep Bass, Personalization via App (Black)',
    image: 'https://m.media-amazon.com/images/I/51CnDMbXZzL._SL1200_.jpg',
    price: '₹3,692',
    link: 'https://www.amazon.in/soundcore-Bluetooth-Headphones-Cancelling-Personalization/dp/B0C3HCD34R?crid=2Y6UW49R6AAMZ&dib=eyJ2IjoiMSJ9.XnLGUahQuULqZX_hQ_GIZ9i6eSOKHl7aTYm1Z_vyL1ZHjKqe6D6XKUDjt8J_DQ8wciAoZDmgxWJXdvDfikHP1hwGPsDQF-vHLrgAn6wUmVo8_41oFQyBpvctnwlkmeHMcEkfhVjRFAe9iKd4yxyh333g9pmc36sGO26dkzs4JR3ju4irDvfI_7tlWVUo8lui1pecMaMik1hBhrOfuaV2BgL-TrufEPOIjW_7YdFqrK8.ypXPtYVcFygcLlonnvTMrlByoDIDtpCpWRRPtbA90rY&dib_tag=se&keywords=soundcore%2Bq20i&nsdOptOutParam=true&qid=1753963059&sprefix=soundcore%2B%2Caps%2C302&sr=8-1-spons&sp_csd=d2lkZ2V0TmFtZT1zcF9hdGY&th=1&linkCode=ll1&tag=advestore1-21&linkId=aea0d5d74496258f1327b5cb0530ec54&language=en_IN&ref_=as_li_ss_tl',
  },
  {
    title: 'ASUS Vivobook 15, 15.6" FHD (1920 x 1080), Intel Core i3-1315U, (8GB RAM/512GB SSD/Intel UHD iGPU/Windows 11/M365 Basic (1Year)*/Office Home 2024/Quiet Blue/1.7 Kg), X1504VA-NJ3321WS',
    image: 'https://m.media-amazon.com/images/I/71iTDJNIN3L._SL1500_.jpg',
    price: '₹33,990',
    link: 'https://www.amazon.in/ASUS-Vivobook-i3-1315U-Windows-X1504VA-NJ3321WS/dp/B0DYF2678B?crid=1QWCVZC7XQEYM&dib=eyJ2IjoiMSJ9.J0rmliwFgclgdjg6WpbP3nlW-SDf5KDCFraw2IcGgrWR1AcVwzCgKoIWwqacIZRmY2TFohoi1WnVPkHNHHm2oSabstMIkRGZf5-kNxC13cDa_3jWGVfFI38y8tHaVWHavbtOfZu0KRh-AeHZQeJNcLM9xk2nhdZ1SGQ5N5yDCQijSdBHGp6Fnkio42Pw8iJR2P_CZQrNicEkHY6-t5AfIPSd2z8T6Kye7wzg0-lE5ss.PkE1pxhD3fltUHe_19v24TkqA64c0CuxJpGdNOC2HCc&dib_tag=se&keywords=laptop%2Bunder%2B35000&qid=1753963344&sprefix=lap%2Caps%2C332&sr=8-1-spons&sp_csd=d2lkZ2V0TmFtZT1zcF9hdGY&th=1&linkCode=ll1&tag=advestore1-21&linkId=4f05f63394ac3c2155f131ab3d96a001&language=en_IN&ref_=as_li_ss_tl',
  },
  {
    title: 'Ruhe® Handmade Exclusive Single Bowl Kitchen Sink - 24x18x10 inches | Premium Stainless Steel Sink with Brushed Matte Finish | Kitchen Sink Including Coupling, Waste Pipe & Vegetable Washing Basket',
    image: 'https://m.media-amazon.com/images/I/81P-c2QjgWL._SL1500_.jpg',
    price: '₹2,899',
    link: 'https://www.amazon.in/Exclusive-Handmade-Kitchen-24x18x10-Stainless/dp/B09RV3CQ8Q?crid=BBORQEGCGLC&dib=eyJ2IjoiMSJ9.6wljH2yW1Ns85C8u9eXtyGvFBtPbbcZSdKtLZc48aYf8Cd2T1aW0WwW-djMlPiX-laAO_8XnAecJJ_w7twowFbjRB3eMQCUUwCkn5ukaOeUhUwC2GWeSuNdIQ65HxuPHcmNL23hD4t4CNQuGV8iVMjz0jrtM5u7BkoUYeCwkJFyiGX3_9O9ENf-WSuhFbD4TMQ4mDk-XUvGsHV0g512n4rN3iznQoiHjWLRtXBAx3Zpe0baAsB-Y3wchCdszBll2P5A1nKyMN-euwQdGGRdWhKdLWEEqLeBuL2nU2IKZRis.MtQE-AzU98R6COMNAl_A5TtRVjhDOlfv3uAZhaljGzQ&dib_tag=se&keywords=kitchen%2Baccessories%2Bitems%2Bfor%2Bhome&qid=1753963512&sprefix=kitc%2Caps%2C265&sr=8-2-spons&sp_csd=d2lkZ2V0TmFtZT1zcF9hdGY&th=1&linkCode=ll1&tag=advestore1-21&linkId=e5f4407f05becf7d17073552fb57cbea&language=en_IN&ref_=as_li_ss_tl',
  },
  {
    title: 'Symbol Premium Men`s Wrinkle-Resistant Regular Fit Cotton Formal Shirt',
    image: 'https://m.media-amazon.com/images/I/81Be4hgx1gL._SX569_.jpg',
    price: '₹2,899',
    link: 'https://www.amazon.in/Symbol-Premium-Non-Iron-Cotton-Formal/dp/B0C3HPFDZ9?crid=2A4LFRI3O1L1G&dib=eyJ2IjoiMSJ9.kqtF1M99tT0DKiVkxt2XokOQtkqFilHko32Re38nFktnFWcnNBirhP432IDkc7XsShQeVmIzzrUn8DnlEt_r5HN47glRh87KEibqfKLrxmN-yDIv0-tcBdGSNpZYWjWpYBMl2tjBvUXt-6fpX5L7sjtes9YtCmQ_qDIKCBwVa_xdhzjE3aXnfYD3Gj1oQFAA5fFg49FMtPI2Q5rSaGEKVJumvC4aF88J9sYUdMrb2sP1vWrjLdVjnX08eInpmEXqdW2nBbNnQQQdV535M3nQsXcBxkkxZUOyb738lJsfPZA.pHsBKef2EUmnbsPlPSsXtNtymBptOjrx9K7p8NX6yAY&dib_tag=se&keywords=clothes&qid=1753963591&sprefix=clothe%2Caps%2C278&sr=8-2-spons&sp_csd=d2lkZ2V0TmFtZT1zcF9hdGY&th=1&psc=1&linkCode=ll1&tag=advestore1-21&linkId=ac747001293d610195668df57965dfee&language=en_IN&ref_=as_li_ss_tl',
  },
    {
    title: 'ANNI DESIGNER Women`s Rayon Blend Solid Straight Kurta with Pant & Dupatta',
    image: 'https://m.media-amazon.com/images/I/51w2daMvIKL._SX569_.jpg',
    price: '₹639',
    link: 'https://www.amazon.in/ANNI-DESIGNER-Raja-Saab-Blue_XL_Light/dp/B0DP34NZK2?crid=2A4LFRI3O1L1G&dib=eyJ2IjoiMSJ9.kqtF1M99tT0DKiVkxt2XokOQtkqFilHko32Re38nFkudZ-Z1iYwBa_m4SfsZEMqYIfMfB0U5m6y4at7fO7V4h29ZVActDercEzmJB-VFaga0TIUCGNwp7BdE7r_MHJuETGK9WD-dmIuHFzxYsuhePJWD1TDyj8rVF7pZQS7HBi5YC8rMFmlGb8vlhYQ2nswpl8wE8khALAW6HOE5EVrA0oLZNEbQiB49SfoVwM5TRGmTX5RMBH9E-o5gHflJ7L9Pxxm6h5SV4LsUOAy4nNz7hP_OLjdMO4z8oYHi1XTCpkY.4STpltR7Nb4k4w19mYeQ-LCvWdwC0mHu1ky3Vwz8WFI&dib_tag=se&keywords=clothes&qid=1753964223&sprefix=clothe%2Caps%2C278&sr=8-8&th=1&psc=1&linkCode=ll1&tag=advestore1-21&linkId=e7f89d25f883849487e1ea99f564481a&language=en_IN&ref_=as_li_ss_tl',
  },
    {
    title: 'iQOO 13 5G (Ace Green, 12GB RAM, 256GB Storage) | Snapdragon 8 Elite Mobile Platform | World`s First Q10 2K 144Hz Ultra EyeCare Display | Supercomputing chip Q2',
    image: 'https://m.media-amazon.com/images/I/51PTQGiP5ZL._SL1200_.jpg',
    price: '₹54,998',
    link: 'https://www.amazon.in/dp/B0FFBGW4TT?pd_rd_w=BC8Qt&content-id=amzn1.sym.549217d3-6a57-4717-99fc-ebf9174ad2f1&pf_rd_p=549217d3-6a57-4717-99fc-ebf9174ad2f1&pf_rd_r=W3J17WC2VF141HW2BDDC&pd_rd_wg=hoPxw&pd_rd_r=abe4755d-653d-4ca4-bd6a-94052181b8d3&th=1&linkCode=ll1&tag=advestore1-21&linkId=d523d148398b8718880fccf72c35ff76&language=en_IN&ref_=as_li_ss_tl',
  },
    {
    title: 'Amazon Echo Pop| Smart speaker with Alexa and Bluetooth| Loud sound, balanced bass, crisp vocals| Purple',
    image: 'https://m.media-amazon.com/images/I/81aMuyDLANL._SL1500_.jpg',
    price: '₹3,949',
    link: 'https://www.amazon.in/Introducing-Echo-Pop-Smart-speaker-Purple/dp/B09ZXD1CX2?crid=C4SSG9F8E27Z&dib=eyJ2IjoiMSJ9.tNi54_sc20SZiQHK4sA3ngdjonkj0bYloasrUN82DCvLX4b4yBTFGGf5G4whdT5cWUjknevlof2NfT_EnsffKRCbAvBP-uGsUx45s1WbjYFyZMCzKF80ORYeS49Y2gVcRgLb3IXu0dAnS-0UvQCXML1azMqhNNJpk4PQG9baTqlXq3-iB6TM7eu0jxy4eEFYJ5lH0AQ9zKZhIWjjRkNLVgyR7MDNZ7jDyBJZ_8iv_IY.xdQCJNlm4z6OC8smAMRLzFfstaUgh0CoYqm7Ge7Fvbw&dib_tag=se&keywords=alexa%2Becho%2Bdot%2B5th%2Bgeneration&qid=1753964414&sprefix=alex%2Caps%2C266&sr=8-1-spons&sp_csd=d2lkZ2V0TmFtZT1zcF9hdGY&th=1&linkCode=ll1&tag=advestore1-21&linkId=3cd72c96df5f6d67a22fc3b30110e464&language=en_IN&ref_=as_li_ss_tl',
  },
];

export default function AffiliateGallery() {
  return (
    <div className="flex flex-wrap justify-center gap-6 p-6">
      {products.map((product, idx) => (
        <AffiliateProductCard key={idx} product={product} />
      ))}
    </div>
  );
}
