'use client';

import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

export default function Filters({
  allProducts,
  onFilterChange,
  activeFilters,
}) {
  const [priceRange, setPriceRange] = useState([0, 10000]);
  const [expandedSections, setExpandedSections] = useState({
    price: true,
    category: true,
    brand: true,
  });
  const [showMoreCategories, setShowMoreCategories] = useState(false);
  const [showMoreBrands, setShowMoreBrands] = useState(false);

  // Get unique categories and brands with product counts
  const getCategoryCounts = () => {
    const counts = {};
    allProducts.forEach(product => {
      counts[product.category] = (counts[product.category] || 0) + 1;
    });
    return counts;
  };

  const getBrandCounts = () => {
    const counts = {};
    allProducts.forEach(product => {
      counts[product.brand] = (counts[product.brand] || 0) + 1;
    });
    return counts;
  };

  const categoryCounts = getCategoryCounts();
  const brandCounts = getBrandCounts();
  const uniqueCategories = Object.keys(categoryCounts).sort();
  const uniqueBrands = Object.keys(brandCounts).sort();

  const toggleSection = section => {
    setExpandedSections(prev => ({
      ...prev,
      [section]: !prev[section],
    }));
  };

  const handlePriceChange = (index, value) => {
    const newRange = [...priceRange];
    newRange[index] = parseInt(value);
    if (newRange[0] <= newRange[1]) {
      setPriceRange(newRange);
      onFilterChange({
        ...activeFilters,
        priceRange: newRange,
      });
    }
  };

  const handleCategoryChange = category => {
    const currentCategories = activeFilters.categories || [];
    const updated = currentCategories.includes(category)
      ? currentCategories.filter(c => c !== category)
      : [...currentCategories, category];

    onFilterChange({
      ...activeFilters,
      categories: updated,
    });
  };

  const handleBrandChange = brand => {
    const currentBrands = activeFilters.brands || [];
    const updated = currentBrands.includes(brand)
      ? currentBrands.filter(b => b !== brand)
      : [...currentBrands, brand];

    onFilterChange({
      ...activeFilters,
      brands: updated,
    });
  };

  return (
    <div className="bg-white rounded-lg shadow-sm p-5 sticky top-24">
      {/* Price Filter */}
      <div className="mb-6">
        <button
          onClick={() => toggleSection('price')}
          className="flex items-center justify-between w-full mb-3 font-semibold text-gray-900 hover:text-primary-pink transition"
        >
          <span>Price</span>
          {expandedSections.price ? (
            <ChevronUp size={20} />
          ) : (
            <ChevronDown size={20} />
          )}
        </button>

        {expandedSections.price && (
          <div className="space-y-4">
            <div className="space-y-2">
              <label className="block text-sm text-gray-600">
                Min: ৳{priceRange[0]}
              </label>
              <input
                type="range"
                min="0"
                max="10000"
                value={priceRange[0]}
                onChange={e => handlePriceChange(0, e.target.value)}
                className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
              />
            </div>

            <div className="space-y-2">
              <label className="block text-sm text-gray-600">
                Max: ৳{priceRange[1]}
              </label>
              <input
                type="range"
                min="0"
                max="10000"
                value={priceRange[1]}
                onChange={e => handlePriceChange(1, e.target.value)}
                className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
              />
            </div>

            <div className="pt-2 border-t border-gray-200 text-sm font-medium text-primary-pink">
              ৳{priceRange[0]} - ৳{priceRange[1]}
            </div>
          </div>
        )}
      </div>

      <div className="border-t border-gray-200" />

      {/* Category Filter */}
      <div className="py-6">
        <button
          onClick={() => toggleSection('category')}
          className="flex items-center justify-between w-full mb-3 font-semibold text-gray-900 hover:text-primary-pink transition"
        >
          <span>Category</span>
          {expandedSections.category ? (
            <ChevronUp size={20} />
          ) : (
            <ChevronDown size={20} />
          )}
        </button>

        {expandedSections.category && (
          <div className="space-y-2">
            {uniqueCategories
              .slice(0, showMoreCategories ? undefined : 5)
              .map(category => (
                <label
                  key={category}
                  className="flex items-center gap-3 cursor-pointer group"
                >
                  <input
                    type="checkbox"
                    checked={
                      activeFilters.categories?.includes(category) || false
                    }
                    onChange={() => handleCategoryChange(category)}
                    className="w-4 h-4 rounded cursor-pointer accent-primary-pink"
                  />
                  <span className="text-sm text-gray-700 group-hover:text-gray-900">
                    {category}
                  </span>
                  <span className="ml-auto text-xs text-gray-500">
                    ({categoryCounts[category]})
                  </span>
                </label>
              ))}

            {uniqueCategories.length > 5 && (
              <button
                onClick={() => setShowMoreCategories(!showMoreCategories)}
                className="text-primary-pink text-sm font-medium hover:underline mt-2"
              >
                {showMoreCategories
                  ? 'Show Less'
                  : `Show More (${uniqueCategories.length - 5}+)`}
              </button>
            )}
          </div>
        )}
      </div>

      <div className="border-t border-gray-200" />

      {/* Brand Filter */}
      <div className="py-6">
        <button
          onClick={() => toggleSection('brand')}
          className="flex items-center justify-between w-full mb-3 font-semibold text-gray-900 hover:text-primary-pink transition"
        >
          <span>Brand</span>
          {expandedSections.brand ? (
            <ChevronUp size={20} />
          ) : (
            <ChevronDown size={20} />
          )}
        </button>

        {expandedSections.brand && (
          <div className="space-y-2">
            {uniqueBrands
              .slice(0, showMoreBrands ? undefined : 6)
              .map(brand => (
                <label
                  key={brand}
                  className="flex items-center gap-3 cursor-pointer group"
                >
                  <input
                    type="checkbox"
                    checked={activeFilters.brands?.includes(brand) || false}
                    onChange={() => handleBrandChange(brand)}
                    className="w-4 h-4 rounded cursor-pointer accent-primary-pink"
                  />
                  <span className="text-sm text-gray-700 group-hover:text-gray-900">
                    {brand}
                  </span>
                  <span className="ml-auto text-xs text-gray-500">
                    ({brandCounts[brand]})
                  </span>
                </label>
              ))}

            {uniqueBrands.length > 6 && (
              <button
                onClick={() => setShowMoreBrands(!showMoreBrands)}
                className="text-primary-pink text-sm font-medium hover:underline mt-2"
              >
                {showMoreBrands
                  ? 'Show Less'
                  : `Show More (${uniqueBrands.length - 6}+)`}
              </button>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
