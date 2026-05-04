'use client';

import Carousel from './Carousel';

const bannerImages = [
  '/images/banner-Img/banner-1.webp',
  '/images/banner-Img/banner-2.webp',
  '/images/banner-Img/banner-3.webp',
];

export default function Banner() {
  return (
    <section className="px-6 py-6">
      <Carousel items={bannerImages} autoScroll={true} interval={3000} />
    </section>
  );
}
