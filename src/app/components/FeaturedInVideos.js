'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow } from 'swiper/modules';
import { Volume2, VolumeX, Pause, Play, ShoppingBag } from 'lucide-react';

import 'swiper/css';
import 'swiper/css/effect-coverflow';

import { useEffect, useRef, useState, useCallback } from 'react';

export default function VideoProductSlider() {
  const swiperRef = useRef(null);
  const videoRefs = useRef([]);
  const autoSlideRef = useRef(null);
  const playingVideoIndexRef = useRef(null);
  const isPlayingStateRef = useRef(false);

  const [activeIndex, setActiveIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const [isHovered, setIsHovered] = useState(false);

  const items = [
    {
      video: '/Videos/Videos-1.mp4',
      name: 'Luxury Face Serum',
      price: '$25',
    },
    {
      video: '/Videos/Videos-2.mp4',
      name: 'Glow Cream',
      price: '$18',
    },
    {
      video: '/Videos/Videos-3.mp4',
      name: 'Skin Toner',
      price: '$12',
    },
    {
      video: '/Videos/Videos-4.mp4',
      name: 'Premium Care',
      price: '$30',
    },
    {
      video: '/Videos/Videos-5.mp4',
      name: 'Beauty Oil',
      price: '$15',
    },
    {
      video: '/Videos/Videos-6.mp4',
      name: 'Luxury Mask',
      price: '$20',
    },
    {
      video: '/Videos/Videos-7.mp4',
      name: 'Skin Essentials',
      price: '$22',
    },
  ];

  const loopItems = [...items, ...items, ...items];
  const realActiveIndex = activeIndex % items.length;

  // ====================================
  // STOP ALL VIDEOS - Complete cleanup
  // ====================================
  const stopAllVideos = useCallback(() => {
    videoRefs.current.forEach(video => {
      if (video) {
        video.pause();
        video.currentTime = 0;
        video.muted = true;
      }
    });
    playingVideoIndexRef.current = null;
    isPlayingStateRef.current = false;
    setIsPlaying(false);
  }, []);

  // ====================================
  // PLAY SPECIFIC VIDEO - Exclusive playback
  // ====================================
  const playVideo = useCallback(
    index => {
      // Stop all other videos first to prevent audio overlap
      videoRefs.current.forEach((video, i) => {
        if (i !== index && video) {
          video.pause();
          video.currentTime = 0;
          video.muted = true;
        }
      });

      const video = videoRefs.current[index];
      if (!video) return;

      // Set mute state
      video.muted = isMuted;

      // Play with proper promise handling
      const playPromise = video.play();
      if (playPromise !== undefined) {
        playPromise
          .then(() => {
            playingVideoIndexRef.current = index;
            isPlayingStateRef.current = true;
            setIsPlaying(true);
          })
          .catch(err => {
            console.error('Video play failed:', err);
            isPlayingStateRef.current = false;
            setIsPlaying(false);
          });
      }
    },
    [isMuted],
  );

  // ====================================
  // PAUSE ACTIVE VIDEO
  // ====================================
  const pauseVideo = useCallback(() => {
    if (playingVideoIndexRef.current !== null) {
      const video = videoRefs.current[playingVideoIndexRef.current];
      if (video) {
        video.pause();
      }
    }
    isPlayingStateRef.current = false;
    setIsPlaying(false);
  }, []);

  // ====================================
  // TOGGLE PLAY/PAUSE
  // ====================================
  const togglePlayPause = useCallback(
    index => {
      if (isPlayingStateRef.current && playingVideoIndexRef.current === index) {
        // Pause if this video is already playing
        pauseVideo();
      } else {
        // Play this video (stops all others)
        playVideo(index);
      }
    },
    [playVideo, pauseVideo],
  );

  // ====================================
  // SYNC MUTE STATE FOR ALL VIDEOS
  // ====================================
  useEffect(() => {
    videoRefs.current.forEach((video, i) => {
      if (!video) return;

      if (i === playingVideoIndexRef.current && isPlayingStateRef.current) {
        // Only active playing video respects mute state
        video.muted = isMuted;
      } else {
        // All other videos are always muted
        video.muted = true;
      }
    });
  }, [isMuted]);

  // ====================================
  // STOP VIDEO ON SLIDE CHANGE
  // ====================================
  useEffect(() => {
    stopAllVideos();
  }, [activeIndex, stopAllVideos]);

  // ====================================
  // AUTO SLIDE EFFECT
  // ====================================
  useEffect(() => {
    clearInterval(autoSlideRef.current);

    if (!isHovered) {
      autoSlideRef.current = setInterval(() => {
        swiperRef.current?.slideNext();
      }, 3000);
    }

    return () => clearInterval(autoSlideRef.current);
  }, [isHovered]);

  // ====================================
  // CLEANUP ON UNMOUNT
  // ====================================
  useEffect(() => {
    return () => {
      clearInterval(autoSlideRef.current);
      stopAllVideos();
    };
  }, [stopAllVideos]);

  return (
    <div className="w-full py-16 overflow-hidden bg-white">
      <Swiper
        modules={[EffectCoverflow]}
        effect="coverflow"
        centeredSlides
        loop
        speed={800}
        slidesPerView={2.7}
        loopAdditionalSlides={items.length}
        onSwiper={swiper => {
          swiperRef.current = swiper;
        }}
        onSlideChange={swiper => {
          setActiveIndex(swiper.realIndex);
        }}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 180,
          modifier: 2.5,
          slideShadows: false,
          scale: 0.9,
        }}
        breakpoints={{
          320: {
            slidesPerView: 1.2,
          },
          768: {
            slidesPerView: 2,
          },
          1200: {
            slidesPerView: 2.7,
          },
        }}
        className="!overflow-visible"
      >
        {loopItems.map((item, i) => {
          const isActive = i % items.length === realActiveIndex;
          const isCurrentlyPlaying =
            isPlaying && playingVideoIndexRef.current === i;

          return (
            <SwiperSlide key={i}>
              <div
                className={`transition-all duration-700 ${
                  isActive
                    ? 'scale-100 opacity-100'
                    : 'scale-[0.82] opacity-40 blur-[1px] pointer-events-none'
                }`}
                onMouseEnter={() => isActive && setIsHovered(true)}
                onMouseLeave={() => isActive && setIsHovered(false)}
              >
                <div className="relative mx-auto max-w-[340px] aspect-[9/16] rounded-[34px] overflow-hidden bg-black shadow-[0_20px_80px_rgba(0,0,0,0.25)]">
                  {/* VIDEO */}
                  <video
                    ref={el => (videoRefs.current[i] = el)}
                    src={item.video}
                    playsInline
                    preload="metadata"
                    muted
                    className={`w-full h-full object-cover ${
                      isActive ? 'cursor-pointer' : 'pointer-events-none'
                    }`}
                    onClick={() => isActive && togglePlayPause(i)}
                  />

                  {/* OVERLAY */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />

                  {/* PLAY / PAUSE BUTTON */}
                  {isActive && isHovered && (
                    <button
                      onClick={() => togglePlayPause(i)}
                      className="absolute inset-0 z-20 flex items-center justify-center transition-opacity duration-200 hover:opacity-100"
                    >
                      <div className="bg-white/20 backdrop-blur-md border border-white/20 rounded-full p-5 transition duration-300 hover:scale-110">
                        {isCurrentlyPlaying ? (
                          <Pause size={36} className="text-white" />
                        ) : (
                          <Play
                            size={36}
                            className="text-white fill-white ml-1"
                          />
                        )}
                      </div>
                    </button>
                  )}

                  {/* MUTE BUTTON */}
                  {isActive && (
                    <button
                      onClick={() => setIsMuted(prev => !prev)}
                      className="absolute top-5 right-5 z-30 w-11 h-11 rounded-full bg-black/40 backdrop-blur-md border border-white/20 flex items-center justify-center text-white transition-transform duration-200 hover:scale-110"
                    >
                      {isMuted ? <VolumeX size={18} /> : <Volume2 size={18} />}
                    </button>
                  )}

                  {/* PRODUCT INFO */}
                  {isActive && (
                    <div className="absolute bottom-0 left-0 z-20 w-full p-6">
                      <div className="flex items-end justify-between gap-4">
                        <div>
                          <h3 className="text-white text-2xl font-semibold">
                            {item.name}
                          </h3>

                          <p className="text-white/80 mt-1 text-lg">
                            {item.price}
                          </p>
                        </div>

                        <button className="bg-white text-black px-5 py-3 rounded-full font-medium flex items-center gap-2 transition hover:scale-105">
                          <ShoppingBag size={16} />
                          Shop
                        </button>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
}
