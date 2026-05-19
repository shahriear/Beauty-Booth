'use client';

import { useEffect, useRef } from 'react';

import Image from 'next/image';

export default function SearchOverlay({ open, setOpen, searchQuery }) {
  const overlayRef = useRef(null);

  // Outside click close
  useEffect(() => {
    function handleClickOutside(e) {
      const isInsideOverlay =
        overlayRef.current && overlayRef.current.contains(e.target);

      const isHeaderSearch = e.target.closest('.header-search');

      if (!isInsideOverlay && !isHeaderSearch) {
        setOpen(false);
      }
    }

    if (open) {
      document.addEventListener('mousedown', handleClickOutside);

      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);

      document.body.style.overflow = 'auto';
    };
  }, [open, setOpen]);

  if (!open) return null;

  const products = [
    {
      id: 1,
      name: 'SKIN1004 Madagascar Centella',
      price: '1200',
      image: '/images/product-1.webp',
    },
    {
      id: 2,
      name: 'Beauty Of Joseon Relief Sun',
      price: '1250',
      image: '/images/product-2.webp',
    },
    {
      id: 3,
      name: 'Anua Heartleaf Toner',
      price: '1450',
      image: '/images/product-3.webp',
    },
    {
      id: 4,
      name: 'Round Lab Birch Sunscreen',
      price: '1350',
      image: '/images/product-2.webp',
    },
    {
      id: 5,
      name: 'COSRX Snail Mucin Essence',
      price: '1650',
      image: '/images/product-3.webp',
    },
  ];

  return (
    <div className="fixed inset-0 z-40 bg-blac pt-24 px-4 ">
      {/* Container */}
      <div
        ref={overlayRef}
        className="
          w-full
          max-w-7xl
          mx-auto
          bg-white
          
          shadow-2xl
          overflow-hidden
          animate-in
          fade-in
          zoom-in
          duration-200
          border border-2 border-gray-400 rounded-3xl
        "
      >
        <div className="grid grid-cols-12 min-h-[500px]  ">
          {/* LEFT */}
          <div className="col-span-3 border-r p-6">
            <h2 className="font-semibold text-pink-500 mb-5">Brands</h2>

            <div className="flex flex-wrap gap-3">
              {[
                'COSRX',
                'ANUA',
                'SKIN1004',
                'Round Lab',
                'Beauty Of Joseon',
                'MARS',
              ].map(item => (
                <button
                  key={item}
                  className="
                    border
                    px-4 py-2
                    rounded-xl
                    text-sm
                    hover:border-pink-500
                    hover:text-pink-500
                    transition
                  "
                >
                  {item}
                </button>
              ))}
            </div>
          </div>

          {/* MIDDLE */}
          <div className="col-span-5 border-r p-6">
            <h2 className="font-semibold text-pink-500 mb-5">Quick Filters</h2>

            <div className="flex flex-wrap gap-3 mb-10">
              {[
                'Sunscreen',
                'Moisturizer',
                'Serum',
                'Toner',
                'Lipstick',
                'Foundation',
                'Cleanser',
              ].map(item => (
                <button
                  key={item}
                  className="
                    border
                    px-4 py-2
                    rounded-xl
                    text-sm
                    hover:border-pink-500
                    hover:text-pink-500
                    transition
                  "
                >
                  {item}
                </button>
              ))}
            </div>

            <h2 className="font-semibold text-pink-500 mb-5">Categories</h2>

            <div className="flex flex-wrap gap-3">
              {[
                'Skin Care',
                'Make Up',
                'Sun Care',
                'Body Care',
                'Hair Care',
                'Serums',
              ].map(item => (
                <button
                  key={item}
                  className="
                    border
                    px-4 py-2
                    rounded-xl
                    text-sm
                    hover:border-pink-500
                    hover:text-pink-500
                    transition
                  "
                >
                  {item}
                </button>
              ))}
            </div>
          </div>

          {/* RIGHT */}
          <div className="col-span-4 p-6 flex flex-col h-[500px]">
            <h2 className="font-semibold text-pink-500 mb-5 flex-shrink-0">
              Product Suggestion
            </h2>

            {/* Products */}
            <div className="flex-1 overflow-y-auto pr-2 space-y-4 overscroll-contain custom-scrollbar">
              {products.map(product => (
                <div
                  key={product.id}
                  className="
                    border
                    rounded-2xl
                    p-3
                    flex gap-4
                    hover:shadow-md
                    transition
                  "
                >
                  {/* Image */}
                  <div className="relative w-20 h-20 rounded-xl overflow-hidden bg-gray-100 flex-shrink-0">
                    <Image
                      src={product.image}
                      alt={product.name}
                      fill
                      className="object-cover"
                    />
                  </div>

                  {/* Info */}
                  <div className="flex-1">
                    <h3 className="text-sm font-medium line-clamp-2">
                      {product.name}
                    </h3>

                    <p className="mt-2 font-semibold">৳ {product.price}</p>

                    <button className="mt-3 bg-black hover:bg-gray-900 text-white text-sm px-4 py-2 rounded-xl transition">
                      Add to cart
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
