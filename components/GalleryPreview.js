'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { SITE } from '@/lib/siteData';

export default function GalleryPreview() {
  const [lightboxIndex, setLightboxIndex] = useState(null);

  const images = SITE.gallery;

  const openLightbox = (index) => setLightboxIndex(index);
  const closeLightbox = () => setLightboxIndex(null);

  const showPrev = (e) => {
    e?.stopPropagation();
    setLightboxIndex((prev) => (prev > 0 ? prev - 1 : images.length - 1));
  };

  const showNext = (e) => {
    e?.stopPropagation();
    setLightboxIndex((prev) => (prev < images.length - 1 ? prev + 1 : 0));
  };

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (lightboxIndex === null) return;
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowLeft') showPrev();
      if (e.key === 'ArrowRight') showNext();
    };

    if (lightboxIndex !== null) {
      document.body.classList.add('no-scroll');
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.classList.remove('no-scroll');
    }

    return () => {
      document.body.classList.remove('no-scroll');
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [lightboxIndex]);

  return (
    <section className="section section-black gallery-section" id="gallery" aria-label="Visual Gallery">
      <div className="container">
        <div className="gallery-section__header reveal">
          <span className="eyebrow">Visual Archive</span>
          <h2 className="gallery-section__heading heading-lg">Archive of Light</h2>
          <p className="body-text" style={{ margin: '0 auto', textAlign: 'center' }}>
            Unscripted emotion, regal rituals, and timeless portraits captured in golden hour and twilight.
          </p>
        </div>

        <div className="masonry reveal">
          {images.slice(0, 9).map((item, index) => (
            <div
              key={index}
              className="masonry__item"
              onClick={() => openLightbox(index)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => (e.key === 'Enter' || e.key === ' ') && openLightbox(index)}
              aria-label={`View photo ${index + 1}`}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={item.src}
                alt={item.alt}
                loading="lazy"
              />
            </div>
          ))}
        </div>

        <div style={{ textAlign: 'center', marginTop: 'var(--sp-xl)' }} className="reveal">
          <Link href="/gallery" className="btn-border">
            Explore Complete Archive →
          </Link>
        </div>
      </div>

      {/* Lightbox Modal */}
      <div
        className={`lightbox ${lightboxIndex !== null ? 'active' : ''}`}
        onClick={closeLightbox}
        role="dialog"
        aria-modal="true"
        aria-label="Image Lightbox"
      >
        <button
          className="lightbox__close"
          onClick={closeLightbox}
          aria-label="Close lightbox"
        >
          ✕
        </button>

        <button
          className="lightbox__nav lightbox__prev"
          onClick={showPrev}
          aria-label="Previous image"
        >
          &#8249;
        </button>

        {lightboxIndex !== null && (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={images[lightboxIndex].src}
            alt={images[lightboxIndex].alt}
            className="lightbox__image"
            onClick={(e) => e.stopPropagation()}
          />
        )}

        <button
          className="lightbox__nav lightbox__next"
          onClick={showNext}
          aria-label="Next image"
        >
          &#8250;
        </button>

        {lightboxIndex !== null && (
          <div className="lightbox__counter">
            {lightboxIndex + 1} / {images.length}
          </div>
        )}
      </div>
    </section>
  );
}
