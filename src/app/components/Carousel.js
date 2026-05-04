'use client';

import { useState, useEffect, useRef } from 'react';

export default function Carousel({
  items,
  autoScroll = true,
  interval = 3000,
}) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const containerRef = useRef(null);

  useEffect(() => {
    if (!autoScroll) return;

    const timer = setInterval(() => {
      setCurrentIndex(prev => (prev + 1) % items.length);
    }, interval);

    return () => clearInterval(timer);
  }, [items.length, autoScroll, interval]);

  const goToSlide = index => {
    setCurrentIndex(index);
  };

  const goToPrevious = () => {
    setCurrentIndex(prev => (prev - 1 + items.length) % items.length);
  };

  const goToNext = () => {
    setCurrentIndex(prev => (prev + 1) % items.length);
  };

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
      if (diff > 0) {
        goToNext();
      } else {
        goToPrevious();
      }
    }
  };

  const handleMouseLeave = () => {
    setIsDragging(false);
  };

  return (
    <div
      ref={containerRef}
      className="relative w-full overflow-hidden bg-gray-100 rounded-xl cursor-grab active:cursor-grabbing select-none"
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseLeave}
    >
      {/* Slides */}
      <div className="relative h-64 md:h-96 lg:h-96">
        {items.map((item, index) => (
          <div
            key={index}
            className={`absolute w-full h-full transition-opacity duration-1000 ${
              index === currentIndex ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <img
              src={item}
              alt={`Slide ${index}`}
              className="w-full h-full object-cover pointer-events-none"
              draggable="false"
            />
          </div>
        ))}
      </div>

      {/* Navigation Buttons */}
      <button
        onClick={goToPrevious}
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/75 text-white p-2 rounded-full transition"
      >
        ❮
      </button>
      <button
        onClick={goToNext}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/75 text-white p-2 rounded-full transition"
      >
        ❯
      </button>

      {/* Dots Indicator */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
        {items.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-2 h-2 rounded-full transition ${
              index === currentIndex ? 'bg-white' : 'bg-white/50'
            }`}
          />
        ))}
      </div>
    </div>
  );
}
