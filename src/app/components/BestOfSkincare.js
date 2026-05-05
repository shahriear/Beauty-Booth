'use client';

import Image from 'next/image';

const skinCareCategories = [
  {
    id: 1,
    name: 'Cleanser',
    description: 'Cleansing Products',
    img: '/images/Best-Skincare/Best-Skincare-1.webp',
  },
  {
    id: 2,
    name: 'Serum',
    description: 'Serum Collection',
    img: '/images/Best-Skincare/Best-Skincare-2.webp',
  },
  {
    id: 3,
    name: 'Sunscreen',
    description: 'Sun Protection',
    img: '/images/Best-Skincare/Best-Skincare-1.webp',
  },
];

export default function BestOfSkincare() {
  return (
    <section className="px-6 py-12">
      {/* Header */}
      <div className="flex items-center justify-between mb-8">
        <h2 className="text-3xl font-bold text-gray-800">BEST OF SKINCARE</h2>

        <a
          href="#"
          className="text-pink-600 font-semibold hover:text-pink-700 transition"
        >
          See All →
        </a>
      </div>

      {/* Container */}
      <div className="bg-gradient-to-r from-pink-300 to-pink-200 rounded-3xl p-10 md:p-12">
        <div className="flex items-center justify-center gap-12 flex-wrap">
          {skinCareCategories.map(category => (
            <div
              key={category.id}
              className="flex flex-col items-center gap-4 cursor-pointer group"
            >
              {/* Circle Image */}
              <div className="relative w-32 h-32 md:w-40 md:h-40 rounded-full bg-white shadow-lg overflow-hidden border-4 border-white transition-all duration-300 group-hover:scale-105 group-hover:shadow-2xl">
                <Image
                  src={category.img}
                  alt={category.name}
                  fill
                  sizes="160px"
                  className="object-cover"
                />
              </div>

              {/* Title */}
              <h3 className="text-lg md:text-xl font-bold text-gray-800 transition group-hover:text-red-600">
                {category.name}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
