// 'use client';

// import Image from 'next/image';
// import Link from 'next/link';
// import SectionLoader from '@/app/components/ui/SectionLoader';
// import { useApi } from '@/hooks/useApi';
// import { getTopCategories } from '@/services/categoryService';

// export default function TopCategories() {
//   const { data: categories, loading } = useApi(() => getTopCategories(), []);

//   if (loading) return <SectionLoader />;

//   return (
//     <section className="px-6 py-12">
//       <div className="flex items-center justify-between mb-8">
//         <h2 className="text-3xl font-bold text-gray-800">TOP CATEGORIES</h2>
//         <button className="text-purple-600 hover:text-purple-700 font-semibold text-sm transition">
//           See All →
//         </button>
//       </div>

//       <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
//         {(categories || []).map(category => (
//           <Link
//             key={category.name}
//             href={`/${category.slug}`}
//             className="flex flex-col items-center gap-4 p-4 rounded-xl bg-white shadow-sm hover:shadow-md transition-all duration-300 cursor-pointer group"
//           >
//             <div className="relative w-40 h-40 rounded-full overflow-hidden bg-gradient-to-br from-pink-200 to-purple-200 p-[5px] group-hover:scale-105 transition duration-300">
//               <div className="relative w-full h-full rounded-full overflow-hidden bg-white">
//                 <Image
//                   src={category.img}
//                   alt={category.name}
//                   fill
//                   sizes="160px"
//                   className="object-cover"
//                 />
//               </div>
//             </div>
//             <p className="text-sm font-semibold text-gray-800 text-center group-hover:text-purple-600 transition">
//               {category.name}
//             </p>
//           </Link>
//         ))}
//       </div>
//     </section>
//   );
// }

'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useApi } from '@/hooks/useApi';
import { getTopCategories } from '@/services/categoryService';

/* ---------------- CACHE ---------------- */
let categoryCache = null;

export default function TopCategories() {
  const { data: categories, loading } = useApi(async () => {
    if (categoryCache) return categoryCache;

    const res = await getTopCategories();
    categoryCache = res;
    return res;
  }, []);

  const items = categories || [];

  return (
    <section className="px-3 md:px-6 py-8 md:py-12">
      {/* HEADER */}
      <div className="flex items-center justify-between mb-6 md:mb-8">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800">
          TOP CATEGORIES
        </h2>

        <button className="text-purple-600 hover:text-purple-700 font-semibold text-xs md:text-sm transition">
          See All →
        </button>
      </div>

      {/* GRID */}
      <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-2 md:gap-4 lg:gap-6">
        {/* 🔥 SKELETON (same layout → no shift) */}
        {loading && !categoryCache
          ? Array.from({ length: 6 }).map((_, i) => (
              <div
                key={i}
                className="flex flex-col items-center gap-2 md:gap-4 p-2 md:p-4 rounded-lg md:rounded-xl bg-white shadow-sm"
              >
                <div className="w-20 md:w-32 lg:w-40 h-20 md:h-32 lg:h-40 rounded-full bg-gray-200 animate-pulse" />
                <div className="w-16 md:w-20 h-2 md:h-3 bg-gray-200 animate-pulse rounded" />
              </div>
            ))
          : items.map(category => (
              <Link
                key={category.name}
                href={`/${category.slug}`}
                className="flex flex-col items-center gap-2 md:gap-4 p-2 md:p-4 rounded-lg md:rounded-xl bg-white shadow-sm hover:shadow-md transition-all duration-300 cursor-pointer group"
              >
                <div className="relative w-20 md:w-32 lg:w-40 h-20 md:h-32 lg:h-40 rounded-full overflow-hidden bg-gradient-to-br from-pink-200 to-purple-200 p-0.5 md:p-1 lg:p-[5px] group-hover:scale-105 transition duration-300">
                  <div className="relative w-full h-full rounded-full overflow-hidden bg-white">
                    <Image
                      src={category.img}
                      alt={category.name}
                      fill
                      sizes="(max-width: 640px) 80px, (max-width: 1024px) 128px, 160px"
                      className="object-cover"
                      loading="lazy"
                    />
                  </div>
                </div>

                <p className="text-xs md:text-sm font-semibold text-gray-800 text-center group-hover:text-purple-600 transition line-clamp-1">
                  {category.name}
                </p>
              </Link>
            ))}
      </div>
    </section>
  );
}
