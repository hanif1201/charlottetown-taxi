import type { Metadata } from 'next';
import { Cormorant_Garamond, Inter } from 'next/font/google';
import './globals.css';
import { businessJsonLd, faqJsonLd, SITE_URL, SITE_IS_LIVE } from '@/lib/seo';
import { BookingProvider } from '@/components/booking/BookingProvider';
import { RevealObserver } from '@/components/ui/RevealObserver';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { FabBooking } from '@/components/booking/FabBooking';
import { GlobalWidgets } from '@/components/ui/GlobalWidgets';

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  style: ['normal', 'italic'],
  variable: '--font-cormorant',
  display: 'swap',
});

const inter = Inter({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-inter',
  display: 'swap',
});

const TITLE = 'Charlottetown Taxi | 24/7 Service & YYG Airport Transfers';
const DESCRIPTION =
  'Book a licensed Charlottetown taxi 24/7 for YYG airport pickups, local rides and transportation across PEI. No surge pricing. Call or text 782-377-7533.';
const OG_DESCRIPTION =
  '24/7 licensed taxi and airport transfers across Prince Edward Island. Regulated fares agreed before you travel, no surge pricing, dispatch answered by a person at any hour.';

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: TITLE,
  description: DESCRIPTION,
  alternates: {
    canonical: SITE_IS_LIVE ? '/' : undefined,
    languages: SITE_IS_LIVE ? { 'en-CA': '/' } : undefined,
  },
  robots: SITE_IS_LIVE
    ? { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1 }
    : { index: false, follow: false },
  authors: [{ name: 'Charlottetown Taxi' }],
  publisher: 'Charlottetown Taxi',
  openGraph: {
    type: 'website',
    locale: 'en_CA',
    siteName: 'Charlottetown Taxi',
    title: TITLE,
    description: OG_DESCRIPTION,
    url: '/',
    images: [
      {
        url: '/images/og-charlottetown-taxi.jpg',
        width: 1200,
        height: 630,
        alt: 'Charlottetown Taxi — 24/7 taxi and airport transfers across Prince Edward Island',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: TITLE,
    description: OG_DESCRIPTION,
    images: [
      {
        url: '/images/og-charlottetown-taxi.jpg',
        alt: 'Charlottetown Taxi — 24/7 taxi and airport transfers across Prince Edward Island',
      },
    ],
  },
  other: {
    'theme-color': '#0B1622',
    'geo.region': 'CA-PE',
    'geo.placename': 'Charlottetown',
    ICBM: '46.25, -63.13',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${cormorant.variable} ${inter.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(businessJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
        />
      </head>
      <body>
        <a className="skip" href="#main">
          Skip to content
        </a>
        <BookingProvider>
          <Header />
          {children}
          <Footer />
          <GlobalWidgets />
          <FabBooking />
        </BookingProvider>
        <RevealObserver />
      </body>
    </html>
  );
}
