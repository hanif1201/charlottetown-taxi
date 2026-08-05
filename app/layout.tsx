import type { Metadata } from 'next';
import { Cormorant_Garamond, Inter } from 'next/font/google';
import './globals.css';
import { businessJsonLd, faqJsonLd, SITE_URL } from '@/lib/seo';
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

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: 'Charlottetown Taxi | Private Transportation & Airport Transfers, PEI',
  description:
    'Charlottetown’s locally owned private transportation company. YYG airport transfers, cruise port transportation, private Island tours, golf, wedding and corporate travel across Prince Edward Island. Licensed drivers, regulated fares, 24/7 dispatch.',
  alternates: { canonical: '/' },
  robots: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1 },
  openGraph: {
    type: 'website',
    locale: 'en_CA',
    siteName: 'Charlottetown Taxi',
    title: 'Charlottetown Taxi | Private Transportation & Airport Transfers, PEI',
    description:
      'Charlottetown’s locally owned private transportation company — YYG airport transfers, cruise port transportation, Island tours and executive travel across Prince Edward Island.',
    url: '/',
    images: [
      {
        url: '/wp-content/uploads/charlottetown-taxi-group-transport.jpg',
        alt: 'Charlottetown Taxi vehicle at Charlottetown Airport, Prince Edward Island',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Charlottetown Taxi | Private Transportation & Airport Transfers, PEI',
    description:
      'Locally owned private transportation across Prince Edward Island — airport, cruise, tours and executive travel.',
    images: ['/wp-content/uploads/charlottetown-taxi-group-transport.jpg'],
  },
  other: { 'theme-color': '#0B1622' },
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
