'use client';

export default function PriceListWidget({ products }) {
  // Get top 10 products by discount
  const topProducts = [...products]
    .sort((a, b) => b.originalPrice - b.price - (a.originalPrice - a.price))
    .slice(0, 10);

  return (
    <div className="bg-white rounded-lg shadow-sm p-6">
      <h3 className="text-lg font-bold text-gray-900 mb-4">Price List</h3>
      <div className="space-y-3 max-h-96 overflow-y-auto">
        {topProducts.map(product => (
          <div
            key={product.id}
            className="pb-3 border-b border-gray-200 last:border-b-0"
          >
            <div className="flex items-start justify-between gap-2">
              <p className="text-sm text-gray-700 flex-1 line-clamp-2">
                {product.name}
              </p>
              <span className="text-sm font-bold text-primary-pink whitespace-nowrap ml-2">
                ৳{product.price}
              </span>
            </div>
            {product.originalPrice > product.price && (
              <p className="text-xs text-gray-400 line-through mt-1">
                ৳{product.originalPrice}
              </p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
