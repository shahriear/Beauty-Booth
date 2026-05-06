'use client';

import dynamic from 'next/dynamic';
import { useState, useEffect } from 'react';

const Slider = dynamic(() => import('react-slick'), { ssr: false });

const flatSalesProducts = [
  {
    id: 1,
    brand: 'CARE:NEL',
    discount: 'Flat 16% Off',
    description: 'On Entire Range',
    bgColor: 'from-pink-200 to-pink-100',
  },
  {
    id: 2,
    brand: 'JUMISO',
    discount: 'Flat 16% Off',
    description: 'On Entire Brand',
    bgColor: 'from-pink-300 to-pink-100',
  },
  {
    id: 3,
    brand: 'APIEU',
    discount: 'Flat 14% Off',
    description: 'On Entire Brand',
    bgColor: 'from-pink-200 to-pink-100',
  },
  {
    id: 4,
    brand: 'APLB',
    discount: 'Flat 13% Off',
    description: 'On Entire Range',
    bgColor: 'from-pink-300 to-pink-100',
  },
  {
    id: 5,
    brand: '3W CLINIC',
    discount: 'Flat 13% Off',
    description: 'On Entire Range',
    bgColor: 'from-pink-200 to-pink-100',
  },
];

export default function FlatSalesPercentage() {
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
    <section className="px-6 py-12 bg-white">
      <h2 className="text-3xl font-bold text-gray-800 mb-8">
        FLAT SALES PERCENTAGE
      </h2>

      <Slider {...settings}>
        {flatSalesProducts.map(product => (
          <div key={product.id} className="px-2 pb-6">
            <div
              className={`group relative bg-gradient-to-br ${product.bgColor} rounded-2xl overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300 cursor-grab active:cursor-grabbing h-72 flex flex-col items-center justify-center p-6 text-center`}
            >
              {/* Product Image Placeholder */}
              <div className="w-32 h-40 bg-white/60 rounded-lg flex items-center justify-center mb-4 group-hover:scale-105 transition shadow-sm">
                <span className="text-gray-400 text-xs text-center px-2">
                  Product Image
                </span>
              </div>

              {/* Brand Name */}
              <h3 className="text-sm font-bold text-gray-800 mb-2">
                {product.brand}
              </h3>

              {/* Discount */}
              <p className="text-base font-bold text-pink-600 mb-1">
                {product.discount}
              </p>

              {/* Description */}
              <p className="text-xs text-gray-700">{product.description}</p>
            </div>
          </div>
        ))}
      </Slider>
     
    </section>
  );
}
