'use client';

import { useEffect, useRef, useState } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import { Loader } from 'lucide-react';
import { useApi } from '@/hooks/useApi';
import {
  searchProducts,
  getSearchBrands,
  getSearchFilters,
  getSearchCategories,
} from '@/services/productService';

export default function SearchOverlay({
  open,
  setOpen,
  searchQuery,
  setSearchQuery,
}) {
  const router = useRouter();
  const overlayRef = useRef(null);
  const [products, setProducts] = useState([]);
  const [searchLoading, setSearchLoading] = useState(false);

  const { data: brands, loading: brandsLoading } = useApi(
    () => getSearchBrands(),
    [],
  );
  const { data: filters, loading: filtersLoading } = useApi(
    () => getSearchFilters(),
    [],
  );
  const { data: categories, loading: categoriesLoading } = useApi(
    () => getSearchCategories(),
    [],
  );

  useEffect(() => {
    function handleClickOutside(e) {
      if (overlayRef.current && !overlayRef.current.contains(e.target)) {
        setOpen(false);
      }
    }
    if (open) document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [open, setOpen]);

  useEffect(() => {
    if (!open) return;

    let cancelled = false;
    const timer = setTimeout(async () => {
      setSearchLoading(true);
      try {
        const results = await searchProducts(searchQuery, 20);
        if (!cancelled) setProducts(results);
      } finally {
        if (!cancelled) setSearchLoading(false);
      }
    }, 300);

    return () => {
      cancelled = true;
      clearTimeout(timer);
    };
  }, [searchQuery, open]);

  if (!open) return null;

  const query = searchQuery.toLowerCase();
  const isMetaLoading = brandsLoading || filtersLoading || categoriesLoading;

  const filteredBrands = (brands || []).filter(item =>
    item.toLowerCase().includes(query),
  );
  const filteredFilters = (filters || []).filter(item =>
    item.toLowerCase().includes(query),
  );
  const filteredCategories = (categories || []).filter(item =>
    item.toLowerCase().includes(query),
  );
  const filteredProducts = products.filter(
    product =>
      product.name.toLowerCase().includes(query) ||
      product.brand?.toLowerCase().includes(query),
  );

  const handleBrandClick = brand => {
    setOpen(false);
    setSearchQuery('');
    router.push(`/search?q=${encodeURIComponent(brand)}`);
  };

  const handleFilterClick = filter => {
    setOpen(false);
    setSearchQuery('');
    router.push(`/search?q=${encodeURIComponent(filter)}`);
  };

  const handleCategoryClick = category => {
    setOpen(false);
    setSearchQuery('');
    router.push(`/?category=${encodeURIComponent(category)}`);
  };

  const handleProductClick = productSlug => {
    setOpen(false);
    setSearchQuery('');
    router.push(`/product/${encodeURIComponent(productSlug)}`);
  };

  return (
    <div className="fixed inset-0 z-50 flex justify-center items-start pt-20 px-">
      <div
        ref={overlayRef}
        className="w-full max-w-4xl bg-white shadow-2xl overflow-hidden animate-in fade-in zoom-in duration-200"
      >
        <div className="grid grid-cols-12 min-h-[500px]">
          <div className="col-span-3 border-r border-gray-300 p-3 overflow-y-auto overscroll-contain border-3">
            <h2 className="font-semibold text-[14px] text-pink-500 mb-4">
              Brands
            </h2>
            {isMetaLoading ? (
              <Loader size={20} className="animate-spin text-pink-500" />
            ) : (
              <div className="flex flex-wrap gap-3">
                {filteredBrands.length > 0 ? (
                  filteredBrands.map(item => (
                    <button
                      key={item}
                      onClick={() => handleBrandClick(item)}
                      className="border border-gray-300 px-2 py-1 rounded-lg text-[12px] hover:border-pink-500 hover:text-pink-500 transition cursor-pointer"
                    >
                      {item}
                    </button>
                  ))
                ) : (
                  <p className="text-sm text-gray-500">No brands found</p>
                )}
              </div>
            )}
          </div>

          <div className="col-span-5 border-4 border-gray-300 p-3 overflow-y-auto overscroll-contain">
            <h2 className="font-semibold text-[14px] text-pink-500 mb-4">
              Quick Filters
            </h2>
            {isMetaLoading ? (
              <Loader size={20} className="animate-spin text-pink-500" />
            ) : (
              <>
                <div className="flex flex-wrap gap-3 mb-8">
                  {filteredFilters.length > 0 ? (
                    filteredFilters.map(item => (
                      <button
                        key={item}
                        onClick={() => handleFilterClick(item)}
                        className="border px-2 py-1 rounded-lg border-gray-300 text-[14px] hover:border-pink-500 hover:text-pink-500 transition cursor-pointer"
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
                        onClick={() => handleCategoryClick(item)}
                        className="border px-2 py-1 rounded-lg border-gray-300 text-[13px] hover:border-pink-500 hover:text-pink-500 transition cursor-pointer"
                      >
                        {item}
                      </button>
                    ))
                  ) : (
                    <p className="text-sm text-gray-500">No categories found</p>
                  )}
                </div>
              </>
            )}
          </div>

          <div className="col-span-4 p-3 flex flex-col h-[500px] border-l border-4 border-gray-300">
            <h2 className="font-semibold text-pink-500 mb-4 flex-shrink-0 text-[14px] flex items-center gap-2">
              Product Suggestion
              {searchLoading && (
                <Loader size={16} className="animate-spin text-pink-500" />
              )}
            </h2>
            <div className="flex-1 overflow-y-auto pr-2 space-y-4 custom-scrollbar overscroll-contain">
              {filteredProducts.length > 0 ? (
                filteredProducts.map(product => (
                  <button
                    key={product.id}
                    onClick={() => handleProductClick(product.slug)}
                    className="w-full border border-gray-300 rounded-xl px-2 py-2 flex gap-4 hover:shadow-md hover:border-pink-500 transition cursor-pointer bg-white"
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
                    <div className="flex-1 text-left">
                      <h3 className="text-sm font-medium line-clamp-2">
                        {product.name}
                      </h3>
                      <p className="font-semibold mt-2">৳ {product.price}</p>
                    </div>
                  </button>
                ))
              ) : (
                <div className="h-full flex items-center justify-center text-gray-500 text-sm">
                  {searchLoading ? 'Searching...' : 'No products found'}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
