'use client';
import { useState, useMemo } from 'react';
import Link from 'next/link';
import useScrollReveal from '@/hooks/useScrollReveal';
import { SITE } from '@/lib/siteData';

const WORK_CATEGORIES = [
  { id: 'all', label: 'All Locations' },
  { id: 'udaipur', label: 'Udaipur' },
  { id: 'alibaug', label: 'Alibaug' },
  { id: 'jaisalmer', label: 'Jaisalmer' },
  { id: 'goa', label: 'Goa' },
];

export default function WorkPage() {
  const [activeFilter, setActiveFilter] = useState('all');
  useScrollReveal([activeFilter]);

  const filteredProjects = useMemo(() => {
    if (activeFilter === 'all') return SITE.projects;
    return SITE.projects.filter((p) =>
      p.location.toLowerCase().includes(activeFilter.toLowerCase())
    );
  }, [activeFilter]);

  return (
    <main style={{ paddingTop: '7rem' }}>
      <section className="section" aria-label="Portfolio">
        <div className="container">
          <div className="work__header reveal visible">
            <span className="eyebrow">Curated Stories</span>
            <h1 className="heading-lg">Stories Written in Light</h1>
            <p className="body-text" style={{ margin: '0 auto 1.5rem', textAlign: 'center', maxWidth: '620px' }}>
              Each wedding is a distinct tapestry of light, legacy, and genuine love.
            </p>

            {/* Shared Luxury Pill Filter Navigation */}
            <div className="atelier-filter-wrapper">
              <nav className="atelier-filter-bar" role="tablist" aria-label="Filter stories by location">
                {WORK_CATEGORIES.map((cat) => {
                  const count = cat.id === 'all'
                    ? SITE.projects.length
                    : SITE.projects.filter(p => p.location.toLowerCase().includes(cat.id)).length;
                  const isActive = activeFilter === cat.id;

                  return (
                    <button
                      key={cat.id}
                      role="tab"
                      id={`tab-work-${cat.id}`}
                      aria-selected={isActive}
                      aria-controls="work-projects-grid"
                      type="button"
                      onClick={() => setActiveFilter(cat.id)}
                      className={`atelier-filter-btn ${isActive ? 'is-active' : ''}`}
                    >
                      <span>{cat.label}</span>
                      <span className="atelier-filter-badge" aria-label={`${count} stories`}>
                        {count}
                      </span>
                    </button>
                  );
                })}
              </nav>

              <div className="atelier-filter-status" aria-live="polite">
                <span className="atelier-filter-status-dot" aria-hidden="true" />
                <span>
                  {activeFilter === 'all'
                    ? `DISPLAYING ALL ${filteredProjects.length} CURATED COMMISSIONS`
                    : `DISPLAYING ${filteredProjects.length} ${filteredProjects.length === 1 ? 'COMMISSION' : 'COMMISSIONS'} FROM ${activeFilter.toUpperCase()}`}
                </span>
              </div>
            </div>
          </div>

          <div
            id="work-projects-grid"
            role="region"
            aria-label="Filtered portfolio stories"
            className="work__projects"
            style={{ marginTop: 'var(--sp-xl)' }}
          >
            {filteredProjects.map((project, idx) => (
              <article
                key={`${project.id}-${activeFilter}`}
                className="project is-card-visible visible"
                style={{ animationDelay: `${idx * 0.08}s` }}
              >
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
