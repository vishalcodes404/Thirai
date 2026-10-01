'use client';
import { useState } from 'react';
import Link from 'next/link';
import useScrollReveal from '@/hooks/useScrollReveal';
import { SITE } from '@/lib/siteData';

export default function WorkPage() {
  useScrollReveal();
  const [filter, setFilter] = useState('all');

  const filteredProjects = filter === 'all'
    ? SITE.projects
    : SITE.projects.filter(p => p.location.toLowerCase().includes(filter.toLowerCase()));

  return (
    <main style={{ paddingTop: '7rem' }}>
      <section className="section" aria-label="Portfolio">
        <div className="container">
          <div className="work__header reveal">
            <span className="eyebrow">Curated Stories</span>
            <h1 className="heading-lg">Stories Written in Light</h1>
            <p className="body-text" style={{ margin: '0 auto 2rem', textAlign: 'center' }}>
              Each wedding is a distinct tapestry of light, legacy, and genuine love.
            </p>

            {/* Filter buttons */}
            <div style={{ display: 'flex', justifyContent: 'center', gap: '0.8rem', flexWrap: 'wrap' }}>
              {['all', 'udaipur', 'alibaug', 'jaisalmer', 'goa'].map((item) => (
                <button
                  key={item}
                  onClick={() => setFilter(item)}
                  style={{
                    padding: '0.5rem 1.4rem',
                    fontSize: 'var(--fs-eyebrow)',
                    letterSpacing: 'var(--ls-wide)',
                    textTransform: 'uppercase',
                    border: '1px solid',
                    borderColor: filter === item ? 'var(--clr-accent)' : 'var(--clr-border)',
                    background: filter === item ? 'var(--clr-accent)' : 'transparent',
                    color: filter === item ? '#fff' : 'var(--clr-text-muted)',
                    cursor: 'pointer',
                    transition: 'all var(--dur-fast) var(--ease-out)',
                  }}
                >
                  {item === 'all' ? 'All Locations' : item}
                </button>
              ))}
            </div>
          </div>

          <div className="work__projects" style={{ marginTop: 'var(--sp-xl)' }}>
            {filteredProjects.map((project) => (
              <article key={project.id} className="project reveal">
                <Link href={`/work/${project.id}`} className={`project__image project__image--${project.layout}`}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={project.coverImage}
                    alt={`${project.title} — ${project.couple}`}
                    loading="lazy"
                  />
                </Link>

                <div className="project__info">
                  <div className="project__meta">
                    <span>{project.location}</span>
                    <span> · </span>
                    <span>{project.year}</span>
                  </div>
                  <h2 className="project__title">{project.title}</h2>
                  <div className="project__couple">{project.couple}</div>
                  <p className="project__description">{project.description}</p>
                  <Link href={`/work/${project.id}`} className="project__link">
                    <span>Explore Full Story</span>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                      <path d="M5 12h14M12 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
