'use client';

import { useState, useRef, useEffect } from 'react';
import MegaMenu from './MegaMenu';
import { BadgeCheck, Flame, Sparkles, Star } from 'lucide-react';

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

// Items that have mega menus
const megaMenuItems = [
  'Skin Care',
  'Hair Care',
  'Make Up',
  'Accessories',
  'Bath & Body Care',
  'Mom & Baby Care',
  "Men's Care",
];

const menuIcons = {
  'Eid Festive Sale': (
    <Flame
      size={16}
      className="text-red-500 group-hover:scale-110 transition"
    />
  ),
  New: (
    <Sparkles
      size={16}
      className="text-purple-500 group-hover:rotate-12 transition"
    />
  ),
  Brands: <Star size={16} className="text-yellow-500" />,
  'Best Selling': <BadgeCheck size={16} className="text-blue-500" />,
};
export default function Navbar() {
  const scrollContainerRef = useRef(null);
  const megaMenuRef = useRef(null);

  const [showLeftArrow, setShowLeftArrow] = useState(false);
  const [showRightArrow, setShowRightArrow] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [activeMegaMenu, setActiveMegaMenu] = useState(null);
  const [mouseOverMenu, setMouseOverMenu] = useState(false);

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
      left: direction === 'left' ? -300 : 300,
      behavior: 'smooth',
    });
  };

  // Handle mega menu timeout
  useEffect(() => {
    let timeoutId;

    if (!mouseOverMenu && activeMegaMenu) {
      timeoutId = setTimeout(() => {
        setActiveMegaMenu(null);
      }, 200); // Small delay to prevent flickering
    }

    return () => clearTimeout(timeoutId);
  }, [mouseOverMenu, activeMegaMenu]);

  const handleMenuItemHover = item => {
    if (megaMenuItems.includes(item)) {
      setActiveMegaMenu(item);
      setMouseOverMenu(true);
    } else {
      setActiveMegaMenu(null);
    }
  };

  const handleMenuItemLeave = () => {
    if (!mouseOverMenu) {
      setActiveMegaMenu(null);
    }
  };

  return (
    <nav className="sticky top-22 z-30 bg-white shadow-md cursor-pointer">
      <div className="relative flex items-center px-6 py-3 container mx-auto">
        {/* Left Arrow */}
        <button
          onClick={() => scroll('left')}
          className={`absolute left-2 top-1/2 -translate-y-1/2 z-10 
          w-10 h-10 flex items-center justify-center
          bg-white rounded-full shadow-md border border-gray-200
          transition-all duration-300 cursor-pointer
          hover:bg-gray-100 hover:shadow-lg
          ${mounted && showLeftArrow ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
        >
          <span className="text-sm text-gray-500">❮</span>
        </button>

        {/* Menu Items */}
        <div
          ref={scrollContainerRef}
          className="flex gap-6 overflow-x-auto whitespace-nowrap px-12 py-2 scroll-smooth scrollbar-hide relative"
        >
          {menuItems.map(item => (
            <button
              key={item}
              onMouseEnter={() => handleMenuItemHover(item)}
              onMouseLeave={handleMenuItemLeave}
              className={`relative group text-gray-700 text-sm font-medium flex-shrink-0 py-2 px-1 transition-all duration-300 cursor-pointer
              ${activeMegaMenu === item ? 'text-purple-600' : 'hover:text-purple-600'}`}
            >
              <div className="flex items-center gap-2">
                {/* ICON (only if exists) */}
                {/* {menuIcons[item] && (
                  <img
                    src={menuIcons[item]}
                    alt={item}
                    className="w-4 h-4 object-contain"
                  />
                )} */}
                {menuIcons[item] && (
                  <span className="text-gray-600 group-hover:text-purple-600 transition">
                    {menuIcons[item]}
                  </span>
                )}
                <span>{item}</span>
              </div>

              {/* underline animation */}
              <span
                className={`absolute left-0 bottom-0 h-[2px] bg-purple-600 transition-all duration-300
                ${activeMegaMenu === item ? 'w-full' : 'w-0 group-hover:w-full'}`}
              ></span>
            </button>
          ))}
        </div>

        {/* Right Arrow */}
        <button
          onClick={() => scroll('right')}
          className={`absolute right-2 top-1/2 -translate-y-1/2 z-10 
          w-10 h-10 flex items-center justify-center
          bg-white rounded-full shadow-md border border-gray-200
          transition-all duration-300 cursor-pointer
          hover:bg-gray-100 hover:shadow-lg
          ${mounted && showRightArrow ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
        >
          <span className="text-sm text-gray-500">❯</span>
        </button>
      </div>

      {/* Mega Menu Dropdown - Positioned absolutely below navbar */}
      {megaMenuItems.includes(activeMegaMenu || '') && (
        <div
          ref={megaMenuRef}
          onMouseEnter={() => setMouseOverMenu(true)}
          onMouseLeave={() => {
            setMouseOverMenu(false);
            setActiveMegaMenu(null);
          }}
          className="absolute left-0 right-0 top-full container z-50 "
        >
          <MegaMenu category={activeMegaMenu} isOpen={!!activeMegaMenu} />
        </div>
      )}
    </nav>
  );
}
