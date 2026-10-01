'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { SITE } from '@/lib/siteData';

export default function Navbar() {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setDrawerOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.classList.toggle('no-scroll', drawerOpen);
    return () => document.body.classList.remove('no-scroll');
  }, [drawerOpen]);

  useEffect(() => {
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setScrolled(window.scrollY > 40);
          ticking = false;
        });
        ticking = true;
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Primary top bar navigation links (visible in main home page center top)
  const primaryLinks = [
    { label: 'HOME', href: '/' },
    { label: 'ABOUT', href: '/about' },
    { label: 'OUR WORK', href: '/work' },
    { label: 'THE ARCHIVE', href: '/gallery' },
    { label: 'FILMS', href: '/films' },
    { label: 'CONTACT US', href: '/contact' },
  ];

  // Full atelier drawer links (all sections and sub-pages)
  const allLinks = [
    { label: 'Home', href: '/', subtitle: 'Cinematic atelier entrance' },
    { label: 'The Atelier', href: '/about', subtitle: 'Philosophy, team & approach' },
    { label: 'Our Work', href: '/work', subtitle: 'Curated wedding narratives' },
    { label: 'The Archive', href: '/gallery', subtitle: 'Curated visual gallery & stills' },
    { label: 'Films & Cinema', href: '/films', subtitle: 'Motion pictures in 4K' },
    { label: 'Inquire', href: '/contact', subtitle: 'Commissions & reservations' },
  ];

  return (
    <>
      <header
        className={`site-header ${scrolled ? 'site-header--scrolled' : 'site-header--transparent'}`}
        role="banner"
      >
        <div className="site-header__inner">
          {/* Brand Logo: THIRAI */}
          <div className="site-header__brand-container">
            <Link href="/" className="site-header__title" aria-label="THIRAI Home">
              <span>{SITE.brand.name}</span>
            </Link>
            <span className="site-header__tagline">Atelier</span>
          </div>

          {/* Center Desktop Navigation: HOME · ABOUT · OUR WORK · CONTACT US */}
          <nav className="site-header__nav" aria-label="Primary Navigation">
            <ul className="site-header__menu">
              {primaryLinks.map((item) => {
                const isActive = (item.href === '/' && pathname === '/') || (item.href !== '/' && pathname.startsWith(item.href));
                return (
                  <li key={item.href} className="site-header__menu-item">
                    <Link
                      href={item.href}
                      className={`site-header__menu-link ${isActive ? 'is-active' : ''}`}
                    >
                      {item.label}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>

          {/* Right Action Icons: WhatsApp + Instagram + 3x3 Grid Icon */}
          <div className="site-header__actions">
            <a
              href={`https://wa.me/${SITE.brand.whatsapp}?text=Hi%20THIRAI%20Atelier,%20I%20would%20like%20to%20inquire%20about%20cinematic%20photography.`}
              target="_blank"
              rel="noopener noreferrer"
              className="site-header__action-icon site-header__action-icon--whatsapp"
              aria-label="WhatsApp Concierge"
              title="Chat with THIRAI on WhatsApp"
            >
              <svg viewBox="0 0 448 512" fill="currentColor">
                <path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z"/>
              </svg>
            </a>

            <a
              href={SITE.brand.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="site-header__action-icon site-header__action-icon--instagram"
              aria-label="Instagram profile"
              title="Follow on Instagram"
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
              </svg>
            </a>

            {/* 3x3 Grid Menu Launcher (The Memory Writers signature) */}
            <button
              className={`site-header__grid-btn ${drawerOpen ? 'is-active' : ''}`}
              onClick={() => setDrawerOpen(!drawerOpen)}
              aria-label="Toggle full portfolio menu"
              title="Full Studio Menu"
              aria-expanded={drawerOpen}
            >
              <span className="site-header__grid-dot" />
              <span className="site-header__grid-dot" />
              <span className="site-header__grid-dot" />
              <span className="site-header__grid-dot" />
              <span className="site-header__grid-dot" />
              <span className="site-header__grid-dot" />
              <span className="site-header__grid-dot" />
              <span className="site-header__grid-dot" />
              <span className="site-header__grid-dot" />
            </button>
          </div>
        </div>
      </header>

      {/* Luxury Full-Screen Atelier Overlay Drawer */}
      <div
        className={`atelier-drawer ${drawerOpen ? 'is-open' : ''}`}
        aria-hidden={!drawerOpen}
      >
        <div className="atelier-drawer__backdrop" onClick={() => setDrawerOpen(false)} />
        <div className="atelier-drawer__content">
          <div className="atelier-drawer__header">
            <span className="eyebrow">THIRAI ATELIER NAVIGATION</span>
            <button
              className="atelier-drawer__close"
              onClick={() => setDrawerOpen(false)}
              aria-label="Close menu"
            >
              <span>CLOSE</span>
              <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M18 6L6 18M6 6l12 12" />
              </svg>
            </button>
          </div>

          <div className="atelier-drawer__body">
            <nav className="atelier-drawer__nav">
              <ul className="atelier-drawer__menu">
                {allLinks.map((item, idx) => (
                  <li key={item.href} className="atelier-drawer__item" style={{ animationDelay: `${idx * 0.05}s` }}>
                    <Link
                      href={item.href}
                      className="atelier-drawer__link"
                      onClick={() => setDrawerOpen(false)}
                    >
                      <span className="atelier-drawer__link-num">0{idx + 1}</span>
                      <div className="atelier-drawer__link-text">
                        <span className="atelier-drawer__link-title">{item.label}</span>
                        <span className="atelier-drawer__link-sub">{item.subtitle}</span>
                      </div>
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>

            <div className="atelier-drawer__footer">
              <div className="atelier-drawer__contact">
                <h4 className="atelier-drawer__footer-heading">Studio Inquiries</h4>
                <a href={`tel:${SITE.brand.phone}`} className="atelier-drawer__contact-item">
                  {SITE.brand.phone}
                </a>
                <a href={`mailto:${SITE.brand.email}`} className="atelier-drawer__contact-item">
                  {SITE.brand.email}
                </a>
                <p className="atelier-drawer__address">{SITE.brand.address}</p>
              </div>

              <div className="atelier-drawer__socials">
                <h4 className="atelier-drawer__footer-heading">Follow The Journey</h4>
                <div className="atelier-drawer__social-links">
                  <a href={SITE.brand.instagram} target="_blank" rel="noopener noreferrer">Instagram</a>
                  <a href={SITE.brand.youtube} target="_blank" rel="noopener noreferrer">YouTube Cinema</a>
                  <a href={`https://wa.me/${SITE.brand.whatsapp}`} target="_blank" rel="noopener noreferrer">WhatsApp Direct</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
