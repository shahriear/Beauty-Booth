// 'use client';

// import { useState } from 'react';
// import Link from 'next/link';
// import { ChevronDown } from 'lucide-react';
// import SectionLoader from '@/app/components/ui/SectionLoader';
// import { useApi } from '@/hooks/useApi';
// import { getPopularSearches } from '@/services/offerService';

// export default function FooterHomeDescription() {
//   const [showMore, setShowMore] = useState(false);
//   const { data: popularSearches, loading } = useApi(() => getPopularSearches(), []);

//   if (loading) return <SectionLoader className="py-8" />;

//   return (
//     <section className="w-full bg-[#f3f3f3 pt-14">
//       <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-10">
//         <h2 className="text-2xl font-bold text-black leading-snug">
//           What Kinds of Beauty Products and Cosmetic Items Does Beauty Booth Offer?
//         </h2>

//         <div className="mt-5 space-y-4 text-gray-700 text-sm sm:text-base leading-7">
//           <p>
//             Beauty Booth is Bangladesh's leading online beauty and skincare destination. We offer a
//             complete range of products that cater to all your{' '}
//             <Link href="/" className="text-pink-600 duration-300">
//               beauty needs
//             </Link>
//             .
//           </p>

//           {showMore && (
//             <p>
//               From skincare essentials like cleansers, serums, and moisturizers to premium makeup,
//               hair care, and bath & body products — Beauty Booth brings you authentic products from
//               top global and K-beauty brands at the best prices in Bangladesh.
//             </p>
//           )}

//           <button
//             onClick={() => setShowMore(!showMore)}
//             className="flex items-center gap-1 text-pink-600 font-medium text-sm hover:underline"
//           >
//             {showMore ? 'Show Less' : 'Show More'}
//             <ChevronDown
//               size={16}
//               className={`transition-transform ${showMore ? 'rotate-180' : ''}`}
//             />
//           </button>
//         </div>

//         <div className="mt-8">
//           <h3 className="text-lg font-semibold text-black mb-4">Popular Searches</h3>
//           <div className="flex flex-wrap gap-2">
//             {(popularSearches || []).map((term, i) => (
//               <Link
//                 key={i}
//                 href={`/search?q=${encodeURIComponent(term)}`}
//                 className="text-xs sm:text-sm px-3 py-1.5 bg-white border border-gray-200 rounded-full text-gray-700 hover:border-pink-500 hover:text-pink-600 transition"
//               >
//                 {term}
//               </Link>
//             ))}
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

'use client';

import { useState } from 'react';
import Link from 'next/link';
import { ChevronDown } from 'lucide-react';
import SectionLoader from '@/app/components/ui/SectionLoader';
import { useApi } from '@/hooks/useApi';
import { getPopularSearches } from '@/services/offerService';

export default function FooterHomeDescription() {
  const [showMore, setShowMore] = useState(false);

  const { data: popularSearches, loading } = useApi(
    () => getPopularSearches(),
    [],
  );

  if (loading) return <SectionLoader className="py-8" />;

  const searches = popularSearches || [];

  return (
    <section className="w-full bg-[#f3f3f3] pt-14">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-10">
        {/* TITLE */}
        <h2 className="text-2xl font-bold text-black leading-snug">
          What Kinds of Beauty Products and Cosmetic Items Does Beauty Booth
          Offer?
        </h2>

        {/* DESCRIPTION */}
        <div className="mt-5 space-y-4 text-gray-700 text-sm sm:text-base leading-7">
          <p>
            Beauty Booth is Bangladesh's leading online beauty and skincare
            destination. We offer a complete range of products that cater to all
            your{' '}
            <Link href="/" className="text-pink-600 hover:underline transition">
              beauty needs
            </Link>
            .
          </p>

          {showMore && (
            <p>
              From skincare essentials like cleansers, serums, and moisturizers
              to premium makeup, hair care, and bath & body products — Beauty
              Booth brings you authentic products from top global and K-beauty
              brands at the best prices in Bangladesh.
            </p>
          )}

          {/* TOGGLE BUTTON */}
          <button
            onClick={() => setShowMore(prev => !prev)}
            className="flex items-center gap-1 text-pink-600 font-medium text-sm hover:underline"
          >
            {showMore ? 'Show Less' : 'Show More'}
            <ChevronDown
              size={16}
              className={`transition-transform duration-300 ${
                showMore ? 'rotate-180' : ''
              }`}
            />
          </button>
        </div>

        {/* POPULAR SEARCHES */}
        <div className="mt-8">
          <h3 className="text-lg font-semibold text-black mb-4">
            Popular Searches
          </h3>

          <div className="flex flex-wrap gap-2">
            {searches.map((term, i) => (
              <Link
                key={i}
                href={`/search?q=${encodeURIComponent(term)}`}
                className="text-xs sm:text-sm px-3 py-1.5 bg-white border border-gray-200 rounded-full text-gray-700 hover:border-pink-500 hover:text-pink-600 transition"
              >
                {term}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}