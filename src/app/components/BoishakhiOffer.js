'use client';

import dynamic from 'next/dynamic';
import { useState, useEffect } from 'react';

const Slider = dynamic(() => import('react-slick'), { ssr: false });

// Product data organized by category
const allProducts = {
  cleansers: [
    {
      id: 1,
      name: 'Gentle Salicylic Acid Cleanser (100ml)',
      originalPrice: '৳ 1199',
      discountedPrice: '৳ 999',
      category: 'Cleansers',
      badge: 'ON SALE',
    },
    {
      id: 2,
      name: 'Beauty Of Joseeon Cleansing',
      originalPrice: '৳ 1620',
      discountedPrice: '৳ 1299',
      category: 'Cleansers',
      badge: 'ON SALE',
    },
    {
      id: 3,
      name: 'Foaming Deep Cleanser (120ml)',
      originalPrice: '৳ 1400',
      discountedPrice: '৳ 1100',
      category: 'Cleansers',
      badge: 'ON SALE',
    },
    {
      id: 4,
      name: 'Gentle Exfoliating Cleanser (100ml)',
      originalPrice: '৳ 1300',
      discountedPrice: '৳ 1050',
      category: 'Cleansers',
      badge: 'ON SALE',
    },
    {
      id: 5,
      name: 'Hydrating Cleanser Milk (150ml)',
      originalPrice: '৳ 1500',
      discountedPrice: '৳ 1200',
      category: 'Cleansers',
      badge: 'ON SALE',
    },
    {
      id: 6,
      name: 'Gentle Salicylic Acid Cleanser (100ml)',
      originalPrice: '৳ 1199',
      discountedPrice: '৳ 999',
      category: 'Cleansers',
      badge: 'ON SALE',
    },
    {
      id: 7,
      name: 'Gentle Salicylic Acid Cleanser (100ml)',
      originalPrice: '৳ 1199',
      discountedPrice: '৳ 999',
      category: 'Cleansers',
      badge: 'ON SALE',
    },
  ],
  serums: [
    {
      id: 6,
      name: 'Serums & Treatments Premium',
      originalPrice: '৳ 2099',
      discountedPrice: '৳ 1699',
      category: 'Serums & Treatments',
      badge: 'ON SALE',
    },
    {
      id: 7,
      name: 'Hyaluronic Acid Serum (30ml)',
      originalPrice: '৳ 1800',
      discountedPrice: '৳ 1450',
      category: 'Serums & Treatments',
      badge: 'ON SALE',
    },
    {
      id: 8,
      name: 'Vitamin C Brightening Serum (50ml)',
      originalPrice: '৳ 2200',
      discountedPrice: '৳ 1750',
      category: 'Serums & Treatments',
      badge: 'ON SALE',
    },
    {
      id: 9,
      name: 'Niacinamide Treatment Serum (40ml)',
      originalPrice: '৳ 1900',
      discountedPrice: '৳ 1550',
      category: 'Serums & Treatments',
      badge: 'ON SALE',
    },
    {
      id: 10,
      name: 'Peptide Rich Serum (35ml)',
      originalPrice: '৳ 2000',
      discountedPrice: '৳ 1600',
      category: 'Serums & Treatments',
      badge: 'ON SALE',
    },
  ],
  moisturizing: [
    {
      id: 11,
      name: 'Shiseido Perfect Whip Cleansing (120ml)',
      originalPrice: '৳ 1200',
      discountedPrice: '৳ 990',
      category: 'Moisturizing Cream',
      badge: 'ON SALE',
    },
    {
      id: 12,
      name: 'Deep Moisturizing Cream (50ml)',
      originalPrice: '৳ 1500',
      discountedPrice: '৳ 1199',
      category: 'Moisturizing Cream',
      badge: 'ON SALE',
    },
    {
      id: 13,
      name: 'Night Recovery Cream (60ml)',
      originalPrice: '৳ 1800',
      discountedPrice: '৳ 1450',
      category: 'Moisturizing Cream',
      badge: 'ON SALE',
    },
    {
      id: 14,
      name: 'SPF 50 Moisturizing Cream (40ml)',
      originalPrice: '৳ 1650',
      discountedPrice: '৳ 1350',
      category: 'Moisturizing Cream',
      badge: 'ON SALE',
    },
    {
      id: 15,
      name: 'Lightweight Day Cream (75ml)',
      originalPrice: '৳ 1400',
      discountedPrice: '৳ 1100',
      category: 'Moisturizing Cream',
      badge: 'ON SALE',
    },
  ],
};

const categories = [
  { label: 'Cleansers', value: 'cleansers' },
  { label: 'Serums & Treatments', value: 'serums' },
  { label: 'Moisturizing Cream', value: 'moisturizing' },
];

export default function BoishakhiOffer() {
  const [mounted, setMounted] = useState(false);
  const [activeCategory, setActiveCategory] = useState('cleansers');
  const [displayedProducts, setDisplayedProducts] = useState(
    allProducts.cleansers,
  );

  useEffect(() => {
    setMounted(true);
  }, []);

  // Update products when category changes
  const handleCategoryChange = categoryValue => {
    setActiveCategory(categoryValue);
    setDisplayedProducts(allProducts[categoryValue]);
  };

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
    <section className="px-6 py-12 bg-gray-50 rounded-3xl">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-3xl font-bold text-gray-800">BOISHAKHI OFFER</h2>
        <a
          href="#"
          className="text-pink-600 font-semibold hover:text-pink-700 transition"
        >
          See All →
        </a>
      </div>

      {/* Category Filter Tabs */}
      <div className="flex justify-center gap-3 mb-8 flex-wrap">
        {categories.map(category => (
          <button
            key={category.value}
            onClick={() => handleCategoryChange(category.value)}
            className={`px-6 py-2 rounded-full font-semibold text-sm transition-all duration-300 ${
              activeCategory === category.value
                ? 'bg-gradient-to-r from-indigo-950 to-violet-800 text-white shadow-lg shadow-purple-300'
                : 'bg-white border-2 border-purple-200 text-gray-700 hover:border-purple-400'
            }`}
          >
            {category.label}
          </button>
        ))}
      </div>

      {/* Products Carousel with Draggable Feature */}
      <Slider {...settings}>
        {displayedProducts.map(product => (
          <div key={product.id} className="px-2 pb-6">
            <div className="group relative bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300 cursor-grab active:cursor-grabbing">
              {/* Product Image Placeholder */}
              {/* <div className="w-full h-48 bg-gradient-to-br from-pink-100 to-purple-100 flex items-center justify-center relative overflow-hidden">
                <span className="text-gray-400 text-sm text-center px-2">
                  Product Image
                </span>

                
                <span className="absolute top-3 left-3 bg-pink-600 text-white text-xs font-bold px-3 py-1 rounded-full">
                  ON SALE
                </span>
              </div> */}
              <div className="w-full h-48 bg-gray-100 flex items-center justify-center relative overflow-hidden">
                <span className="text-gray-400 text-sm">Product Image</span>

                {/* 🔴 SALE BADGE */}
                <span className="absolute top-3 left-3 bg-pink-600 text-white text-xs font-bold px-3 py-1 rounded-full transition-all duration-300 group-hover:opacity-0 group-hover:scale-90">
                  {product.badge}
                </span>

                {/* ➕ ADD BUTTON */}
                <button
                  className="absolute top-3 right-3 w-10 h-10 rounded-full bg-pink-600 text-white flex items-center justify-center text-xl shadow-lg 
                  opacity-0 translate-y-[-10px] transition-all duration-300 
                  group-hover:opacity-100 group-hover:translate-y-0 hover:scale-110"
                >
                  +
                </button>
              </div>

              {/* Product Info */}
              <div className="p-4">
                <p className="text-xs text-gray-500 uppercase tracking-wide mb-1">
                  {product.category}
                </p>
                <h3 className="text-sm font-semibold text-gray-800 mb-2 line-clamp-2 min-h-10">
                  {product.name}
                </h3>

                {/* Price */}
                <div className="flex items-center gap-2">
                  <span className="text-xs text-gray-400 line-through">
                    {product.originalPrice}
                  </span>
                  <span className="text-lg font-bold text-pink-600">
                    {product.discountedPrice}
                  </span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </section>
  );
}
