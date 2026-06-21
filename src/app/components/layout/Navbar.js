// 'use client';

// import { useState, useRef, useEffect, useMemo } from 'react';
// import Link from 'next/link';
// import MegaMenu from './MegaMenu';
// import { BadgeCheck, Flame, Sparkles, Star } from 'lucide-react';
// import SectionLoader from '@/app/components/ui/SectionLoader';
// import { useApi } from '@/hooks/useApi';
// import { getNavMenuItems } from '@/services/categoryService';

// const ROUTED_SLUGS = [
//   'skin-care', 'makeup', 'hair-care', 'accessories',
//   'bath-body-care', 'combo', 'brands',
// ];

// const menuIcons = {
//   'Eid Festive Sale': <Flame size={16} className="text-red-500" />,
//   New: <Sparkles size={16} className="text-purple-500" />,
//   Brands: <Star size={16} className="text-yellow-500" />,
//   'Best Selling': <BadgeCheck size={16} className="text-blue-500" />,
// };

// export default function Navbar() {
//   const scrollContainerRef = useRef(null);
//   const timeoutRef = useRef(null);

//   const [mounted, setMounted] = useState(false);
//   const [showLeftArrow, setShowLeftArrow] = useState(false);
//   const [showRightArrow, setShowRightArrow] = useState(false);
//   const [activeMegaMenu, setActiveMegaMenu] = useState(null);

//   const { data: navItems, loading } = useApi(() => getNavMenuItems(), []);

//   const megaMenuLabels = useMemo(
//     () => (navItems || []).filter(item => item.megaMenu).map(item => item.label),
//     [navItems],
//   );

//   useEffect(() => {
//     setMounted(true);
//   }, []);

//   useEffect(() => {
//     if (!mounted) return;
//     const el = scrollContainerRef.current;
//     if (!el) return;

//     const handleScroll = () => {
//       const { scrollLeft, scrollWidth, clientWidth } = el;
//       setShowLeftArrow(scrollLeft > 5);
//       setShowRightArrow(scrollLeft < scrollWidth - clientWidth - 5);
//     };

//     handleScroll();
//     el.addEventListener('scroll', handleScroll);
//     return () => el.removeEventListener('scroll', handleScroll);
//   }, [mounted]);

//   const scroll = direction => {
//     scrollContainerRef.current?.scrollBy({
//       left: direction === 'left' ? -300 : 300,
//       behavior: 'smooth',
//     });
//   };

//   const handleMenuEnter = label => {
//     if (timeoutRef.current) clearTimeout(timeoutRef.current);
//     setActiveMegaMenu(megaMenuLabels.includes(label) ? label : null);
//   };

//   const handleMenuLeave = () => {
//     timeoutRef.current = setTimeout(() => setActiveMegaMenu(null), 150);
//   };

//   const handleMegaEnter = () => {
//     if (timeoutRef.current) clearTimeout(timeoutRef.current);
//   };

//   const handleMegaLeave = () => setActiveMegaMenu(null);

//   if (loading) {
//     return (
//       <nav className="sticky top-16.5 z-30 bg-white shadow-md">
//         <SectionLoader className="py-4" text="Loading menu..." />
//       </nav>
//     );
//   }

//   return (
//     <nav className="sticky top-16.5 z-30 bg-white shadow-md">
//       <div className="relative flex items-center px-6 py-3 container mx-auto">
//         <button
//           onClick={() => scroll('left')}
//           className={`absolute left-2 top-1/2 -translate-y-1/2 z-10 w-8 h-8 flex items-center justify-center bg-white rounded-full shadow border border-gray-300 transition-all duration-300 ${mounted && showLeftArrow ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
//         >
//           ❮
//         </button>

//         <div
//           ref={scrollContainerRef}
//           className="flex gap-6 overflow-x-auto whitespace-nowrap px-12 py-2 scroll-smooth scrollbar-hide"
//         >
//           {(navItems || []).map(item => {
//             const isClickable = ROUTED_SLUGS.includes(item.slug);

//             return isClickable ? (
//               <Link
//                 key={item.label}
//                 href={`/${item.slug}`}
//                 onClick={() => setActiveMegaMenu(null)}
//                 onMouseEnter={() => handleMenuEnter(item.label)}
//                 onMouseLeave={handleMenuLeave}
//                 className={`relative group text-sm font-medium flex items-center gap-2 py-2 px-1 transition ${activeMegaMenu === item.label ? 'text-purple-600' : 'text-gray-700 hover:text-purple-600'}`}
//               >
//                 {menuIcons[item.label] && (
//                   <span className="group-hover:scale-110 transition">{menuIcons[item.label]}</span>
//                 )}
//                 <span>{item.label}</span>
//                 <span className={`absolute left-0 bottom-0 h-0.5 bg-purple-600 transition-all duration-300 ${activeMegaMenu === item.label ? 'w-full' : 'w-0 group-hover:w-full'}`} />
//               </Link>
//             ) : (
//               <button
//                 key={item.label}
//                 onMouseEnter={() => handleMenuEnter(item.label)}
//                 onMouseLeave={handleMenuLeave}
//                 className={`relative group text-sm font-medium flex items-center gap-2 py-2 px-1 transition ${activeMegaMenu === item.label ? 'text-purple-600' : 'text-gray-700 hover:text-purple-600'}`}
//               >
//                 {menuIcons[item.label] && (
//                   <span className="group-hover:scale-110 transition">{menuIcons[item.label]}</span>
//                 )}
//                 <span>{item.label}</span>
//                 <span className={`absolute left-0 bottom-0 h-0.5 bg-purple-600 transition-all duration-300 ${activeMegaMenu === item.label ? 'w-full' : 'w-0 group-hover:w-full'}`} />
//               </button>
//             );
//           })}
//         </div>

//         <button
//           onClick={() => scroll('right')}
//           className={`absolute right-2 top-1/2 -translate-y-1/2 z-10 w-8 h-8 flex items-center justify-center bg-white rounded-full shadow border border-gray-300 transition-all duration-300 ${mounted && showRightArrow ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
//         >
//           ❯
//         </button>
//       </div>

//       {activeMegaMenu && (
//         <div
//           onMouseEnter={handleMegaEnter}
//           onMouseLeave={handleMegaLeave}
//           className="absolute left-0 right-0 top-full z-50 container"
//         >
//           <MegaMenu category={activeMegaMenu} isOpen={true} />
//         </div>
//       )}
//     </nav>
//   );
// }

'use client';

import { useState, useRef, useEffect, useMemo } from 'react';
import Link from 'next/link';
import MegaMenu from './MegaMenu';
import { BadgeCheck, Flame, Sparkles, Star } from 'lucide-react';
import { useApi } from '@/hooks/useApi';
import { getNavMenuItems } from '@/services/categoryService';

const ROUTED_SLUGS = [
  'skin-care',
  'makeup',
  'hair-care',
  'accessories',
  'bath-body-care',
  'mom-baby-care',
  'body-scrub',
  'mens-care',
  'combo',
  'brands',
  'eid-festive-sale',
  'new',
  'best-selling',
  'bogo',
];

const menuIcons = {
  'Eid Festive Sale': <Flame size={16} className="text-red-500" />,
  New: <Sparkles size={16} className="text-purple-500" />,
  Brands: <Star size={16} className="text-yellow-500" />,
  'Best Selling': <BadgeCheck size={16} className="text-blue-500" />,
};

/* ---------------- CACHE (important for no flicker) ---------------- */
let navCache = null;

export default function Navbar() {
  const scrollContainerRef = useRef(null);
  const timeoutRef = useRef(null);

  const [mounted, setMounted] = useState(false);
  const [showLeftArrow, setShowLeftArrow] = useState(false);
  const [showRightArrow, setShowRightArrow] = useState(false);
  const [activeMegaMenu, setActiveMegaMenu] = useState(null);

  const { data: navItems, loading } = useApi(async () => {
    if (navCache) return navCache;

    const res = await getNavMenuItems();
    navCache = res;
    return res;
  }, []);

  const items = navItems || [];

  const megaMenuLabels = useMemo(
    () => items.filter(item => item.megaMenu).map(item => item.label),
    [items],
  );

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;

    const el = scrollContainerRef.current;
    if (!el) return;

    const handleScroll = () => {
      const { scrollLeft, scrollWidth, clientWidth } = el;
      setShowLeftArrow(scrollLeft > 5);
      setShowRightArrow(scrollLeft < scrollWidth - clientWidth - 5);
    };

    handleScroll();
    el.addEventListener('scroll', handleScroll);

    return () => el.removeEventListener('scroll', handleScroll);
  }, [mounted]);

  const scroll = direction => {
    scrollContainerRef.current?.scrollBy({
      left: direction === 'left' ? -300 : 300,
      behavior: 'smooth',
    });
  };

  const handleMenuEnter = label => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setActiveMegaMenu(megaMenuLabels.includes(label) ? label : null);
  };

  const handleMenuLeave = () => {
    timeoutRef.current = setTimeout(() => setActiveMegaMenu(null), 150);
  };

  const handleMegaEnter = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
  };

  const handleMegaLeave = () => setActiveMegaMenu(null);

  return (
    <nav className="sticky top-16 md:top-auto z-30 bg-white shadow-md">
      <div className="relative flex items-center px-2 md:px-6 py-2 md:py-3 container mx-auto">
        {/* LEFT ARROW */}
        <button
          onClick={() => scroll('left')}
          className={`hidden md:flex absolute left-0 md:left-2 top-1/2 -translate-y-1/2 z-10 w-6 md:w-8 h-6 md:h-8 items-center justify-center bg-white rounded-full shadow border border-gray-300 transition-all duration-300 ${
            mounted && showLeftArrow
              ? 'opacity-100'
              : 'opacity-0 pointer-events-none'
          }`}
        >
          ❮
        </button>

        {/* MENU AREA */}
        <div
          ref={scrollContainerRef}
          className="flex gap-2 md:gap-6 overflow-x-auto whitespace-nowrap px-6 md:px-12 py-2 scroll-smooth scrollbar-hide flex-grow"
        >
          {loading && !navCache
            ? Array.from({ length: 8 }).map((_, i) => (
                <div
                  key={i}
                  className="h-8 md:h-9 w-20 md:w-24 bg-gray-200 animate-pulse rounded flex-shrink-0"
                />
              ))
            : items.map(item => {
                const isClickable = ROUTED_SLUGS.includes(item.slug);

                const commonClass =
                  `relative group text-xs md:text-sm font-medium flex items-center gap-1 md:gap-2 py-2 px-1 transition flex-shrink-0 ` +
                  (activeMegaMenu === item.label
                    ? 'text-purple-600'
                    : 'text-gray-700 hover:text-purple-600');

                const content = (
                  <>
                    {menuIcons[item.label] && (
                      <span className="group-hover:scale-110 transition text-xs md:text-sm">
                        {menuIcons[item.label]}
                      </span>
                    )}
                    <span className="truncate">{item.label}</span>

                    <span
                      className={`absolute left-0 bottom-0 h-0.5 bg-purple-600 transition-all duration-300 ${
                        activeMegaMenu === item.label
                          ? 'w-full'
                          : 'w-0 group-hover:w-full'
                      }`}
                    />
                  </>
                );

                return isClickable ? (
                  <Link
                    key={item.label}
                    href={`/${item.slug}`}
                    onClick={() => setActiveMegaMenu(null)}
                    onMouseEnter={() => handleMenuEnter(item.label)}
                    onMouseLeave={handleMenuLeave}
                    className={commonClass}
                  >
                    {content}
                  </Link>
                ) : (
                  <button
                    key={item.label}
                    onMouseEnter={() => handleMenuEnter(item.label)}
                    onMouseLeave={handleMenuLeave}
                    className={commonClass}
                  >
                    {content}
                  </button>
                );
              })}
        </div>

        {/* RIGHT ARROW */}
        <button
          onClick={() => scroll('right')}
          className={`hidden md:flex absolute right-0 md:right-2 top-1/2 -translate-y-1/2 z-10 w-6 md:w-8 h-6 md:h-8 items-center justify-center bg-white rounded-full shadow border border-gray-300 transition-all duration-300 ${
            mounted && showRightArrow
              ? 'opacity-100'
              : 'opacity-0 pointer-events-none'
          }`}
        >
          ❯
        </button>
      </div>

      {/* MEGA MENU */}
      {activeMegaMenu && (
        <div
          onMouseEnter={handleMegaEnter}
          onMouseLeave={handleMegaLeave}
          className="absolute left-0 right-0 top-full z-50 container hidden md:block"
        >
          <MegaMenu category={activeMegaMenu} isOpen />
        </div>
      )}
    </nav>
  );
}
