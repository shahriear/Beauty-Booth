'use client';

import Image from 'next/image';

const categories = [
  { name: 'Make up', img: '/images/Top-Categories/TopCategories-1.webp' },
  { name: 'Skin Care', img: '/images/Top-Categories/TopCategories-2.webp' },
  { name: 'Hair Care', img: '/images/Top-Categories/TopCategories-3.webp' },
  {
    name: 'Bath & Body Care',
    img: '/images/Top-Categories/TopCategories-4.webp',
  },
  {
    name: 'Mom & Baby Care',
    img: '/images/Top-Categories/TopCategories-5.webp',
  },
  { name: 'Accessories', img: '/images/Top-Categories/TopCategories-6.webp' },
];

export default function TopCategories() {
  return (
    <section className="px-6 py-12">
      {/* Header */}
      <div className="flex items-center justify-between mb-8">
        <h2 className="text-3xl font-bold text-gray-800">TOP CATEGORIES</h2>

        <button className="text-purple-600 hover:text-purple-700 font-semibold text-sm transition">
          See All →
        </button>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
        {categories.map(category => (
          <div
            key={category.name}
            className="flex flex-col items-center gap-4 p-4 rounded-xl bg-white shadow-sm hover:shadow-md transition-all duration-300 cursor-pointer group"
          >
            {/* Circle Image */}
            <div className="relative w-40 h-40 rounded-full overflow-hidden bg-gradient-to-br from-pink-200 to-purple-200 p-[5px] group-hover:scale-105 transition duration-300">
              <div className="relative w-full h-full rounded-full overflow-hidden bg-white">
                <Image
                  src={category.img}
                  alt={category.name}
                  fill
                  sizes="160px"
                  className="object-cover"
                />
              </div>
            </div>

            {/* Text */}
            <p className="text-sm font-semibold text-gray-800 text-center group-hover:text-purple-600 transition">
              {category.name}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
