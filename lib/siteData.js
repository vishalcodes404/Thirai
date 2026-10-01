/**
 * ============================================================
 * SITE DATA — Edit all content from this single file.
 * THIRAI — A premium cinematic photography studio.
 * ============================================================
 */

export const SITE = {

  /* ── Brand ─────────────────────────────────────── */
  brand: {
    name: 'THIRAI',
    tagline: 'Stories written in light.',
    shortDescription: 'A premium cinematic photography studio',
    logo: '/images/logo.png',
    email: 'atelier@thiraistudios.com',
    phone: '+91 7708 415 389',
    whatsapp: '917708415389',
    instagram: 'https://instagram.com/thiraistudios',
    youtube: 'https://youtube.com/@thiraistudios',
    address: 'Studio Thirai · New Delhi & Global Commissions',
    copyright: '© 2026 THIRAI. All rights reserved.',
  },

  /* ── Navigation ────────────────────────────────── */
  nav: [
    { label: 'HOME', href: '/' },
    { label: 'ABOUT', href: '/about' },
    { label: 'OUR WORK', href: '/work' },
    { label: 'THE ARCHIVE', href: '/gallery' },
    { label: 'FILMS', href: '/films' },
    { label: 'CONTACT US', href: '/contact' },
  ],

  /* ── Hero ───────────────────────────────────────── */
  hero: {
    label: 'CINEMATIC PHOTOGRAPHY ATELIER',
    heading: 'Stories written in light.',
    subheading: 'An independent luxury photography studio crafting emotive, timeless visual legacies across the globe.',
    image: '/images/hero-wedding.jpg',
    videoUrl: '/videos/home page video.MP4',
  },

  /* ── Introduction ──────────────────────────────── */
  intro: {
    eyebrow: 'Artistic Philosophy',
    heading: "We do not merely document celebrations. We preserve the quiet gravity of love.",
    paragraph: "Every glance exchanged in passing, every tear caught in golden light, every unscripted murmur between two souls — these are the fragments that deserve to outlive memory. At THIRAI, we approach each commission not as an assignment, but as a cinematic narrative waiting to unfold with honesty, intimacy, and fine-art poise.",
    image: '/images/gallery/bride-portrait.jpg',
    secondaryImage: '/images/gallery/mehndi.jpg',
  },

  /* ── Featured In ── */
  featuredIn: [
    'Vogue',
    'WedMeGood',
    'Harper’s Bazaar',
    'Brides Today',
    'Architectural Digest',
    'ShaadiWish',
  ],

  /* ── Philosophy ────────────────────────────────── */
  philosophy: {
    eyebrow: 'Our Approach',
    heading: 'Timeless over trendy. Emotion over perfection.',
    paragraph: "We believe the most powerful photographs are the ones you didn't pose for. The quiet moments between the grand ones — a mother adjusting her daughter's dupatta, a groom's nervous smile before the baraat, two hands finding each other during the pheras. Our work lives in that space between documentary honesty and editorial beauty, creating images that feel both cinematic and deeply personal.",
    image: '/images/weddings/intimate.jpg',
    secondaryImage: '/images/gallery/bride-portrait.jpg',
  },

  /* ── Statistics ─────────────────────────────────── */
  stats: [
    { number: 150,  suffix: '+', label: 'Weddings' },
    { number: 14,   suffix: '+', label: 'Cities' },
    { number: 8,    suffix: '+', label: 'Years' },
    { number: 500,  suffix: 'K+', label: 'Moments Captured' },
  ],

  /* ── Featured Work / Projects ──────────────────── */
  projects: [
    {
      id: 'udaipur-evening',
      title: 'An Evening in Udaipur',
      couple: 'Priya & Arjun',
      location: 'City Palace, Udaipur',
      year: '2025',
      description: 'A royal celebration where centuries-old architecture met modern love, bathed in the golden light of a Rajasthani sunset.',
      coverImage: '/images/weddings/udaipur.jpg',
      images: [
        '/images/weddings/udaipur.jpg',
        '/images/gallery/wedding-ceremony.jpg',
        '/images/gallery/mehndi.jpg',
        '/images/gallery/decor.jpg',
        '/images/gallery/bride-portrait.jpg',
      ],
      layout: 'portrait',
    },
    {
      id: 'monsoon-vows',
      title: 'Monsoon Vows',
      couple: 'Ananya & Kabir',
      location: 'Alibaug, Maharashtra',
      year: '2025',
      description: 'When the skies opened up on their garden wedding, they danced in the rain — and it became the most beautiful chapter of their story.',
      coverImage: '/images/weddings/monsoon.jpg',
      images: [
        '/images/weddings/monsoon.jpg',
        '/images/gallery/sangeet.jpg',
        '/images/gallery/bride-portrait.jpg',
        '/images/gallery/wedding-ceremony.jpg',
      ],
      layout: 'landscape',
    },
    {
      id: 'intimate-celebration',
      title: 'An Intimate Celebration',
      couple: 'Meera & Rohan',
      location: 'Suryagarh, Jaisalmer',
      year: '2024',
      description: 'Fifty guests, a desert fortress, and a love that needed no grandeur to feel monumental.',
      coverImage: '/images/weddings/intimate.jpg',
      images: [
        '/images/weddings/intimate.jpg',
        '/images/gallery/mehndi.jpg',
        '/images/gallery/decor.jpg',
        '/images/gallery/sangeet.jpg',
      ],
      layout: 'portrait',
    },
    {
      id: 'chasing-light-goa',
      title: 'Chasing Light in Goa',
      couple: 'Diya & Sameer',
      location: 'Palolem, Goa',
      year: '2024',
      description: 'Barefoot on the sand with salt in the air and the Arabian Sea as witness — a sunset celebration of two souls finding home.',
      coverImage: '/images/weddings/goa.jpg',
      images: [
        '/images/weddings/goa.jpg',
        '/images/gallery/wedding-ceremony.jpg',
        '/images/gallery/sangeet.jpg',
        '/images/gallery/bride-portrait.jpg',
      ],
      layout: 'landscape',
    },
  ],

  /* ── Films ──────────────────────────────────────── */
  films: [
    {
      id: 'film-udaipur',
      title: 'An Evening in Udaipur',
      couple: 'Priya & Arjun',
      location: 'Udaipur',
      year: '2025',
      thumbnail: '/images/films/film-thumbnail.jpg',
      videoUrl: '/videos/home page video.MP4',
    },
    {
      id: 'film-monsoon',
      title: 'Monsoon Vows',
      couple: 'Ananya & Kabir',
      location: 'Alibaug',
      year: '2025',
      thumbnail: '/images/weddings/monsoon.jpg',
      videoUrl: '/videos/home page video.MP4',
    },
    {
      id: 'film-goa',
      title: 'Chasing Light in Goa',
      couple: 'Diya & Sameer',
      location: 'Goa',
      year: '2024',
      thumbnail: '/images/weddings/goa.jpg',
      videoUrl: '/videos/home page video.MP4',
    },
  ],

  /* ── Gallery ───────────────────────────────────── */
  gallery: [
    { src: '/images/weddings/udaipur.jpg',         alt: 'Couple at sunset by lake in Udaipur',     orientation: 'portrait'  },
    { src: '/images/gallery/wedding-ceremony.jpg',  alt: 'Grand Indian wedding ceremony at night',  orientation: 'landscape' },
    { src: '/images/gallery/bride-portrait.jpg',    alt: 'Elegant bridal portrait',                 orientation: 'portrait'  },
    { src: '/images/weddings/monsoon.jpg',          alt: 'Couple dancing in monsoon rain',          orientation: 'landscape' },
    { src: '/images/gallery/mehndi.jpg',            alt: 'Intricate bridal mehndi details',         orientation: 'landscape' },
    { src: '/images/gallery/sangeet.jpg',           alt: 'Joyful sangeet celebration',              orientation: 'portrait'  },
    { src: '/images/weddings/goa.jpg',              alt: 'Beach wedding at sunset in Goa',          orientation: 'landscape' },
    { src: '/images/gallery/decor.jpg',             alt: 'Luxury wedding reception decor',          orientation: 'landscape' },
    { src: '/images/weddings/intimate.jpg',         alt: 'Intimate moment in haveli corridor',      orientation: 'portrait'  },
    { src: '/images/films/film-thumbnail.jpg',      alt: 'Cinematic couple in palace hallway',      orientation: 'landscape' },
    { src: '/images/hero-wedding.jpg',              alt: 'Couple on palace terrace at golden hour', orientation: 'landscape' },
    { src: '/images/team/photographer.jpg',         alt: 'Behind the scenes photography',           orientation: 'portrait'  },
  ],


  /* ── About ─────────────────────────────────────── */
  about: {
    image: '/images/team/photographer.jpg',
    heading: 'The eye behind the lens.',
    paragraphs: [
      "THIRAI was born from a singular belief: that the most enduring photographs are the ones that stir genuine emotion. Founded in 2017, we have spent years cultivating a visual language at the intersection of editorial poise, cinema, and documentary truth.",
      "We are a small, intentional atelier. We do not accept dozens of commissions each season — we take on a carefully selected few, dedicating the time, presence, and creative energy each story deserves. This is an art of patience and craft.",
      "Our approach is quiet and observational. We move through your celebration as observers of light and human connection. We do not manufacture moments. We wait, we listen, and when the light aligns with pure feeling, we craft heirloom frames meant to outlast time.",
    ],
  },

  /* ── Contact Form Event Types ──────────────────── */
  eventTypes: [
    'Wedding',
    'Pre-Wedding / Engagement',
    'Destination Wedding',
    'Reception',
    'Mehendi & Sangeet',
    'Corporate Event',
    'Personal / Family',
    'Other',
  ],
};
