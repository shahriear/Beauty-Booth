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
  const [showRightArrow, setShowRightArrow] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      if (scrollContainerRef.current) {
        const { scrollLeft, scrollWidth, clientWidth } =
          scrollContainerRef.current;
        setShowLeftArrow(scrollLeft > 0);
        setShowRightArrow(scrollLeft < scrollWidth - clientWidth - 10);
      }
    };

    const container = scrollContainerRef.current;
    if (container) {
      container.addEventListener('scroll', handleScroll);
      handleScroll();
    }

    return () => container?.removeEventListener('scroll', handleScroll);
  }, []);

  const scroll = direction => {
    if (scrollContainerRef.current) {
      const scrollAmount = 200;
      scrollContainerRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth',
      });
    }
  };

  return (
    <nav className="sticky top-0 z-40 bg-white shadow-md">
      <div className="relative flex items-center px-6 py-3">
        {/* Left Arrow */}
        {showLeftArrow && (
          <button
            onClick={() => scroll('left')}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white hover:bg-gray-100 p-2 rounded-r-full shadow transition"
          >
            ❮
          </button>
        )}

        {/* Menu Items */}
        <div
          ref={scrollContainerRef}
          className="flex gap-6 overflow-x-auto whitespace-nowrap px-12 py-2 scroll-smooth scrollbar-hide"
          style={{ scrollBehavior: 'smooth' }}
        >
          {menuItems.map((item, index) => (
            <button
              key={index}
              className="text-gray-700 hover:text-purple-600 hover:font-semibold transition text-sm font-medium flex-shrink-0 py-2"
            >
              {item}
            </button>
          ))}
        </div>

        {/* Right Arrow */}
        {showRightArrow && (
          <button
            onClick={() => scroll('right')}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white hover:bg-gray-100 p-2 rounded-l-full shadow transition"
          >
            ❯
          </button>
        )}
      </div>
    </nav>
  );
}
