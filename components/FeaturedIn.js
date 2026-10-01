import { SITE } from '@/lib/siteData';

export default function FeaturedIn() {
  return (
    <section className="as-seen-in" aria-label="As Seen In">
      <div className="container">
        <h2 className="as-seen-in__title">
          As Seen In
        </h2>
        <div className="as-seen-in__logos">
          {SITE.featuredIn.map((name, i) => (
            <span key={name} className="as-seen-in__brand">
              {name}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
