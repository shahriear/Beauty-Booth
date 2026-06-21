// 'use client';

// import Slider from 'react-slick';
// import SectionLoader from '@/app/components/ui/SectionLoader';
// import { useApi } from '@/hooks/useApi';
// import { getHeroBanners } from '@/services/bannerService';

// export default function Banner() {
//   const { data: bannerImages, loading } = useApi(() => getHeroBanners(), []);

//   const settings = {
//     dots: true,
//     infinite: true,
//     speed: 500,
//     slidesToShow: 1,
//     slidesToScroll: 1,
//     autoplay: true,
//     autoplaySpeed: 3000,
//     arrows: true,
//     draggable: true,
//     touchMove: true,
//   };

//   if (loading) return <SectionLoader className="py-6" />;

//   return (
//     <section className="px-6 py-6">
//       <Slider {...settings} className="rounded-xl overflow-hidden">
//         {(bannerImages || []).map((image, index) => (
//           <div key={index} className="w-full h-96 cursor-grab">
//             <img
//               src={image}
//               alt={`Banner ${index}`}
//               className="w-full h-full object-cover"
//             />
//           </div>
//         ))}
//       </Slider>
//     </section>
//   );
// }

// 'use client';

// import Link from 'next/link';
// import Slider from 'react-slick';
// import SectionLoader from '@/app/components/ui/SectionLoader';
// import { useApi } from '@/hooks/useApi';
// import { getHeroBanners } from '@/services/bannerService';

// /* ---------------- CACHE ---------------- */
// let bannerCache = null;

// export default function Banner() {
//   const { data: bannerImages, loading } = useApi(async () => {
//     if (bannerCache) return bannerCache;

//     const res = await getHeroBanners();
//     bannerCache = res;
//     return res;
//   }, []);

//   const images = bannerImages || [];

//   const settings = {
//     dots: true,
//     infinite: true,
//     speed: 500,
//     slidesToShow: 1,
//     slidesToScroll: 1,
//     autoplay: true,
//     autoplaySpeed: 3000,
//     arrows: true,
//     draggable: true,
//     touchMove: true,
//   };

//   return (
//     <section className="px-6 py-6 relative">
//       {/* 🔥 SKELETON OVERLAY (no layout shift) */}
//       {loading && !bannerCache && (
//         <div className="w-full h-96 bg-gray-200 animate-pulse rounded-xl" />
//       )}

//       {/* SLIDER (always mounted → no flicker) */}
//       {images.length > 0 && (
//         <Slider {...settings} className="rounded-xl overflow-hidden">
//           {images.map((item, index) => {
//             const image = typeof item === 'string' ? item : item.url;
//             const category =
//               typeof item === 'string' ? 'banner' : item.category;
//             return (
//               <Link
//                 key={index}
//                 href={`/${category}`}
//                 className="block cursor-pointer group"
//               >
//                 <div className="w-full h-96 overflow-hidden rounded-xl">
//                   <img
//                     src={image}
//                     alt={`Banner ${index}`}
//                     className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
//                     loading="eager"
//                   />
//                 </div>
//               </Link>
//             );
//           })}
//         </Slider>
//       )}
//     </section>
//   );
// }

'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import { Autoplay, Navigation, Pagination } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import { useApi } from '@/hooks/useApi';
import { getHeroBanners } from '@/services/bannerService';

/* ---------------- CACHE ---------------- */
let bannerCache = null;

export default function Banner() {
  const { data: bannerImages, loading } = useApi(async () => {
    if (bannerCache) return bannerCache;

    const res = await getHeroBanners();
    bannerCache = res;
    return res;
  }, []);

  const images = bannerImages || [];

  return (
    <section className="px-3 md:px-6 py-4 md:py-6 relative">
      {/* LOADER */}
      {loading && !bannerCache && (
        <div className="w-full h-48 md:h-80 lg:h-96 bg-gray-200 animate-pulse rounded-lg md:rounded-xl" />
      )}

      {/* SWIPER SLIDER */}
      {images.length > 0 && (
        <div className="rounded-lg md:rounded-xl overflow-hidden touch-pan-y">
          <Swiper
            modules={[Autoplay, Navigation, Pagination]}
            spaceBetween={0}
            slidesPerView={1}
            loop={true}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            navigation
            pagination={{ clickable: true }}
          >
            {images.map((item, index) => {
              const image = typeof item === 'string' ? item : item.url;
              const category =
                typeof item === 'string' ? 'banner' : item.category;

              return (
                <SwiperSlide key={index}>
                  <Link href={`/${category}`}>
                    <div className="w-full h-48 md:h-80 lg:h-96">
                      <img
                        src={image}
                        alt={`Banner ${index}`}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </Link>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      )}
    </section>
  );
}
