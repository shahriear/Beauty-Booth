/** Normalize product for cart / carousel UI compatibility */
export function toCarouselProduct(product) {
  return {
    ...product,
    discountedPrice: product.price,
    originalPrice: product.originalPrice,
    badge: product.discount > 0 || product.isSale ? 'ON SALE' : '',
    inStock: product.stock > 0,
  };
}

export function slugify(text) {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '');
}

/**
 * Calculate relevance score for a product based on search query
 * Higher score = more relevant
 */
export function calculateSearchScore(product, query) {
  const q = query.toLowerCase().trim();
  if (!q) return 0;

  const productName = (product.name || '').toLowerCase();
  const productBrand = (product.brand || '').toLowerCase();
  const productDescription = (product.description || '').toLowerCase();
  const productSubcategory = (product.subcategory || '').toLowerCase();

  let score = 0;

  // Exact name match (highest priority)
  if (productName === q) {
    score = 1.0;
  }
  // Exact brand match
  else if (productBrand === q) {
    score = 0.95;
  }
  // Name starts with query
  else if (productName.startsWith(q)) {
    score = 0.9;
  }
  // Brand starts with query
  else if (productBrand.startsWith(q)) {
    score = 0.85;
  }
  // Name contains exact word match
  else if (productName.split(/\s+/).some(word => word === q)) {
    score = 0.8;
  }
  // Query word matches product name words
  else if (q.split(/\s+/).every(queryWord => productName.includes(queryWord))) {
    score = 0.7;
  }
  // Name contains query
  else if (productName.includes(q)) {
    score = 0.6;
  }
  // Brand contains query
  else if (productBrand.includes(q)) {
    score = 0.5;
  }
  // Subcategory contains query
  else if (productSubcategory.includes(q)) {
    score = 0.4;
  }
  // Description contains query
  else if (productDescription.includes(q)) {
    score = 0.3;
  }

  return score;
}

/**
 * Search products with relevance scoring
 * Returns sorted array of products with scores
 */
export function searchWithScore(products, query, limit = 20) {
  if (!query || !query.trim()) {
    return [];
  }

  const scored = products
    .map(product => ({
      ...product,
      _searchScore: calculateSearchScore(product, query),
    }))
    .filter(product => product._searchScore > 0)
    .sort((a, b) => b._searchScore - a._searchScore)
    .slice(0, limit);

  // Remove the temporary _searchScore property before returning
  return scored.map(({ _searchScore, ...product }) => product);
}
