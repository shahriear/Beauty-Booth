'use client';

import { useRef, useState } from 'react';
import { Play, Pause, Volume2, VolumeX, X } from 'lucide-react';

function VideoProductModal({ selectedVideo, closeVideoModal }) {
  const videoRef = useRef(null);

  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);

  const [showControls, setShowControls] = useState(true);
  

  if (!selectedVideo) return null;

  // =========================
  // PLAY / PAUSE
  // =========================
  // const togglePlay = () => {
  //   const video = videoRef.current;

  //   if (!video) return;

  //   if (video.paused) {
  //     video.play();
  //     setIsPlaying(true);
  //   } else {
  //     video.pause();
  //     setIsPlaying(false);
  //   }
  // };
  const togglePlay = () => {
    const video = videoRef.current;

    if (!video) return;

    setShowControls(true);

    if (video.paused) {
      video.play();
      setIsPlaying(true);
    } else {
      video.pause();
      setIsPlaying(false);
    }

    setTimeout(() => {
      if (!video.paused) {
        setShowControls(false);
      }
    }, 900);
  };

  // =========================
  // MUTE / UNMUTE
  // =========================
  const toggleMute = () => {
    const video = videoRef.current;

    if (!video) return;

    video.muted = !video.muted;

    setIsMuted(video.muted);
  };

  return (
    <div className="video-modal-overlay" onClick={closeVideoModal}>
      <div className="video-modal-container" onClick={e => e.stopPropagation()}>
        {/* CLOSE */}
        <button className="video-modal-close" onClick={closeVideoModal}>
          <X size={18} />
        </button>

        {/* LEFT VIDEO */}
        <div className="video-modal-left">
          <div className="video-modal-video-wrap">
            {/* <video
              ref={videoRef}
              src={selectedVideo.videoSrc}
              autoPlay
              loop
              playsInline
              muted
              className="video-modal-video"
            /> */}
            {/* <video
              ref={videoRef}
              src={selectedVideo.videoSrc}
              autoPlay
              loop
              playsInline
              muted
              className="video-modal-video"
              onClick={() => {
                setShowControls(true);

                setTimeout(() => {
                  if (isPlaying) {
                    setShowControls(false);
                  }
                }, 900);
              }}
            /> */}
            <div className="video-modal-video-wrap" onClick={togglePlay}>
              <video
                ref={videoRef}
                src={selectedVideo.videoSrc}
                autoPlay
                loop
                playsInline
                muted
                className="video-modal-video"
              />

              {(showControls || !isPlaying) && (
                <button className="video-modal-play">
                  {isPlaying ? <Pause size={28} /> : <Play size={28} />}
                </button>
              )}

              <button
                className="video-modal-mute"
                onClick={e => {
                  e.stopPropagation();
                  toggleMute();
                }}
              >
                {isMuted ? <VolumeX size={20} /> : <Volume2 size={20} />}
              </button>
            </div>

            {/* PLAY / PAUSE */}
            {/* <button className="video-modal-play" onClick={togglePlay}>
              {isPlaying ? <Pause size={28} /> : <Play size={28} />}
            </button> */}
            {(showControls || !isPlaying) && (
              <button className="video-modal-play" onClick={togglePlay}>
                {isPlaying ? <Pause size={28} /> : <Play size={28} />}
              </button>
            )}

            {/* MUTE */}
            <button className="video-modal-mute" onClick={toggleMute}>
              {isMuted ? <VolumeX size={20} /> : <Volume2 size={20} />}
            </button>
          </div>
        </div>

        {/* RIGHT PRODUCTS */}
        <div className="video-modal-right">
          <h4>Related Products</h4>

          <div className="related-product-card">
            <img
              src={selectedVideo.productImage}
              alt={selectedVideo.productName}
            />

            <div className="related-product-info">
              <p className="related-brand">{selectedVideo.category}</p>

              <h5>{selectedVideo.productName}</h5>

              <div className="related-price">
                <s>{selectedVideo.oldPrice}</s>
                <span>{selectedVideo.price}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default VideoProductModal;
