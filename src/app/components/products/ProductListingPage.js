'use client';

import { useState, useEffect, useCallback } from 'react';
import { Loader } from 'lucide-react';
import Breadcrumb from '@/app/components/products/Breadcrumb';
import Filters from '@/app/components/products/Filters';
import ProductGrid from '@/app/components/products/ProductGrid';
import Pagination from '@/app/components/products/Pagination';
import SortDropdown from '@/app/components/products/SortDropdown';
import SeoContent from '@/app/components/products/SeoContent';
import PriceListWidget from '@/app/components/products/PriceListWidget';
import CategoryBanner from '@/app/components/products/CategoryBanner';
import SectionLoader from '@/app/components/ui/SectionLoader';
import { useApi } from '@/hooks/useApi';
import { getCategoryBySlug } from '@/services/categoryService';
import { getProducts } from '@/services/productService';

const ITEMS_PER_PAGE = 12;

export default function ProductListingPage({ categorySlug }) {
  const { data: categoryData, loading: categoryLoading } = useApi(
    () => getCategoryBySlug(categorySlug),
    [categorySlug],
  );

  const [filters, setFilters] = useState({
    priceRange: [0, 10000],
    categories: [],
    brands: [],
    sortBy: 'best-sale',
    subcategory: null,
  });
  const [currentPage, setCurrentPage] = useState(1);
  const [activeSubcategory, setActiveSubcategory] = useState(null);
  const [listData, setListData] = useState(null);
  const [allProducts, setAllProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const fetchProducts = useCallback(async () => {
    if (!categoryData) return;
    setIsLoading(true);
    try {
      const [paginated, all] = await Promise.all([
        getProducts(
          { ...filters, categorySlug },
          currentPage,
          ITEMS_PER_PAGE,
        ),
        getProducts({ categorySlug }, 1, 500),
      ]);
      setListData(paginated);
      setAllProducts(all.products);
    } finally {
      setIsLoading(false);
    }
  }, [categoryData, filters, currentPage, categorySlug]);

  useEffect(() => {
    fetchProducts();
  }, [fetchProducts]);

  const handlePageChange = page => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleFilterChange = newFilters => {
    setFilters(newFilters);
    setCurrentPage(1);
  };

  const handleSortChange = sortBy => {
    handleFilterChange({ ...filters, sortBy });
  };

  const handleSubcategoryClick = subcategory => {
    const isCurrentlyActive = activeSubcategory === subcategory;
    const newSubcategory = isCurrentlyActive ? null : subcategory;
    setActiveSubcategory(newSubcategory);
    handleFilterChange({ ...filters, subcategory: newSubcategory });
  };

  if (categoryLoading) {
    return <SectionLoader className="min-h-screen" />;
  }

  if (!categoryData) {
    return (
      <div className="container mx-auto px-4 py-8">
        <p className="text-center text-lg text-gray-600">Category not found</p>
      </div>
    );
  }

  const filteredProducts = listData?.products || [];
  const totalPages = listData?.totalPages || 1;
  const totalCount = listData?.total || 0;

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-6">
        <Breadcrumb items={[{ label: categoryData.name }]} />

        <CategoryBanner
          categoryData={categoryData}
          onSubcategoryClick={handleSubcategoryClick}
          activeSubcategory={activeSubcategory}
        />

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 mb-12">
          <div className="lg:col-span-1">
            <Filters
              allProducts={allProducts}
              onFilterChange={handleFilterChange}
              activeFilters={filters}
            />
          </div>

          <div className="lg:col-span-3">
            <div className="flex items-center justify-between mb-6 bg-white p-4 rounded-lg shadow-sm">
              <div className="flex items-center gap-2">
                {isLoading && (
                  <Loader size={20} className="animate-spin text-primary-pink" />
                )}
                <span className="text-gray-600">
                  <span className="font-semibold text-gray-900">{totalCount}</span>{' '}
                  products
                </span>
              </div>
              <SortDropdown
                onSortChange={handleSortChange}
                currentSort={filters.sortBy}
              />
            </div>

            <ProductGrid products={filteredProducts} isLoading={isLoading} />

            {totalCount > ITEMS_PER_PAGE && (
              <Pagination
                currentPage={currentPage}
                totalPages={totalPages}
                onPageChange={handlePageChange}
              />
            )}
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-12">
          <div className="lg:col-span-2 bg-white p-6 md:p-8 rounded-lg shadow-sm">
            <SeoContent category={categoryData.id} />
          </div>
          <div className="lg:col-span-1">
            <PriceListWidget products={filteredProducts} />
          </div>
        </div>
      </div>
    </div>
  );
}
