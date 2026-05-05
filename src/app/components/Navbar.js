'use client';

import { useState, useRef, useEffect } from 'react';

const menuItems = [
  'Eid Festive Sale',
  'New',
  'Combo',
  'Brands',
  'Best Selling',
  'Skin Care',
  'Make Up',
  'Accessories',
  'Bath & Body Care',
  'Mom & Baby Care',
  'Body Scrub',
  "Men's Care",
  'Hair Care',
  'BOGO',
];

export default function Navbar() {
  const scrollContainerRef = useRef(null);

  const [showLeftArrow, setShowLeftArrow] = useState(false);
  const [showRightArrow, setShowRightArrow] = useState(false);
  const [mounted, setMounted] = useState(false);

  // Fix hydration 
  useEffect(() => {
    setMounted(true);
  }, []);

  // Scroll detect
  useEffect(() => {
    if (!mounted) return;

    const handleScroll = () => {
      const el = scrollContainerRef.current;
      if (!el) return;

      const { scrollLeft, scrollWidth, clientWidth } = el;

      setShowLeftArrow(scrollLeft > 5);
      setShowRightArrow(scrollLeft < scrollWidth - clientWidth - 5);
    };

    const el = scrollContainerRef.current;
    if (el) {
      handleScroll();
      el.addEventListener('scroll', handleScroll);
    }

    return () => el?.removeEventListener('scroll', handleScroll);
  }, [mounted]);

  // Scroll function
  const scroll = direction => {
    const el = scrollContainerRef.current;
    if (!el) return;

    el.scrollBy({
      left: direction === 'left' ? -200 : 200,
      behavior: 'smooth',
    });
  };

  return (
    <nav className="sticky top-0 z-40 bg-white shadow-md">
      <div className="relative flex items-center px-6 py-3 container mx-auto">
        {/* Left Arrow */}
        <button
          onClick={() => scroll('left')}
          className={`absolute left-2 top-1/2 -translate-y-1/2 z-10 
          w-10 h-10 flex items-center justify-center
          bg-white rounded-full shadow-md border border-gray-200
          transition-all duration-300
          hover:bg-gray-100 hover:shadow-lg
          ${mounted && showLeftArrow ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
        >
          <span className="text-sm text-gray-500">❮</span>
        </button>

        {/* Menu Items */}
        <div
          ref={scrollContainerRef}
          className="flex gap-6 overflow-x-auto whitespace-nowrap px-12 py-2 scroll-smooth scrollbar-hide"
        >
          {menuItems.map(item => (
            <button
              key={item}
              className="relative group text-gray-700 text-sm font-medium flex-shrink-0 py-2 px-1 transition-all duration-300 hover:text-purple-600"
            >
              {item}

              {/* underline animation */}
              <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-purple-600 transition-all duration-300 group-hover:w-full"></span>
            </button>
          ))}
        </div>

        {/* Right Arrow */}
        <button
          onClick={() => scroll('right')}
          className={`absolute right-2 top-1/2 -translate-y-1/2 z-10 
          w-10 h-10 flex items-center justify-center
          bg-white rounded-full shadow-md border border-gray-200
          transition-all duration-300
          hover:bg-gray-100 hover:shadow-lg
          ${mounted && showRightArrow ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
        >
          <span className="text-sm text-gray-500">❯</span>
        </button>
      </div>
    </nav>
  );
}
