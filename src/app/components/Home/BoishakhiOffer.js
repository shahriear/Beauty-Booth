// 'use client';

// import dynamic from 'next/dynamic';
// import { useState, useEffect } from 'react';
// import SectionLoader from '@/app/components/ui/SectionLoader';
// import { useApi } from '@/hooks/useApi';
// import { getBoishakhiTabs } from '@/services/categoryService';
// import { getBoishakhiProducts } from '@/services/productService';
// import useCartStore from '../store/useCartStore';

// const Slider = dynamic(() => import('react-slick'), { ssr: false });

// export default function BoishakhiOffer() {
//   const [mounted, setMounted] = useState(false);
//   const [activeCategory, setActiveCategory] = useState('cleansers');
//   const addToCart = useCartStore(state => state.addToCart);

//   const { data: tabs, loading: tabsLoading } = useApi(() => getBoishakhiTabs(), []);
//   const { data: displayedProducts, loading: productsLoading } = useApi(
//     () => getBoishakhiProducts(activeCategory, 10),
//     [activeCategory],
//   );

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

//   if (!mounted || tabsLoading) return <SectionLoader />;

//   return (
//     <section className="px-6 py-12 bg-gray-50 rounded-3xl">
//       <div className="flex items-center justify-between mb-6">
//         <h2 className="text-3xl font-bold text-gray-800">BOISHAKHI OFFER</h2>
//         <a href="#" className="text-pink-600 font-semibold hover:text-pink-700 transition">
//           See All →
//         </a>
//       </div>

//       <div className="flex justify-center gap-3 mb-8 flex-wrap">
//         {(tabs || []).map(category => (
//           <button
//             key={category.value}
//             onClick={() => setActiveCategory(category.value)}
//             className={`px-6 py-2 rounded-full font-semibold text-sm transition-all duration-300 cursor-pointer ${
//               activeCategory === category.value
//                 ? 'bg-gradient-to-r from-indigo-950 to-violet-800 text-white shadow-lg shadow-purple-300'
//                 : 'bg-white border-2 border-purple-200 text-gray-700 hover:border-purple-400'
//             }`}
//           >
//             {category.label}
//           </button>
//         ))}
//       </div>

//       {productsLoading ? (
//         <SectionLoader className="py-8" />
//       ) : (
//         <Slider {...settings}>
//           {(displayedProducts || []).map(product => (
//             <div key={product.id} className="px-2 pb-6">
//               <div className="group relative bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300 cursor-grab active:cursor-grabbing">
//                 <div className="w-full h-48 bg-gray-100 flex items-center justify-center relative overflow-hidden">
//                   <span className="text-gray-400 text-sm">Product Image</span>
//                   <span className="absolute top-3 left-3 bg-pink-600 text-white text-xs font-bold px-3 py-1 rounded-full transition-all duration-300 group-hover:opacity-0 group-hover:scale-90">
//                     {product.badge}
//                   </span>
//                   <button
//                     onClick={() => addToCart(product)}
//                     className="absolute top-3 right-3 w-10 h-10 rounded-full bg-pink-600 text-white flex items-center justify-center text-xl shadow-lg opacity-0 translate-y-[-10px] transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0 hover:scale-110"
//                   >
//                     +
//                   </button>
//                 </div>
//                 <div className="p-4">
//                   <p className="text-xs text-gray-500 uppercase tracking-wide mb-1">
//                     {product.category}
//                   </p>
//                   <h3 className="text-sm font-semibold text-gray-800 mb-2 line-clamp-2 min-h-10">
//                     {product.name}
//                   </h3>
//                   <div className="flex items-center gap-2">
//                     <span className="text-xs text-gray-400 line-through">
//                       ৳{product.originalPrice}
//                     </span>
//                     <span className="text-lg font-bold text-pink-600">
//                       ৳{product.discountedPrice}
//                     </span>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </Slider>
//       )}
//     </section>
//   );
// }

'use client';

import dynamic from 'next/dynamic';
import Link from 'next/link';
import { useState } from 'react';
import { useApi } from '@/hooks/useApi';
import { getBoishakhiTabs } from '@/services/categoryService';
import { getBoishakhiProducts } from '@/services/productService';
import useCartStore from '../store/useCartStore';

/* ---------------- CACHE ---------------- */
let tabCache = {};
let productCache = {};

const Slider = dynamic(() => import('react-slick'), {
  ssr: false,
});

export default function BoishakhiOffer() {
  const [activeCategory, setActiveCategory] = useState('cleansers');
  const addToCart = useCartStore(state => state.addToCart);

  /* -------- TABS -------- */
  const { data: tabs, loading: tabsLoading } = useApi(async () => {
    if (tabCache.all) return tabCache.all;

    const res = await getBoishakhiTabs();
    tabCache.all = res;
    return res;
  }, []);

  /* -------- PRODUCTS (PER CATEGORY CACHE) -------- */
  const { data: displayedProducts, loading: productsLoading } =
    useApi(async () => {
      if (productCache[activeCategory]) {
        return productCache[activeCategory];
      }

      const res = await getBoishakhiProducts(activeCategory, 10);
      productCache[activeCategory] = res;
      return res;
    }, [activeCategory]);

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

  const tabsData = tabs || [];
  const products = displayedProducts || [];

  return (
    <section className="px-6 py-12 bg-gray-50 rounded-3xl">
      {/* HEADER */}
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-3xl font-bold text-gray-800">BOISHAKHI OFFER</h2>

        <a
          href="#"
          className="text-pink-600 font-semibold hover:text-pink-700 transition"
        >
          See All →
        </a>
      </div>

      {/* TABS */}
      <div className="flex justify-center gap-3 mb-8 flex-wrap">
        {tabsLoading && !tabCache.all
          ? Array.from({ length: 5 }).map((_, i) => (
              <div
                key={i}
                className="w-24 h-10 bg-gray-200 animate-pulse rounded-full"
              />
            ))
          : tabsData.map(category => (
              <button
                key={category.value}
                onClick={() => setActiveCategory(category.value)}
                className={`px-6 py-2 rounded-full font-semibold text-sm transition-all duration-300 cursor-pointer ${
                  activeCategory === category.value
                    ? 'bg-gradient-to-r from-indigo-950 to-violet-800 text-white shadow-lg shadow-purple-300'
                    : 'bg-white border-2 border-purple-200 text-gray-700 hover:border-purple-400'
                }`}
              >
                {category.label}
              </button>
            ))}
      </div>

      {/* PRODUCTS */}
      {productsLoading && !productCache[activeCategory] ? (
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {Array.from({ length: 5 }).map((_, i) => (
            <div
              key={i}
              className="h-72 bg-gray-200 animate-pulse rounded-lg"
            />
          ))}
        </div>
      ) : (
        <Slider {...settings}>
          {products.map(product => (
            <div key={product.id} className="px-2 pb-6">
              <Link
                href={`/product/${product.slug}`}
                className="group relative block bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300"
              >
                {/* IMAGE */}
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

                {/* INFO */}
                <div className="p-4">
                  <p className="text-xs text-gray-500 uppercase tracking-wide mb-1">
                    {product.category}
                  </p>

                  <h3 className="text-sm font-semibold text-gray-800 mb-2 line-clamp-2 min-h-10">
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
      )}
    </section>
  );
}