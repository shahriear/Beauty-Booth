// 'use client';

// import { useState } from 'react';

// import CartDrawer from '../ui/CartDrawer';
// import useCartStore from '../store/useCartStore';
// import { Search } from 'lucide-react';
// import SearchOverlay from '../ui/search/SearchOverlay';

// export default function Header() {
//   const [searchQuery, setSearchQuery] = useState('');
//   const [cartOpen, setCartOpen] = useState(false);
//   const cartItems = useCartStore(state => state.cartItems);

//   const [searchOpen, setSearchOpen] = useState(false);
//   return (
//     <>
//       <header className="bg-white shadow-md py-4 px-6 sticky top-0 z-30">
//         <div className="flex items-center justify-between gap-6 container mx-auto">
//           {/* Logo */}
//           <div className="flex-shrink-0">
//             <div className="text-2xl font-bold">Beauty Booth</div>
//           </div>

//           {/* Search */}
//           <div className="flex-grow max-w-md">
//             <div className="flex items-center  rounded-full px-4 py-1 border border-gray-300 hover:border-gray-600">
//               {/* <input
//                 type="text"
//                 placeholder="What are you looking for?"
//                 value={searchQuery}
//                 onChange={e => setSearchQuery(e.target.value)}
//                 className="bg-transparent flex-grow outline-none text-[16px]"
//               /> */}
//               <input
//                 type="text"
//                 placeholder="What are you looking for?"
//                 value={searchQuery}
//                 onChange={e => setSearchQuery(e.target.value)}
//                 onFocus={() => setSearchOpen(true)} // 👈 click/focus করলে open
//                 className="bg-transparent flex-grow outline-none text-[16px]"
//               />

//               <button className="bg-pink-500 hover:bg-pink-800 text-white p-1.5 rounded-full transition ">
//                 <Search size={20} />
//               </button>
//             </div>
//           </div>

//           {/* Right */}
//           <div className="flex items-center gap-6">
//             <button className="flex flex-col items-center text-gray-700 hover:text-purple-600 transition">
//               <span className="text-xl">👤</span>
//               <span className="text-xs">Account</span>
//             </button>

//             {/* Cart */}
//             <button
//               onClick={() => setCartOpen(true)}
//               className="relative flex flex-col items-center text-gray-700 hover:text-purple-600 transition"
//             >
//               <span className="text-xl">🛒</span>
//               <span className="text-xs">Cart</span>

//               <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
//                 {/* {cartItems.length} */}
//                 {cartItems.reduce((acc, item) => acc + item.quantity, 0)}
//               </span>
//             </button>
//           </div>
//         </div>
//       </header>

//       {/* Drawer */}
//       <CartDrawer
//         cartOpen={cartOpen}
//         setCartOpen={setCartOpen}
//         cartItems={cartItems}
//       />
//       <SearchOverlay open={searchOpen} setOpen={setSearchOpen} />
//     </>
//   );
// }










// 'use client';

// import { useState } from 'react';

// import CartDrawer from '../ui/CartDrawer';


// import useCartStore from '../store/useCartStore';


// import SearchOverlay from '../ui/search/SearchOverlay';

// import { Search, X } from 'lucide-react';


// export default function Header() {
//   const [searchQuery, setSearchQuery] = useState('');
//   const [cartOpen, setCartOpen] = useState(false);

//   const [searchOpen, setSearchOpen] = useState(false);

//   // account modal
//   const [accountOpen, setAccountOpen] = useState(false);

//   const cartItems = useCartStore(state => state.cartItems);

//   return (
//     <>
//       <header className="bg-white shadow-md py-4 px-6 sticky top-0 z-30">
//         <div className="flex items-center justify-between gap-6 container mx-auto">
//           {/* Logo */}
//           <div className="flex-shrink-0">
//             <a href="#" className="text-2xl font-bold">
//               Beauty Booth
//             </a>
//           </div>

//           {/* Search */}

//           <div className="flex-grow max-w-2/5 relative">
//             <div className="flex items-center gap-3 border border-gray-300 rounded-full px-5 py-1 hover:border-gray-500 transition bg-white">
//               <input
//                 type="text"
//                 placeholder="What are you looking for?"
//                 value={searchQuery}
//                 onChange={e => setSearchQuery(e.target.value)}
//                 onFocus={() => setSearchOpen(true)}
//                 className="flex-1 outline-none bg-transparent text-[16px]"
//               />
//               {searchQuery && (
//                 <button
//                   onClick={() => {
//                     setSearchQuery('');
//                     setSearchOpen(false);
//                   }}
//                   className="hover:bg-gray-100  p-1  rounded-full transition border border-gray-300"
//                 >
//                   <X size={16} />
//                 </button>
//               )}
//               <button className="bg-pink-500 hover:bg-pink-800 text-white p-1.5 rounded-full transition">
//                 <Search size={20} />
//               </button>
//             </div>
//           </div>
//           {/* Right */}
//           <div className="flex items-center gap-6">
//             {/* Account */}
//             <button
//               onClick={() => setAccountOpen(true)}
//               className="flex flex-col items-center text-gray-700 hover:text-pink-600 transition"
//             >
//               <User size={22} />
//               <span className="text-xs">Account</span>
//             </button>

//             {/* Cart */}
//             <button
//               onClick={() => setCartOpen(true)}
//               className="relative flex flex-col items-center text-gray-700 hover:text-purple-600 transition"
//             >
//               <span className="text-xl">🛒</span>

//               <span className="text-xs">Cart</span>

//               <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
//                 {cartItems.reduce((acc, item) => acc + item.quantity, 0)}
//               </span>
//             </button>
//           </div>
//         </div>
//       </header>

//       {/* Search Overlay */}
//       <SearchOverlay
//         open={searchOpen}
//         setOpen={setSearchOpen}
//         searchQuery={searchQuery}
//         setSearchQuery={setSearchQuery}
//       />

//       {/* Drawer */}
//       <CartDrawer
//         cartOpen={cartOpen}
//         setCartOpen={setCartOpen}
//         cartItems={cartItems}
//       />
//     </>
//   );
// }



'use client';

import { useState } from 'react';

import CartDrawer from '../ui/CartDrawer';
import SearchOverlay from '../ui/search/SearchOverlay';
import AccountModal from '../ui/account/AccountModal';

import useCartStore from '../store/useCartStore';

import { Search, X, User, ShoppingCart } from 'lucide-react';
import Link from 'next/link';

export default function Header() {
  const [searchQuery, setSearchQuery] = useState('');
  const [cartOpen, setCartOpen] = useState(false);

  const [searchOpen, setSearchOpen] = useState(false);

  // account modal
  const [accountOpen, setAccountOpen] = useState(false);

  const cartItems = useCartStore(state => state.cartItems);

  return (
    <>
      <header className="bg-white shadow-md py-3 px-6 sticky top-0 z-30">
        <div className="flex items-center justify-between gap-6 container mx-auto">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="text-2xl font-bold">
              Beauty Booth
            </Link>
          </div>

          {/* Search */}
          <div className="flex-grow max-w-2/5 relative">
            <div className="flex items-center gap-3 border border-gray-300 rounded-full px-5 py-1 hover:border-gray-500 transition bg-white">
              <input
                type="text"
                placeholder="What are you looking for?"
                value={searchQuery}
                onChange={e => setSearchQuery(e.target.value)}
                onFocus={() => setSearchOpen(true)}
                className="flex-1 outline-none bg-transparent text-[16px]"
              />

              {searchQuery && (
                <button
                  onClick={() => {
                    setSearchQuery('');
                    setSearchOpen(false);
                  }}
                  className="hover:bg-gray-100 p-1 rounded-full transition border border-gray-300"
                >
                  <X size={16} />
                </button>
              )}

              <button className="bg-pink-500 hover:bg-pink-800 text-white p-1.5 rounded-full transition">
                <Search size={20} />
              </button>
            </div>
          </div>

          {/* Right */}
          <div className="flex items-center gap-6">
            {/* Account */}
            <button
              onClick={() => setAccountOpen(true)}
              className="flex flex-col items-center text-gray-700 hover:text-pink-600 transition"
            >
              <User size={22} />
              <span className="text-xs">Account</span>
            </button>

            {/* Cart */}
            <button
              onClick={() => setCartOpen(true)}
              className="relative flex flex-col items-center text-gray-700 hover:text-purple-600 transition"
            >
              <ShoppingCart size={22} />

              <span className="text-xs">Cart</span>

              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                {cartItems.reduce((acc, item) => acc + item.quantity, 0)}
              </span>
            </button>
          </div>
        </div>
      </header>

      {/* Search Overlay */}
      <SearchOverlay
        open={searchOpen}
        setOpen={setSearchOpen}
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
      />

      {/* Account Modal */}
      <AccountModal open={accountOpen} setOpen={setAccountOpen} />

      {/* Cart Drawer */}
      <CartDrawer
        cartOpen={cartOpen}
        setCartOpen={setCartOpen}
        cartItems={cartItems}
      />
    </>
  );
}

// nicher ta na-------------------

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
