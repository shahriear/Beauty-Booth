'use client';

import { useState } from 'react';
import { ChevronLeft, ChevronRight, Heart, Share2 } from 'lucide-react';

export default function ProductGallery({ images, name, discount, isOnSale }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [wishlisted, setWishlisted] = useState(false);

  const goTo = dir => {
    setActiveIndex(i => {
      const next = i + dir;
      if (next < 0) return images.length - 1;
      if (next >= images.length) return 0;
      return next;
    });
  };

  return (
    <div className="flex flex-col gap-4">
      <div className="relative aspect-square bg-gray-50 rounded-lg overflow-hidden border border-gray-100">
        <img
          src={images[activeIndex]}
          alt={`${name} - image ${activeIndex + 1}`}
          className="w-full h-full object-cover"
        />

        {(isOnSale || discount > 0) && (
          <span className="absolute top-4 left-4 bg-primary-pink text-white px-3 py-1 rounded text-xs font-bold uppercase tracking-wide">
            Offer
          </span>
        )}

        <div className="absolute top-4 right-4 flex gap-2">
          <button
            type="button"
            onClick={() => setWishlisted(w => !w)}
            className={`p-2 rounded-full bg-white shadow transition ${
              wishlisted ? 'text-primary-pink' : 'text-gray-600 hover:text-primary-pink'
            }`}
          >
            <Heart size={18} fill={wishlisted ? 'currentColor' : 'none'} />
          </button>
          <button
            type="button"
            className="p-2 rounded-full bg-white shadow text-gray-600 hover:text-primary-pink transition"
          >
            <Share2 size={18} />
          </button>
        </div>

        {images.length > 1 && (
          <>
            <button
              type="button"
              onClick={() => goTo(-1)}
              className="absolute left-3 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white/80 shadow hover:bg-white transition"
            >
              <ChevronLeft size={20} />
            </button>
            <button
              type="button"
              onClick={() => goTo(1)}
              className="absolute right-3 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white/80 shadow hover:bg-white transition"
            >
              <ChevronRight size={20} />
            </button>
          </>
        )}
      </div>

      <div className="flex gap-3">
        {images.map((img, i) => (
          <button
            key={i}
            type="button"
            onClick={() => setActiveIndex(i)}
            className={`w-20 h-20 rounded-lg overflow-hidden border-2 transition ${
              i === activeIndex ? 'border-gray-800' : 'border-gray-200 hover:border-gray-400'
            }`}
          >
            <img src={img} alt="" className="w-full h-full object-cover" />
          </button>
        ))}
      </div>
    </div>
  );
}
