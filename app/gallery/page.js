'use client';
import { useState, useEffect } from 'react';
import useScrollReveal from '@/hooks/useScrollReveal';
import { SITE } from '@/lib/siteData';

export default function GalleryPage() {
  useScrollReveal();
  const [lightboxIndex, setLightboxIndex] = useState(null);
  const [category, setCategory] = useState('all');

  // Categorize or filter images
  const allImages = SITE.gallery;
  const filteredImages = category === 'all'
    ? allImages
    : allImages.filter(img => {
        if (category === 'portrait') return img.orientation === 'portrait';
        if (category === 'landscape') return img.orientation === 'landscape';
        return true;
      });

  const openLightbox = (index) => setLightboxIndex(index);
  const closeLightbox = () => setLightboxIndex(null);

  const showPrev = (e) => {
    e?.stopPropagation();
    setLightboxIndex((prev) => (prev > 0 ? prev - 1 : filteredImages.length - 1));
  };

  const showNext = (e) => {
    e?.stopPropagation();
    setLightboxIndex((prev) => (prev < filteredImages.length - 1 ? prev + 1 : 0));
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
    <main style={{ paddingTop: '7rem' }}>
      <section className="section gallery-section" aria-label="Visual Gallery">
        <div className="container">
          <div className="gallery-section__header reveal">
            <span className="eyebrow">Visual Archive</span>
            <h1 className="gallery-section__heading heading-lg">Archive of Light</h1>
            <p className="body-text" style={{ margin: '0 auto 2rem', textAlign: 'center' }}>
              Every photograph is a testament to light, connection, and intimate human beauty.
            </p>

            {/* Filter buttons */}
            <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', flexWrap: 'wrap' }}>
              {[
                { id: 'all', label: 'All Photographs' },
                { id: 'portrait', label: 'Portraits & Rituals' },
                { id: 'landscape', label: 'Landscapes & Venues' },
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => {
                    setCategory(tab.id);
                    setLightboxIndex(null);
                  }}
                  style={{
                    padding: '0.4rem 1.2rem',
                    fontSize: 'var(--fs-eyebrow)',
                    letterSpacing: 'var(--ls-wide)',
                    textTransform: 'uppercase',
                    border: '1px solid',
                    borderColor: category === tab.id ? 'var(--clr-accent)' : 'var(--clr-border)',
                    background: category === tab.id ? 'var(--clr-accent)' : 'transparent',
                    color: category === tab.id ? '#fff' : 'var(--clr-text-light)',
                    cursor: 'pointer',
                    transition: 'all var(--dur-fast) var(--ease-out)',
                  }}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>

          <div className="masonry reveal" style={{ marginTop: 'var(--sp-xl)' }}>
            {filteredImages.map((item, index) => (
              <div
                key={index}
                className="masonry__item"
                onClick={() => openLightbox(index)}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => (e.key === 'Enter' || e.key === ' ') && openLightbox(index)}
                aria-label={`View photo ${index + 1}: ${item.alt}`}
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

          {lightboxIndex !== null && filteredImages[lightboxIndex] && (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              src={filteredImages[lightboxIndex].src}
              alt={filteredImages[lightboxIndex].alt}
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
              {lightboxIndex + 1} / {filteredImages.length}
            </div>
          )}
        </div>
      </section>
    </main>
  );
}
