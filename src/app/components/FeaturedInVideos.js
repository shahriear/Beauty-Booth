'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow } from 'swiper/modules';
import { ArrowRight, Volume2, VolumeX, Pause, Play } from 'lucide-react';

import 'swiper/css';
import 'swiper/css/effect-coverflow';

import { useEffect, useRef, useState } from 'react';

export default function VideoProductSlider() {
  const swiperRef = useRef(null);
  const videoRefs = useRef([]);

  const [activeIndex, setActiveIndex] = useState(0);
  const [isMuted, setIsMuted] = useState(true);
  const [isPlaying, setIsPlaying] = useState(true);

  const items = [
    {
      video: '/images/Videos/Videos-1.mp4',
      img: '/images/p1.jpg',
      name: 'Luxury Face Serum',
      price: '$25',
    },
    {
      video: '/images/Videos/Videos-2.mp4',
      img: '/images/p2.jpg',
      name: 'Glow Cream',
      price: '$18',
    },
    {
      video: '/images/Videos/Videos-3.mp4',
      img: '/images/p3.jpg',
      name: 'Skin Toner',
      price: '$12',
    },
    {
      video: '/images/Videos/Videos-2.mp4',
      img: '/images/p4.jpg',
      name: 'Vitamin C Serum',
      price: '$30',
    },
  ];

  // 🔥 loop fix
  const loopItems = [...items, ...items, ...items];

  // 🎯 real index fix
  const realActiveIndex = activeIndex % items.length;

  // 🎯 CONTROL ACTIVE VIDEO (NO RESET HERE)
  useEffect(() => {
    videoRefs.current.forEach((video, i) => {
      if (!video) return;

      const isActive = i % items.length === realActiveIndex;

      if (isActive) {
        video.muted = isMuted;

        if (isPlaying) {
          video.play().catch(() => {});
        } else {
          video.pause();
        }

        video.onended = () => swiperRef.current?.slideNext();
      } else {
        video.pause();
        video.currentTime = 0; // only inactive reset
      }
    });
  }, [realActiveIndex, isMuted, isPlaying]);

  return (
    <div className="w-full py-12">
      <Swiper
        modules={[EffectCoverflow]}
        effect="coverflow"
        centeredSlides
        slidesPerView={2.7}
        loop={true}
        loopAdditionalSlides={items.length}
        onSwiper={swiper => (swiperRef.current = swiper)}
        onSlideChange={swiper => {
          setActiveIndex(swiper.realIndex);

          const activeVideo = videoRefs.current[swiper.activeIndex];
          if (activeVideo) activeVideo.currentTime = 0;
        }}
        coverflowEffect={{
          rotate: 0,
          depth: 200,
          modifier: 2.5,
          slideShadows: false,
        }}
      >
        {loopItems.map((item, i) => {
          const isActive = i % items.length === realActiveIndex;

          return (
            <SwiperSlide key={i}>
              <div
                className={`transition-all duration-500 ${
                  isActive ? 'scale-110 z-20' : 'scale-90 opacity-100 '
                }`}
              >
                <div className="relative rounded-3xl overflow-hidden group aspect-[6/12] max-h-[500px] mx-ato ">
                  {/*  VIDEO */}
                  <video
                    ref={el => (videoRefs.current[i] = el)}
                    src={item.video}
                    playsInline
                    muted={isMuted}
                    className="w-full h-full object-contain "
                  />

                  {/* 🌑 DARK OVERLAY */}
                  <div
                    className={`absolute inset-0 transition ${
                      isActive ? 'bg-black/10' : 'bg-black/40'
                    }`}
                  />

                  {/* 🎮 CONTROLS */}
                  {isActive && (
                    <div className="absolute top-4 right-4 flex gap-2 z-10">
                      <button
                        onClick={() => setIsPlaying(p => !p)}
                        className="bg-white/20 backdrop-blur-md hover:bg-white/40 text-white p-2 rounded-full transition"
                      >
                        {isPlaying ? <Pause size={16} /> : <Play size={16} />}
                      </button>

                      <button
                        onClick={() => setIsMuted(m => !m)}
                        className="bg-white/20 backdrop-blur-md hover:bg-white/40 text-white p-2 rounded-full transition"
                      >
                        {isMuted ? (
                          <VolumeX size={16} />
                        ) : (
                          <Volume2 size={16} />
                        )}
                      </button>
                    </div>
                  )}

                  {/* 🛍 GLASS PRODUCT CARD */}
                  <div className="absolute bottom-4 left-4 right-4 z-10">
                    <div className="flex items-center justify-between bg-white/20 backdrop-blur-lg rounded-xl px-4 py-3 border border-white/20">
                      <div className="flex items-center gap-3">
                        <img
                          src={item.img}
                          className="w-10 h-10 rounded-full border border-white"
                        />
                        <div>
                          <h3 className="text-white text-sm font-semibold">
                            {item.name}
                          </h3>
                          <p className="text-xs text-gray-200">{item.price}</p>
                        </div>
                      </div>

                      <button className="p-2 rounded-full bg-white text-black hover:scale-110 transition">
                        <ArrowRight size={16} />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
}
