'use client';
import useScrollReveal from '@/hooks/useScrollReveal';
import Hero from '@/components/Hero';
import Philosophy from '@/components/Philosophy';
import FeaturedProjects from '@/components/FeaturedProjects';
import GalleryPreview from '@/components/GalleryPreview';
import Stats from '@/components/Stats';
import ContactSection from '@/components/ContactSection';

export default function Home() {
  useScrollReveal();

  return (
    <main className="thirai-home-flow">
      {/* 1. Cinematic Full-Screen Hero */}
      <Hero />

      {/* 2. Our Approach — 2 Staggered Portraits + Atelier Pillars */}
      <Philosophy />

      {/* 3. Selected Wedding Stories — High Density Editorial Showcase */}
      <FeaturedProjects />

      {/* 4. Archive of Light — High Density Visual Grid with Lightbox */}
      <GalleryPreview />

      {/* 5. Key Atelier Milestones & Archival Standards */}
      <Stats />

      {/* 6. Private Inquiries & Studio Commissions */}
      <ContactSection />
    </main>
  );
}
