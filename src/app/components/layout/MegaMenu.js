'use client';

import Image from "next/image";

const megaMenuData = {
  'Skin Care': {
    columns: [
      {
        title: 'Serums & Treatments',
        image: '/images/skin-care2.webp',
        items: [
          'Serum',
          'Ampoules',
          'Essences',
          'Blemish Treatments',
          'Essential oil',
        ],
      },
      {
        title: 'Moisturizers',
        image: '/images/skin-care2.webp',
        items: [
          'Moisturizing Cream',
          'Face Oil',
          'Soothing Gel',
          'Night Cream',
          'Whitening Cream',
        ],
      },
      {
        title: 'Cleansers',
        image: '/images/skin-care.webp',
        items: [
          'Facial Washes',
          'Makeup Removers',
          'Cleansing Bars',
          'Toner Pads',
        ],
      },
      {
        title: 'Face Mask',
        image: '/images/skin-care2.webp',
        items: ['Face Scrub', 'Sheet Mask', 'Pimple Patches', 'Clay Masks'],
      },
      {
        title: 'Lip Care',
        image: '/images/skin-care.webp',
        items: ['Lip Balm', 'Lip Oil', 'Lip Mask'],
      },
      {
        title: 'Eyes',
        image: '/images/skin-care2.webp',
        items: ['Eye Cream', 'Eye Gel'],
      },
    ],
  },
  'Hair Care': {
    columns: [
      {
        title: 'Shampoo & Conditioner',
        image: '/images/skin-care2.webp',
        items: [
          'Clarifying Shampoo',
          'Moisturizing Conditioner',
          'Anti-Dandruff',
          'Color-Safe',
        ],
      },
      {
        title: 'Hair Treatments',
        image: '/images/skin-care.webp',
        items: [
          'Hair Mask',
          'Hair Oil',
          'Leave-In Conditioner',
          'Scalp Treatment',
        ],
      },
      {
        title: 'Styling Products',
        image: '/images/skin-care2.webp',
        items: ['Hair Gel', 'Hairspray', 'Serum', 'Mousse'],
      },
    ],
  },
  'Make Up': {
    columns: [
      {
        title: 'Face',
        image: '/images/skin-care.webp',
        items: ['Foundation', 'Concealer', 'Powder', 'Blush', 'Highlighter'],
      },
      {
        title: 'Eyes',
        image: '/images/skin-care2.webp',
        items: ['Eyeshadow', 'Eyeliner', 'Mascara', 'Eyebrow'],
      },
      {
        title: 'Lips',
        image: '/images/skin-care.webp',
        items: ['Lipstick', 'Lip Gloss', 'Lip Liner'],
      },
    ],
  },
  Accessories: {
    columns: [
      {
        title: 'Brushes & Tools',
        image: '/images/skin-care2.webp',
        items: [
          'Face Brushes',
          'Makeup Sponges',
          'Applicators',
          'Beauty Blender',
        ],
      },
      {
        title: 'Storage & Cases',
        image: '/images/skin-care.webp',
        items: ['Makeup Case', 'Organizer', 'Mirror', 'Light Mirror'],
      },
      {
        title: 'Other Accessories',
        image: '/images/skin-care2.webp',
        items: ['Face Roller', 'Hair Clips', 'Headband', 'Towel'],
      },
    ],
  },
  'Bath & Body Care': {
    columns: [
      {
        title: 'Body Wash & Soap',
        image: '/images/skin-care.webp',
        items: ['Body Wash', 'Shower Gel', 'Soap Bar', 'Bubble Bath'],
      },
      {
        title: 'Body Lotion',
        image: '/images/skin-care2.webp',
        items: [
          'Moisturizing Lotion',
          'Body Butter',
          'Hand Cream',
          'Feet Cream',
        ],
      },
      {
        title: 'Scrubs & Exfoliants',
        image: '/images/skin-care.webp',
        items: ['Body Scrub', 'Salt Scrub', 'Sugar Scrub', 'Pumice Stone'],
      },
    ],
  },
  'Mom & Baby Care': {
    columns: [
      {
        title: 'Baby Care',
        image: '/images/skin-care.webp',
        items: [
          'Baby Lotion',
          'Baby Shampoo',
          'Diaper Cream',
          'Baby Powder',
          'Baby Oil',
        ],
      },
      {
        title: 'Mother Care',
        image: '/images/skin-care2.webp',
        items: [
          'Stretch Mark Cream',
          'Nipple Cream',
          'Breast Care Products',
          'Post Pregnancy Care',
        ],
      },
    ],
  },
  "Men's Care": {
    columns: [
      {
        title: 'Shaving & Beard',
        image: '/images/skin-care2.webp',
        items: [
          'Shaving Foam',
          'Razors',
          'Beard Oil',
          'Beard Balm',
          'After Shave',
        ],
      },
      {
        title: 'Men Skin Care',
        image: '/images/skin-care.webp',
        items: ['Face Wash', 'Moisturizer', 'Acne Treatment', 'Sunscreen'],
      },
    ],
  },
};

export default function MegaMenu({ category, isOpen }) {
  const data = megaMenuData[category];

  if (!data) return null;

  return (
    <div
      className={`w-full bg-white shadow-2xl border-t-2 border-purple-100 transition-all duration-300 ease-in-out origin-top
        ${isOpen ? 'opacity-100 visible translate-y-0 pointer-events-auto' : 'opacity-0 invisible -translate-y-2 pointer-events-none'}
      `}
    >
      <div className="mx-auto px-6 py-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {data.columns.map((column, idx) => (
            <div key={idx}>
              {/* <h3 className="font-semibold text-gray-900 text-sm mb-4 flex items-center gap-2">
                <span className="w-6 h-6 rounded-full bg-gradient-to-br from-pink-400 to-purple-400 flex items-center justify-center text-white text-xs flex-shrink-0">
                  ✓
                </span>
                {column.title}
              </h3> */}
              {/* TITLE WITH IMAGE ICON */}
              <h3 className="font-semibold text-gray-900 text-sm mb-4 flex items-center gap-">
                {column.image ? (
                  <Image
                    src={column.image}
                    alt={column.title}
                    width={32}
                    height={32}
                    className="rounded-md  object-cover"
                  />
                ) : null}

                {column.title}
              </h3>
              <ul className="space-y-2">
                {column.items.map((item, itemIdx) => (
                  <li key={itemIdx}>
                    <a
                      href="#"
                      className="text-gray-600 text-sm hover:text-red-600 hover:font-medium transition-all "
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
