import { Cormorant_Garamond, Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingContactWidget from "@/components/FloatingContactWidget";
import FlowingWaterBackground from "@/components/FlowingWaterBackground";

const cormorant = Cormorant_Garamond({
  variable: "--ff-serif",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  style: ["normal", "italic"],
  display: "swap",
});

const inter = Inter({
  variable: "--ff-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  display: "swap",
});

export const metadata = {
  metadataBase: new URL('https://thiraistudios.com'),
  title: "THIRAI — Stories Written in Light | Luxury Cinematic Photography Studio",
  description: "THIRAI is an independent premium photography studio crafting emotive, cinematic, and timeless visual legacies across the globe.",
  openGraph: {
    title: "THIRAI — Stories Written in Light",
    description: "Premium cinematic photography & fine-art storytelling.",
    url: "https://thiraistudios.com",
    siteName: "THIRAI",
    images: [{ url: "/images/hero-wedding.jpg", width: 1600, height: 900 }],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "THIRAI — Stories Written in Light",
    description: "Premium cinematic photography & fine-art storytelling.",
    images: ["/images/hero-wedding.jpg"],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-scroll-behavior="smooth" className={`${cormorant.variable} ${inter.variable}`}>
      <body>
        <FlowingWaterBackground />
        <Navbar />
        {children}
        <Footer />
        <FloatingContactWidget />
      </body>
    </html>
  );
}

