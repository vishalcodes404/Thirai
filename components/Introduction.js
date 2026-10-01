import Link from 'next/link';
import { SITE } from '@/lib/siteData';

export default function Introduction() {
  return (
    <section className="section section-black" id="intro" aria-label="Introduction">
      <div className="container">
        <div className="intro__grid">
          <div className="intro__text reveal">
            <span className="eyebrow">{SITE.intro.eyebrow}</span>
            <h2 className="intro__heading heading-md">{SITE.intro.heading}</h2>
            <p className="intro__paragraph body-text">{SITE.intro.paragraph}</p>
            <div style={{ marginTop: 'var(--sp-md)' }}>
              <Link href="/about" className="btn-link">
                <span>The Atelier Philosophy</span>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M5 12h14M12 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </Link>
            </div>
          </div>
          <div className="intro__images">
            <div className="intro__image intro__image--primary reveal-scale delay-2">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={SITE.intro.image} alt="Fine art bridal portrait" loading="lazy" />
            </div>
            <div className="intro__image intro__image--secondary reveal-scale delay-4">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={SITE.intro.secondaryImage} alt="Ritual details in light" loading="lazy" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
