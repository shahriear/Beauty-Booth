// 'use client';

// import Slider from 'react-slick';
// import SectionLoader from '@/app/components/ui/SectionLoader';
// import { useApi } from '@/hooks/useApi';
// import { getExclusiveAccessoriesBanners } from '@/services/bannerService';

// export default function ExclusiveAccessories() {
//   const { data: images, loading } = useApi(() => getExclusiveAccessoriesBanners(), []);

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
//     <section className="px-6 py-2 bg-gray-50">
//       <div className="mb-8">
//         <h2 className="text-3xl font-bold text-gray-800">EXCLUSIVE ACCESSORIES</h2>
//       </div>

//       <Slider {...settings} className="trending-slider">
//         {(images || []).map((image, index) => (
//           <div key={index} className="px-3">
//             <div className="relative w-full rounded-lg overflow-hidden shadow-lg">
//               <img
//                 src={image}
//                 alt={`Exclusive Accessories ${index}`}
//                 className="w-full object-cover"
//               />
//               <div className="absolute bottom-4 left-1/5 -translate-x-1/2">
//                 <button className="px-5 py-2 bg-white/80 text-black text-sm rounded-full hover:bg-cyan-400 transition duration-800 cursor-pointer">
//                   Shop Now →
//                 </button>
//               </div>
//             </div>
//           </div>
//         ))}
//       </Slider>
//     </section>
//   );
// }
'use client';

import Link from 'next/link';
import Slider from 'react-slick';
import Image from 'next/image';
import { useApi } from '@/hooks/useApi';
import { getExclusiveAccessoriesBanners } from '@/services/bannerService';

/* Cache */
let exclusiveAccessoriesCache = null;

export default function ExclusiveAccessories() {
  const { data } = useApi(async () => {
    if (exclusiveAccessoriesCache) return exclusiveAccessoriesCache;

    const res = await getExclusiveAccessoriesBanners();
    exclusiveAccessoriesCache = res;
    return res;
  }, []);

  const images = data || exclusiveAccessoriesCache || [];

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
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  if (!images.length) return null;

  return (
    <section className="px-6 py-2 bg-gray-50">
      <div className="mb-8">
        <h2 className="text-3xl font-bold text-gray-800">
          EXCLUSIVE ACCESSORIES
        </h2>
      </div>

      <Slider {...settings} className="trending-slider">
        {images.map((item, index) => {
          const imageUrl = typeof item === 'string' ? item : item.url;
          const category =
            typeof item === 'string' ? 'exclusive-accessories' : item.category;
          return (
            <Link
              key={index}
              href={`/${category}`}
              className="px-3 block cursor-pointer"
            >
              <div className="relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition group">
                <div className="relative aspect-[16/9] w-full">
                  <Image
                    src={imageUrl}
                    alt={`Exclusive Accessories ${index + 1}`}
                    fill
                    sizes="(max-width:768px) 100vw, (max-width:1024px) 50vw, 33vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>

                <div className="absolute bottom-4 left-1/2 -translate-x-1/2">
                  <div
                    className="px-5 py-2 bg-white/90 text-black text-sm rounded-full hover:bg-cyan-400 transition cursor-pointer"
                    onClick={e => e.preventDefault()}
                  >
                    Shop Now →
                  </div>
                </div>
              </div>
            </Link>
          );
        })}
      </Slider>
    </section>
  );
}
