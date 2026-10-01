'use client';
import Link from 'next/link';
import { SITE } from '@/lib/siteData';

export default function Philosophy() {
  const data = SITE.philosophy;

  const smallerImage = data.image || '/images/weddings/intimate.jpg';
  const largerImage = data.secondaryImage || '/images/gallery/bride-portrait.jpg';

  const scrollToWork = (e) => {
    e.preventDefault();
    const elem = document.getElementById('work');
    if (elem) {
      elem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="approach-section" id="approach" aria-label="Our Approach">
      <div className="container">
        <div className="approach__grid">
          {/* Visual Composition: Two Asymmetrically Staggered Portrait Photographs */}
          <div className="approach__visuals">
            {/* Left Column: Smaller portrait photograph, sitting LOWER */}
            <div className="approach__photo-col approach__photo-col--small reveal-scale delay-2">
              <div className="approach__img-frame approach__img-frame--small">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={smallerImage}
                  alt="Intimate wedding moment"
                  loading="lazy"
                  className="approach__photo"
                />
              </div>
              <div className="approach__photo-caption">
                <span>01 / Intimate Quietude</span>
                <span>Haveli Corridor</span>
              </div>
            </div>

            {/* Center-Left Column: Larger portrait photograph, sitting HIGHER */}
            <div className="approach__photo-col approach__photo-col--large reveal-scale">
              <div className="approach__img-frame approach__img-frame--large">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={largerImage}
                  alt="Fine art bridal portrait in natural light"
                  loading="lazy"
                  className="approach__photo"
                />
              </div>
              <div className="approach__photo-caption">
                <span>02 / Editorial Grace</span>
                <span>Twilight Mandap</span>
              </div>
            </div>
          </div>

          {/* Right Column: Editorial Text Content with Curated Pillars */}
          <div className="approach__text reveal delay-1">
            <span className="eyebrow approach__label">
              {data.eyebrow || 'OUR APPROACH'}
            </span>

            <h2 className="approach__title">
              <span>Timeless over trendy.</span>
              <span>Emotion over perfection.</span>
            </h2>

            <div className="approach__divider" aria-hidden="true" />

            <p className="approach__description body-text">
              {data.paragraph}
            </p>

            {/* Atelier Pillars (Eliminating empty void, creating luxury depth) */}
            <div className="approach__pillars">
              <div className="approach__pillar-item">
                <span className="approach__pillar-num">I.</span>
                <div>
                  <h4 className="approach__pillar-title">Unscripted Honesty</h4>
                  <p className="approach__pillar-desc">
                    We observe rather than direct, letting natural laughter and unspoken promises breathe.
                  </p>
                </div>
              </div>

              <div className="approach__pillar-item">
                <span className="approach__pillar-num">II.</span>
                <div>
                  <h4 className="approach__pillar-title">Cinematic Light</h4>
                  <p className="approach__pillar-desc">
                    Chiaroscuro depth and warm golden hour tones harmonized with historic architecture.
                  </p>
                </div>
              </div>

              <div className="approach__pillar-item">
                <span className="approach__pillar-num">III.</span>
                <div>
                  <h4 className="approach__pillar-title">Heirloom Legacy</h4>
                  <p className="approach__pillar-desc">
                    Archival grade color palettes designed to outlast passing digital trends.
                  </p>
                </div>
              </div>
            </div>

            {/* Direct action link */}
            <div className="approach__action">
              <a href="#work" onClick={scrollToWork} className="btn-link">
                <span>View Selected Stories</span>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M5 12h14M12 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
