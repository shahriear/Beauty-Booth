// 'use client';

// import Image from 'next/image';
// import { ArrowRight } from 'lucide-react';
// import SectionLoader from '@/app/components/ui/SectionLoader';
// import { useApi } from '@/hooks/useApi';
// import { getBrandLogos } from '@/services/categoryService';

// export default function OurBrands() {
//   const { data: brands, loading } = useApi(() => getBrandLogos(), []);

//   if (loading) return <SectionLoader />;

//   return (
//     <section className="mt-5 mb-15">
//       <div className="flex items-center justify-between">
//         <div className="flex items-center gap-x-2">
//           <h2 className="text-lg sm:text-2xl font-bold text-black capitalize">
//             Our Brands
//           </h2>
//         </div>
//         <div className="flex items-center gap-x-1 border border-gray-200 bg-white hover:bg-gray-100 duration-300 px-3 py-1.5 rounded-full">
//           <span className="text-xs sm:text-base text-black">See all</span>
//           <ArrowRight size={14} className="hidden sm:block" />
//         </div>
//       </div>

//       <div className="grid grid-cols-3 md:grid-cols-6 gap-2 mt-4">
//         {(brands || []).map(brand => (
//           <div
//             key={brand.id}
//             className="col-span-1 flex items-center justify-center h-[60px] sm:h-20 lg:h-[100px] p-2.5 border border-gray-200 rounded-xl overflow-hidden bg-white hover:border-cyan-400 duration-300 cursor-pointer"
//           >
//             <Image
//               src={brand.image}
//               alt={brand.name}
//               width={120}
//               height={60}
//               className="object-contain w-full h-full"
//             />
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// }

'use client';

import Image from 'next/image';
import { ArrowRight } from 'lucide-react';
import { useApi } from '@/hooks/useApi';
import { getBrandLogos } from '@/services/categoryService';

/* cache */
let brandsCache = null;

export default function OurBrands() {
  const { data } = useApi(async () => {
    if (brandsCache) return brandsCache;

    const res = await getBrandLogos();
    brandsCache = res;
    return res;
  }, []);

  const brands = data || brandsCache || [];

  if (!brands.length) return null;

  return (
    <section className="mt-5 mb-15">
      {/* header */}
      <div className="flex items-center justify-between">
        <h2 className="text-lg sm:text-2xl font-bold text-black capitalize">
          Our Brands
        </h2>

        <div className="flex items-center gap-x-1 border border-gray-200 bg-white hover:bg-gray-100 duration-300 px-3 py-1.5 rounded-full cursor-pointer">
          <span className="text-xs sm:text-base text-black">See all</span>
          <ArrowRight size={14} className="hidden sm:block" />
        </div>
      </div>

      {/* grid */}
      <div className="grid grid-cols-3 md:grid-cols-6 gap-2 mt-4">
        {brands.map(brand => (
          <div
            key={brand.id}
            className="col-span-1 flex items-center justify-center h-[60px] sm:h-20 lg:h-[100px] p-2.5 border border-gray-200 rounded-xl overflow-hidden bg-white hover:border-cyan-400 transition duration-300 cursor-pointer"
          >
            <Image
              src={brand.image}
              alt={brand.name}
              width={120}
              height={60}
              className="object-contain w-full h-full"
              priority={false}
            />
          </div>
        ))}
      </div>
    </section>
  );
}