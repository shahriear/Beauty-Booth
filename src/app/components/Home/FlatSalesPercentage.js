// 'use client';

// import dynamic from 'next/dynamic';
// import { useState, useEffect } from 'react';
// import Image from 'next/image';
// import SectionLoader from '@/app/components/ui/SectionLoader';
// import { useApi } from '@/hooks/useApi';
// import { getFlatSalesOffers } from '@/services/offerService';

// const Slider = dynamic(() => import('react-slick'), { ssr: false });

// export default function FlatSalesPercentage() {
//   const [mounted, setMounted] = useState(false);
//   const { data: items, loading } = useApi(() => getFlatSalesOffers(), []);

//   useEffect(() => {
//     setMounted(true);
//   }, []);

//   const settings = {
//     dots: false,
//     infinite: true,
//     speed: 500,
//     slidesToShow: 5,
//     slidesToScroll: 1,
//     swipeToSlide: true,
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
//     <section className="flex flex-col gap-5 py-7">
//       <div className="flex justify-between items-center">
//         <h2 className="font-bold text-2xl sm:text-4xl uppercase text-black">
//           Flat Sales Percentage
//         </h2>
//       </div>

//       <Slider {...settings}>
//         {(items || []).map(item => (
//           <div key={item.id} className="px-2">
//             <a href="#" className="flex flex-col items-center text-center">
//               <div className="w-full">
//                 <Image
//                   src={item.productImg}
//                   alt="flat sale product"
//                   width={300}
//                   height={200}
//                   className="w-full h-auto rounded-xl object-contain"
//                 />
//               </div>
//               <div className="w-full h-[50px] flex justify-center items-center py-1">
//                 <Image
//                   src={item.logo}
//                   alt="brand logo"
//                   width={60}
//                   height={60}
//                   className="w-auto h-auto object-contain rounded-full"
//                 />
//               </div>
//               <p className="text-sm sm:text-xl font-semibold text-pink-600">
//                 {item.discount}
//               </p>
//               <p className="text-xs sm:text-sm text-gray-600 font-semibold">
//                 {item.description}
//               </p>
//             </a>
//           </div>
//         ))}
//       </Slider>
//     </section>
//   );
// }

'use client';

import dynamic from 'next/dynamic';
import Image from 'next/image';
import { useApi } from '@/hooks/useApi';
import { getFlatSalesOffers } from '@/services/offerService';

const Slider = dynamic(() => import('react-slick'), {
  ssr: false,
});

/* CACHE */
let flatSalesCache = null;

export default function FlatSalesPercentage() {
  const { data: items, loading } = useApi(async () => {
    if (flatSalesCache) return flatSalesCache;

    const res = await getFlatSalesOffers();
    flatSalesCache = res;

    return res;
  }, []);

  const products = items || [];

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    swipeToSlide: true,
    arrows: true,
    responsive: [
      { breakpoint: 1400, settings: { slidesToShow: 4 } },
      { breakpoint: 1024, settings: { slidesToShow: 3 } },
      { breakpoint: 768, settings: { slidesToShow: 2 } },
      { breakpoint: 480, settings: { slidesToShow: 1 } },
    ],
  };

  return (
    <section className="flex flex-col gap-5 py-7">
      <div className="flex justify-between items-center">
        <h2 className="font-bold text-2xl sm:text-4xl uppercase text-black">
          Flat Sales Percentage
        </h2>
      </div>

      {loading && !flatSalesCache ? (
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {Array.from({ length: 5 }).map((_, i) => (
            <div
              key={i}
              className="h-64 bg-gray-200 animate-pulse rounded-xl"
            />
          ))}
        </div>
      ) : (
        <Slider {...settings}>
          {products.map((item, index) => (
            <div key={item.id} className="px-2">
              <a href="#" className="flex flex-col items-center text-center">
                <div className="w-full">
                  <Image
                    src={item.productImg}
                    alt="flat sale product"
                    width={300}
                    height={200}
                    priority={index === 0}
                    className="w-full h-auto rounded-xl object-contain"
                  />
                </div>

                <div className="w-full h-[50px] flex justify-center items-center py-1">
                  <Image
                    src={item.logo}
                    alt="brand logo"
                    width={60}
                    height={60}
                    className="w-auto h-auto object-contain rounded-full"
                  />
                </div>

                <p className="text-sm sm:text-xl font-semibold text-pink-600">
                  {item.discount}
                </p>

                <p className="text-xs sm:text-sm text-gray-600 font-semibold">
                  {item.description}
                </p>
              </a>
            </div>
          ))}
        </Slider>
      )}
    </section>
  );
}