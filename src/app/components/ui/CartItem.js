// 'use client';

// import useCartStore from '../store/useCartStore';

// export default function CartItem({ item }) {
//   const removeFromCart = useCartStore(state => state.removeFromCart);

//   return (
//     <div className="flex gap-4 border-b pb-4">
//       <img
//         src={item.image || '/images/placeholder.webp'}
//         alt={item.name}
//         className="w-20 h-20 object-cover rounded-lg bg-gray-100"
//       />

//       <div className="flex-1">
//         <h4 className="font-semibold text-sm">{item.name}</h4>

//         <p className="text-pink-600 font-bold mt-2">
//           {item.discountedPrice || item.price || '৳ 0'}
//         </p>

//         <div className="flex items-center gap-2 mt-2">
//           <span className="text-xs text-gray-600">
//             Qty: {item.quantity || 1}
//           </span>
//           <button
//             onClick={() => removeFromCart(item.id)}
//             className="ml-auto text-red-500 hover:text-red-700 text-xs font-semibold transition"
//           >
//             Remove
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// }

'use client';

import toast from 'react-hot-toast';
import useCartStore from '../store/useCartStore';

export default function CartItem({ item }) {
  const removeFromCart = useCartStore(state => state.removeFromCart);

  const increaseQuantity = useCartStore(state => state.increaseQuantity);

  const decreaseQuantity = useCartStore(state => state.decreaseQuantity);

  return (
    <div className="flex gap-4 border-b pb-4">
      {/* IMAGE */}
      <img
        src={item.image || '/images/placeholder.webp'}
        alt={item.name}
        className="w-20 h-20 object-cover rounded-lg bg-gray-100"
      />

      {/* INFO  */}
      <div className="flex-1">
        {/* NAME */}
        <p className="text-xs text-amber-800 font-semiold uppercase tracking-wide mb-1">
          {item.category}
        </p>

        <h4 className="font-semibold text-sm">{item.name}</h4>

        {/* PRICE */}
        <div className="flex items-center gap-2 mt-2">
          {/* ORIGINAL */}
          <span className="line-through text-gray-400 text-xs">
            ৳ {item.originalPrice}
          </span>

          {/* DISCOUNT */}
          <span className="text-pink-600 font-bold">
            ৳ {item.discountedPrice}
          </span>
        </div>

        {/* QUANTITY */}
        <div className="flex items-center gap-3 mt-4">
          {/* DECREASE */}
          <button
            onClick={() => {
              (decreaseQuantity(item.id),
                toast.success('Cart updated', {
                  position: 'top-center',
                }));
            }}
            className="px-4 border text-gray-400 bg-gray-200 hover:bg-gray-300 transition"
          >
            -
          </button>

          {/* QUANTITY */}
          <span className="font-semibold">{item.quantity}</span>

          {/* INCREASE */}
          <button
            onClick={() => {
              increaseQuantity(item.id);
              toast.success('Cart updated', {
                position: 'top-centerr',
              });
            }}
            className="px-4 border text-gray-400 bg-gray-200 hover:bg-gray-300 transition"
          >
            +
          </button>

          {/* REMOVE */}
          <button
            onClick={() => {
              removeFromCart(item.id);
              toast.success('Product removed', {
                position: 'top-center',
              });
            }}
            className="ml-auto text-red-500 hover:text-red-700 text-xs font-semibold transition"
          >
            Remove
          </button>
        </div>
      </div>
    </div>
  );
}
