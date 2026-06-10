// 'use client';

// import dynamic from 'next/dynamic';
// import { useEffect, useState } from 'react';
// import SectionLoader from '@/app/components/ui/SectionLoader';
// import { useApi } from '@/hooks/useApi';
// import { getPromoOffers } from '@/services/offerService';

// const Slider = dynamic(() => import('react-slick'), { ssr: false });

// export default function OfferSection() {
//   const [mounted, setMounted] = useState(false);
//   const { data: offers, loading } = useApi(() => getPromoOffers(), []);

//   useEffect(() => {
//     setMounted(true);
//   }, []);

//   const settings = {
//     dots: true,
//     infinite: true,
//     speed: 600,
//     slidesToShow: 3,
//     slidesToScroll: 1,
//     swipeToSlide: true,
//     touchThreshold: 10,
//     draggable: true,
//     autoplay: true,
//     autoplaySpeed: 2500,
//     pauseOnHover: true,
//     arrows: false,
//     responsive: [
//       { breakpoint: 1024, settings: { slidesToShow: 2 } },
//       { breakpoint: 640, settings: { slidesToShow: 1 } },
//     ],
//   };

//   if (!mounted || loading) return <SectionLoader />;

//   return (
//     <section className="px-6 py-12">
//       <h2 className="text-3xl font-bold text-gray-800 mb-8">OFFERS TO SAY YES</h2>

//       <Slider {...settings}>
//         {(offers || []).map((offer, index) => (
//           <div key={index} className="px-3">
//             <div className="group relative flex border border-2 border-orange-300 rounded-2xl overflow-hidden bg-white h-40 transition-all duration-300 cursor-pointer">
//               <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition bg-gradient-to-r from-pink-100/40 to-purple-100/40" />
//               <div className="w-2/3 p-4 flex flex-col justify-between relative z-10 bg-orange-50">
//                 <h3 className="text-md font-bold text-gray-800">{offer.title}</h3>
//                 <p className="text-xs text-gray-600 mt-1">{offer.description}</p>
//               </div>
//               <div className="border-1 border-dashed border-orange-300 relative z-10" />
//               <div className="w-1/3 flex flex-col items-center justify-center text-center p-4 relative z-10">
//                 <p className="text-xs text-gray-500 mb-1">{offer.spend}</p>
//                 <h2 className="text-2xl font-bold text-pink-500 group-hover:scale-105 transition">
//                   {offer.highlight}
//                 </h2>
//                 <p className="text-xs text-gray-600 mt-1">{offer.label}</p>
//               </div>
//             </div>
//           </div>
//         ))}
//       </Slider>
//     </section>
//   );
// }

'use client';

import dynamic from 'next/dynamic';
import { useApi } from '@/hooks/useApi';
import { getPromoOffers } from '@/services/offerService';

/* ---------------- CACHE ---------------- */
let offerCache = null;

const Slider = dynamic(() => import('react-slick'), {
  ssr: false,
});

export default function OfferSection() {
  const { data: offers, loading } = useApi(async () => {
    if (offerCache) return offerCache;

    const res = await getPromoOffers();
    offerCache = res;
    return res;
  }, []);

  const items = offers || [];

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

  return (
    <section className="px-6 py-12">
      {/* TITLE */}
      <h2 className="text-3xl font-bold text-gray-800 mb-8">
        OFFERS TO SAY YES
      </h2>

      {/* 🔥 SKELETON (same layout → no shift) */}
      {loading && !offerCache ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {Array.from({ length: 3 }).map((_, i) => (
            <div
              key={i}
              className="h-40 rounded-2xl bg-gray-200 animate-pulse"
            />
          ))}
        </div>
      ) : (
        <Slider {...settings}>
          {items.map((offer, index) => (
            <div key={index} className="px-3">
              <div className="group relative flex border-2 border-orange-300 rounded-2xl overflow-hidden bg-white h-40 transition-all duration-300 cursor-pointer">
                {/* hover overlay */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition bg-gradient-to-r from-pink-100/40 to-purple-100/40" />

                {/* LEFT */}
                <div className="w-2/3 p-4 flex flex-col justify-between relative z-10 bg-orange-50">
                  <h3 className="text-md font-bold text-gray-800">
                    {offer.title}
                  </h3>
                  <p className="text-xs text-gray-600 mt-1">
                    {offer.description}
                  </p>
                </div>

                <div className="border-l border-dashed border-orange-300 relative z-10" />

                {/* RIGHT */}
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
      )}
    </section>
  );
}