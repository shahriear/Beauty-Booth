
'use client';

import Slider from 'react-slick';

const ExclusiveAccessoriesImages = [
  '/images/ExclusiveAccessories/ExclusiveAccessories-1.webp',
  '/images/ExclusiveAccessories/ExclusiveAccessories-2.webp',
  '/images/ExclusiveAccessories/ExclusiveAccessories-3.webp',
  '/images/ExclusiveAccessories/ExclusiveAccessories-4.webp',
  '/images/ExclusiveAccessories/ExclusiveAccessories-5.webp',
];

export default function ExclusiveAccessories() {
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
        settings: { slidesToShow: 2, slidesToScroll: 1 },
      },
      {
        breakpoint: 640,
        settings: { slidesToShow: 1, slidesToScroll: 1 },
      },
    ],
  };

  return (
    <section className="px-6 py-2 bg-gray-50">
      <div className="mb-8">
        <h2 className="text-3xl font-bold text-gray-800">
          EXCLUSIVE ACCESSORIES
        </h2>
      </div>

      <Slider {...settings} className="trending-slider">
        {ExclusiveAccessoriesImages.map((image, index) => (
          <div key={index} className="px-3">
            <div className="relative w-full rounded-lg overflow-hidden shadow-lg">

              {/* IMAGE */}
              <img
                src={image}
                alt={`Exclusive Accessories ${index}`}
                className="w-full object-cover"
                />

              {/* ALWAYS VISIBLE BUTTON */}
              <div className="absolute bottom-4 left-1/5 -translate-x-1/2">
                <button className="px-5 py-2 bg-white/80 text-black text-sm rounded-full hover:bg-cyan-400 transition duration-800 cursor-pointer">
                  Shop Now →
                </button>
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

// const ExclusiveAccessoriesImages = [
//   '/images/ExclusiveAccessories/ExclusiveAccessories-1.webp',
//   '/images/ExclusiveAccessories/ExclusiveAccessories-2.webp',
//   '/images/ExclusiveAccessories/ExclusiveAccessories-3.webp',
//   '/images/ExclusiveAccessories/ExclusiveAccessories-4.webp',
//   '/images/ExclusiveAccessories/ExclusiveAccessories-5.webp',
  
// ];

// export default function ExclusiveAccessories() {
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
//     <section className="px-6 py-2 bg-gray-50">
//       <div className="mb-8">
//         <h2 className="text-3xl font-bold text-gray-800">
//           EXCLUSIVE ACCESSORIES
//         </h2>
//       </div>

//       <Slider {...settings} className="trending-slider">
//         {ExclusiveAccessoriesImages.map((image, index) => (
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