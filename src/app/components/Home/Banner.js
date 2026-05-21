'use client';

import Slider from 'react-slick';

const bannerImages = [
  '/images/banner-Img/banner-1.webp',
  '/images/banner-Img/banner-2.webp',
  '/images/banner-Img/banner-3.webp',
  '/images/banner-Img/banner-4.webp',
];

export default function Banner() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: true,
    draggable: true,
    touchMove: true,
  };

  return (
    <section className="px-6 py-6">
      <Slider {...settings} className="rounded-xl overflow-hidden">
        {bannerImages.map((image, index) => (
          <div key={index} className="w-full h-96 cursor-grab">
            <img
              src={image}
              alt={`Banner ${index}`}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </Slider>
    </section>
  );
}
