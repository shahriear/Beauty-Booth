// 'use client';

// import dynamic from 'next/dynamic';
// import Link from 'next/link';
// import { useState, useEffect } from 'react';
// import SectionLoader from '@/app/components/ui/SectionLoader';
// import { useApi } from '@/hooks/useApi';
// import { getFlashSaleProducts } from '@/services/productService';
// import useCartStore from '../store/useCartStore';

// const Slider = dynamic(() => import('react-slick'), { ssr: false });

// export default function FlashSale() {
//   const [mounted, setMounted] = useState(false);
//   const addToCart = useCartStore(state => state.addToCart);
//   const { data: products, loading } = useApi(() => getFlashSaleProducts(5), []);

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
//       <h2 className="text-3xl font-bold text-gray-800 mb-8">FLASH SALE</h2>

//       <Slider {...settings}>
//         {(products || []).map(product => (
//           <div key={product.id} className="px-2 pb-6">
//             <Link
//               href={`/product/${product.slug}`}
//               className="group relative block bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300"
//             >
//               <div className="w-full h-48 bg-gray-100 flex items-center justify-center relative overflow-hidden">
//                 <span className="text-gray-400 text-sm">Product Image</span>
//                 <span className="absolute top-3 left-3 bg-pink-600 text-white text-xs font-bold px-3 py-1 rounded-full transition-all duration-300 group-hover:opacity-0 group-hover:scale-90">
//                   {product.badge}
//                 </span>
//                 <button
//                   onClick={e => {
//                     e.preventDefault();
//                     e.stopPropagation();
//                     addToCart(product);
//                   }}
//                   className="absolute top-3 right-3 w-10 h-10 rounded-full bg-pink-600 text-white flex items-center justify-center text-xl shadow-lg opacity-0 translate-y-[-10px] transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0 hover:scale-110"
//                 >
//                   +
//                 </button>
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
//             </Link>
//           </div>
//         ))}
//       </Slider>
//     </section>
//   );
// }

'use client';

import dynamic from 'next/dynamic';
import Link from 'next/link';
import useCartStore from '../store/useCartStore';
import { useApi } from '@/hooks/useApi';
import { getFlashSaleProducts } from '@/services/productService';

const Slider = dynamic(() => import('react-slick'), { ssr: false });

/* simple cache */
let flashSaleCache = null;

export default function FlashSale() {
  const addToCart = useCartStore(state => state.addToCart);

  const { data } = useApi(async () => {
    if (flashSaleCache) return flashSaleCache;

    const res = await getFlashSaleProducts(5);
    flashSaleCache = res;
    return res;
  }, []);

  const products = data || flashSaleCache || [];

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

  if (!products.length) return null;

  return (
    <section className="px-6 py-12">
      <h2 className="text-3xl font-bold text-gray-800 mb-8">FLASH SALE</h2>

      <Slider {...settings}>
        {products.map(product => (
          <div key={product.id} className="px-2 pb-6">
            <Link
              href={`/product/${product.slug}`}
              className="group relative block bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              <div className="w-full h-48 bg-gray-100 flex items-center justify-center relative overflow-hidden">
                <span className="text-gray-400 text-sm">Product Image</span>

                <span className="absolute top-3 left-3 bg-pink-600 text-white text-xs font-bold px-3 py-1 rounded-full transition-all duration-300 group-hover:opacity-0 group-hover:scale-90">
                  {product.badge}
                </span>

                <button
                  onClick={e => {
                    e.preventDefault();
                    e.stopPropagation();
                    addToCart(product);
                  }}
                  className="absolute top-3 right-3 w-10 h-10 rounded-full bg-pink-600 text-white flex items-center justify-center text-xl shadow-lg opacity-0 translate-y-[-10px] transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0 hover:scale-110"
                >
                  +
                </button>
              </div>

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
    </section>
  );
}