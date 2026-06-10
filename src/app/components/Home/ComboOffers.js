// 'use client';

// import dynamic from 'next/dynamic';
// import { useState, useEffect } from 'react';
// import SectionLoader from '@/app/components/ui/SectionLoader';
// import { useApi } from '@/hooks/useApi';
// import { getComboOffers } from '@/services/productService';

// const Slider = dynamic(() => import('react-slick'), { ssr: false });

// export default function ComboOffers() {
//   const [mounted, setMounted] = useState(false);
//   const { data: comboProducts, loading } = useApi(() => getComboOffers(6), []);

//   useEffect(() => {
//     setMounted(true);
//   }, []);

//   const settings = {
//     dots: false,
//     infinite: true,
//     speed: 600,
//     slidesToShow: 5,
//     slidesToScroll: 1,
//     swipeToSlide: true,
//     touchThreshold: 10,
//     draggable: true,
//     arrows: true,
//     responsive: [
//       { breakpoint: 1400, settings: { slidesToShow: 4 } },
//       { breakpoint: 1024, settings: { slidesToShow: 3 } },
//       { breakpoint: 768, settings: { slidesToShow: 2 } },
//       { breakpoint: 480, settings: { slidesToShow: 1 } },
//     ],
//   };

//   if (!mounted || loading) return <SectionLoader />;

//   return (
//     <section className="px-6 py-12">
//       <h2 className="text-3xl font-bold text-gray-800 mb-8">COMBO OFFERS</h2>

//       <Slider {...settings}>
//         {(comboProducts || []).map(product => (
//           <div key={product.id} className="px-2 pb-6">
//             <div className="group relative bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300 cursor-grab">
//               <div className="w-full h-48 bg-gray-100 flex items-center justify-center relative overflow-hidden">
//                 <span className="text-gray-400 text-sm">Product Image</span>
//                 <span className="absolute top-3 left-3 bg-pink-600 text-white text-xs font-bold px-3 py-1 rounded-full transition-all duration-300 group-hover:opacity-0 group-hover:scale-90">
//                   {product.badge}
//                 </span>
//               </div>
//               <div className="p-4">
//                 <p className="text-xs text-gray-500 uppercase tracking-wide mb-1">COMBO</p>
//                 <h3 className="text-sm font-semibold text-gray-800 mb-2 line-clamp-2">
//                   {product.name}
//                 </h3>
//                 <div className="flex items-center gap-2">
//                   <span className="text-xs text-gray-400 line-through">
//                     ৳{product.originalPrice}
//                   </span>
//                   <span className="text-lg font-bold text-pink-600">
//                     ৳{product.discountedPrice}
//                   </span>
//                 </div>
//               </div>
//             </div>
//           </div>
//         ))}
//       </Slider>

//       <div className="mt-8 rounded-lg overflow-hidden shadow-lg cursor-grab">
//         <img src="/images/bongoIMG.webp" alt="BOGO Madness" className="w-full object-cover" />
//       </div>
//     </section>
//   );
// }

'use client';

import dynamic from 'next/dynamic';
import Link from 'next/link';
import { useApi } from '@/hooks/useApi';
import { getComboOffers } from '@/services/productService';

/* ---------------- CACHE ---------------- */
let comboCache = null;

const Slider = dynamic(() => import('react-slick'), {
  ssr: false,
});

export default function ComboOffers() {
  const { data: comboProducts, loading } = useApi(async () => {
    if (comboCache) return comboCache;

    const res = await getComboOffers(6);
    comboCache = res;
    return res;
  }, []);

  const products = comboProducts || [];

  const settings = {
    dots: false,
    infinite: true,
    speed: 600,
    slidesToShow: 5,
    slidesToScroll: 1,
    swipeToSlide: true,
    touchThreshold: 10,
    draggable: true,
    arrows: true,
    responsive: [
      { breakpoint: 1400, settings: { slidesToShow: 4 } },
      { breakpoint: 1024, settings: { slidesToShow: 3 } },
      { breakpoint: 768, settings: { slidesToShow: 2 } },
      { breakpoint: 480, settings: { slidesToShow: 1 } },
    ],
  };

  return (
    <section className="px-6 py-12">
      {/* TITLE */}
      <h2 className="text-3xl font-bold text-gray-800 mb-8">COMBO OFFERS</h2>

      {/* 🔥 SKELETON GRID (no layout shift) */}
      {loading && !comboCache ? (
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {Array.from({ length: 5 }).map((_, i) => (
            <div
              key={i}
              className="h-72 bg-gray-200 animate-pulse rounded-lg"
            />
          ))}
        </div>
      ) : (
        <Slider {...settings}>
          {products.map(product => (
            <div key={product.id} className="px-2 pb-6">
              <Link
                href={`/product/${product.slug}`}
                className="group relative block bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300"
              >
                {/* IMAGE AREA */}
                <div className="w-full h-48 bg-gray-100 flex items-center justify-center relative overflow-hidden">
                  <span className="text-gray-400 text-sm">Product Image</span>

                  <span className="absolute top-3 left-3 bg-pink-600 text-white text-xs font-bold px-3 py-1 rounded-full transition-all duration-300 group-hover:opacity-0 group-hover:scale-90">
                    {product.badge}
                  </span>
                </div>

                {/* INFO */}
                <div className="p-4">
                  <p className="text-xs text-gray-500 uppercase tracking-wide mb-1">
                    COMBO
                  </p>

                  <h3 className="text-sm font-semibold text-gray-800 mb-2 line-clamp-2">
                    {product.name}
                  </h3>

                  <div className="flex items-center gap-2">
                    <span className="text-xs text-gray-400 line-through">
                      ৳{product.originalPrice}
                    </span>

                    <span className="text-lg font-bold text-pink-600">
                      ৳{product.discountedPrice}
                    </span>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </Slider>
      )}

      {/* BOTTOM BANNER (unchanged but stable) */}
      <div className="mt-8 rounded-lg overflow-hidden shadow-lg cursor-grab">
        <img
          src="/images/bongoIMG.webp"
          alt="BOGO Madness"
          className="w-full object-cover"
          loading="lazy"
        />
      </div>
    </section>
  );
}