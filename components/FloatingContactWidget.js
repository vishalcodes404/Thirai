'use client';
import { useState } from 'react';
import Link from 'next/link';
import { SITE } from '@/lib/siteData';

export default function FloatingContactWidget() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div className="floating-contact">
        <Link
          href="/contact"
          className="floating-contact__pill"
          aria-label="Contact us"
        >
          Contact us
        </Link>
        <button
          className="floating-contact__bubble"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle quick inquiry"
          aria-expanded={isOpen}
        >
          <svg viewBox="0 0 24 24" fill="currentColor">
            <path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm0 14H5.17L4 17.17V4h16v12z" />
            <circle cx="8" cy="10" r="1.2" />
            <circle cx="12" cy="10" r="1.2" />
            <circle cx="16" cy="10" r="1.2" />
          </svg>
        </button>
      </div>

      {/* Quick Inquiry Popover */}
      {isOpen && (
        <div className="quick-chat-popover">
          <div className="quick-chat-header">
            <div>
              <h4 style={{ fontFamily: 'var(--ff-serif)', fontSize: '1.2rem', letterSpacing: '0.12em', color: 'var(--clr-text-primary)' }}>
                THIRAI<span style={{ color: 'var(--clr-accent)', marginLeft: '2px' }}>·</span>
              </h4>
              <p>Atelier Concierge · Replies within hours</p>
            </div>
            <button
              className="quick-chat-close"
              onClick={() => setIsOpen(false)}
              aria-label="Close"
            >
              ✕
            </button>
          </div>
          <div className="quick-chat-body">
            <p>
              Greetings. Planning an intimate or destination celebration? We would love to learn more about your dates and vision.
            </p>
            <div className="quick-chat-actions">
              <a
                href={`https://wa.me/${SITE.brand.whatsapp}?text=Hi%20THIRAI%20Atelier,%20I'd%20like%20to%20inquire%20about%20cinematic%20photography.`}
                target="_blank"
                rel="noopener noreferrer"
                className="quick-chat-btn quick-chat-btn--whatsapp"
              >
                Chat on WhatsApp
              </a>
              <Link
                href="/contact"
                className="quick-chat-btn quick-chat-btn--form"
                onClick={() => setIsOpen(false)}
              >
                Full Inquiry Form
              </Link>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
