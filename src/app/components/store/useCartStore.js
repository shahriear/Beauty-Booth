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

// import { create } from 'zustand';
// import { persist } from 'zustand/middleware';

// const useCartStore = create(
//   persist(
//     (set, get) => ({
//       cartItems: [],

//       addToCart: product => {
//         const items = get().cartItems;

//         const existing = items.find(item => item.id === product.id);

//         if (existing) {
//           set({
//             cartItems: items.map(item =>
//               item.id === product.id
//                 ? {
//                     ...item,
//                     quantity: item.quantity + 1,
//                   }
//                 : item,
//             ),
//           });
//         } else {
//           set({
//             cartItems: [
//               ...items,
//               {
//                 ...product,
//                 quantity: 1,
//               },
//             ],
//           });
//         }
//       },

//       removeFromCart: id => {
//         set({
//           cartItems: get().cartItems.filter(item => item.id !== id),
//         });
//       },

//       clearCart: () => set({ cartItems: [] }),
//     }),
//     {
//       name: 'cart-storage',
//     },
//   ),
// );

// export default useCartStore;

// import toast from 'react-hot-toast';
// import { create } from 'zustand';
// import { persist } from 'zustand/middleware';

// const useCartStore = create(
//   persist(
//     (set, get) => ({
//       cartItems: [],

//       // ADD TO CART
//       addToCart: product => {
//         const items = get().cartItems;

//         const existing = items.find(item => item.id === product.id);

//         // already exists
//         if (existing) {
//           set({
//             cartItems: items.map(item =>
//               item.id === product.id
//                 ? {
//                     ...item,
//                     quantity: item.quantity + 1,
//                   }
//                 : item,
//             ),
//           });
//         } else {
//           set({
//             cartItems: [
//               ...items,
//               {
//                 ...product,
//                 quantity: 1,
//               },
//             ],
//           });
//         }
//         // SAME TOAST EVERY TIME
//         {toast.success('Cart updated', {
//           position: 'top-centerr',
//         });};
//       },

//       // INCREASE QUANTITY
//       increaseQuantity: id => {
//         set({
//           cartItems: get().cartItems.map(item =>
//             item.id === id
//               ? {
//                   ...item,
//                   quantity: item.quantity + 1,
//                 }
//               : item,
//           ),
//         });
//       },

//       // DECREASE QUANTITY
//       decreaseQuantity: id => {
//         set({
//           cartItems: get()
//             .cartItems.map(item =>
//               item.id === id
//                 ? {
//                     ...item,
//                     quantity: item.quantity - 1,
//                   }
//                 : item,
//             )
//             .filter(item => item.quantity > 0),
//         });
//       },

//       // REMOVE ITEM
//       removeFromCart: id => {
//         set({
//           cartItems: get().cartItems.filter(item => item.id !== id),
//         });
//       },

//       // CLEAR CART
//       clearCart: () =>
//         set({
//           cartItems: [],
//         }),
//     }),
//     {
//       name: 'cart-storage',
//     },
//   ),
// );

// export default useCartStore;

import toast from 'react-hot-toast';
import { create } from 'zustand';
import { persist } from 'zustand/middleware';

const useCartStore = create(
  persist(
    (set, get) => ({
      cartItems: [],

      // POPUP STATE
      cartPopupOpen: false,
      lastAddedProduct: null,

      openCartPopup: product =>
        set({
          cartPopupOpen: true,
          lastAddedProduct: product,
        }),

      closeCartPopup: () =>
        set({
          cartPopupOpen: false,
        }),

      // ADD TO CART
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

        // OPEN POPUP
        get().openCartPopup(product);

        toast.success('Cart updated', {
          position: 'top-center',
        });
      },

      // INCREASE
      increaseQuantity: id => {
        set({
          cartItems: get().cartItems.map(item =>
            item.id === id
              ? {
                  ...item,
                  quantity: item.quantity + 1,
                }
              : item,
          ),
        });
      },

      // DECREASE
      decreaseQuantity: id => {
        set({
          cartItems: get()
            .cartItems.map(item =>
              item.id === id
                ? {
                    ...item,
                    quantity: item.quantity - 1,
                  }
                : item,
            )
            .filter(item => item.quantity > 0),
        });
      },

      // REMOVE
      removeFromCart: id => {
        set({
          cartItems: get().cartItems.filter(item => item.id !== id),
        });
      },

      // CLEAR
      clearCart: () =>
        set({
          cartItems: [],
        }),
    }),
    {
      name: 'cart-storage',
    },
  ),
);

export default useCartStore;