'use client';

import { useEffect, useState } from 'react';

import CartDrawer from '../ui/CartDrawer';
import SearchOverlay from '../ui/search/SearchOverlay';

import useCartStore from '../store/useCartStore';

import { Search, X } from 'lucide-react';

export default function Header() {
  const [searchQuery, setSearchQuery] = useState('');
  const [cartOpen, setCartOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);

  const cartItems = useCartStore(state => state.cartItems);

  // ESC close
  useEffect(() => {
    function handleEsc(e) {
      if (e.key === 'Escape') {
        setSearchOpen(false);
      }
    }

    window.addEventListener('keydown', handleEsc);

    return () => {
      window.removeEventListener('keydown', handleEsc);
    };
  }, []);

  return (
    <>
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between gap-6">
            {/* Logo */}
            <div className="flex-shrink-0">
              <h1 className="text-2xl font-bold">Beauty Booth</h1>
            </div>

            {/* Search */}
            <div className="flex-1 max-w-2xl relative z-50">
              <div
                className={`
                  flex items-center gap-3
                  bg-white
                  border
                  rounded-full
                  px-5 py-2
                  transition-all duration-200
                  ${
                    searchOpen
                      ? 'border-black shadow-xl'
                      : 'border-gray-300 hover:border-gray-500'
                  }
                `}
              >
                <input
                  type="text"
                  placeholder="Search products..."
                  value={searchQuery}
                  onChange={e => setSearchQuery(e.target.value)}
                  onFocus={() => setSearchOpen(true)}
                  className="flex-1 bg-transparent outline-none text-[15px]"
                />

                {/* Clear */}
                {searchQuery && (
                  <button
                    onClick={() => {
                      setSearchQuery('');
                      setSearchOpen(false);
                    }}
                    className="text-gray-500 hover:text-black transition"
                  >
                    <X size={18} />
                  </button>
                )}

                {/* Search Icon */}
                <button className="bg-pink-500 hover:bg-pink-600 text-white p-2 rounded-full transition">
                  <Search size={18} />
                </button>
              </div>
            </div>

            {/* Right */}
            <div className="flex items-center gap-6">
              {/* Account */}
              <button className="flex flex-col items-center text-gray-700 hover:text-pink-500 transition">
                <span className="text-xl">👤</span>
                <span className="text-xs">Account</span>
              </button>

              {/* Cart */}
              <button
                onClick={() => setCartOpen(true)}
                className="relative flex flex-col items-center text-gray-700 hover:text-pink-500 transition"
              >
                <span className="text-xl">🛒</span>

                <span className="text-xs">Cart</span>

                <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                  {cartItems.reduce((acc, item) => acc + item.quantity, 0)}
                </span>
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Search Overlay */}
      <SearchOverlay
        open={searchOpen}
        setOpen={setSearchOpen}
        searchQuery={searchQuery}
      />

      {/* Cart Drawer */}
      <CartDrawer
        cartOpen={cartOpen}
        setCartOpen={setCartOpen}
        cartItems={cartItems}
      />
    </>
  );
}