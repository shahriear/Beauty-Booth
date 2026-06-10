'use client';

import Link from 'next/link';
import { ShoppingCart, Heart, Star } from 'lucide-react';
import { useState, useCallback } from 'react';
import toast from 'react-hot-toast';
import useCartStore from '@/app/components/store/useCartStore';

export default function ProductGrid({ products, isLoading }) {
  const [hoveredId, setHoveredId] = useState(null);
  const addToCart = useCartStore(state => state.addToCart);
  const [wishlist, setWishlist] = useState(new Set());

  const handleAddToCart = useCallback(
    (product, e) => {
      e.stopPropagation();
      e.preventDefault();
      // addToCart({
      //   id: product.id,
      //   name: product.name,
      //   price: product.price,
      //   image: product.image,
      //   quantity: 1,
      // });
      addToCart({
        id: product.id,
        name: product.name,
        category: product.category,
        price: product.price,
        originalPrice: product.originalPrice,
        discountedPrice: product.price,
        image: product.image,
        quantity: 1,
      });
    
    },
    [addToCart],
  );

  const toggleWishlist = useCallback((productId, e) => {
    e.stopPropagation();
    e.preventDefault();
    setWishlist(prev => {
      const newSet = new Set(prev);
      if (newSet.has(productId)) {
        newSet.delete(productId);
        Promise.resolve().then(() => {
          toast.success('Removed from wishlist');
        });
      } else {
        newSet.add(productId);
        Promise.resolve().then(() => {
          toast.success('Added to wishlist');
        });
      }
      return newSet;
    });
  }, []);

  if (isLoading) {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
        {[...Array(6)].map((_, i) => (
          <div key={i} className="animate-pulse bg-gray-200 rounded-lg h-96" />
        ))}
      </div>
    );
  }

  if (products.length === 0) {
    return (
      <div className="col-span-full py-16 text-center">
        <p className="text-xl text-gray-500">
          No products found. Try adjusting your filters.
        </p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-5">
      {products.map(product => (
        <div
          key={product.id}
          onMouseEnter={() => setHoveredId(product.id)}
          onMouseLeave={() => setHoveredId(null)}
          className="group bg-white rounded-lg shadow-sm hover:shadow-lg transition-shadow duration-300 overflow-hidden"
        >
          {/* Image Container */}
          <Link
            href={`/product/${product.slug}`}
            className="relative block w-full h-64 bg-gray-100 overflow-hidden"
          >
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
            />

            {/* Badge */}
            <div className="absolute top-3 right-3 flex gap-2">
              {product.isSale && (
                <div className="bg-red-500 text-white px-2 py-1 rounded text-xs font-bold">
                  ON SALE
                </div>
              )}
              {product.discount > 0 && (
                <div className="bg-primary-pink text-white px-2 py-1 rounded text-xs font-bold">
                  -{product.discount}%
                </div>
              )}
            </div>

            {/* Wishlist Button */}
            <button
              onClick={e => toggleWishlist(product.id, e)}
              className={`absolute top-3 left-3 p-2 rounded-full transition ${
                wishlist.has(product.id)
                  ? 'bg-primary-pink text-white'
                  : 'bg-white text-gray-600 hover:text-primary-pink'
              }`}
            >
              <Heart
                size={18}
                fill={wishlist.has(product.id) ? 'currentColor' : 'none'}
              />
            </button>

            {/* Stock Status */}
            {!product.inStock && (
              <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
                <span className="text-white font-bold text-lg">
                  Out of Stock
                </span>
              </div>
            )}
          </Link>

          {/* Content */}
          <div className="p-4">
            {/* Brand */}
            <p className="text-xs text-gray-500 uppercase tracking-wide mb-1">
              {product.brand}
            </p>

            {/* Product Name */}
            <Link href={`/product/${product.slug}`}>
              <h3 className="text-sm font-semibold text-gray-900 line-clamp-2 mb-2 group-hover:text-primary-pink transition">
                {product.name}
              </h3>
            </Link>

            {/* Rating */}
            <div className="flex items-center gap-2 mb-3">
              <div className="flex items-center gap-0.5">
                <Star size={14} className="fill-yellow-400 text-yellow-400" />
                <span className="text-xs font-medium text-gray-700">
                  {product.rating}
                </span>
              </div>
              <span className="text-xs text-gray-500">({product.reviews})</span>
            </div>

            {/* Price */}
            <div className="flex items-baseline gap-2 mb-4">
              <span className="text-lg font-bold text-gray-900">
                ৳{product.price}
              </span>
              {product.originalPrice > product.price && (
                <span className="text-sm text-gray-400 line-through">
                  ৳{product.originalPrice}
                </span>
              )}
            </div>

            {/* Add to Cart Button */}
            <button
              onClick={e => handleAddToCart(product, e)}
              disabled={!product.inStock}
              className={`w-full py-2 rounded-lg font-medium flex items-center justify-center gap-2 transition ${
                product.inStock
                  ? 'bg-primary-pink text-white hover:bg-opacity-90'
                  : 'bg-gray-300 text-gray-600 cursor-not-allowed'
              }`}
            >
              <ShoppingCart size={18} />
              <span>{product.inStock ? 'Add to Cart' : 'Out of Stock'}</span>
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}
