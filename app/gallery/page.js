'use client';
import { useState, useEffect, useMemo } from 'react';
import useScrollReveal from '@/hooks/useScrollReveal';
import { SITE } from '@/lib/siteData';

const GALLERY_CATEGORIES = [
  { id: 'all', label: 'All Photographs' },
  { id: 'portrait', label: 'Portraits & Rituals' },
  { id: 'landscape', label: 'Landscapes & Venues' },
];

export default function GalleryPage() {
  const [lightboxIndex, setLightboxIndex] = useState(null);
  const [category, setCategory] = useState('all');
  useScrollReveal([category]);

  // Categorize or filter images
  const allImages = SITE.gallery;
  const filteredImages = useMemo(() => {
    if (category === 'all') return allImages;
    return allImages.filter(img => {
      if (category === 'portrait') return img.orientation === 'portrait';
      if (category === 'landscape') return img.orientation === 'landscape';
      return true;
    });
  }, [allImages, category]);

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
          <div className="gallery-section__header reveal visible">
            <span className="eyebrow">Visual Archive</span>
            <h1 className="gallery-section__heading heading-lg">Archive of Light</h1>
            <p className="body-text" style={{ margin: '0 auto 1.5rem', textAlign: 'center', maxWidth: '620px' }}>
              Every photograph is a testament to light, connection, and intimate human beauty.
            </p>

            {/* Shared Luxury Pill Filter Navigation */}
            <div className="atelier-filter-wrapper">
              <nav className="atelier-filter-bar" role="tablist" aria-label="Filter archive photographs by theme">
                {GALLERY_CATEGORIES.map((tab) => {
                  const count = tab.id === 'all'
                    ? allImages.length
                    : allImages.filter(img => img.orientation === tab.id).length;
                  const isActive = category === tab.id;

                  return (
                    <button
                      key={tab.id}
                      role="tab"
                      id={`tab-gallery-${tab.id}`}
                      aria-selected={isActive}
                      aria-controls="gallery-masonry-grid"
                      type="button"
                      onClick={() => {
                        setCategory(tab.id);
                        setLightboxIndex(null);
                      }}
                      className={`atelier-filter-btn ${isActive ? 'is-active' : ''}`}
                    >
                      <span>{tab.label}</span>
                      <span className="atelier-filter-badge" aria-label={`${count} photographs`}>
                        {count}
                      </span>
                    </button>
                  );
                })}
              </nav>

              <div className="atelier-filter-status" aria-live="polite">
                <span className="atelier-filter-status-dot" aria-hidden="true" />
                <span>
                  {category === 'all'
                    ? `DISPLAYING ALL ${filteredImages.length} CURATED ARCHIVAL PHOTOGRAPHS`
                    : `DISPLAYING ${filteredImages.length} ${category.toUpperCase()} COMPOSITIONS`}
                </span>
              </div>
            </div>
          </div>

          <div
            id="gallery-masonry-grid"
            role="region"
            aria-label="Archival photo gallery"
            className="masonry reveal visible"
            style={{ marginTop: 'var(--sp-xl)' }}
          >
            {filteredImages.map((item, index) => (
              <div
                key={`${item.src}-${category}-${index}`}
                className="masonry__item is-card-visible visible"
                style={{ animationDelay: `${(index % 6) * 0.06}s` }}
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
