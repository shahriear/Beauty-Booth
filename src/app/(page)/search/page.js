'use client';

import { useSearchParams } from 'next/navigation';
import { Suspense } from 'react';
import ProductGrid from '@/app/components/products/ProductGrid';
import SectionLoader from '@/app/components/ui/SectionLoader';
import { useApi } from '@/hooks/useApi';
import { searchProducts } from '@/services/productService';

function SearchResults() {
  const searchParams = useSearchParams();
  const query = searchParams.get('q') || '';

  const { data: products, loading } = useApi(
    () => searchProducts(query, 40),
    [query],
  );

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold text-gray-900 mb-2">
        Search Results
      </h1>
      <p className="text-gray-600 mb-8">
        {query ? `Showing results for "${query}"` : 'Enter a search term to find products'}
      </p>
      <ProductGrid products={products || []} isLoading={loading} />
    </div>
  );
}

export default function SearchPage() {
  return (
    <Suspense fallback={<SectionLoader className="min-h-screen" />}>
      <SearchResults />
    </Suspense>
  );
}
