'use client';

import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

export default function SortDropdown({ onSortChange, currentSort }) {
  const [isOpen, setIsOpen] = useState(false);

  const sortOptions = [
    { value: 'best-sale', label: 'Best Sale' },
    { value: 'new-arrival', label: 'New Arrival' },
    { value: 'price-high-low', label: 'Price High to Low' },
    { value: 'price-low-high', label: 'Price Low to High' },
  ];

  const currentLabel =
    sortOptions.find(opt => opt.value === currentSort)?.label || 'Best Sale';

  const handleSelect = option => {
    onSortChange(option.value);
    setIsOpen(false);
  };

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-lg bg-white text-gray-700 hover:border-primary-pink transition"
      >
        <span className="font-medium">Sort: {currentLabel}</span>
        <ChevronDown
          size={18}
          className={`transition ${isOpen ? 'rotate-180' : ''}`}
        />
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-48 bg-white border border-gray-300 rounded-lg shadow-lg z-10">
          {sortOptions.map(option => (
            <button
              key={option.value}
              onClick={() => handleSelect(option)}
              className={`w-full text-left px-4 py-3 hover:bg-gray-100 transition first:rounded-t-lg last:rounded-b-lg ${
                currentSort === option.value
                  ? 'bg-primary-pink bg-opacity-10 text-primary-pink font-medium'
                  : ''
              }`}
            >
              {option.label}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
