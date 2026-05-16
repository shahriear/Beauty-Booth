'use client';

import useCartStore from '../store/useCartStore';

export default function CartItem({ item }) {
  const removeFromCart = useCartStore(state => state.removeFromCart);

  return (
    <div className="flex gap-4 border-b pb-4">
      <img
        src={item.image || '/images/placeholder.webp'}
        alt={item.name}
        className="w-20 h-20 object-cover rounded-lg bg-gray-100"
      />

      <div className="flex-1">
        <h4 className="font-semibold text-sm">{item.name}</h4>

        <p className="text-pink-600 font-bold mt-2">
          {item.discountedPrice || item.price || '৳ 0'}
        </p>

        <div className="flex items-center gap-2 mt-2">
          <span className="text-xs text-gray-600">
            Qty: {item.quantity || 1}
          </span>
          <button
            onClick={() => removeFromCart(item.id)}
            className="ml-auto text-red-500 hover:text-red-700 text-xs font-semibold transition"
          >
            Remove
          </button>
        </div>
      </div>
    </div>
  );
}
