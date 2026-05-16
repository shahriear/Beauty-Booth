// import { create } from 'zustand';

// const useCartStore = create((set, get) => ({
//   cartItems: [],

//   addToCart: product => {
//     const items = get().cartItems;
//     const existing = items.find(item => item.id === product.id);

//     if (existing) {
//       set({
//         cartItems: items.map(item =>
//           item.id === product.id
//             ? { ...item, quantity: item.quantity + 1 }
//             : item,
//         ),
//       });
//     } else {
//       set({
//         cartItems: [...items, { ...product, quantity: 1 }],
//       });
//     }
//   },

//   removeFromCart: id => {
//     set({
//       cartItems: get().cartItems.filter(item => item.id !== id),
//     });
//   },

//   clearCart: () => set({ cartItems: [] }),
// }));

// export default useCartStore;

import { create } from 'zustand';
import { persist } from 'zustand/middleware';

const useCartStore = create(
  persist(
    (set, get) => ({
      cartItems: [],

      addToCart: product => {
        const items = get().cartItems;

        const existing = items.find(item => item.id === product.id);

        if (existing) {
          set({
            cartItems: items.map(item =>
              item.id === product.id
                ? {
                    ...item,
                    quantity: item.quantity + 1,
                  }
                : item,
            ),
          });
        } else {
          set({
            cartItems: [
              ...items,
              {
                ...product,
                quantity: 1,
              },
            ],
          });
        }
      },

      removeFromCart: id => {
        set({
          cartItems: get().cartItems.filter(item => item.id !== id),
        });
      },

      clearCart: () => set({ cartItems: [] }),
    }),
    {
      name: 'cart-storage',
    },
  ),
);

export default useCartStore;