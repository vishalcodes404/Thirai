'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { SITE } from '@/lib/siteData';

export default function FilmsSection() {
  const [activeFilm, setActiveFilm] = useState(null);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') setActiveFilm(null);
    };
    if (activeFilm) {
      document.body.classList.add('no-scroll');
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.classList.remove('no-scroll');
    }
    return () => {
      document.body.classList.remove('no-scroll');
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [activeFilm]);

  return (
    <section className="section section-navy films" id="films" aria-label="Cinematic Wedding Films">
      <div className="container">
        <div className="films__header reveal">
          <span className="eyebrow">Cinema & Motion</span>
          <h2 className="films__heading">Cinematic Films</h2>
          <p className="films__subtext">
            Moving images capturing rhythm, unscripted laughter, music, and quiet emotion in equal measure.
          </p>
        </div>

        <div className="films__grid">
          {SITE.films.map((film) => (
            <div
              key={film.id}
              className="film reveal"
              onClick={() => setActiveFilm(film)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => (e.key === 'Enter' || e.key === ' ') && setActiveFilm(film)}
              aria-label={`Watch film: ${film.title}`}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={film.thumbnail}
                alt={`${film.title} — ${film.couple}`}
                className="film__thumbnail"
                loading="lazy"
              />
              <div className="film__overlay">
                <div className="film__play" aria-hidden="true">
                  <svg viewBox="0 0 24 24" fill="currentColor">
                    <polygon points="5,3 19,12 5,21" />
                  </svg>
                </div>
                <h3 className="film__title">{film.title}</h3>
                <div className="film__meta">
                  {film.couple} · {film.location}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Video Modal */}
      <div
        className={`video-modal ${activeFilm ? 'active' : ''}`}
        onClick={() => setActiveFilm(null)}
        role="dialog"
        aria-modal="true"
        aria-label="Video Player"
      >
        <button
          className="video-modal__close"
          onClick={() => setActiveFilm(null)}
          aria-label="Close video"
        >
          ✕
        </button>
        <div
          className="video-modal__content"
          onClick={(e) => e.stopPropagation()}
        >
          {activeFilm && (
            activeFilm.videoUrl ? (
              activeFilm.videoUrl.match(/\.(mp4|webm|mov)(\?.*)?$/i) ? (
                <div style={{ width: '100%', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                  <video
                    src={activeFilm.videoUrl}
                    controls
                    autoPlay
                    playsInline
                    style={{ width: '100%', maxHeight: '72vh', borderRadius: '4px', backgroundColor: '#000' }}
                  />
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem', padding: '0.5rem 0' }}>
                    <div>
                      <h3 style={{ fontFamily: 'var(--ff-serif)', fontSize: '1.4rem', color: '#fff' }}>
                        {activeFilm.title}
                      </h3>
                      <p style={{ color: 'var(--clr-text-muted)', fontSize: '0.85rem' }}>
                        {activeFilm.couple} · {activeFilm.location} ({activeFilm.year})
                      </p>
                    </div>
                    <Link
                      href="/contact"
                      className="btn-border"
                      onClick={() => setActiveFilm(null)}
                      style={{ padding: '0.5rem 1.4rem', fontSize: '0.75rem' }}
                    >
                      Inquire For Dates →
                    </Link>
                  </div>
                </div>
              ) : (
                <iframe
                  src={activeFilm.videoUrl}
                  title={activeFilm.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              )
            ) : (
              <div style={{ textAlign: 'center', padding: '2rem' }}>
                <h3 style={{ fontFamily: 'var(--ff-serif)', fontSize: '2rem', color: '#fff', marginBottom: '1rem' }}>
                  {activeFilm.title}
                </h3>
                <p style={{ color: 'rgba(255,255,255,0.7)', marginBottom: '1.5rem' }}>
                  Cinematic trailer for {activeFilm.couple} ({activeFilm.location}).
                </p>
                <Link
                  href="/contact"
                  className="btn-border"
                  onClick={() => setActiveFilm(null)}
                >
                  Inquire For Film Preview →
                </Link>
              </div>
            )
          )}
        </div>
      </div>
    </section>
  );
}
