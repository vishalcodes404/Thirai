'use client';
import { useState, useRef, useEffect } from 'react';
import { SITE } from '@/lib/siteData';

export default function Hero() {
  const [videoLoaded, setVideoLoaded] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const videoRef = useRef(null);
  const isDirectVideo = SITE.hero?.videoUrl?.match(/\.(mp4|webm|mov)(\?.*)?$/i);

  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      video.setAttribute('playsinline', '');
      video.setAttribute('webkit-playsinline', '');
      video.defaultMuted = true;
      video.muted = true;
      const playPromise = video.play();
      if (playPromise !== undefined) {
        playPromise
          .then(() => setVideoLoaded(true))
          .catch(() => {
            // Autoplay permitted once user interacts on mobile
            const onTouch = () => {
              video.play().then(() => setVideoLoaded(true)).catch(() => {});
              window.removeEventListener('touchstart', onTouch);
            };
            window.addEventListener('touchstart', onTouch, { once: true, passive: true });
          });
      }
    }
  }, []);

  const toggleSound = () => {
    if (videoRef.current) {
      const nextMuted = !videoRef.current.muted;
      videoRef.current.muted = nextMuted;
      if (!nextMuted) {
        videoRef.current.play().catch(() => {});
      }
      setIsMuted(nextMuted);
    }
  };

  const scrollToApproach = (e) => {
    e.preventDefault();
    const elem = document.getElementById('approach');
    if (elem) {
      elem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="hero-cinema" aria-label="THIRAI Cinematic Presentation">
      {/* Full-bleed Cinematic Media Container */}
      <div className="hero-cinema__media">
        {/* Cinematic Fallback & Ambience Still with Slow Ken Burns Motion */}
        <div
          className={`hero-cinema__backdrop ${videoLoaded ? 'is-faded' : ''}`}
          style={{
            backgroundImage: `url(${SITE.hero.image || '/images/films/film-thumbnail.jpg'})`,
          }}
          aria-hidden="true"
        />

        {/* Video stream with maximum native quality */}
        {isDirectVideo ? (
          <video
            ref={videoRef}
            src={SITE.hero.videoUrl}
            autoPlay
            muted
            loop
            playsInline
            webkit-playsinline="true"
            x5-playsinline="true"
            controls={false}
            disablePictureInPicture
            disableRemotePlayback
            preload="auto"
            onLoadedData={() => setVideoLoaded(true)}
            onCanPlay={() => setVideoLoaded(true)}
            className="hero-cinema__video"
          >
            <source src={SITE.hero.videoUrl} type="video/mp4" />
          </video>
        ) : SITE.hero?.videoUrl ? (
          <div className="hero-cinema__iframe-wrap">
            <iframe
              src={SITE.hero.videoUrl}
              title="THIRAI Cinematic Showreel"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              onLoad={() => setVideoLoaded(true)}
              className="hero-cinema__iframe"
            />
          </div>
        ) : null}

        {/* Top subtle vignette for transparent nav contrast */}
        <div className="hero-cinema__vignette-top" aria-hidden="true" />

        {/* Bottom Dark Fade transitioning seamlessly into #050505 & flowing silk canvas */}
        <div className="hero-cinema__fade-bottom" aria-hidden="true" />
      </div>

      {/* Memory Writers Style: Pure Unobstructed View with Minimal Lower Third & Explore Indicator */}
      <div className="hero-cinema__content">
        <div className="hero-cinema__spacer" />

        <div className="hero-cinema__bottom-bar">
          <div className="hero-cinema__caption">
            <span className="hero-cinema__atelier-badge">THIRAI ATELIER</span>
            <p className="hero-cinema__atelier-sub">CINEMATIC WEDDING LEGACIES</p>
            {isDirectVideo && (
              <button
                type="button"
                onClick={toggleSound}
                className="hero-cinema__sound-toggle"
                aria-label={isMuted ? 'Turn sound on' : 'Mute sound'}
              >
                <span className="hero-cinema__sound-icon" aria-hidden="true">
                  {isMuted ? (
                    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" />
                      <line x1="23" y1="9" x2="17" y2="15" />
                      <line x1="17" y1="9" x2="23" y2="15" />
                    </svg>
                  ) : (
                    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" />
                      <path d="M15.54 8.46a5 5 0 0 1 0 7.07" />
                      <path d="M19.07 4.93a10 10 0 0 1 0 14.14" />
                    </svg>
                  )}
                </span>
                <span className="hero-cinema__sound-label">
                  {isMuted ? 'SOUND OFF' : 'SOUND ON'}
                </span>
              </button>
            )}
          </div>

          <a
            href="#approach"
            onClick={scrollToApproach}
            className="hero-cinema__scroll"
            aria-label="Scroll to explore"
          >
            <span className="hero-cinema__scroll-label">EXPLORE</span>
            <div className="hero-cinema__scroll-line">
              <span className="hero-cinema__scroll-dot" />
            </div>
          </a>
        </div>
      </div>
    </section>
  );
}
