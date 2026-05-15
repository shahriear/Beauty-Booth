//  CustomerReviews
'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';

import 'swiper/css';
import { BadgeCheck, Star } from 'lucide-react';


const reviews = [
  {
    id: 1,
    product: 'Isntree Hyaluronic Acid Moist Cream (100ml)',
    review: 'Perfect for dry skin',
    name: 'Mimi',
  },
  {
    id: 2,
    product: 'Gecomo Pond Flower Extract Cleansing Oil (150ml)',
    review:
      'Budget friendly and it actually works as other branded oil cleanser.',
    name: 'Sarah',
  },
  {
    id: 3,
    product: 'The Ordinary Niacinamide 10% + Zinc 1%',
    review: 'Very good for oily skin and pores. Controls excess oil perfectly.',
    name: 'Ismaeel Maajed',
  },
  {
    id: 4,
    product: 'Anua Heartleaf 77% Soothing Toner',
    review: 'Very lightweight and fast absorbing.',
    name: 'Hafsa Mrittika',
  },
  {
    id: 5,
    product: 'Axis_Y Dark Spot Correcting Glow Serum',
    review: 'So good!',
    name: 'Riya',
  },
  {
    id: 6,
    product: 'Numbuzin No.5 Vitamin Concentrated Serum',
    review: 'Worked really well on my post-acne scars. Loved the texture.',
    name: 'Eliza Arefin',
  },
];

// const StarIcon = () => (
//   <svg
//     width="16"
//     height="16"
//     viewBox="0 0 16 16"
//     fill="none"
//     xmlns="http://www.w3.org/2000/svg"
//   >
//     <path
//       d="M16 6.11397L10.324 5.48305L8 0.00390625L5.676 5.48445L0 6.11537L4.24 10.1336L3.056 16.0039L8 13.0064L12.944 16.0039L11.76 10.1336L16 6.11397Z"
//       fill="#FF1A58"
//     />
//   </svg>
// );

// const VerifiedIcon = () => (
//   <svg
//     width="16"
//     height="16"
//     viewBox="0 0 16 16"
//     fill="none"
//     xmlns="http://www.w3.org/2000/svg"
//   >
//     <path
//       d="M6.9707 1.04004C7.47082 0.325566 8.52918 0.325565 9.0293 1.04004L10.1016 2.57129C10.1587 2.65273 10.2575 2.69396 10.3555 2.67676L12.1963 2.35156C13.0551 2.19999 13.8039 2.94877 13.6523 3.80762L13.3271 5.64844C13.3099 5.7464 13.3512 5.84524 13.4326 5.90234L14.9639 6.97461C15.6783 7.47472 15.6783 8.53309 14.9639 9.0332L13.4326 10.1055C13.3512 10.1626 13.3099 10.2614 13.3271 10.3594L13.6523 12.2002C13.8039 13.059 13.0551 13.8078 12.1963 13.6562L10.3555 13.3311C10.2575 13.3138 10.1587 13.3551 10.1016 13.4365L9.0293 14.9678C8.52918 15.6822 7.47082 15.6822 6.9707 14.9678L5.89844 13.4365C5.84133 13.3551 5.74249 13.3138 5.64453 13.3311L3.80371 13.6562C2.94487 13.8078 2.19608 13.059 2.34766 12.2002L2.67285 10.3594C2.69006 10.2614 2.64882 10.1626 2.56738 10.1055L1.03613 9.0332C0.32166 8.53309 0.321659 7.47472 1.03613 6.97461L2.56738 5.90234C2.64882 5.84524 2.69006 5.7464 2.67285 5.64844L2.34766 3.80762C2.19608 2.94877 2.94487 2.19999 3.80371 2.35156L5.64453 2.67676C5.74249 2.69396 5.84133 2.65273 5.89844 2.57129L6.9707 1.04004Z"
//       fill="#00CA8D"
//       stroke="white"
//     />
//     <path
//       d="M5.2002 8.00381L6.87604 9.67965C6.91641 9.72002 6.98234 9.71846 7.02074 9.67621L10.4502 5.90381"
//       stroke="white"
//       strokeWidth="1.5"
//       strokeLinecap="round"
//     />
//   </svg>
// );

export default function CustomerReviews() {
  return (
    <section className="py-10">
      <div className="container mx-auto px-4">
        {/* HEADING */}
        <div className="mb-8 flex items-center justify-between">
          <h2 className="text-2xl sm:text-4xl font-bold uppercase text-black">
            Customer Reviews
          </h2>
        </div>
      </div>

      {/* FULL WIDTH BG */}
      <div className="w-screen bg-[#FFF8F3] py-14 relative left-1/2 right-1/2 -mx-[50vw]">
        <div className="container mx-auto px-4">
          <Swiper
            modules={[Autoplay]}
            spaceBetween={20}
            loop
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            breakpoints={{
              0: {
                slidesPerView: 1.2,
              },
              640: {
                slidesPerView: 2,
              },
              768: {
                slidesPerView: 3,
              },
              1200: {
                slidesPerView: 4,
              },
            }}
          >
            {reviews.map(item => (
              <SwiperSlide key={item.id}>
                <div className="bg-white rounded-2xl p-5 flex flex-col gap-4 h-full">
                  {/* PRODUCT */}
                  <h3 className="text-sm sm:text-xl font-semibold text-black line-clamp-1">
                    {item.product}
                  </h3>

                  {/* STARS */}
                  <div className="flex gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        size={16}
                        strokeWidth={0}
                        className="fill-[#e94545] text-[#FF1A58]"
                      />
                    ))}
                  </div>

                  {/* REVIEW */}
                  <p className="text-xs sm:text-base text-[#5A5A5A] h-32 overflow-y-auto">
                    {item.review}
                  </p>

                  {/* USER */}
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