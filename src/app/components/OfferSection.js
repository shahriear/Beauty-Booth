'use client';

import dynamic from 'next/dynamic';
import { useEffect, useState } from 'react';

const Slider = dynamic(() => import('react-slick'), { ssr: false });

const offers = [
  {
    title: 'Free Gift Offer',
    description:
      'Round Lab Mugwort Calming Serum (2ml) on orders above 2000 BDT',
    spend: 'Spend: 2000 TK',
    highlight: '৳150',
    label: 'Max Discount',
  },
  {
    title: 'New User Treat 🚚',
    description: 'New at Beauty Booth? Get Free delivery for your First order!',
    spend: 'Spend: 899 TK',
    highlight: 'Free Delivery',
    label: 'Max Discount',
  },
  {
    title: 'Free Gift Offer',
    description:
      'Round Lab Mugwort Calming Serum (2ml) on orders above 2000 BDT',
    spend: 'Spend: 2000 TK',
    highlight: '৳150',
    label: 'Max Discount',
  },
  {
    title: 'Free Gift Offer',
    description:
      'Skin1004 Centella Tea-Trica BHA Foam on orders above 2000 BDT',
    spend: 'Spend: 2000 TK',
    highlight: '৳150',
    label: 'Max Discount',
  },
];

export default function OfferSection() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 600,
    slidesToShow: 3,
    slidesToScroll: 1,
    swipeToSlide: true,
    touchThreshold: 10,
    draggable: true,
    autoplay: true,
    autoplaySpeed: 2500,
    pauseOnHover: true,
    arrows: false,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 2 } },
      { breakpoint: 640, settings: { slidesToShow: 1 } },
    ],
  };

  if (!mounted) return null;

  return (
    <section className="px-6 py-12">
      <h2 className="text-3xl font-bold text-gray-800 mb-8">
        OFFERS TO SAY YES
      </h2>

      <Slider {...settings}>
        {offers.map((offer, index) => (
          <div key={index} className="px-3">
            <div className="group relative flex border border-2 border-orange-300 rounded-2xl overflow-hidden bg-white h-40 transition-all duration-300  cursor-pointer">
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition bg-gradient-to-r from-pink-100/40 to-purple-100/40"></div>

              <div className="w-2/3 p-4 flex flex-col justify-between relative z-10 bg-orange-50">
                <h3 className="text-md font-bold text-gray-800">
                  {offer.title}
                </h3>
                <p className="text-xs text-gray-600 mt-1">
                  {offer.description}
                </p>
              </div>

              <div className="border-1 border-dashed border-orange-300 relative z-10"></div>

              <div className="w-1/3 flex flex-col items-center justify-center text-center p-4 relative z-10">
                <p className="text-xs text-gray-500 mb-1">{offer.spend}</p>
                <h2 className="text-2xl font-bold text-pink-500 group-hover:scale-105 transition">
                  {offer.highlight}
                </h2>
                <p className="text-xs text-gray-600 mt-1">{offer.label}</p>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </section>
  );
}
// 'use client';

// import Slider from 'react-slick';

// const offers = [
//   {
//     title: 'Free Gift Offer',
//     description:
//       'Free Gift ✨ Get Skin1004 Madecassol Centella Tox-Treat above 2000 BDT',
//     discount: '৳150',
//     maxDiscount: 'Max Discount',
//   },
//   {
//     title: 'Free Gift Offer',
//     description:
//       'Free Gift ✨ Get Noiseless & Control Azadic Add Serum above 2000 BDT',
//     discount: '৳150',
//     maxDiscount: 'Max Discount',
//   },
//   {
//     title: 'Free Gift Offer',
//     description:
//       'Free Gift ✨ Get Skin1004 Madecassol Centella Tox-Treat above 2000 BDT',
//     discount: '৳150',
//     maxDiscount: 'Max Discount',
//   },
//   {
//     title: 'Free Gift Offer',
//     description:
//       'Free Gift ✨ Round Lab Mugwort Calming Serum (30ml) on orders above 2000 BDT',
//     discount: '৳150',
//     maxDiscount: 'Max Discount',
//   },
// ];

// export default function OfferSection() {
//   const settings = {
//     dots: true,
//     infinite: true,
//     speed: 500,
//     slidesToShow: 3,
//     slidesToScroll: 1,
//     autoplay: true,
//     autoplaySpeed: 4000,
//     arrows: false,
//     draggable: true,
//     touchMove: true,
//     responsive: [
//       {
//         breakpoint: 1024,
//         settings: {
//           slidesToShow: 2,
//           slidesToScroll: 1,
//         },
//       },
//       {
//         breakpoint: 640,
//         settings: {
//           slidesToShow: 1,
//           slidesToScroll: 1,
//         },
//       },
//     ],
//   };

//   return (
//     <section className="px-6 py-12">
//       <div className="mb-8">
//         <h2 className="text-3xl font-bold text-gray-800">OFFERS TO SAY YES</h2>
//       </div>

//       <Slider {...settings} className="offers-slider">
//         {offers.map((offer, index) => (
//           <div key={index} className="px-3">
//             <div className="bg-gradient-to-br from-pink-100 to-purple-100 rounded-lg p-6 shadow-lg hover:shadow-xl transition h-full cursor-grab">
//               <div className="space-y-4">
//                 <h3 className="text-lg font-bold text-gray-800">
//                   {offer.title}
//                 </h3>
//                 <p className="text-sm text-gray-700">{offer.description}</p>

//                 <div className="flex items-end justify-between">
//                   <div>
//                     <p className="text-sm text-gray-600">{offer.maxDiscount}</p>
//                     <p className="text-3xl font-bold text-pink-600">
//                       {offer.discount}
//                     </p>
//                   </div>
//                   <button className="bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-lg transition font-semibold">
//                     Shop Now
//                   </button>
//                 </div>
//               </div>
//             </div>
//           </div>
//         ))}
//       </Slider>
//     </section>
//   );
// }
