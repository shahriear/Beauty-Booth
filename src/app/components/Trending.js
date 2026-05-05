'use client';

import Slider from 'react-slick';

const trendingImages = [
  '/images/TRENDING-img/trendingIMG-1.webp',
  '/images/TRENDING-img/trendingIMG-2.webp',
  '/images/TRENDING-img/trendingIMG-3.webp',
  '/images/TRENDING-img/trendingIMG-4.webp',
];

export default function Trending() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
    draggable: true,
    touchMove: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <section className="px-6 py-12 bg-gray-50">
      <div className="mb-8">
        <h2 className="text-3xl font-bold text-gray-800">TRENDING</h2>
      </div>

      <Slider {...settings} className="trending-slider">
        {trendingImages.map((image, index) => (
          <div key={index} className="px-3">
            <div className="w-full h-64 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition cursor-grab">
              <img
                src={image}
                alt={`Trending ${index}`}
                className="w-full h-full object-cover hover:scale-105 transition duration-300"
              />
            </div>
          </div>
        ))}
      </Slider>
    </section>
  );
}
