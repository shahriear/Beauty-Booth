'use client';

import Image from 'next/image';
import { useState, useEffect } from 'react';

const beautyCategories = [
  {
    id: 1,
    name: 'Face',
    description: 'Face Care Collection',
    img: 'images/TOP-3-OF-BEAUTY/beauty-1.webp',
  },
  {
    id: 2,
    name: 'Eyes',
    description: 'Eye Care Collection',
    img: 'images/TOP-3-OF-BEAUTY/beauty-2.webp',
  },
  {
    id: 3,
    name: 'Lips',
    description: 'Lip Care Collection',
    img: 'images/TOP-3-OF-BEAUTY/beauty-3.webp',
  },
];

export default function Top3OfBeauty() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <section className="px-6 py-12">
      <div className="flex items-center justify-between mb-8">
        <h2 className="text-3xl font-bold text-gray-800">TOP 3 OF BEAUTY</h2>
        <a
          href="#"
          className="text-pink-600 font-semibold hover:text-pink-700 transition"
        >
          See All →
        </a>
      </div>

      {/* Beauty Categories with Circular Images */}
      <div className="bg-gradient-to-r from-orange-100 to-pink-100 rounded-2xl p-12">
        <div className="flex items-center justify-center gap-12 flex-wrap">
          {beautyCategories.map(category => (
            <div
              key={category.id}
              className="flex flex-col items-center gap-4 cursor-pointer group"
            >
              {/* Circular Image */}
              <div className="w-32 h-32 md:w-40 md:h-40 rounded-full bg-white shadow-lg overflow-hidden group-hover:shadow-xl group-hover:scale-105 transition duration-300 border-4 border-white relative">
                <Image
                  src={`/${category.img}`}
                  alt={category.name}
                  fill
                  sizes="160px"
                  className="object-cover"
                />
              </div>

              {/* Category Name */}
              <h3 className="text-lg md:text-xl font-bold text-gray-800 group-hover:text-pink-600 transition">
                {category.name}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
