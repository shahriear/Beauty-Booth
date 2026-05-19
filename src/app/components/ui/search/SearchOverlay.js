// 'use client';

// import { X, Search } from 'lucide-react';

// export default function SearchOverlay({ open, setOpen }) {
//   if (!open) return null;

//   return (
//     <div className="fixed inset-0 z-50 bg-black/ flex justify-center ">
//       {/* Main Box */}
//       <div className="bg-red-200 w-full max-w-6xl mt-20 rounded-xl shadow-xl p-6 relative border">
//         {/* Close */}
//         <button
//           onClick={() => setOpen(false)}
//           className="absolute top-4 right-4"
//         >
//           <X />
//         </button>

//         <div className="grid grid-cols-12 gap-6">
//           {/* Left Filter */}
//           <div className="col-span-3 border-r pr-4">
//             <h2 className="font-semibold mb-3">Brands</h2>
//             <div className="flex flex-col gap-2 text-sm">
//               <button className="border px-2 py-1 rounded">COSRX</button>
//               <button className="border px-2 py-1 rounded">ANUA</button>
//               <button className="border px-2 py-1 rounded">SKIN1004</button>
//             </div>
//           </div>

//           {/* Middle */}
//           <div className="col-span-5">
//             <h2 className="text-pink-500 font-semibold mb-2">Quick Filters</h2>

//             <div className="flex flex-wrap gap-2 mb-4">
//               {['sunscreen', 'moisturizer', 'serum', 'toner', 'lipstick'].map(
//                 item => (
//                   <span
//                     key={item}
//                     className="px-3 py-1 border rounded-full text-sm cursor-pointer"
//                   >
//                     {item}
//                   </span>
//                 ),
//               )}
//             </div>

//             <h2 className="text-pink-500 font-semibold mb-2">Category</h2>
//             <div className="grid grid-cols-2 gap-2 text-sm">
//               <button className="border p-2 rounded">Skin Care</button>
//               <button className="border p-2 rounded">Make Up</button>
//               <button className="border p-2 rounded">Cleansers</button>
//               <button className="border p-2 rounded">Sun Protection</button>
//             </div>
//           </div>

//           {/* Right Product Suggestion */}
//           <div className="col-span-4">
//             <h2 className="text-pink-500 font-semibold mb-3">
//               Product Suggestion
//             </h2>

//             <div className="space-y-4 max-h-[400px] overflow-y-auto">
//               {[1, 2, 3].map(i => (
//                 <div key={i} className="border rounded p-3 flex gap-3">
//                   <div className="w-16 h-16 bg-gray-200 rounded" />
//                   <div className="flex-1">
//                     <h3 className="text-sm font-medium line-clamp-2">
//                       SKIN1004 Madagascar Centella
//                     </h3>
//                     <p className="text-sm text-gray-500">৳ 1200</p>
//                     <button className="mt-2 bg-gray-900 text-white text-xs px-3 py-1 rounded">
//                       Add to cart
//                     </button>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

'use client';

import { useEffect, useRef } from 'react';

import Image from 'next/image';

export default function SearchOverlay({
  open,
  setOpen,
  searchQuery,
  setSearchQuery,
}) {
  const overlayRef = useRef(null);

  // Outside click close
  useEffect(() => {
    function handleClickOutside(e) {
      if (overlayRef.current && !overlayRef.current.contains(e.target)) {
        setOpen(false);
      }
    }

    if (open) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [open, setOpen]);

  // ESC close
  // useEffect(() => {
  //   function handleEsc(e) {
  //     if (e.key === 'Escape') {
  //       setOpen(false);
  //     }
  //   }

  //   window.addEventListener('keydown', handleEsc);

  //   return () => {
  //     window.removeEventListener('keydown', handleEsc);
  //   };
  // }, [setOpen]);

  if (!open) return null;

  const brands = [
    'BLINK',
    'COSRX',
    'SKIN1004',
    'ANUA',
    'BEAUTY OF JOSEON',
    'MARS Cosmetics',
  ];

  const filters = [
    'sunscreen',
    'moisturizer',
    'toner',
    'serum',
    'lipstick',
    'blush',
    'foundation',
  ];

  const categories = [
    'Skin Care',
    'Make Up',
    'Cleansers',
    'Sun Protection',
    'Serums & Treatments',
    'Moisturizers',
  ];
  const products = [
    {
      id: 1,
      name: 'SKIN1004 Madagascar Centella',
      price: '1200',
      image: '/images/skin-care2.webp',
    },
    {
      id: 2,
      name: 'Beauty Of Joseon Relief Sun',
      price: '1250',
      image: '/images/skin-care.webp',
    },
    {
      id: 3,
      name: 'Anua Heartleaf Toner',
      price: '1450',
      image: '/images/skin-care2.webp',
    },
    {
      id: 4,
      name: 'Beauty Of Joseon Relief Sun',
      price: '1250',
      image: '/images/skin-care.webp',
    },
    {
      id: 5,
      name: 'Anua Heartleaf Toner',
      price: '1450',
      image: '/images/skin-care2.webp',
    },
  ];
  

  const query = searchQuery.toLowerCase();

  const filteredBrands = brands.filter(item =>
    item.toLowerCase().includes(query),
  );

  const filteredFilters = filters.filter(item =>
    item.toLowerCase().includes(query),
  );

  const filteredCategories = categories.filter(item =>
    item.toLowerCase().includes(query),
  );

  const filteredProducts = products.filter(product =>
    product.name.toLowerCase().includes(query),
  );
  
  return (
    <div className="fixed inset-0  z-50 flex justify-center items-start pt-20 px- ">
      {/* Main Container */}
      <div
        ref={overlayRef}
        className="w-full max-w-4xl bg-white shadow-2xl overflow-hidden animate-in fade-in zoom-in duration-200 "
      >
        {/* Content */}
        <div className="grid grid-cols-12 min-h-[500px] ">
          {/* LEFT */}
          <div className="col-span-3 border-r border-gray-300 p-3 overflow-y-auto overscroll-contain  border-3">
            <h2 className="font-semibold text-[14px] text-pink-500 mb-4">
              Brands
            </h2>

            <div className="flex flex-wrap gap-3">
              {filteredBrands.length > 0 ? (
                filteredBrands.map(item => (
                  <button
                    key={item}
                    className="border border-gray-300 px-2 py-1 rounded-lg text-[12px] hover:border-pink-500 hover:text-pink-500 transition"
                  >
                    {item}
                  </button>
                ))
              ) : (
                <p className="text-sm text-gray-500">No brands found</p>
              )}
            </div>
          </div>

          {/* MIDDLE */}
          <div className="col-span-5 border-4 border-gray-300 p-3 overflow-y-auto overscroll-contain">
            <h2 className="font-semibold text-[14px] text-pink-500 mb-4">
              Quick Filters
            </h2>

            <div className="flex flex-wrap gap-3 mb-8">
              {filteredFilters.length > 0 ? (
                filteredFilters.map(item => (
                  <button
                    key={item}
                    className="border px-2 py-1 rounded-lg border-gray-300 text-[14px] hover:border-pink-500 hover:text-pink-500 transition"
                  >
                    {item}
                  </button>
                ))
              ) : (
                <p className="text-sm text-gray-500">No filters found</p>
              )}
            </div>

            <h2 className="font-semibold text-[14px] text-pink-500 mb-4">
              Category
            </h2>

            <div className="flex flex-wrap gap-3">
              {filteredCategories.length > 0 ? (
                filteredCategories.map(item => (
                  <button
                    key={item}
                    className="border px-2 py-1 rounded-lg border-gray-300 text-[13px] hover:border-pink-500 hover:text-pink-500 transition"
                  >
                    {item}
                  </button>
                ))
              ) : (
                <p className="text-sm text-gray-500">No categories found</p>
              )}
            </div>
          </div>

          {/* RIGHT */}
          <div className="col-span-4 p-3 flex flex-col h-[500px] border-l border-4 border-gray-300">
            <h2 className="font-semibold text-pink-500 mb-4 flex-shrink-0 text-[14px]">
              Product Suggestion
            </h2>

            {/* Scrollable Products */}
            <div className="flex-1 overflow-y-auto pr-2 space-y-4 custom-scrollbar overscroll-contain">
              {filteredProducts.length > 0 ? (
                filteredProducts.map(product => (
                  <div
                    key={product.id}
                    className="border border-gray-300 rounded-xl px-2 py-2 flex gap-4 hover:shadow-md transition"
                  >
                    <div className="relative w-20 h-20 bg-gray-100 rounded-lg overflow-hidden flex-shrink-0">
                      <Image
                        src={product.image}
                        alt={product.name}
                        fill
                        sizes="80px"
                        className="object-cover"
                      />
                    </div>

                    <div className="flex-1">
                      <h3 className="text-sm font-medium line-clamp-2">
                        {product.name}
                      </h3>

                      <p className="font-semibold mt-2 ">৳ {product.price}</p>

                      <button className="mt-3 bg-gray-700 hover:bg-black/85 text-white text-sm px-2 py-1 rounded-lg transition cursor-pointer">
                        Add to cart
                      </button>
                    </div>
                  </div>
                ))
              ) : (
                <div className="h-full flex items-center justify-center text-gray-500 text-sm">
                  No products found
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}