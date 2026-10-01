import Link from 'next/link';
import { SITE } from '@/lib/siteData';

export default function AboutSection() {
  return (
    <section className="section section-black about" id="about" aria-label="About THIRAI">
      <div className="container">
        <div className="about__grid">
          <div className="about__image reveal-scale">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={SITE.about.image}
              alt="Creative Director at THIRAI"
              loading="lazy"
            />
          </div>

          <div className="about__text reveal">
            <span className="eyebrow">The Atelier</span>
            <h2 className="about__heading heading-md">{SITE.about.heading}</h2>
            {SITE.about.paragraphs.map((p, idx) => (
              <p key={idx}>{p}</p>
            ))}

            <div style={{ marginTop: 'var(--sp-md)' }}>
              <Link href="/about" className="btn-border">
                Read Atelier Ethos →
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
