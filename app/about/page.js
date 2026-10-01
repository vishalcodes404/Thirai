'use client';
import useScrollReveal from '@/hooks/useScrollReveal';
import Link from 'next/link';
import { SITE } from '@/lib/siteData';

export default function AboutPage() {
  useScrollReveal();

  return (
    <main style={{ paddingTop: '7rem' }}>
      <section className="section" aria-label="About Hero">
        <div className="container">
          <div className="work__header reveal">
            <span className="eyebrow">Our Story</span>
            <h1 className="heading-lg">Artisans of Memory</h1>
            <p className="body-text" style={{ margin: '0 auto', textAlign: 'center' }}>
              We capture the quiet grace, heartfelt laughter, and monumental promises that define your once-in-a-lifetime celebration.
            </p>
          </div>

          <div className="about__grid" style={{ marginTop: 'var(--sp-xl)' }}>
            <div className="about__image reveal-scale">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={SITE.about.image}
                alt="Lead Photographer and Creative Director"
                loading="lazy"
              />
            </div>

            <div className="about__text reveal">
              <span className="eyebrow">The Atelier</span>
              <h2 className="heading-md">{SITE.about.heading}</h2>
              {SITE.about.paragraphs.map((p, idx) => (
                <p key={idx}>{p}</p>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Manifesto / Ethos */}
      <section className="section philosophy" aria-label="Our Manifesto">
        <div className="container">
          <div className="philosophy__grid">
            <div className="philosophy__text reveal">
              <span className="eyebrow">The Manifesto</span>
              <h2 className="heading-md">Light. Presence. Truth.</h2>
              <p className="body-text" style={{ marginBottom: '1rem' }}>
                We do not ask you to strike artificial poses. Instead, we create a calm, trusting space where you can be wholly immersed in your celebration.
              </p>
              <p className="body-text">
                Every frame is treated with the precision of fine-art printing and the warmth of a family heirloom.
              </p>
            </div>

            <div className="philosophy__images">
              <div className="philosophy__image philosophy__image--primary reveal-scale">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/images/gallery/wedding-ceremony.jpg"
                  alt="Ceremony ambiance"
                  loading="lazy"
                />
              </div>
              <div className="philosophy__image philosophy__image--secondary reveal-scale delay-3">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/images/gallery/mehndi.jpg"
                  alt="Henna ritual details"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="section--compact stats" aria-label="Stats">
        <div className="container">
          <div className="stats__grid">
            {SITE.stats.map((stat, idx) => (
              <div key={idx} className="stats__item reveal">
                <div className="stats__number">
                  {stat.number}
                  <span>{stat.suffix}</span>
                </div>
                <div className="stats__label">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section section-charcoal" style={{ textAlign: 'center' }}>
        <div className="container reveal">
          <span className="eyebrow">Commissions</span>
          <h2 className="heading-md" style={{ marginBottom: '1.5rem' }}>Ready to write your story?</h2>
          <Link href="/contact" className="btn-border">
            Commission The Atelier →
          </Link>
        </div>
      </section>
    </main>
  );
}
