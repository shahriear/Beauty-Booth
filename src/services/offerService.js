import { fakeApi } from '@/lib/fakeApi';
import { homepageData } from '@/data/products';

const DEFAULT_DELAY = 300;

export async function getPromoOffers() {
  return fakeApi(() => homepageData.promoOffers, DEFAULT_DELAY);
}

export async function getBestOfferBrands() {
  return fakeApi(() => homepageData.bestOfferBrands, DEFAULT_DELAY);
}

export async function getFreeDeliveryOffers() {
  return fakeApi(() => homepageData.freeDeliveryOffers, DEFAULT_DELAY);
}

export async function getFlatSalesOffers() {
  return fakeApi(() => homepageData.flatSalesOffers, DEFAULT_DELAY);
}

export async function getCustomerReviews() {
  return fakeApi(() => homepageData.customerReviews, DEFAULT_DELAY);
}

export async function getFooterContact() {
  return fakeApi(() => homepageData.footerContact, 150);
}

export async function getFooterLinks() {
  return fakeApi(() => homepageData.footerLinks, 150);
}

export async function getPopularSearches() {
  return fakeApi(() => homepageData.popularSearches, 150);
}
