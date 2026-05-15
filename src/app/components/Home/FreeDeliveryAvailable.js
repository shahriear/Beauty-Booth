// 'use client';

// import dynamic from 'next/dynamic';
// import { useState, useEffect } from 'react';

// const Slider = dynamic(() => import('react-slick'), { ssr: false });

// const freeDeliveryProducts = [
//   {
//     id: 1,
//     brand: 'ABIB',
//     discount: 'Up to 35% Off',
//     description: 'Free Delivery Over ৳99 bill',
//     bgColor: 'from-green-200 to-green-100',
//   },
//   {
//     id: 2,
//     brand: 'DABO',
//     discount: 'Up to 28% Off',
//     description: 'Free Delivery over ৳99 bill',
//     bgColor: 'from-pink-200 to-red-100',
//   },
//   {
//     id: 3,
//     brand: 'HARUHARU',
//     discount: 'Up to 18% Off',
//     description: 'Free Delivery over ৳99 bill',
//     bgColor: 'from-purple-200 to-green-100',
//   },
//   {
//     id: 4,
//     brand: 'NUMBUZIN',
//     discount: 'Up to 26% Off',
//     description: 'Free Delivery over ৳99 bill',
//     bgColor: 'from-yellow-200 to-orange-100',
//   },
//   {
//     id: 5,
//     brand: 'VT COSMETICS',
//     discount: 'Up to 18% Off',
//     description: 'Free Delivery over ৳99 bill',
//     bgColor: 'from-purple-200 to-purple-100',
//   },
// ];

// export default function FreeDeliveryAvailable() {
//   const [mounted, setMounted] = useState(false);

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

//   if (!mounted) return null;

//   return (
//     <section className="px-6 py-12">
//       <h2 className="text-3xl font-bold text-gray-800 mb-8">
//         FREE DELIVERY AVAILABLE
//       </h2>

//       <Slider {...settings}>
//         {freeDeliveryProducts.map(product => (
//           <div key={product.id} className="px-2 pb-6">
//             <div
//               className={`group relative bg-gradient-to-br ${product.bgColor} rounded-2xl overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300 cursor-grab active:cursor-grabbing h-72 flex flex-col items-center justify-center p-6 text-center`}
//             >
//               {/* Product Image Placeholder */}
//               <div className="w-28 h-28 bg-white/50 rounded-lg flex items-center justify-center mb-4 group-hover:scale-105 transition">
//                 <span className="text-gray-400 text-xs">Product Image</span>
//               </div>

//               {/* Brand Info */}
//               <h3 className="text-base font-bold text-gray-800 mb-2">
//                 {product.brand}
//               </h3>
//               <p className="text-sm font-bold text-pink-600 mb-2">
//                 {product.discount}
//               </p>
//               <p className="text-xs text-gray-700">{product.description}</p>
//             </div>
//           </div>
//         ))}
//       </Slider>
//     </section>
//   );
// }

'use client';

import dynamic from 'next/dynamic';
import { useState, useEffect } from 'react';
import Image from 'next/image';

const Slider = dynamic(() => import('react-slick'), { ssr: false });

const freeDeliveryProducts = [
  {
    id: 1,

    discount: 'Up to 35% Off',
    description: 'Free Delivery Over 999 bdt',
    productImg: '/images/Free-Delivery/Free-Delivery-1.webp',
    logo: '/images/Free-Delivery/delivery-logo-1.png',
  },
  {
    id: 2,

    discount: 'Up to 15% Off',
    description: 'Free Delivery Over 999 bdt',
    productImg: '/images/Free-Delivery/Free-Delivery-2.webp',
    logo: '/images/Free-Delivery/delivery-logo-2.webp',
  },
  {
    id: 3,

    discount: 'Up to 50% Off',
    description: 'Free Delivery Over 999 bdt',
    productImg: '/images/Free-Delivery/Free-Delivery-3.webp',
    logo: '/images/Free-Delivery/delivery-logo-3.png',
  },
  {
    id: 4,

    discount: 'Up to 18% Off',
    description: 'Free Delivery Over 999 bdt',
    productImg: '/images/Free-Delivery/Free-Delivery-4.webp',
    logo: '/images/Free-Delivery/delivery-logo-4.webp',
  },
  {
    id: 5,

    discount: 'Up to 10% Off',
    description: 'Free Delivery Over 999 bdt',
    productImg: '/images/Free-Delivery/Free-Delivery-5.webp',
    logo: '/images/Free-Delivery/delivery-logo-5.webp',
  },
  
];

export default function FreeDeliveryAvailable() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

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

  if (!mounted) return null;

  return (
    <section className="flex flex-col gap-5 py-7">
      {/* TITLE */}
      <div className="flex justify-between items-center">
        <h2 className="font-bold text-2xl sm:text-4xl uppercase text-black">
           FREE DELIVERY AVAILABLE
        </h2>
      </div>

      {/* SLIDER */}
      <Slider {...settings}>
        {freeDeliveryProducts.map(item => (
          <div key={item.id} className="px-2">
            <a
              href={item.link}
              className="flex flex-col items-center text-center"
            >
              {/* MAIN IMAGE */}
              <div className="w-full">
                <Image
                  src={item.productImg}
                  alt="flat sale product"
                  width={300}
                  height={200}
                  className="w-full h-auto rounded-xl object-contain"
                />
              </div>

              {/* LOGO */}
              <div className="w-full h-[50px] flex justify-center items-center py-1">
                <Image
                  src={item.logo}
                  alt="brand logo"
                  width={60}
                  height={60}
                  className="w-auto h-auto object-contain rounded-full"
                />
              </div>

              {/* TEXT */}
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
    </section>
  );
}