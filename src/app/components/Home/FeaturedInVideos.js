'use client';
import { useEffect, useRef, useState } from 'react';
import { Play, Pause, Volume2, VolumeX } from 'lucide-react';
import VideoProductModal from '@/app/components/Home/video/VideoProductModal';

function VideoProductSlider({ featuredVideos }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isMuted, setIsMuted] = useState(true);
  const [isPlaying, setIsPlaying] = useState(true);
  const [dragX, setDragX] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  // selectedVideo;

  const dragRef = useRef(null);
  const videoRefs = useRef([]);
  const intervalRef = useRef(null);

  const [showControls, setShowControls] = useState(false);

  const [selectedVideo, setSelectedVideo] = useState(null);

  // =========================
  // AUTO SLIDE
  // =========================
  useEffect(() => {
    clearInterval(intervalRef.current);

    intervalRef.current = setInterval(() => {
      if (dragRef.current) return;

      setActiveIndex(prev => (prev + 1) % featuredVideos.length);
      setIsPlaying(true);
    }, 4600);

    return () => clearInterval(intervalRef.current);
  }, [featuredVideos.length]);

  // =========================
  // DRAG HANDLERS
  // =========================
  useEffect(() => {
    const onMove = e => {
      if (!dragRef.current) return;
      setDragX(e.clientX - dragRef.current.startX);
    };

    const onUp = () => {
      if (!dragRef.current) return;

      const threshold = 80;
      const delta = dragRef.current.lastX;

      if (Math.abs(delta) > threshold) {
        setActiveIndex(prev =>
          delta < 0
            ? (prev + 1) % featuredVideos.length
            : (prev - 1 + featuredVideos.length) % featuredVideos.length,
        );
      }

      dragRef.current = null;
      setIsDragging(false);
      setDragX(0);
    };

    window.addEventListener('mousemove', onMove);
    window.addEventListener('mouseup', onUp);

    return () => {
      window.removeEventListener('mousemove', onMove);
      window.removeEventListener('mouseup', onUp);
    };
  }, [featuredVideos.length]);

  useEffect(() => {
    if (dragRef.current) {
      dragRef.current.lastX = dragX;
    }
  }, [dragX]);

  // =========================
  // VIDEO CONTROL (ONLY ACTIVE)
  // =========================
  useEffect(() => {
    videoRefs.current.forEach((video, i) => {
      if (!video) return;

      if (i === activeIndex) {
        video.muted = isMuted;

        if (isPlaying) {
          video.play().catch(() => {});
        } else {
          video.pause();
        }
      } else {
        video.pause();
        video.currentTime = 0;
        video.muted = true;
      }
    });
  }, [activeIndex, isMuted, isPlaying]);

  // =========================
  // POSITION CALCULATION
  // =========================
  const getDistance = index => {
    const len = featuredVideos.length;
    let dist = index - activeIndex;

    if (dist > len / 2) dist -= len;
    if (dist < -len / 2) dist += len;

    return dist;
  };

  const getStyle = index => {
    const dist = getDistance(index);
    const abs = Math.abs(dist);

    const scale = Math.max(0.55, 1 - abs * 0.14);
    const x = dist * 180 + dragX;
    const y = abs * 5;

    return {
      transform: `translateX(${x}px) translateY(${y}px) scale(${scale})`,
      zIndex: 10 - abs,
      opacity: abs > 3 ? 0 : 1,
      transition: isDragging ? 'none' : '0.3s ease',
    };
  };

  // =========================
  // PLAY / PAUSE
  // =========================
  // const togglePlay = () => {
  //   setIsPlaying(p => !p);
  // };
  const togglePlay = () => {
    setIsPlaying(p => !p);

    setShowControls(true);

    setTimeout(() => {
      setShowControls(false);
    }, 900);
  };
  const toggleMute = () => {
    setIsMuted(m => !m);
  };

  // =========================
  // DRAG START
  // =========================
  const onMouseDown = e => {
    if (e.target.closest('button')) return;

    dragRef.current = {
      startX: e.clientX,
      lastX: 0,
    };

    setIsDragging(true);
  };
  const openVideoModal = video => {
    setSelectedVideo(video);
  };

  const closeVideoModal = () => {
    setSelectedVideo(null);
  };

  return (
    <section className="featured-videos section wide">
      <div className="featured-videos-head">
        <h3 className="text-3xl font-bold">Featured In Videos</h3>
      </div>

      <div className="video-stage">
        {featuredVideos.map((video, i) => (
          <article
            key={video.videoSrc}
            className={`video-card ${isDragging ? 'dragging' : ''} ${
              i === activeIndex ? 'active' : ''
            }`}
            style={getStyle(i)}
            onMouseDown={onMouseDown}
          >
            <div className="video-frame">
              <video
                ref={el => (videoRefs.current[i] = el)}
                src={video.videoSrc}
                loop
                playsInline
                muted
                className="video-media"
                onClick={togglePlay}
              />

              {i === activeIndex && (
                <>
                  {(showControls || !isPlaying) && (
                    <button
                      className="video-play flex justify-center items-center"
                      onClick={togglePlay}
                    >
                      {isPlaying ? <Pause size={26} /> : <Play size={26} />}
                    </button>
                  )}

                  <button
                    className="video-mute flex justify-center items-center"
                    onClick={toggleMute}
                  >
                    {isMuted ? <VolumeX size={22} /> : <Volume2 size={22} />}
                  </button>
                </>
              )}
            </div>

            <div
              className="video-product-row"
              onClick={() => openVideoModal(video)}
            >
              {/* <div className="video-product-meta">
                <img src={video.productImage} alt={video.productName} />
                <div>
                  <p>{video.category}</p>
                  <p>
                    {video.price} <s>{video.oldPrice}</s>
                  </p>
                </div>
              </div> */}
              <div className="video-product-meta">
                {video.productImage ? (
                  <img src={video.productImage} alt={video.productName} />
                ) : (
                  <div className="img-placeholder">No Image</div>
                )}

                <div>
                  <p>{video.category}</p>
                  <p className="font-bold">
                    ৳ {video.price} <s>{video.oldPrice}</s>
                  </p>
                </div>
              </div>

              <span>→</span>
            </div>
          </article>
        ))}
      </div>
      <VideoProductModal
        selectedVideo={selectedVideo}
        closeVideoModal={closeVideoModal}
      />
    </section>
  );
}

export default VideoProductSlider;

// 'use client';

// import { Swiper, SwiperSlide } from 'swiper/react';
// import { EffectCoverflow } from 'swiper/modules';

// import { Volume2, VolumeX, Pause, Play, ShoppingBag } from 'lucide-react';

// import 'swiper/css';
// import 'swiper/css/effect-coverflow';

// import { useEffect, useRef, useState, useCallback } from 'react';

// export default function VideoProductSlider() {
//   const swiperRef = useRef(null);
//   const videoRefs = useRef([]);
//   const autoSlideRef = useRef(null);

//   const [activeIndex, setActiveIndex] = useState(0);
//   const [isMuted, setIsMuted] = useState(true);
//   const [isHovered, setIsHovered] = useState(false);
//   const [isPlaying, setIsPlaying] = useState(true);

//   const items = [
//     { video: '/Videos/Videos-1.mp4', name: 'Luxury Face Serum', price: '$25' },
//     { video: '/Videos/Videos-2.mp4', name: 'Glow Cream', price: '$18' },
//     { video: '/Videos/Videos-3.mp4', name: 'Skin Toner', price: '$12' },
//     { video: '/Videos/Videos-4.mp4', name: 'Premium Care', price: '$30' },
//     { video: '/Videos/Videos-5.mp4', name: 'Beauty Oil', price: '$15' },
//     { video: '/Videos/Videos-6.mp4', name: 'Luxury Mask', price: '$20' },
//     { video: '/Videos/Videos-7.mp4', name: 'Skin Essentials', price: '$22' },
//   ];

//   // =========================================
//   // PLAY ONLY ACTIVE VIDEO (NO DUPLICATE SOUND)
//   // =========================================
//   const playActiveVideo = useCallback(() => {
//     videoRefs.current.forEach((video, i) => {
//       if (!video) return;

//       if (i === activeIndex) {
//         video.muted = isMuted;

//         const playPromise = video.play();
//         if (playPromise !== undefined) {
//           playPromise.catch(() => {});
//         }
//       } else {
//         video.pause();
//         video.currentTime = 0;
//         video.muted = true;
//       }
//     });

//     setIsPlaying(true);
//   }, [activeIndex, isMuted]);

//   // play on slide change
//   useEffect(() => {
//     playActiveVideo();
//   }, [playActiveVideo]);

//   // =========================================
//   // PLAY / PAUSE ACTIVE VIDEO
//   // =========================================
//   const togglePlayPause = () => {
//     const video = videoRefs.current[activeIndex];
//     if (!video) return;

//     if (video.paused) {
//       video.play();
//       setIsPlaying(true);
//     } else {
//       video.pause();
//       setIsPlaying(false);
//     }
//   };

//   // =========================================
//   // MUTE CONTROL
//   // =========================================
//   useEffect(() => {
//     const video = videoRefs.current[activeIndex];
//     if (video) video.muted = isMuted;
//   }, [isMuted, activeIndex]);

//   // =========================================
//   // CLEAN AUTO SLIDE (SMOOTH)
//   // =========================================
//   useEffect(() => {
//     clearInterval(autoSlideRef.current);

//     if (!isHovered) {
//       autoSlideRef.current = setInterval(() => {
//         swiperRef.current?.slideNext();
//       }, 3500); // smooth timing
//     }

//     return () => clearInterval(autoSlideRef.current);
//   }, [isHovered]);

//   // =========================================
//   // CLEANUP
//   // =========================================
//   useEffect(() => {
//     return () => {
//       clearInterval(autoSlideRef.current);

//       videoRefs.current.forEach(video => {
//         if (video) video.pause();
//       });
//     };
//   }, []);

//   return (
//     <div className="w-full py-16 overflow-hidden bg-white">
//       <Swiper
//         modules={[EffectCoverflow]}
//         effect="coverflow"
//         centeredSlides
//         loop
//         speed={1200}
//         slidesPerView={3.0}
//         onSwiper={swiper => (swiperRef.current = swiper)}
//         onSlideChange={swiper => setActiveIndex(swiper.realIndex)}
//         coverflowEffect={{
//           rotate: 0,
//           stretch: 0,
//           depth: 200,
//           modifier: 2.5,
//           slideShadows: false,
//           scale: 0.9,
//         }}
//         breakpoints={{
//           320: { slidesPerView: 1.2 },
//           768: { slidesPerView: 2 },
//           1200: { slidesPerView: 2.7 },
//         }}
//         className="!overflow-visible"
//       >
//         {items.map((item, i) => {
//           const isActive = i === activeIndex;

//           return (
//             <SwiperSlide key={i}>
//               <div
//                 className={`transition-all duration-700 ${
//                   isActive
//                     ? 'scale-100 opacity-100'
//                     : 'scale-[1.60] opacity-70 blur-[1px]'
//                 }`}
//                 onMouseEnter={() => setIsHovered(true)}
//                 onMouseLeave={() => setIsHovered(false)}
//               >
//                 <div className="relative mx-auto max-w-[240px] aspect-[9/16] rounded-[34px] overflow-hidden bg-black ">
//                   {/* VIDEO */}
//                   <video
//                     ref={el => (videoRefs.current[i] = el)}
//                     src={item.video}
//                     playsInline
//                     autoPlay
//                     loop
//                     muted
//                     preload="metadata"
//                     className="w-full h-full object-cover cursor-grab"
//                     onClick={togglePlayPause}
//                   />

//                   {/* OVERLAY */}
//                   <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />

//                   {/* PLAY / PAUSE */}
//                   {isActive && (
//                     <button
//                       onClick={togglePlayPause}
//                       className="absolute inset-0 flex items-center justify-center"
//                     >
//                       <div className=" rounded-full p-10  transition hover:scale-110">
//                         {isPlaying ? (
//                           <Pause size={36} className="text-white hidden" />
//                         ) : (
//                           <Play
//                             size={36}
//                             className="text-white bg-white/20 backdrop-blur-md rounded-full"
//                           />
//                         )}
//                       </div>
//                     </button>
//                   )}

//                   {/* MUTE */}
//                   {isActive && (
//                     <button
//                       onClick={() => setIsMuted(p => !p)}
//                       className="absolute top-5 right-5 w-11 h-11 rounded-full bg-black/40 flex items-center justify-center text-white"
//                     >
//                       {isMuted ? <VolumeX size={18} /> : <Volume2 size={18} />}
//                     </button>
//                   )}

//                   {/* PRODUCT INFO */}
//                   {isActive && (
//                     <div className="absolute bottom-0 left-0 w-full p-6">
//                       <div className="flex justify-between items-end">
//                         <div>
//                           <h3 className="text-white text-2xl font-semibold">
//                             {item.name}
//                           </h3>
//                           <p className="text-white/80 mt-1">{item.price}</p>
//                         </div>

//                         <button className="bg-white text-black px-5 py-3 rounded-full flex items-center gap-2">
//                           <ShoppingBag size={16} />
//                           Shop
//                         </button>
//                       </div>
//                     </div>
//                   )}
//                 </div>
//               </div>
//             </SwiperSlide>
//           );
//         })}
//       </Swiper>
//     </div>
//   );
// }
// --===============================================================
// import { useEffect, useRef, useState } from 'react';

// function FeaturedVideosSection({ featuredVideos }) {
//   const [activeVideoIndex, setActiveVideoIndex] = useState(0);
//   const [isMuted, setIsMuted] = useState(true);
//   const [isPlaying, setIsPlaying] = useState(true);
//   const [dragOffsetX, setDragOffsetX] = useState(0);
//   const [isDraggingVideos, setIsDraggingVideos] = useState(false);
//   const dragStateRef = useRef(null);
//   const videoRefs = useRef([]);

//   useEffect(() => {
//     const slideTimer = window.setInterval(() => {
//       if (dragStateRef.current) {
//         return;
//       }
//       setActiveVideoIndex(current => (current + 1) % featuredVideos.length);
//       setIsPlaying(true);
//     }, 2600);

//     return () => window.clearInterval(slideTimer);
//   }, [featuredVideos.length]);

//   useEffect(() => {
//     const handleMouseMove = event => {
//       const dragState = dragStateRef.current;
//       if (!dragState) {
//         return;
//       }

//       setDragOffsetX(event.clientX - dragState.startX);
//     };

//     const handleMouseUp = () => {
//       const dragState = dragStateRef.current;
//       if (!dragState) {
//         return;
//       }

//       const threshold = 80;
//       const totalDragX = dragState.lastDragX;

//       if (Math.abs(totalDragX) > threshold) {
//         setActiveVideoIndex(current => {
//           if (totalDragX < 0) {
//             return (current + 1) % featuredVideos.length;
//           }
//           return (current - 1 + featuredVideos.length) % featuredVideos.length;
//         });
//       }

//       dragStateRef.current = null;
//       setIsDraggingVideos(false);
//       setDragOffsetX(0);
//     };

//     window.addEventListener('mousemove', handleMouseMove);
//     window.addEventListener('mouseup', handleMouseUp);

//     return () => {
//       window.removeEventListener('mousemove', handleMouseMove);
//       window.removeEventListener('mouseup', handleMouseUp);
//     };
//   }, [featuredVideos.length]);

//   useEffect(() => {
//     if (dragStateRef.current) {
//       dragStateRef.current.lastDragX = dragOffsetX;
//     }
//   }, [dragOffsetX]);

//   useEffect(() => {
//     videoRefs.current.forEach((videoEl, index) => {
//       if (!videoEl) {
//         return;
//       }

//       if (index === activeVideoIndex) {
//         videoEl.muted = isMuted;
//         if (isPlaying) {
//           videoEl.play().catch(() => {});
//         } else {
//           videoEl.pause();
//         }
//         return;
//       }

//       videoEl.pause();
//       videoEl.currentTime = 0;
//       videoEl.muted = true;
//     });
//   }, [activeVideoIndex, isMuted, isPlaying]);

//   const getCircularDistance = index => {
//     const length = featuredVideos.length;
//     let distance = index - activeVideoIndex;
//     if (distance > length / 2) distance -= length;
//     if (distance < -length / 2) distance += length;
//     return distance;
//   };

//   const getVideoCardStyle = index => {
//     const distance = getCircularDistance(index);
//     const absDistance = Math.abs(distance);
//     const isHidden = absDistance > 3;
//     const scale = Math.max(0.56, 1 - absDistance * 0.13);
//     const offsetX = distance * 205 + dragOffsetX;
//     const offsetY = absDistance * 24;
//     const zIndex = 100 - absDistance;

//     return {
//       transform: `translateX(${offsetX}px) translateY(${offsetY}px) scale(${scale})`,
//       zIndex,
//       opacity: isHidden ? 0 : 1,
//       pointerEvents: 'auto',
//       transition: isDraggingVideos ? 'none' : undefined,
//     };
//   };

//   const handlePlayPause = () => {
//     setIsPlaying(current => !current);
//   };

//   const handleMuteToggle = () => {
//     setIsMuted(current => !current);
//   };

//   const handleVideoMouseDown = event => {
//     if (event.target.closest('button')) {
//       return;
//     }

//     dragStateRef.current = {
//       startX: event.clientX,
//       lastDragX: 0,
//     };
//     setIsDraggingVideos(true);
//   };

//   return (
//     <section className="featured-videos section wide">
//       <div className="featured-videos-head">
//         <h3>Featured In Videos</h3>
//       </div>
//       <div className="video-stage">
//         {featuredVideos.map((video, index) => (
//           <article
//             className={`video-card ${isDraggingVideos ? 'dragging' : ''}`}
//             key={video.videoSrc}
//             style={getVideoCardStyle(index)}
//             onMouseDown={handleVideoMouseDown}
//           >
//             <div className="video-frame">
//               <video
//                 src={video.videoSrc}
//                 loop
//                 playsInline
//                 preload="metadata"
//                 muted={index === activeVideoIndex ? isMuted : true}
//                 ref={element => {
//                   videoRefs.current[index] = element;
//                 }}
//                 className="video-media"
//               />
//               {index === activeVideoIndex && (
//                 <>
//                   <button
//                     type="button"
//                     className="video-play"
//                     aria-label={isPlaying ? 'Pause video' : 'Play video'}
//                     onClick={handlePlayPause}
//                   >
//                     {isPlaying ? '❚❚' : '▶'}
//                   </button>
//                   <button
//                     type="button"
//                     className="video-mute"
//                     aria-label={isMuted ? 'Turn sound on' : 'Turn sound off'}
//                     onClick={handleMuteToggle}
//                   >
//                     {isMuted ? '🔇' : '🔊'}
//                   </button>
//                 </>
//               )}
//             </div>
//             <div className="video-product-row">
//               <div className="video-product-meta">
//                 <img src={video.productImage} alt={video.productName} />
//                 <div>
//                   <p className="video-product-category">{video.category}</p>
//                   <p className="video-product-price">
//                     {video.price} <s>{video.oldPrice}</s>
//                   </p>
//                 </div>
//               </div>
//               <span className="video-arrow">→</span>
//             </div>
//           </article>
//         ))}
//       </div>
//     </section>
//   );
// }

// export default FeaturedVideosSection;
