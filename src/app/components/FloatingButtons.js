'use client';

import { useEffect, useState } from 'react';
import { ArrowUp } from 'lucide-react';
import { FaWhatsapp } from 'react-icons/fa';

export default function FloatingButtons() {
  const [showTop, setShowTop] = useState(false);

  // scroll detect
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 500) {
        setShowTop(true);
      } else {
        setShowTop(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // scroll to top
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <div className="fixed bottom-15 right-18 flex flex-col gap-3 z-50">
      {/* Top Button (Only show on scroll) */}
      <button
        onClick={scrollToTop}
        className={`bg-white border border-gray-300 text-black py-2 rounded-full shadow-lg flex flex-col items-center gap-1
  transition-all duration-500 ease-in-out 
  ${
    showTop
      ? 'opacity-100 translate-y-0 scale-100 hover:bg-gray-100'
      : 'opacity-0 translate-y-2 scale-90 pointer-events-none'
  }`}
      >
        <ArrowUp size={18} />
        <p className="text-[12px] font-bold">TOP</p>
      </button>
      {/* WhatsApp Button (Always visible) */}
      <a
        href="https://wa.me/8801XXXXXXXXX"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-green-500 hover:bg-green-600 text-white p-2 rounded-full shadow-lg"
      >
        <FaWhatsapp size={27} />
      </a>
    </div>
  );
}
