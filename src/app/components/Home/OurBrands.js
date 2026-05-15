'use client';

import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';

const brands = [
  {
    id: 1,
    name: 'Alpecin',
    image: '/images/Our-Brands/Our-Brands-1.png',
  },
  {
    id: 2,
    name: 'Amlactin',
    image: '/images/Our-Brands/Our-Brands-2.png',
  },
  {
    id: 3,
    name: 'Aveeno',
    image: '/images/Our-Brands/Our-Brands-3.png',
  },
  {
    id: 4,
    name: 'Boots',
    image: '/images/Our-Brands/Our-Brands-4.png',
  },
  {
    id: 5,
    name: 'Cerave',
    image: '/images/Our-Brands/Our-Brands-5.jpg',
  },
  {
    id: 6,
    name: 'Cosrx',
    image: '/images/Our-Brands/Our-Brands-6.jpg',
  },
];

export default function OurBrands() {
  return (
    <section className="mt-5 mb-15">
      {/* HEADER */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-x-2">
          <h2 className="text-lg sm:text-2xl font-bold text-black capitalize">
            Our Brands
          </h2>
        </div>

        <div
          
          className="flex items-center gap-x-1 border border-gray-200 bg-white hover:bg-gray-100 duration-300 px-3 py-1.5 rounded-full"
        >
          <span className="text-xs sm:text-base text-black">See all</span>

          <ArrowRight size={14} className="hidden sm:block" />
        </div>
      </div>

      {/* BRANDS GRID */}
      <div className="grid grid-cols-3 md:grid-cols-6 gap-2 mt-4">
        {brands.map(brand => (
          <div
           
            key={brand.id}
            className="col-span-1 flex items-center justify-center h-[60px] sm:h-20 lg:h-[100px] p-2.5 border border-gray-200 rounded-xl overflow-hidden bg-white hover:border-cyan-400 duration-300 cursor-pointer"
          >
            <Image
              src={brand.image}
              alt={brand.name}
              width={120}
              height={60}
              className="object-contain w-full h-full"
            />
          </div>
        ))}
      </div>
    </section>
  );
}
