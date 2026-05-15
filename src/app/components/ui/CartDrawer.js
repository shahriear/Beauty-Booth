'use client';

import EmptyCart from './EmptyCart';
import CartItem from './CartItem';

export default function CartDrawer({ cartOpen, setCartOpen, cartItems }) {
  return (
    <>
      {/* Overlay */}
      <div
        onClick={() => setCartOpen(false)}
        className={`fixed inset-0 bg-black/40 z-40 transition-opacity duration-300 ${
          cartOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
        }`}
      />

      {/* Drawer */}
      <div
        className={`fixed top-0 right-0 h-full w-[400px] bg-white z-999 shadow-2xl transition-transform duration-500 flex flex-col
        ${cartOpen ? 'translate-x-0' : 'translate-x-full'}`}
      >
        {/* Header */}
        <div className="flex items-center justify-between border-b px-5 py-4">
          <h2 className="text-2xl font-semibold">
            My Cart ({cartItems.length})
          </h2>

          <button onClick={() => setCartOpen(false)} className="text-3xl">
            ×
          </button>
        </div>

        {/* Body */}
        <div className="flex-1 overflow-y-auto p-5">
          {cartItems.length === 0 ? (
            <EmptyCart />
          ) : (
            <div className="space-y-4">
              {cartItems.map(item => (
                <CartItem key={item.id} item={item} />
              ))}
            </div>
          )}
        </div>

        {/* Footer */}
        {cartItems.length > 0 && (
          <div className="border-t p-5">
            <button className="w-full bg-pink-500 hover:bg-pink-600 text-white py-4 rounded-xl font-semibold transition">
              View Cart →
            </button>
          </div>
        )}
      </div>
    </>
  );
}
