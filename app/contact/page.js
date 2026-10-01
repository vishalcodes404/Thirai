'use client';
import useScrollReveal from '@/hooks/useScrollReveal';
import ContactSection from '@/components/ContactSection';

export default function ContactPage() {
  useScrollReveal();

  return (
    <main style={{ paddingTop: '7rem' }}>
      <ContactSection />
    </main>
  );
}
