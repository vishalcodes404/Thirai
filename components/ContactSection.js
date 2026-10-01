'use client';
import { useState } from 'react';
import { SITE } from '@/lib/siteData';

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    eventType: 'Wedding',
    date: '',
    location: '',
    message: '',
  });

  const [status, setStatus] = useState('idle'); // 'idle' | 'submitting' | 'success' | 'error'

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email) {
      setStatus('error');
      return;
    }
    setStatus('submitting');
    // Simulate luxury inquiry submission
    setTimeout(() => {
      setStatus('success');
    }, 800);
  };

  return (
    <section className="section section-charcoal contact" id="contact" aria-label="Contact THIRAI Atelier">
      <div className="container">
        <div className="contact__header reveal">
          <span className="eyebrow">Commissions & Inquiries</span>
          <h2 className="contact__heading heading-lg">Let&apos;s Tell Your Story</h2>
          <p className="contact__subtext">
            We accept a limited number of commissions each season to ensure every celebration receives our undivided focus.
          </p>
        </div>

        <div className="contact__grid">
          {/* Form */}
          <div className="reveal">
            {status === 'success' ? (
              <div className="form-success">
                <svg className="form-success__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" strokeLinecap="round" strokeLinejoin="round" />
                  <polyline points="22 4 12 14.01 9 11.01" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <h3 className="form-success__heading">Inquiry Received</h3>
                <p className="form-success__text">
                  Thank you, {formData.name}. We have received your celebration details and will be in touch within 24 to 48 hours.
                </p>
                <button
                  className="form-submit"
                  style={{ marginTop: '1rem' }}
                  onClick={() => {
                    setStatus('idle');
                    setFormData({
                      name: '',
                      email: '',
                      phone: '',
                      eventType: 'Wedding',
                      date: '',
                      location: '',
                      message: '',
                    });
                  }}
                >
                  Send Another Inquiry
                </button>
              </div>
            ) : (
              <form className="contact__form" onSubmit={handleSubmit}>
                {status === 'error' && (
                  <div className="form-error">
                    Please provide your name and a valid email address so we can reply.
                  </div>
                )}

                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="contact-name">Your Names *</label>
                    <input
                      id="contact-name"
                      type="text"
                      name="name"
                      required
                      placeholder="e.g. Priya & Arjun"
                      value={formData.name}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="contact-email">Email Address *</label>
                    <input
                      id="contact-email"
                      type="email"
                      name="email"
                      required
                      placeholder="name@domain.com"
                      value={formData.email}
                      onChange={handleChange}
                    />
                  </div>
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="contact-phone">Phone / WhatsApp</label>
                    <input
                      id="contact-phone"
                      type="tel"
                      name="phone"
                      placeholder="+91 7708 415 389"
                      value={formData.phone}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="contact-event">Event Type</label>
                    <select
                      id="contact-event"
                      name="eventType"
                      value={formData.eventType}
                      onChange={handleChange}
                    >
                      {SITE.eventTypes.map((type, idx) => (
                        <option key={idx} value={type}>
                          {type}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="contact-date">Estimated Date</label>
                    <input
                      id="contact-date"
                      type="date"
                      name="date"
                      value={formData.date}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="contact-location">Location / Venue</label>
                    <input
                      id="contact-location"
                      type="text"
                      name="location"
                      placeholder="e.g. City Palace, Udaipur"
                      value={formData.location}
                      onChange={handleChange}
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="contact-message">Tell Us About Your Celebration</label>
                  <textarea
                    id="contact-message"
                    name="message"
                    rows={4}
                    placeholder="Share your vision, aesthetic, estimated guest count, or any special moments you care deeply about..."
                    value={formData.message}
                    onChange={handleChange}
                  />
                </div>

                <button
                  type="submit"
                  className="form-submit"
                  disabled={status === 'submitting'}
                >
                  {status === 'submitting' ? 'Sending Inquiry...' : 'Submit Inquiry'}
                </button>
              </form>
            )}
          </div>

          {/* Direct Info */}
          <div className="contact__info reveal delay-2">
            <div className="contact__info-item">
              <span className="contact__info-label">Direct Contact</span>
              <div className="contact__info-value">
                <a href={`mailto:${SITE.brand.email}`}>{SITE.brand.email}</a>
              </div>
              <div className="contact__info-value">
                <a href={`tel:${SITE.brand.phone}`}>{SITE.brand.phone}</a>
              </div>
            </div>

            <div className="contact__info-item">
              <span className="contact__info-label">WhatsApp Quick Connect</span>
              <div className="contact__info-value">
                <a
                  href={`https://wa.me/${SITE.brand.whatsapp}?text=Hi%20THIRAI%20Atelier,%20I%20would%20like%20to%20inquire%20about%20cinematic%20photography.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem', color: 'var(--clr-accent)', fontWeight: '400' }}
                >
                  Chat with us on WhatsApp &rarr;
                </a>
              </div>
            </div>

            <div className="contact__info-item">
              <span className="contact__info-label">Studio Atelier</span>
              <div className="contact__info-value">
                {SITE.brand.address}
              </div>
            </div>

            <div className="contact__info-item">
              <span className="contact__info-label">Follow Our Work</span>
              <div className="contact__social-links">
                <a
                  href={SITE.brand.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contact__social-link"
                  aria-label="Instagram"
                >
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                  </svg>
                </a>
                <a
                  href={SITE.brand.youtube}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contact__social-link"
                  aria-label="YouTube"
                >
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19.1c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.43z" />
                    <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02" fill="currentColor" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
