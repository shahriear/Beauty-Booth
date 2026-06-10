import { fakeApi } from '@/lib/fakeApi';
import {
  getAllCategories,
  getCategoryData,
  getMegaMenuData,
  homepageData,
} from '@/data/products';

const DEFAULT_DELAY = 300;

export async function getCategories() {
  return fakeApi(() => getAllCategories(), DEFAULT_DELAY);
}

export async function getCategoryBySlug(slug) {
  return fakeApi(() => getCategoryData(slug), DEFAULT_DELAY);
}

export async function getTopCategories() {
  return fakeApi(() => homepageData.topCategories, DEFAULT_DELAY);
}

export async function getBestOfSkincare() {
  return fakeApi(() => homepageData.bestOfSkincare, DEFAULT_DELAY);
}

export async function getTop3OfBeauty() {
  return fakeApi(() => homepageData.top3OfBeauty, DEFAULT_DELAY);
}

export async function getBrandLogos() {
  return fakeApi(() => homepageData.brandLogos, DEFAULT_DELAY);
}

export async function getNavMenuItems() {
  return fakeApi(() => homepageData.navMenuItems, DEFAULT_DELAY);
}

export async function getMegaMenu() {
  return fakeApi(() => getMegaMenuData(), DEFAULT_DELAY);
}

export async function getMegaMenuForCategory(categoryName) {
  return fakeApi(() => homepageData.megaMenuData[categoryName] || null, DEFAULT_DELAY);
}

export async function getBoishakhiTabs() {
  return fakeApi(() => homepageData.boishakhiTabs, DEFAULT_DELAY);
}

export async function getSkinTypeTabs() {
  return fakeApi(() => homepageData.skinTypeTabs, DEFAULT_DELAY);
}

export async function getSeoContent(categoryId) {
  return fakeApi(
    () => homepageData.seoContentByCategory[categoryId] || homepageData.seoContentByCategory['skin-care'],
    DEFAULT_DELAY,
  );
}

export async function getSubcategoryImage(subcategory) {
  return fakeApi(() => homepageData.SUBCATEGORY_PLACEHOLDER, 150);
}
