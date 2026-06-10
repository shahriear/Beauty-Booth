'use client';

import dynamic from 'next/dynamic';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import SectionLoader from '@/app/components/ui/SectionLoader';

const Slider = dynamic(() => import('react-slick'), { ssr: false });

const sliderSettings = {
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 5,
  slidesToScroll: 1,
  swipeToSlide: true,
  arrows: true,
  responsive: [
    { breakpoint: 1280, settings: { slidesToShow: 4 } },
    { breakpoint: 1024, settings: { slidesToShow: 3 } },
    { breakpoint: 768, settings: { slidesToShow: 2 } },
    { breakpoint: 480, settings: { slidesToShow: 1 } },
  ],
};

function ProductCard({ product }) {
  return (
    <Link
      href={`/product/${product.slug}`}
      className="block bg-white rounded-lg overflow-hidden border border-gray-100 hover:shadow-md transition-shadow mx-2"
    >
      <div className="relative aspect-square bg-gray-50">
        <img src={product.image} alt={product.name} className="w-full h-full object-cover" />
        {product.isSale && (
          <span className="absolute top-2 left-2 bg-red-500 text-white text-[10px] font-bold px-2 py-0.5 rounded">
            ON SALE
          </span>
        )}
        {product.isBogo && (
          <span className="absolute top-2 left-2 bg-red-600 text-white text-[10px] font-bold px-2 py-0.5 rounded">
            BUY 1 GET 1
          </span>
        )}
        {product.newArrival && !product.isSale && (
          <span className="absolute top-2 left-2 bg-green-500 text-white text-[10px] font-bold px-2 py-0.5 rounded">
            NEW!
          </span>
        )}
      </div>
      <div className="p-3">
        <p className="text-[10px] text-gray-500 uppercase tracking-wide mb-1">{product.brand}</p>
        <h3 className="text-sm font-medium text-gray-900 line-clamp-2 mb-2 min-h-[2.5rem]">
          {product.name}
        </h3>
        <div className="flex items-baseline gap-2">
          <span className="text-base font-bold text-primary-pink">৳{product.price}</span>
          {product.originalPrice > product.price && (
            <span className="text-xs text-gray-400 line-through">৳{product.originalPrice}</span>
          )}
        </div>
      </div>
    </Link>
  );
}

export default function ProductCarousel({ title, products, loading, seeAllHref }) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (loading || !mounted) return <SectionLoader className="py-8" />;

  if (!products?.length) return null;

  return (
    <section className="py-8">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-bold text-gray-900">{title}</h2>
        {seeAllHref && (
          <Link href={seeAllHref} className="text-sm text-primary-pink font-medium hover:underline">
            see all →
          </Link>
        )}
      </div>
      <Slider {...sliderSettings}>
        {products.map(product => (
          <div key={product.id}>
            <ProductCard product={product} />
          </div>
        ))}
      </Slider>
    </section>
  );
}
