// 'use client';

// import dynamic from 'next/dynamic';
// import { useEffect } from 'react';

// import { X, CheckCircle, ChevronLeft, ChevronRight } from 'lucide-react';

// import useCartStore from '../store/useCartStore';

// const Slider = dynamic(() => import('react-slick'), {
//   ssr: false,
// });

// function NextArrow({ onClick }) {
//   return (
//     <button
//       onClick={onClick}
//       className="
//         absolute right-[-18px] top-1/2 -translate-y-1/2 z-20
//         w-11 h-11 rounded-full bg-white shadow-lg
//         flex items-center justify-center
//         hover:scale-110 transition
//       "
//     >
//       <ChevronRight size={20} />
//     </button>
//   );
// }

// function PrevArrow({ onClick }) {
//   return (
//     <button
//       onClick={onClick}
//       className="
//         absolute left-[-18px] top-1/2 -translate-y-1/2 z-20
//         w-11 h-11 rounded-full bg-white shadow-lg
//         flex items-center justify-center
//         hover:scale-110 transition
//       "
//     >
//       <ChevronLeft size={20} />
//     </button>
//   );
// }

// export default function AddToCartPopup() {
//   const { cartPopupOpen, closeCartPopup, cartItems } = useCartStore();

//   // BODY SCROLL LOCK
//   useEffect(() => {
//     if (cartPopupOpen) {
//       document.body.style.overflow = 'hidden';
//     } else {
//       document.body.style.overflow = 'auto';
//     }

//     return () => {
//       document.body.style.overflow = 'auto';
//     };
//   }, [cartPopupOpen]);

//   const settings = {
//     dots: false,
//     infinite: cartItems.length > 3,
//     speed: 500,
//     slidesToShow: 3,
//     slidesToScroll: 1,
//     arrows: cartItems.length > 3,
//     nextArrow: <NextArrow />,
//     prevArrow: <PrevArrow />,
//     responsive: [
//       {
//         breakpoint: 1024,
//         settings: {
//           slidesToShow: 2,
//         },
//       },
//       {
//         breakpoint: 640,
//         settings: {
//           slidesToShow: 1,
//         },
//       },
//     ],
//   };

//   return (
//     <div
//       className={`
//         fixed inset-0 z-[9999]
//         bg-black/40
//         flex items-center justify-center
//         px-4
//         transition-all duration-300 ease-out

//         ${cartPopupOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}
//       `}
//     >
//       {/* MODAL */}
//       <div
//         onClick={e => e.stopPropagation()}
//         className={`
//           bg-white w-full max-w-3xl rounded-3xl p-6 md:p-8 relative
//           transform transition-all duration-300 ease-out

//           ${
//             cartPopupOpen
//               ? 'translate-y-0 scale-100 opacity-100'
//               : 'translate-y-10 scale-95 opacity-0'
//           }
//         `}
//       >
//         {/* CLOSE */}
//         <button
//           onClick={closeCartPopup}
//           className="
//             absolute top-5 right-5
//             w-10 h-10 rounded-full
//             hover:bg-gray-100
//             flex items-center justify-center
//             transition
//           "
//         >
//           <X size={20} />
//         </button>

//         {/* TOP */}
//         <div className="flex items-center gap-3 mb-4">
//           <CheckCircle size={20} className="text-green-500" />

//           <h2 className="text-xl md:text-xl font-bold">1 item added to cart</h2>
//         </div>

//         {/* BUTTONS */}
//         <div className="flex flex-wrap gap-3 mb-8">
//           <button
//             onClick={closeCartPopup}
//             className="
//               border border-gray-300
//               px-2 py-1 rounded-md
//               font-medium text-xs
//               hover:bg-gray-100
//               transition
//             "
//           >
//             Continue Shopping
//           </button>

//           <button
//             className="
//               bg-black text-white
//               px-2 py-1 rounded-md
//               font-medium text-xs
//               hover:opacity-90
//               transition
//             "
//           >
//             View Cart
//           </button>
//         </div>

//         {/* TITLE */}
//         <h3 className="text-2xl md:text-2xl font-bold mb-6">People Also Buy</h3>

//         {/* SLIDER */}
//         <Slider {...settings}>
//           {cartItems.map(item => (
//             <div key={item.id} className="px-2">
//               <div
//                 className="
//                   border border-gray-200
//                   rounded-2xl overflow-hidden
//                   hover:shadow-xl
//                   transition
//                   bg-white
//                 "
//               >
//                 {/* IMAGE */}
//                 <div
//                   className="
//                     h-50 bg-gray-100
//                     flex items-center justify-center
//                     relative
//                   "
//                 >
//                   <span className="text-gray-400">Product Image</span>

//                   <span
//                     className="
//                       absolute top-4 left-4
//                       bg-pink-600 text-white
//                       text-xs font-bold
//                       px-3 py-1 rounded-full
//                     "
//                   >
//                     ON SALE
//                   </span>
//                 </div>

//                 {/* INFO */}
//                 <div className="p-4">
//                   <p
//                     className="
//                       text-xs uppercase
//                       tracking-wide
//                       text-gray-500 mb-1
//                     "
//                   >
//                     COMBO
//                   </p>

//                   <h4
//                     className="
//                       text-sm md:text-base
//                       font-semibold
//                       line-clamp-2 mb-3
//                     "
//                   >
//                     {item.name}
//                   </h4>

//                   <div className="flex items-center gap-2">
//                     <span
//                       className="
//                         text-sm text-gray-400
//                         line-through
//                       "
//                     >
//                       ৳{item.originalPrice}
//                     </span>

//                     <span
//                       className="
//                         text-lg font-bold
//                         text-pink-600
//                       "
//                     >
//                       ৳{item.discountedPrice}
//                     </span>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </Slider>
//       </div>
//     </div>
//   );
// }
// =================
'use client';

import dynamic from 'next/dynamic';
import { useEffect, useState } from 'react';

import { X, CheckCircle, ChevronLeft, ChevronRight } from 'lucide-react';

import useCartStore from '../store/useCartStore';

const Slider = dynamic(() => import('react-slick'), {
  ssr: false,
});

function NextArrow({ onClick }) {
  return (
    <button
      onClick={onClick}
      className="absolute right-[-18px] top-1/2 -translate-y-1/2 z-20 w-11 h-11 rounded-full bg-white shadow-lg flex items-center justify-center hover:scale-110 transition"
    >
      <ChevronRight size={20} />
    </button>
  );
}

function PrevArrow({ onClick }) {
  return (
    <button
      onClick={onClick}
      className="absolute left-[-18px] top-1/2 -translate-y-1/2 z-20 w-11 h-11 rounded-full bg-white shadow-lg flex items-center justify-center hover:scale-110 transition"
    >
      <ChevronLeft size={20} />
    </button>
  );
}

export default function AddToCartPopup() {
  const [mounted, setMounted] = useState(false);
  const { cartPopupOpen, closeCartPopup, cartItems, addToCart } =
    useCartStore();
  // const { cartPopupOpen, closeCartPopup, cartItems } = useCartStore();
  // const addToCart = useCartStore(state => state.addToCart);

  // FIX HYDRATION
  useEffect(() => {
    setMounted(true);
  }, []);

  // BODY SCROLL LOCK
  useEffect(() => {
    if (cartPopupOpen) {
      const scrollbarWidth =
        window.innerWidth - document.documentElement.clientWidth;

      document.body.style.overflow = 'hidden';
      document.body.style.paddingRight = `${scrollbarWidth}px`;
    } else {
      document.body.style.overflow = 'auto';
      document.body.style.paddingRight = '0px';
    }

    return () => {
      document.body.style.overflow = 'auto';
      document.body.style.paddingRight = '0px';
    };
  }, [cartPopupOpen]);

  // IMPORTANT
  if (!mounted) return null;

  const settings = {
    dots: false,
    infinite: cartItems.length > 3,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: cartItems.length > 3,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div
      className={`fixed inset-0 z-[999] bg-black/60  flex items-center justify-center px-4 transition-all duration-300 ease-out ${
        cartPopupOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
      }`}
    >
      {/* MODAL */}
      <div
        className={`bg-white w-full max-w-3xl rounded-3xl p-6 md:p-8 relative transform transition-all duration-300 ease-out ${
          cartPopupOpen
            ? 'translate-y-0 scale-100 opacity-100'
            : 'translate-y-10 scale-95 opacity-0'
        }`}
      >
        {/* CLOSE */}
        <button
          onClick={closeCartPopup}
          className="absolute top-5 right-5 w-10 h-10 rounded-full hover:bg-gray-100 flex items-center justify-center transition"
        >
          <X size={22} />
        </button>

        {/* TOP */}
        <div className="flex items-center gap-3 mb-6">
          <CheckCircle size={20} className="text-green-500" />

          <h2 className="text-xl font-bold">1 item added to cart</h2>
        </div>

        {/* BUTTONS */}
        <div className="flex flex-wrap gap-3 mb-8">
          <button
            onClick={closeCartPopup}
            className="border border-gray-300 px-2 py- rounded-lg font-medium text-sm hover:bg-gray-100 transition"
          >
            Continue Shopping
          </button>

          <button className="bg-black text-white px-2 py-1 rounded-lg font-medium text-sm hover:opacity-90 transition">
            View Cart
          </button>
        </div>

        {/* TITLE */}
        <h3 className="text-2xl font-bold mb-8">People Also Buy</h3>

        {/* SLIDER */}
        <Slider {...settings}>
          {cartItems.map(item => (
            <div key={item.id} className="px-2">
              <div className="border border-gray-200 rounded-2xl overflow-hidden hover:shadow-xl transition bg-white">
                {/* IMAGE */}
                {/* <div className="h-55 bg-gray-100 flex items-center justify-center relative">
                  <span className="text-gray-400">Product Image</span>

                  <span className="absolute top-4 left-4 bg-pink-600 text-white text-xs font-bold px-3 py-1 rounded-full">
                    ON SALEE
                  </span>
                </div> */}
                <div className="h-55 bg-gray-100 flex items-center justify-center relative overflow-hidden group">
                  <span className="text-gray-400 text-sm">Product Image</span>

                  {/* SALE BADGE */}
                  <span
                    className="
      absolute top-4 left-4
      bg-pink-600 text-white
      text-xs font-bold
      px-3 py-1 rounded-full
      transition-all duration-300
      group-hover:opacity-0
      group-hover:scale-75
    "
                  >
                    ON SALE
                  </span>

                  {/* ADD BUTTON */}
                  <button
                    onClick={() => addToCart(item)}
                    className="
      absolute top-4 right-4
      w-10 h-10 rounded-full
      bg-pink-600 text-white
      flex items-center justify-center
      text-2xl shadow-lg

      opacity-0
      translate-y-[-10px]

      transition-all duration-300

      group-hover:opacity-100
      group-hover:translate-y-0
      hover:scale-110
    "
                  >
                    +
                  </button>
                </div>

                {/* INFO */}
                <div className="p-4">
                  <p className="text-xs uppercase tracking-wide text-gray-500 mb-1">
                    COMBO
                  </p>

                  <h4 className="text-sm md:text-base font-semibold line-clamp-2 mb-3">
                    {item.name}
                  </h4>

                  <div className="flex items-center gap-2">
                    <span className="text-sm text-gray-400 line-through">
                      ৳{item.originalPrice}
                    </span>

                    <span className="text-lg font-bold text-pink-600">
                      ৳{item.discountedPrice}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}
