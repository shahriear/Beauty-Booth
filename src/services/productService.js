import { fakeApi } from '@/lib/fakeApi';
import { toCarouselProduct } from '@/lib/productUtils';
import {
  getAllProducts,
  getProductById,
  getProductBySlug,
  getFilteredProducts,
  paginateProducts,
  getRelatedProducts,
  getProductsByBrand,
  homepageData,
} from '@/data/products';

const DEFAULT_DELAY = 300;

export async function getProducts(filters = {}, page = 1, perPage = 12) {
  return fakeApi(() => {
    const filtered = getFilteredProducts(getAllProducts(), filters);
    const result = paginateProducts(filtered, page, perPage);
    return {
      ...result,
      products: result.products.map(p => ({ ...p, inStock: p.stock > 0 })),
    };
  }, DEFAULT_DELAY);
}

export async function getProductBySlugService(slug) {
  return fakeApi(() => {
    const product = getProductBySlug(slug);
    if (!product) return null;
    return { ...product, inStock: product.stock > 0 };
  }, DEFAULT_DELAY);
}

export async function getProductByIdService(id) {
  return fakeApi(() => {
    const product = getProductById(id);
    if (!product) return null;
    return { ...product, inStock: product.stock > 0 };
  }, DEFAULT_DELAY);
}

export async function searchProducts(query, limit = 20) {
  return fakeApi(() => {
    const filtered = getFilteredProducts(getAllProducts(), { query });
    return filtered.slice(0, limit).map(p => ({ ...p, inStock: p.stock > 0 }));
  }, DEFAULT_DELAY);
}

export async function getFeaturedProducts(limit = 10) {
  return fakeApi(
    () =>
      getFilteredProducts(getAllProducts(), { featured: true })
        .slice(0, limit)
        .map(toCarouselProduct),
    DEFAULT_DELAY,
  );
}

export async function getBestSellers(limit = 10) {
  return fakeApi(
    () =>
      getFilteredProducts(getAllProducts(), { bestSeller: true, sortBy: 'best-sale' })
        .slice(0, limit)
        .map(toCarouselProduct),
    DEFAULT_DELAY,
  );
}

export async function getNewArrivals(limit = 10) {
  return fakeApi(
    () =>
      getFilteredProducts(getAllProducts(), { newArrival: true, sortBy: 'new-arrival' })
        .slice(0, limit)
        .map(toCarouselProduct),
    DEFAULT_DELAY,
  );
}

export async function getFlashSaleProducts(limit = 10) {
  return fakeApi(
    () =>
      getFilteredProducts(getAllProducts(), { isFlashSale: true })
        .slice(0, limit)
        .map(toCarouselProduct),
    DEFAULT_DELAY,
  );
}

export async function getComboOffers(limit = 10) {
  return fakeApi(
    () =>
      getFilteredProducts(getAllProducts(), { isCombo: true })
        .slice(0, limit)
        .map(toCarouselProduct),
    DEFAULT_DELAY,
  );
}

export async function getBogoProducts(limit = 10) {
  return fakeApi(
    () =>
      getFilteredProducts(getAllProducts(), { isBogo: true })
        .slice(0, limit)
        .map(toCarouselProduct),
    DEFAULT_DELAY,
  );
}

export async function getBoishakhiProducts(group = 'cleansers', limit = 10) {
  return fakeApi(
    () =>
      getFilteredProducts(getAllProducts(), { boishakhiGroup: group })
        .slice(0, limit)
        .map(p => ({
          ...toCarouselProduct(p),
          category: p.subcategory,
        })),
    DEFAULT_DELAY,
  );
}

export async function getSkinTypeProducts(skinType = 'oily', limit = 10) {
  return fakeApi(
    () =>
      getFilteredProducts(getAllProducts(), { skinType })
        .slice(0, limit)
        .map(p => ({
          ...toCarouselProduct(p),
          category: skinType.charAt(0).toUpperCase() + skinType.slice(1),
        })),
    DEFAULT_DELAY,
  );
}

export async function getTrendingProducts(limit = 8) {
  return fakeApi(
    () =>
      getFilteredProducts(getAllProducts(), { sortBy: 'best-sale' })
        .slice(0, limit)
        .map(toCarouselProduct),
    DEFAULT_DELAY,
  );
}

export async function getRelatedProductsService(productId, limit = 8) {
  return fakeApi(
    () =>
      getRelatedProducts(productId, limit).map(p => ({
        ...p,
        inStock: p.stock > 0,
      })),
    DEFAULT_DELAY,
  );
}

export async function getBrandProductsService(brand, excludeId, limit = 8) {
  return fakeApi(
    () =>
      getProductsByBrand(brand, excludeId, limit).map(p => ({
        ...p,
        inStock: p.stock > 0,
      })),
    DEFAULT_DELAY,
  );
}

export async function getSearchBrands() {
  return fakeApi(() => [...new Set(getAllProducts().map(p => p.brand))].sort(), 150);
}

export async function getSearchFilters() {
  return fakeApi(() => homepageData.searchFilters, 150);
}

export async function getSearchCategories() {
  return fakeApi(
    () => getAllProducts().reduce((acc, p) => {
      const cat = p.subcategory;
      if (!acc.includes(cat)) acc.push(cat);
      return acc;
    }, []).slice(0, 12),
    150,
  );
}
