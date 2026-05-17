
'use client';

import dynamic from 'next/dynamic';
import { useState, useEffect } from 'react';

const Slider = dynamic(() => import('react-slick'), { ssr: false });

const BuyOneGetOneProducts = [
  {
    id: 1,
    name: 'ADB Dark Spot Combo (50ml+50ml)',
    originalPrice: ' 2350',
    discountedPrice: ' 1350',
    badge: 'ON SALE',
  },
  {
    id: 2,
    name: 'Dandruff Defence Combo (250ml)',
    originalPrice: ' 1870',
    discountedPrice: ' 1349',
    badge: 'ON SALE',
  },
  {
    id: 3,
    name: 'Budget Brightening Combo (50ml+100ml)',
    originalPrice: ' 1699',
    discountedPrice: ' 1299',
    badge: 'ON SALE',
  },
  {
    id: 4,
    name: 'Budget Brightening Combo (50ml+100ml)',
    originalPrice: ' 1699',
    discountedPrice: ' 1299',
    badge: 'ON SALE',
  },
  {
    id: 5,
    name: 'Budget Brightening Combo (50ml+100ml)',
    originalPrice: ' 1699',
    discountedPrice: ' 1299',
    badge: 'ON SALE',
  },
  {
    id: 6,
    name: 'Budget Brightening Combo (50ml+100ml)',
    originalPrice: ' 1699',
    discountedPrice: ' 1299',
    badge: 'ON SALE',
  },
];

export default function BuyOneGetOne() {
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
      <h2 className="text-3xl font-bold text-gray-800 mb-8">BUY ONE GET ONE</h2>

      <Slider {...settings}>
        {BuyOneGetOneProducts.map(product => (
          <div key={product.id} className="px-2 pb-6">
            <div className="group relative bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300 cursor-grab">
              {/* Product Image */}
              <div className="w-full h-48 bg-gray-100 flex items-center justify-center relative overflow-hidden">
                <span className="text-gray-400 text-sm">Product Image</span>

                {/*  SALE BADGE */}
                <span
                  className="absolute top-3 left-3 bg-pink-600 text-white text-xs font-bold px-3 py-1 rounded-full 
                transition-all duration-300 
                group-hover:opacity-0 group-hover:scale-90"
                >
                  {product.badge}
                </span>
              </div>

              {/* Product Info */}
              <div className="p-4">
                <p className="text-xs text-gray-500 uppercase tracking-wide mb-1">
                  COMBO
                </p>
                <h3 className="text-sm font-semibold text-gray-800 mb-2 line-clamp-2">
                  {product.name}
                </h3>

                <div className="flex items-center gap-2">
                  <span className="text-xs text-gray-400 line-through">
                    ৳{product.originalPrice}
                  </span>
                  <span className="text-lg font-bold text-pink-600">
                    ৳{product.discountedPrice}
                  </span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </Slider>

      {/*==============Poster======== */}
      <div className="mt-8 rounded-lg overflow-hidden shadow-lg cursor-grab">
        <img
          src="/images/NewArrival.webp"
          alt="BOGO Madness"
          className="w-full object-cover"
        />
      </div>
    </section>
  );
}

