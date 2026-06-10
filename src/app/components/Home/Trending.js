// 'use client';

// import Slider from 'react-slick';
// import SectionLoader from '@/app/components/ui/SectionLoader';
// import { useApi } from '@/hooks/useApi';
// import { getTrendingBanners } from '@/services/bannerService';

// export default function Trending() {
//   const { data: trendingImages, loading } = useApi(() => getTrendingBanners(), []);

//   const settings = {
//     dots: true,
//     infinite: true,
//     speed: 500,
//     slidesToShow: 3,
//     slidesToScroll: 1,
//     autoplay: true,
//     autoplaySpeed: 3000,
//     arrows: false,
//     draggable: true,
//     touchMove: true,
//     responsive: [
//       { breakpoint: 1024, settings: { slidesToShow: 2, slidesToScroll: 1 } },
//       { breakpoint: 640, settings: { slidesToShow: 1, slidesToScroll: 1 } },
//     ],
//   };

//   if (loading) return <SectionLoader />;

//   return (
//     <section className="px-6 py-12 bg-gray-50">
//       <div className="mb-8">
//         <h2 className="text-3xl font-bold text-gray-800">TRENDING</h2>
//       </div>

//       <Slider {...settings} className="trending-slider">
//         {(trendingImages || []).map((image, index) => (
//           <div key={index} className="px-3">
//             <div className="w-full h-full rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition cursor-grab">
//               <img
//                 src={image}
//                 alt={`Trending ${index}`}
//                 className="w-full h-full object-cover hover:scale-105 transition duration-300"
//               />
//             </div>
//           </div>
//         ))}
//       </Slider>
//     </section>
//   );
// }

'use client';

import Slider from 'react-slick';
import { useApi } from '@/hooks/useApi';
import { getTrendingBanners } from '@/services/bannerService';

/* ---------------- CACHE ---------------- */
let trendingCache = null;

export default function Trending() {
  const { data: trendingImages, loading } = useApi(async () => {
    if (trendingCache) return trendingCache;

    const res = await getTrendingBanners();
    trendingCache = res;
    return res;
  }, []);

  const images = trendingImages || [];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
    draggable: true,
    touchMove: true,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 2 } },
      { breakpoint: 640, settings: { slidesToShow: 1 } },
    ],
  };

  return (
    <section className="px-6 py-12 bg-gray-50">
      {/* TITLE */}
      <div className="mb-8">
        <h2 className="text-3xl font-bold text-gray-800">TRENDING</h2>
      </div>

      {/* 🔥 SKELETON (slider layout preserved) */}
      {loading && !trendingCache ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {Array.from({ length: 3 }).map((_, i) => (
            <div
              key={i}
              className="h-64 bg-gray-200 animate-pulse rounded-lg"
            />
          ))}
        </div>
      ) : (
        <Slider {...settings} className="trending-slider">
          {images.map((image, index) => (
            <div key={index} className="px-3">
              <div className="w-full h-64 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition">
                <img
                  src={image}
                  alt={`Trending ${index}`}
                  className="w-full h-full object-cover hover:scale-105 transition duration-300"
                  loading="lazy"
                />
              </div>
            </div>
          ))}
        </Slider>
      )}
    </section>
  );
}