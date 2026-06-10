'use client';

import Image from 'next/image';

const PLACEHOLDER = '/images/No-Product-Image.png';

export default function CategoryBanner({
  categoryData,
  onSubcategoryClick,
  activeSubcategory,
}) {
  return (
    <div className="mb-8">
      {categoryData?.banner ? (
        <div className="bg-linear-to-r from-primary-pink to-purple-600 rounded-lg p-8 md:p-12 text-white">
          <h1 className="text-4xl md:text-5xl font-bold mb-3">{categoryData.name}</h1>
          <p className="text-lg opacity-90 max-w-2xl">{categoryData.description}</p>
        </div>
      ) : (
        <div className="bg-white rounded-lg p-6 shadow-sm">
          <h1 className="text-3xl font-bold text-gray-900">{categoryData?.name}</h1>
          <p className="text-gray-600 mt-2">{categoryData?.description}</p>
        </div>
      )}

      {categoryData?.subcategories?.length > 0 && (
        <div className="mt-6 flex flex-wrap gap-4 justify-center">
          {categoryData.subcategories.map(sub => (
            <button
              key={sub}
              onClick={() => onSubcategoryClick(sub)}
              className={`flex flex-col items-center gap-2 p-3 rounded-xl transition-all ${
                activeSubcategory === sub
                  ? 'bg-primary-pink text-white shadow-lg scale-105'
                  : 'bg-white hover:shadow-md text-gray-700'
              }`}
            >
              <div className="relative w-16 h-16 rounded-full overflow-hidden bg-gray-100">
                <Image src={PLACEHOLDER} alt={sub} fill sizes="64px" className="object-cover" />
              </div>
              <span className="text-xs font-medium">{sub}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
