'use client';

import dynamic from 'next/dynamic';
import { useState, useEffect } from 'react';

const Slider = dynamic(() => import('react-slick'), { ssr: false });

const freeDeliveryProducts = [
  {
    id: 1,
    brand: 'ABIB',
    discount: 'Up to 35% Off',
    description: 'Free Delivery Over ৳99 bill',
    bgColor: 'from-green-200 to-green-100',
  },
  {
    id: 2,
    brand: 'DABO',
    discount: 'Up to 28% Off',
    description: 'Free Delivery over ৳99 bill',
    bgColor: 'from-pink-200 to-red-100',
  },
  {
    id: 3,
    brand: 'HARUHARU',
    discount: 'Up to 18% Off',
    description: 'Free Delivery over ৳99 bill',
    bgColor: 'from-purple-200 to-green-100',
  },
  {
    id: 4,
    brand: 'NUMBUZIN',
    discount: 'Up to 26% Off',
    description: 'Free Delivery over ৳99 bill',
    bgColor: 'from-yellow-200 to-orange-100',
  },
  {
    id: 5,
    brand: 'VT COSMETICS',
    discount: 'Up to 18% Off',
    description: 'Free Delivery over ৳99 bill',
    bgColor: 'from-purple-200 to-purple-100',
  },
];

export default function FreeDeliveryAvailable() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const settings = {
    dots: false,
    infinite: true,
    speed: 600,
    slidesToShow: 5,
    slidesToScroll: 1,
    swipeToSlide: true,
    touchThreshold: 10,
    draggable: true,
    arrows: true,
    responsive: [
      { breakpoint: 1400, settings: { slidesToShow: 4 } },
      { breakpoint: 1024, settings: { slidesToShow: 3 } },
      { breakpoint: 768, settings: { slidesToShow: 2 } },
      { breakpoint: 480, settings: { slidesToShow: 1 } },
    ],
  };

  if (!mounted) return null;

  return (
    <section className="px-6 py-12">
      <h2 className="text-3xl font-bold text-gray-800 mb-8">
        FREE DELIVERY AVAILABLE
      </h2>

      <Slider {...settings}>
        {freeDeliveryProducts.map(product => (
          <div key={product.id} className="px-2 pb-6">
            <div
              className={`group relative bg-gradient-to-br ${product.bgColor} rounded-2xl overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300 cursor-grab active:cursor-grabbing h-72 flex flex-col items-center justify-center p-6 text-center`}
            >
              {/* Product Image Placeholder */}
              <div className="w-28 h-28 bg-white/50 rounded-lg flex items-center justify-center mb-4 group-hover:scale-105 transition">
                <span className="text-gray-400 text-xs">Product Image</span>
              </div>

              {/* Brand Info */}
              <h3 className="text-base font-bold text-gray-800 mb-2">
                {product.brand}
              </h3>
              <p className="text-sm font-bold text-pink-600 mb-2">
                {product.discount}
              </p>
              <p className="text-xs text-gray-700">{product.description}</p>
            </div>
          </div>
        ))}
      </Slider>
    </section>
  );
}
