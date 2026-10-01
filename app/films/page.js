'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import useScrollReveal from '@/hooks/useScrollReveal';
import { SITE } from '@/lib/siteData';

export default function FilmsPage() {
  useScrollReveal();
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
    <main style={{ paddingTop: '7rem' }}>
      <section className="section" aria-label="Films Showcase">
        <div className="container">
          <div className="work__header reveal">
            <span className="eyebrow">Cinema</span>
            <h1 className="heading-lg">Motion & Sound</h1>
            <p className="body-text" style={{ margin: '0 auto', textAlign: 'center' }}>
              We craft wedding films that feel like independent cinema — natural audio, evocative pacing, and music composed to linger.
            </p>
          </div>

          <div className="films__grid" style={{ marginTop: 'var(--sp-xl)' }}>
            {SITE.films.map((film) => (
              <div
                key={film.id}
                className="film reveal"
                onClick={() => setActiveFilm(film)}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => (e.key === 'Enter' || e.key === ' ') && setActiveFilm(film)}
                aria-label={`Play film ${film.title}`}
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
      </section>

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
                <h3 style={{ fontFamily: 'var(--ff-serif)', fontSize: '2.4rem', color: '#fff', marginBottom: '1rem' }}>
                  {activeFilm.title}
                </h3>
                <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '1.1rem', marginBottom: '1.5rem' }}>
                  Cinematic wedding film preview for {activeFilm.couple} in {activeFilm.location}.
                </p>
                <Link
                  href="/contact"
                  className="btn-border"
                  onClick={() => setActiveFilm(null)}
                >
                  Inquire For High-Definition Film →
                </Link>
              </div>
            )
          )}
        </div>
      </div>
    </main>
  );
}
