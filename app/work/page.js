'use client';
import Link from 'next/link';
import useScrollReveal from '@/hooks/useScrollReveal';
import { SITE } from '@/lib/siteData';

export default function WorkPage() {
  useScrollReveal();

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
          </div>

          <div className="work__projects" style={{ marginTop: 'var(--sp-xl)' }}>
            {SITE.projects.map((project) => (
              <article key={project.id} className="project reveal visible">
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
