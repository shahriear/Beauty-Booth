'use client';

import { useState } from 'react';

export default function Header() {
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <header className="bg-white shadow-md py-4 px-6">
      <div className="flex items-center justify-between gap-6">
        {/* Logo */}
        <div className="flex-shrink-0">
          <div className="text-2xl font-bold text-purple-600">Beauty Booth</div>
        </div>

        {/* Search Bar */}
        <div className="flex-grow max-w-md">
          <div className="flex items-center bg-gray-100 rounded-full px-4 py-2">
            <input
              type="text"
              placeholder="What are you looking for?"
              value={searchQuery}
              onChange={e => setSearchQuery(e.target.value)}
              className="bg-transparent flex-grow outline-none text-sm"
            />
            <button className="bg-pink-500 hover:bg-pink-600 text-white p-2 rounded-full transition">
              🔍
            </button>
          </div>
        </div>

        {/* Right Side - Account & Cart */}
        <div className="flex items-center gap-6">
          <button className="flex flex-col items-center text-gray-700 hover:text-purple-600 transition">
            <span className="text-xl">👤</span>
            <span className="text-xs">Account</span>
          </button>
          <button className="relative flex flex-col items-center text-gray-700 hover:text-purple-600 transition">
            <span className="text-xl">🛒</span>
            <span className="text-xs">Cart</span>
            <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
              2
            </span>
          </button>
        </div>
      </div>
    </header>
  );
}
