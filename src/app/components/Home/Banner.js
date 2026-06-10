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

'use client';

import Slider from 'react-slick';
import SectionLoader from '@/app/components/ui/SectionLoader';
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

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: true,
    draggable: true,
    touchMove: true,
  };

  return (
    <section className="px-6 py-6 relative">
      {/* 🔥 SKELETON OVERLAY (no layout shift) */}
      {loading && !bannerCache && (
        <div className="w-full h-96 bg-gray-200 animate-pulse rounded-xl" />
      )}

      {/* SLIDER (always mounted → no flicker) */}
      {images.length > 0 && (
        <Slider {...settings} className="rounded-xl overflow-hidden">
          {images.map((image, index) => (
            <div key={index} className="w-full h-96">
              <img
                src={image}
                alt={`Banner ${index}`}
                className="w-full h-full object-cover"
                loading="eager"
              />
            </div>
          ))}
        </Slider>
      )}
    </section>
  );
}