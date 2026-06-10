// 'use client';

// import Image from 'next/image';
// import Link from 'next/link';
// import { useState, useEffect } from 'react';
// import SectionLoader from '@/app/components/ui/SectionLoader';
// import { useApi } from '@/hooks/useApi';
// import { getTop3OfBeauty } from '@/services/categoryService';

// export default function Top3OfBeauty() {
//   const [mounted, setMounted] = useState(false);
//   const { data: beautyCategories, loading } = useApi(() => getTop3OfBeauty(), []);

//   useEffect(() => {
//     setMounted(true);
//   }, []);

//   if (!mounted || loading) return <SectionLoader />;

//   return (
//     <section className="px-6 py-12">
//       <div className="flex items-center justify-between mb-8">
//         <h2 className="text-3xl font-bold text-gray-800">TOP 3 OF BEAUTY</h2>
//         <a href="#" className="text-pink-600 font-semibold hover:text-pink-700 transition">
//           See All →
//         </a>
//       </div>

//       <div className="bg-gradient-to-r from-orange-100 to-pink-100 rounded-2xl p-12">
//         <div className="flex items-center justify-center gap-12 flex-wrap">
//           {(beautyCategories || []).map(category => (
//             <Link
//               key={category.id}
//               href={`/${category.slug}?subcategory=${encodeURIComponent(category.subcategory)}`}
//               className="flex flex-col items-center gap-4 cursor-pointer group"
//             >
//               <div className="w-32 h-32 md:w-40 md:h-40 rounded-full bg-white shadow-lg overflow-hidden group-hover:shadow-xl group-hover:scale-105 transition duration-300 border-4 border-white relative">
//                 <Image
//                   src={category.img}
//                   alt={category.name}

//                   fill
//                   sizes="160px"
//                   className="object-cover"
//                 />
//               </div>
//               <h3 className="text-lg md:text-xl font-bold text-gray-800 group-hover:text-pink-600 transition">
//                 {category.name}
//               </h3>
//             </Link>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }

'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useApi } from '@/hooks/useApi';
import { getTop3OfBeauty } from '@/services/categoryService';

/* CACHE */
let beautyCache = null;

export default function Top3OfBeauty() {
  const { data: beautyCategories, loading } = useApi(async () => {
    if (beautyCache) return beautyCache;

    const res = await getTop3OfBeauty();
    beautyCache = res;

    return res;
  }, []);

  const categories = beautyCategories || [];

  return (
    <section className="px-6 py-12">
      <div className="flex items-center justify-between mb-8">
        <h2 className="text-3xl font-bold text-gray-800">TOP 3 OF BEAUTY</h2>

        <a
          href="#"
          className="text-pink-600 font-semibold hover:text-pink-700 transition"
        >
          See All →
        </a>
      </div>

      <div className="bg-gradient-to-r from-orange-100 to-pink-100 rounded-2xl p-12">
        <div className="flex items-center justify-center gap-12 flex-wrap">
          {loading && !beautyCache
            ? Array.from({ length: 3 }).map((_, i) => (
                <div
                  key={i}
                  className="w-40 h-40 rounded-full bg-gray-200 animate-pulse"
                />
              ))
            : categories.map((category, index) => (
                <Link
                  key={category.id}
                  href={`/${category.slug}?subcategory=${encodeURIComponent(
                    category.subcategory,
                  )}`}
                  className="flex flex-col items-center gap-4 cursor-pointer group"
                >
                  <div className="w-32 h-32 md:w-40 md:h-40 rounded-full bg-white shadow-lg overflow-hidden group-hover:shadow-xl group-hover:scale-105 transition duration-300 border-4 border-white relative">
                    <Image
                      src={category.img}
                      alt={category.name}
                      fill
                      sizes="160px"
                      priority={index === 0}
                      className="object-cover"
                    />
                  </div>

                  <h3 className="text-lg md:text-xl font-bold text-gray-800 group-hover:text-pink-600 transition">
                    {category.name}
                  </h3>
                </Link>
              ))}
        </div>
      </div>
    </section>
  );
}