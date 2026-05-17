'use client';

import dynamic from 'next/dynamic';
import { useState, useEffect } from 'react';
import useCartStore from '../store/useCartStore';

const Slider = dynamic(() => import('react-slick'), { ssr: false });

// Product data organized by category
const allProducts = {
  oily: [
    {
      id: 'oily-1',
      name: 'Gentle Salicylic Acid Cleanser (100ml)',
      originalPrice: ' 1199',
      discountedPrice: ' 999',
      category: 'Oily',
      badge: 'ON SALE',
    },
    {
      id: 'oily-2',
      name: 'Beauty Of Joseeon Cleansing',
      originalPrice: ' 1620',
      discountedPrice: ' 1299',
      category: 'Oily',
      badge: 'ON SALE',
    },
    {
      id: 'oily-3',
      name: 'Foaming Deep Cleanser (120ml)',
      originalPrice: ' 1400',
      discountedPrice: ' 1100',
      category: 'Oily',
      badge: 'ON SALE',
    },
    {
      id: 'oily-4',
      name: 'Gentle Exfoliating Cleanser (100ml)',
      originalPrice: ' 1300',
      discountedPrice: ' 1050',
      category: 'Oily',
      badge: 'ON SALE',
    },
    {
      id: 'oily-5',
      name: 'Hydrating Cleanser Milk (150ml)',
      originalPrice: ' 1500',
      discountedPrice: ' 1200',
      category: 'Oily',
      badge: 'ON SALE',
    },
    {
      id: 'oily-6',
      name: 'Gentle Salicylic Acid Cleanser (100ml)',
      originalPrice: ' 1199',
      discountedPrice: ' 999',
      category: 'Oily',
      badge: 'ON SALE',
    },
    {
      id: 'oily-7',
      name: 'Gentle Salicylic Acid Cleanser (100ml)',
      originalPrice: ' 1199',
      discountedPrice: ' 999',
      category: 'Oily',
      badge: 'ON SALE',
    },
  ],
  dry: [
    {
      id: 'dry-1',
      name: 'Serums & Treatments Premium',
      originalPrice: ' 2099',
      discountedPrice: ' 1699',
      category: 'Serums & Treatments',
      badge: 'ON SALE',
    },
    {
      id: 'dry-2',
      name: 'Hyaluronic Acid Serum (30ml)',
      originalPrice: ' 1800',
      discountedPrice: ' 1450',
      category: 'Serums & Treatments',
      badge: 'ON SALE',
    },
    {
      id: 'dry-3',
      name: 'Vitamin C Brightening Serum (50ml)',
      originalPrice: ' 2200',
      discountedPrice: ' 1750',
      category: 'Serums & Treatments',
      badge: 'ON SALE',
    },
    {
      id: 'dry-4',
      name: 'Niacinamide Treatment Serum (40ml)',
      originalPrice: ' 1900',
      discountedPrice: ' 1550',
      category: 'Serums & Treatments',
      badge: 'ON SALE',
    },
    {
      id: 'dry-5',
      name: 'Peptide Rich Serum (35ml)',
      originalPrice: ' 2000',
      discountedPrice: ' 1600',
      category: 'Serums & Treatments',
      badge: 'ON SALE',
    },
  ],
  combination: [
    {
      id: 'combination-1',
      name: 'Shiseido Perfect Whip Cleansing (120ml)',
      originalPrice: ' 1200',
      discountedPrice: ' 990',
      category: 'Moisturizing Cream',
      badge: 'ON SALE',
    },
    {
      id: 'combination-2',
      name: 'Deep Moisturizing Cream (50ml)',
      originalPrice: ' 1500',
      discountedPrice: ' 1199',
      category: 'Moisturizing Cream',
      badge: 'ON SALE',
    },
    {
      id: 'combination-3',
      name: 'Night Recovery Cream (60ml)',
      originalPrice: ' 1800',
      discountedPrice: ' 1450',
      category: 'Moisturizing Cream',
      badge: 'ON SALE',
    },
    {
      id: 'combination-4',
      name: 'SPF 50 Moisturizing Cream (40ml)',
      originalPrice: ' 1650',
      discountedPrice: ' 1350',
      category: 'Moisturizing Cream',
      badge: 'ON SALE',
    },
    {
      id: 'combination-5',
      name: 'Lightweight Day Cream (75ml)',
      originalPrice: ' 1400',
      discountedPrice: ' 1100',
      category: 'Moisturizing Cream',
      badge: 'ON SALE',
    },
  ],
  sensitive: [
    {
      id: 'sensitive-1',
      name: ' Perfect Whip Cleansing (120ml)',
      originalPrice: ' 1200',
      discountedPrice: ' 990',
      category: 'Moisturizing Cream',
      badge: 'ON SALE',
    },
    {
      id: 'sensitive-2',
      name: ' Moisturizing Cream (50ml)',
      originalPrice: ' 1500',
      discountedPrice: ' 1199',
      category: 'Moisturizing Cream',
      badge: 'ON SALE',
    },
    {
      id: 'sensitive-3',
      name: ' Recovery Cream (60ml)',
      originalPrice: ' 1800',
      discountedPrice: '1450',
      category: 'Moisturizing Cream',
      badge: 'ON SALE',
    },
    {
      id: 'sensitive-4',
      name: ' Moisturizing Cream (40ml)',
      originalPrice: ' 1650',
      discountedPrice: ' 1350',
      category: 'Moisturizing Cream',
      badge: 'ON SALE',
    },
    {
      id: 'sensitive-5',
      name: 'Lightweight Day Cream (75ml)',
      originalPrice: ' 1400',
      discountedPrice: ' 1100',
      category: 'Moisturizing Cream',
      badge: 'ON SALE',
    },
    {
      id: 'sensitive-6',
      name: 'Deep Moisturizing Cream (50ml)',
      originalPrice: ' 1500',
      discountedPrice: ' 1199',
      category: 'Moisturizing Cream',
      badge: 'ON SALE',
    },
  ],
  normal: [
    {
      id: 'normal-1',
      name: 'Shiseido Perfect Whip Cleansing (120ml)',
      originalPrice: ' 1200',
      discountedPrice: ' 990',
      category: 'Moisturizing Cream',
      badge: 'ON SALE',
    },
    {
      id: 'normal-2',
      name: 'Deep Moisturizing Cream (50ml)',
      originalPrice: ' 1500',
      discountedPrice: ' 1199',
      category: 'Moisturizing Cream',
      badge: 'ON SALE',
    },
    {
      id: 'normal-3',
      name: 'Night Recovery Cream (60ml)',
      originalPrice: ' 1800',
      discountedPrice: ' 1450',
      category: 'Moisturizing Cream',
      badge: 'ON SALE',
    },
    {
      id: 'normal-4',
      name: 'SPF 50 Moisturizing Cream (40ml)',
      originalPrice: ' 1650',
      discountedPrice: ' 1350',
      category: 'Moisturizing Cream',
      badge: 'ON SALE',
    },
    {
      id: 'normal-5',
      name: 'Lightweight Day Cream (75ml)',
      originalPrice: ' 1400',
      discountedPrice: ' 1100',
      category: 'Moisturizing Cream',
      badge: 'ON SALE',
    },
  ],
};

const categories = [
  { label: 'Oily', value: 'oily' },
  { label: 'Dry', value: 'dry' },
  { label: 'Combination', value: 'combination' },
  { label: 'Sensitive', value: 'sensitive' },
  { label: 'Normal', value: 'normal' },
];

export default function SkinType() {
  const [mounted, setMounted] = useState(false);
  const [activeCategory, setActiveCategory] = useState('oily');
  const [displayedProducts, setDisplayedProducts] = useState(allProducts.oily);
  const addToCart = useCartStore(state => state.addToCart);

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
    <section className="px-6 py-15 bg-gray-50 rounded-3xl">
      <div className=" mb-15">
        <h2 className="text-4xl font-bold text-gray-800">SHOP BY SKIN TYPE</h2>
      </div>

      {/* Category Filter Tabs */}
      <div className="flex justify-center gap-3 mb-8 flex-wrap ">
        {categories.map(category => (
          <button
            key={category.value}
            onClick={() => handleCategoryChange(category.value)}
            className={`px-6 py-2 rounded-full font-semibold text-sm transition-all duration-300 cursor-pointer ${
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

              <div className="w-full h-48 bg-gray-100 flex items-center justify-center relative overflow-hidden">
                <span className="text-gray-400 text-sm">Product Image</span>

                {/*  SALE BADGE */}
                <span className="absolute top-3 left-3 bg-pink-600 text-white text-xs font-bold px-3 py-1 rounded-full transition-all duration-300 group-hover:opacity-0 group-hover:scale-90">
                  {product.badge}
                </span>

                {/* ➕ ADD BUTTON */}
                <button
                  onClick={() => addToCart(product)}
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
    </section>
  );
}

//  আসল সমস্যা এখানে

// তোমার data এ এইটা দেখো

//  Same ID multiple times ChatGpt...!
