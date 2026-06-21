'use client';

import Image from 'next/image';
import Link from 'next/link';
import SectionLoader from '@/app/components/ui/SectionLoader';
import { useApi } from '@/hooks/useApi';
import { getBestOfSkincare } from '@/services/categoryService';

/* CACHE */
let skincareCache = null;

export default function BestOfSkincare() {
  const { data: skinCareCategories, loading } = useApi(async () => {
    if (skincareCache) return skincareCache;

    const res = await getBestOfSkincare();
    skincareCache = res;

    return res;
  }, []);

  const categories = skinCareCategories || [];

  return (
    <section className="px-3 md:px-6 py-8 md:py-12">
      <div className="flex items-center justify-between mb-8">
        <h2 className="text-3xl font-bold text-gray-800">BEST OF SKINCARE</h2>

        <a
          href="#"
          className="text-pink-600 font-semibold hover:text-pink-700 transition"
        >
          See All →
        </a>
      </div>

      <div className="bg-gradient-to-r from-pink-300 to-pink-200 rounded-3xl p-10 md:p-12">
        <div className="flex items-center justify-center gap-12 flex-wrap">
          {loading && !skincareCache
            ? Array.from({ length: 4 }).map((_, i) => (
                <div
                  key={i}
                  className="w-40 h-40 rounded-full bg-white/50 animate-pulse"
                />
              ))
            : categories.map((category, index) => (
                <Link
                  key={category.id}
                  href={`/${category.slug}?subcategory=${encodeURIComponent(
                    category.subcategory,
                  )}`}
                  className="flex flex-col items-center gap-4 cursor-pointer group"
                >
                  <div className="relative w-32 h-32 md:w-40 md:h-40 rounded-full bg-white shadow-lg overflow-hidden border-4 border-white transition-all duration-300 group-hover:scale-105 group-hover:shadow-2xl">
                    <Image
                      src={category.img}
                      alt={category.name}
                      fill
                      sizes="160px"
                      priority={index === 0}
                      className="object-cover"
                    />
                  </div>

                  <h3 className="text-lg md:text-xl font-bold text-gray-800 transition group-hover:text-red-600">
                    {category.name}
                  </h3>
                </Link>
              ))}
        </div>
      </div>
    </section>
  );
}
