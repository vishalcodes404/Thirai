import Link from 'next/link';
import { notFound } from 'next/navigation';
import { SITE } from '@/lib/siteData';

export function generateStaticParams() {
  return SITE.projects.map((p) => ({
    slug: p.id,
  }));
}

export default async function ProjectStoryPage({ params }) {
  const { slug } = await params;
  const project = SITE.projects.find((p) => p.id === slug);

  if (!project) {
    notFound();
  }

  // Find next project for seamless sequential browsing
  const currentIndex = SITE.projects.findIndex((p) => p.id === slug);
  const nextProject = SITE.projects[(currentIndex + 1) % SITE.projects.length];

  return (
    <main>
      {/* Story Hero */}
      <section className="story__hero" aria-label={project.title}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={project.coverImage}
          alt={`${project.title} — ${project.couple}`}
          priority="true"
        />
        <div className="story__hero-overlay">
          <div className="story__hero-text">
            <span className="story__hero-meta">
              {project.location} · {project.year}
            </span>
            <h1 className="story__hero-title">{project.title}</h1>
            <p style={{ fontFamily: 'var(--ff-serif)', fontStyle: 'italic', fontSize: 'var(--fs-h4)' }}>
              {project.couple}
            </p>
          </div>
        </div>
      </section>

      {/* Story Content & Editorial Photo Layout */}
      <div className="story__content">
        <p className="story__intro">
          &ldquo;{project.description}&rdquo;
        </p>

        <div className="story__images">
          {project.images && project.images.length > 0 ? (
            <>
              {/* Full bleed image */}
              <div className="story__image-full">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={project.images[0]}
                  alt={`${project.title} detail`}
                  loading="lazy"
                />
              </div>

              {/* Pair of images if available */}
              {project.images.length > 2 && (
                <div className="story__image-pair">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={project.images[1]}
                    alt={`${project.title} photo pair 1`}
                    loading="lazy"
                  />
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={project.images[2]}
                    alt={`${project.title} photo pair 2`}
                    loading="lazy"
                  />
                </div>
              )}

              {/* Remaining images */}
              {project.images.slice(3).map((img, i) => (
                <div key={i} className="story__image-full">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={img}
                    alt={`${project.title} gallery item ${i + 3}`}
                    loading="lazy"
                  />
                </div>
              ))}
            </>
          ) : (
            <div className="story__image-full">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={project.coverImage}
                alt={project.title}
                loading="lazy"
              />
            </div>
          )}
        </div>

        {/* Sequential Next Story Nav */}
        <div className="story__nav">
          <span className="story__nav-label">Next Story</span>
          <div>
            <Link href={`/work/${nextProject.id}`} className="story__nav-title">
              {nextProject.title} &rarr;
            </Link>
          </div>
          <div style={{ marginTop: '0.5rem', color: 'var(--clr-text-muted)', fontSize: 'var(--fs-small)' }}>
            {nextProject.couple} · {nextProject.location}
          </div>
        </div>

        <div style={{ textAlign: 'center', marginTop: '2rem' }}>
          <Link href="/work" style={{ color: 'var(--clr-text-light)', fontSize: 'var(--fs-small)', textTransform: 'uppercase', letterSpacing: 'var(--ls-wide)' }}>
            &larr; Back to All Stories
          </Link>
        </div>
      </div>
    </main>
  );
}
