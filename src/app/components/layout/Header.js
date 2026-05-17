'use client';

import { useState } from 'react';

import CartDrawer from '../ui/CartDrawer';
import useCartStore from '../store/useCartStore';

export default function Header() {
  const [searchQuery, setSearchQuery] = useState('');
  const [cartOpen, setCartOpen] = useState(false);
  const cartItems = useCartStore(state => state.cartItems);
  return (
    <>
      <header className="bg-white shadow-md py-4 px-6 sticky top-0 z-30">
        <div className="flex items-center justify-between gap-6 container mx-auto">
          {/* Logo */}
          <div className="flex-shrink-0">
            <div className="text-2xl font-bold">Beauty Booth</div>
          </div>

          {/* Search */}
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

          {/* Right */}
          <div className="flex items-center gap-6">
            <button className="flex flex-col items-center text-gray-700 hover:text-purple-600 transition">
              <span className="text-xl">👤</span>
              <span className="text-xs">Account</span>
            </button>

            {/* Cart */}
            <button
              onClick={() => setCartOpen(true)}
              className="relative flex flex-col items-center text-gray-700 hover:text-purple-600 transition"
            >
              <span className="text-xl">🛒</span>
              <span className="text-xs">Cart</span>

              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                {/* {cartItems.length} */}
                {cartItems.reduce((acc, item) => acc + item.quantity, 0)}
              </span>
            </button>
          </div>
        </div>
      </header>

      {/* Drawer */}
      <CartDrawer
        cartOpen={cartOpen}
        setCartOpen={setCartOpen}
        cartItems={cartItems}
      />
    </>
  );
}

// 'use client';

// import { useState } from 'react';
// import CartDrawer from '../ui/CartDrawer';

// export default function Header() {
//   const [cartOpen, setCartOpen] = useState(false);

//   const [cartItems, setCartItems] = useState([]);

//   // ADD TO CART FUNCTION
//   const addToCart = product => {
//     setCartItems(prev => [...prev, product]);
//   };

//   const product = {
//     id: 1,
//     name: 'Retinol Serum',
//     price: 1900,
//     image: '/product.webp',
//   };

//   return (
//     <>
//       <header className="bg-white shadow-md py-4 px-6">
//         <div className="container mx-auto flex justify-between">
//           <h1 className="text-2xl font-bold">Beauty Booth</h1>

//           <div className="flex items-center gap-4">
//             <button className="flex flex-col items-center text-gray-700 hover:text-purple-600 transition">
//                <span className="text-xl">👤</span>
//                <span className="text-xs">Account</span>

//             </button>
//             {/* DEMO ADD BUTTON */}
//             <button
//               onClick={() => addToCart(product)}
//               className="bg-black text-white px-4 py-2 rounded-lg"
//             >
//               Add Product
//             </button>

//             {/* CART */}
//             <button onClick={() => setCartOpen(true)} className="relative">
//               🛒
//               <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
//                 {cartItems.length}
//               </span>
//             </button>
//           </div>
//         </div>
//       </header>

//       <CartDrawer
//         cartOpen={cartOpen}
//         setCartOpen={setCartOpen}
//         cartItems={cartItems}
//       />
//     </>
//   );
// }
