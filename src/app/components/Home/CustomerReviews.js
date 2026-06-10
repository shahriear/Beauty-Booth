// 'use client';

// import { Swiper, SwiperSlide } from 'swiper/react';
// import { Autoplay } from 'swiper/modules';
// import 'swiper/css';
// import { BadgeCheck, Star } from 'lucide-react';
// import SectionLoader from '@/app/components/ui/SectionLoader';
// import { useApi } from '@/hooks/useApi';
// import { getCustomerReviews } from '@/services/offerService';

// export default function CustomerReviews() {
//   const { data: reviews, loading } = useApi(() => getCustomerReviews(), []);

//   if (loading) return <SectionLoader />;

//   return (
//     <section className="py-10">
//       <div className="container mx-auto px-4">
//         <div className="mb-8 flex items-center justify-between">
//           <h2 className="text-2xl sm:text-4xl font-bold uppercase text-black">
//             Customer Reviews
//           </h2>
//         </div>
//       </div>

//       <div className="w-screen bg-[#FFF8F3] py-14 relative left-1/2 right-1/2 -mx-[50vw]">
//         <div className="container mx-auto px-4">
//           <Swiper
//             modules={[Autoplay]}
//             spaceBetween={20}
//             loop
//             autoplay={{ delay: 2500, disableOnInteraction: false }}
//             breakpoints={{
//               0: { slidesPerView: 1.2 },
//               640: { slidesPerView: 2 },
//               768: { slidesPerView: 3 },
//               1200: { slidesPerView: 4 },
//             }}
//           >
//             {(reviews || []).map(item => (
//               <SwiperSlide key={item.id}>
//                 <div className="bg-white rounded-2xl p-5 flex flex-col gap-4 h-full">
//                   <h3 className="text-sm sm:text-xl font-semibold text-black line-clamp-1">
//                     {item.product}
//                   </h3>
//                   <div className="flex gap-1">
//                     {[...Array(5)].map((_, i) => (
//                       <Star
//                         key={i}
//                         size={16}
//                         strokeWidth={0}
//                         className="fill-[#e94545] text-[#FF1A58]"
//                       />
//                     ))}
//                   </div>
//                   <p className="text-xs sm:text-base text-[#5A5A5A] h-32 overflow-y-auto">
//                     {item.review}
//                   </p>
//                   <div className="flex flex-col gap-1 mt-auto">
//                     <h4 className="text-xs sm:text-base font-medium text-[#222222]">
//                       {item.name}
//                     </h4>
//                     <div className="flex items-center gap-1">
//                       <BadgeCheck size={18} className="text-[#f9f9f9] fill-[#00CA8D]" />
//                       <span className="text-xs text-[#00CA8D]">Verified</span>
//                     </div>
//                   </div>
//                 </div>
//               </SwiperSlide>
//             ))}
//           </Swiper>
//         </div>
//       </div>
//     </section>
//   );
// }

'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import { BadgeCheck, Star } from 'lucide-react';
import { useApi } from '@/hooks/useApi';
import { getCustomerReviews } from '@/services/offerService';

/* simple cache */
let reviewsCache = null;

export default function CustomerReviews() {
  const { data } = useApi(async () => {
    if (reviewsCache) return reviewsCache;

    const res = await getCustomerReviews();
    reviewsCache = res;
    return res;
  }, []);

  const reviews = data || reviewsCache || [];

  if (!reviews.length) return null;

  return (
    <section className="py-10">
      <div className="container mx-auto px-4">
        <div className="mb-8 flex items-center justify-between">
          <h2 className="text-2xl sm:text-4xl font-bold uppercase text-black">
            Customer Reviews
          </h2>
        </div>
      </div>

      <div className="w-screen bg-[#FFF8F3] py-14 relative left-1/2 right-1/2 -mx-[50vw]">
        <div className="container mx-auto px-4">
          <Swiper
            modules={[Autoplay]}
            spaceBetween={20}
            loop
            autoplay={{ delay: 2500, disableOnInteraction: false }}
            breakpoints={{
              0: { slidesPerView: 1.2 },
              640: { slidesPerView: 2 },
              768: { slidesPerView: 3 },
              1200: { slidesPerView: 4 },
            }}
          >
            {reviews.map(item => (
              <SwiperSlide key={item.id}>
                <div className="bg-white rounded-2xl p-5 flex flex-col gap-4 h-full">
                  <h3 className="text-sm sm:text-xl font-semibold text-black line-clamp-1">
                    {item.product}
                  </h3>

                  <div className="flex gap-1">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star
                        key={i}
                        size={16}
                        strokeWidth={0}
                        className="fill-[#e94545] text-[#FF1A58]"
                      />
                    ))}
                  </div>

                  <p className="text-xs sm:text-base text-[#5A5A5A] h-32 overflow-y-auto">
                    {item.review}
                  </p>

                  <div className="flex flex-col gap-1 mt-auto">
                    <h4 className="text-xs sm:text-base font-medium text-[#222222]">
                      {item.name}
                    </h4>

                    <div className="flex items-center gap-1">
                      <BadgeCheck
                        size={18}
                        className="text-[#f9f9f9] fill-[#00CA8D]"
                      />
                      <span className="text-xs text-[#00CA8D]">Verified</span>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
}