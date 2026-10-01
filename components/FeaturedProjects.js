import Link from 'next/link';
import { SITE } from '@/lib/siteData';

export default function FeaturedProjects() {
  return (
    <section className="section section-charcoal work" id="work" aria-label="Featured Stories">
      <div className="container">
        <div className="work__header reveal">
          <span className="eyebrow">Curated Folio</span>
          <h2 className="work__heading heading-lg">Selected Stories</h2>
          <p className="body-text" style={{ margin: '0 auto', textAlign: 'center' }}>
            A curated collection of love stories documented across palaces, heritage forts, and wild coastlines.
          </p>
        </div>

        <div className="work__projects">
          {SITE.projects.map((project, index) => (
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
                <h3 className="project__title">{project.title}</h3>
                <div className="project__couple">{project.couple}</div>
                <p className="project__description">{project.description}</p>
                <Link href={`/work/${project.id}`} className="project__link">
                  <span>View Story</span>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M5 12h14M12 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </Link>
              </div>
            </article>
          ))}
        </div>

        {/* View all stories CTA */}
        <div style={{ textAlign: 'center', marginTop: 'var(--sp-2xl)' }} className="reveal">
          <Link href="/work" className="btn-border">
            View All Wedding Stories →
          </Link>
        </div>
      </div>
    </section>
  );
}
