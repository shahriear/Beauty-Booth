// FooterHomeDescription
'use client';

import { useState } from 'react';
import Link from 'next/link';
import { ChevronDown } from 'lucide-react';

export default function SeoContentSection() {
  const [showMore, setShowMore] = useState(false);

  const popularSearches = [
    'Skin Care',
    'Serums & Treatments',
    'Moisturizers',
    'Cleansers',
    'Body Care',
    'Makeup',
    'Cerave',
    'Cosrx',
    'Beauty of Joseon',
    'Lipstick',
    'Toner',
    'Retinol',
    'Face Wash',
    'Shampoo',
    'Sunscreen',
    'cosrx',
    'lip tint',
    'cerave',
    'tint',
    'trackThrownErrorInNavigation',
    'shampoo',
    'retinol',
    'beauty of joseon',
    'lipstick',
    'ordinary',
    'serum',
    'the ordinary',
    'face wash',
    'cathy doll',
    'skin care',
  ];

  return (
    <section className="w-full bg-[#f3f3f3  pt-14">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-10">
        {/* TITLE */}
        <h2 className="text-2xl font-bold text-black leading-snug">
          What Kinds of Beauty Products and Cosmetic Items Does Beauty Booth
          Offer?
        </h2>

        {/* DESCRIPTION */}
        <div className="mt-5 space-y-4 text-gray-700 text-sm sm:text-base leading-7">
          <p>
            Beauty Booth is Bangladesh’s leading online beauty and skincare
            destination. We offer a complete range of products that cater to all
            your
            {'  '}
            <Link href="/" className="text-pink-600 duration-300">
              skincare
            </Link>{' '}
            concerns and makeup needs. We provide solutions for every skin type,
            age group, and lifestyle, so that you do not have to worry about
            anything.
            <br /> Our versatile product line-up offers everything, from
            essential skincare to luxurious {'  '}
            <Link href="/" className="text-pink-600 duration-300">
              makeup
            </Link>{' '}
            men’s grooming solutions. Beauty Booth ensures that you never have
            to compromise on quality, authenticity, or variety.
          </p>

          <p>
            Our versatile product line-up offers everything from essential
            skincare to luxurious makeup, gentle baby care to men’s grooming
            solutions.
          </p>

          {showMore && (
            <>
              <p>
                Whether you are searching for authentic Korean skincare,
                dermatologist-approved products, or trending beauty items, we
                ensure quality, authenticity, and affordability.
              </p>

              <p>
                Shop premium brands, discover exclusive collections, and enjoy a
                seamless online shopping experience with fast delivery across
                Bangladesh.
              </p>
            </>
          )}
        </div>

        {/* READ MORE */}
        <button
          onClick={() => setShowMore(!showMore)}
          className="mt-5 inline-flex items-center gap-2 text-pink-600 font-bold hover:gap-3 duration-300"
        >
          {showMore ? 'Read Less' : 'Read More'}

          <ChevronDown
            size={18}
            className={`duration-300 ${showMore ? 'rotate-180' : ''}`}
          />
        </button>

        {/* POPULAR SEARCHES */}
        <div className="mt-10 border-b border-gray-300 pb-5">
          <h3 className="text-xl font-semibold text-black mb-4">
            Popular Searches
          </h3>

          <div className="flex flex-wrap gap-x-0 gap-y-0 text-[14px] text-gray-500 leading-6">
            {popularSearches.map((item, index) => (
              <div key={index} className="flex items-center">
                <Link href="/" className="hover:text-pink-600 duration-300">
                  {item}
                </Link>

                {index !== popularSearches.length - 1 && (
                  <span className="mx-2 text-gray-400">|</span>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
