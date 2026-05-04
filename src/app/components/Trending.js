'use client';

import { useState, useRef, useEffect } from 'react';

const trendingImages = [
  '/images/TRENDING-img/trendingIMG-1.webp',
  '/images/TRENDING-img/trendingIMG-2.webp',
  '/images/TRENDING-img/trendingIMG-3.webp',
  '/images/TRENDING-img/trendingIMG-2.webp',
];

export default function Trending() {
  const scrollContainerRef = useRef(null);
  const [autoScroll, setAutoScroll] = useState(true);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);

  useEffect(() => {
    if (!autoScroll) return;

    const timer = setInterval(() => {
      if (scrollContainerRef.current) {
        const scrollAmount = scrollContainerRef.current.offsetWidth;
        scrollContainerRef.current.scrollBy({
          left: scrollAmount,
          behavior: 'smooth',
        });
        setCurrentIndex(prev => (prev + 1) % trendingImages.length);
      }
    }, 3000);

    return () => clearInterval(timer);
  }, [autoScroll]);

  const handleMouseDown = e => {
    setIsDragging(true);
    setStartX(e.clientX);
  };

  const handleMouseUp = e => {
    if (!isDragging) return;
    setIsDragging(false);
    const endX = e.clientX;
    const diff = startX - endX;

    if (Math.abs(diff) > 50) {
      if (scrollContainerRef.current) {
        const scrollAmount = scrollContainerRef.current.offsetWidth;
        scrollContainerRef.current.scrollBy({
          left: diff > 0 ? scrollAmount : -scrollAmount,
          behavior: 'smooth',
        });
        setCurrentIndex(prev =>
          diff > 0
            ? (prev + 1) % trendingImages.length
            : (prev - 1 + trendingImages.length) % trendingImages.length,
        );
      }
    }
  };

  const handleMouseLeave = () => {
    setIsDragging(false);
  };

  return (
    <section className="px-6 py-12 bg-gray-50">
      <div className="mb-8">
        <h2 className="text-3xl font-bold text-gray-800">TRENDING</h2>
      </div>

      <div
        ref={scrollContainerRef}
        className="flex gap-6 overflow-x-auto scroll-smooth snap-x scrollbar-hide cursor-grab active:cursor-grabbing select-none"
        style={{ scrollBehavior: 'smooth' }}
        onMouseEnter={() => setAutoScroll(false)}
        onMouseLeave={() => {
          setAutoScroll(true);
          handleMouseLeave();
        }}
        onMouseDown={handleMouseDown}
        onMouseUp={handleMouseUp}
      >
        {trendingImages.map((image, index) => (
          <div
            key={index}
            className="flex-shrink-0 w-96 h-64 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition snap-center pointer-events-none"
          >
            <img
              src={image}
              alt={`Trending ${index}`}
              className="w-full h-full object-cover hover:scale-105 transition duration-300"
              draggable="false"
            />
          </div>
        ))}
      </div>

      {/* Scroll Indicators */}
      <div className="flex gap-2 mt-6 justify-center">
        {trendingImages.map((_, index) => (
          <button
            key={index}
            className={`w-2 h-2 rounded-full transition ${
              index === currentIndex % trendingImages.length
                ? 'bg-purple-600'
                : 'bg-gray-300'
            }`}
          />
        ))}
      </div>
    </section>
  );
}
