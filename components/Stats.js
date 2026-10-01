import { SITE } from '@/lib/siteData';

export default function Stats() {
  return (
    <section className="section--compact stats" aria-label="Key Statistics">
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
  );
}
