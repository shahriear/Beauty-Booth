'use client';

import { useState, useRef, useEffect } from 'react';

const offers = [
  {
    title: 'Free Gift Offer',
    description:
      'Free Gift ✨ Get Skin1004 Madecassol Centella Tox-Treat above 2000 BDT',
    discount: '৳150',
    maxDiscount: 'Max Discount',
  },
  {
    title: 'Free Gift Offer',
    description:
      'Free Gift ✨ Get Noiseless & Control Azadic Add Serum above 2000 BDT',
    discount: '৳150',
    maxDiscount: 'Max Discount',
  },
  {
    title: 'Free Gift Offer',
    description:
      'Free Gift ✨ Round Lab Mugwort Calming Serum (30ml) on orders above 2000 BDT',
    discount: '৳150',
    maxDiscount: 'Max Discount',
  },
];

export default function OfferSection() {
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
        setCurrentIndex(prev => (prev + 1) % offers.length);
      }
    }, 4000);

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
            ? (prev + 1) % offers.length
            : (prev - 1 + offers.length) % offers.length,
        );
      }
    }
  };

  const handleMouseLeave = () => {
    setIsDragging(false);
  };

  return (
    <section className="px-6 py-12">
      <div className="mb-8">
        <h2 className="text-3xl font-bold text-gray-800">OFFERS TO SAY YES</h2>
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
        {offers.map((offer, index) => (
          <div
            key={index}
            className="flex-shrink-0 w-96 bg-gradient-to-br from-pink-100 to-purple-100 rounded-lg p-6 shadow-lg hover:shadow-xl transition snap-center"
          >
            <div className="space-y-4">
              <h3 className="text-lg font-bold text-gray-800">{offer.title}</h3>
              <p className="text-sm text-gray-700">{offer.description}</p>

              <div className="flex items-end justify-between">
                <div>
                  <p className="text-sm text-gray-600">{offer.maxDiscount}</p>
                  <p className="text-3xl font-bold text-pink-600">
                    {offer.discount}
                  </p>
                </div>
                <button className="bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-lg transition font-semibold">
                  Shop Now
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Scroll Indicators */}
      <div className="flex gap-2 mt-6 justify-center">
        {offers.map((_, index) => (
          <button
            key={index}
            className={`w-2 h-2 rounded-full transition ${
              index === currentIndex % offers.length
                ? 'bg-purple-600'
                : 'bg-gray-300'
            }`}
          />
        ))}
      </div>
    </section>
  );
}
