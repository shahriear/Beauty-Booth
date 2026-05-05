'use client';

import dynamic from 'next/dynamic';
import { useState, useEffect } from 'react';

const Slider = dynamic(() => import('react-slick'), { ssr: false });

const brandProducts = [
  {
    id: 1,
    brandName: 'COSRX',
    discount: 'Up to 44% Off',
    description: '★ Beauty Must Have',
    bgColor: 'from-pink-200 to-pink-100',
  },
  {
    id: 2,
    brandName: 'SKIN1004',
    discount: 'Up to 26% off',
    description: 'On Entire Range',
    bgColor: 'from-purple-200 to-pink-100',
  },
  {
    id: 3,
    brandName: 'ANUA',
    discount: 'Up to 35% Off',
    description: 'On Entire Brand',
    bgColor: 'from-orange-200 to-pink-100',
  },
  {
    id: 4,
    brandName: 'BEAUTY OF JOSEON',
    discount: 'Up to 29% off',
    description: 'On Bestsellers',
    bgColor: 'from-purple-200 to-purple-100',
  },
  {
    id: 5,
    brandName: 'DOT & KEY',
    discount: 'Up to 22% Off',
    description: 'On Entire Brand',
    bgColor: 'from-red-200 to-orange-100',
  },
];

export default function BestOfferBrands() {
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
        BEST OFFER BRANDS
      </h2>

      <Slider {...settings}>
        {brandProducts.map(brand => (
          <div key={brand.id} className="px-2 pb-6">
            <div
              className={`group relative bg-gradient-to-br ${brand.bgColor} rounded-2xl overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300 cursor-pointer h-64 flex flex-col items-center justify-center p-6 text-center`}
            >
              {/* Brand Image Placeholder */}
              <div className="w-32 h-32 bg-white/50 rounded-lg flex items-center justify-center mb-4 group-hover:scale-105 transition">
                <span className="text-gray-400 text-xs">Brand Image</span>
              </div>

              {/* Brand Info */}
              <h3 className="text-lg font-bold text-gray-800 mb-2">
                {brand.brandName}
              </h3>
              <p className="text-lg font-bold text-pink-600 mb-1">
                {brand.discount}
              </p>
              <p className="text-xs text-gray-700">{brand.description}</p>
            </div>
          </div>
        ))}
      </Slider>
    </section>
  );
}
