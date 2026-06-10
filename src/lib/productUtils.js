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
