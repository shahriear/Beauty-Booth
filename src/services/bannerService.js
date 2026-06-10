import { fakeApi } from '@/lib/fakeApi';
import { getFeaturedVideos, homepageData } from '@/data/products';

const DEFAULT_DELAY = 300;

export async function getHeroBanners() {
  return fakeApi(() => homepageData.heroBanners, DEFAULT_DELAY);
}

export async function getTrendingBanners() {
  return fakeApi(() => homepageData.trendingBanners, DEFAULT_DELAY);
}

export async function getExclusiveAccessoriesBanners() {
  return fakeApi(() => homepageData.exclusiveAccessoriesBanners, DEFAULT_DELAY);
}

export async function getFeaturedVideosService() {
  return fakeApi(() => getFeaturedVideos(), DEFAULT_DELAY);
}

export async function getOutletGallery() {
  return fakeApi(() => homepageData.outletGallery, DEFAULT_DELAY);
}
