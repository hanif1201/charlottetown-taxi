import type { Metadata } from 'next';
import { SITE_IS_LIVE } from '@/lib/seo';
import { CorporateHero } from '@/components/corporate/CorporateHero';
import { CorporateSolutions } from '@/components/corporate/CorporateSolutions';
import { CorporateBuiltForBusiness } from '@/components/corporate/CorporateBuiltForBusiness';
import { CorporateClients } from '@/components/corporate/CorporateClients';
import { CorporateRequestSection } from '@/components/corporate/CorporateRequestSection';
import { CorporateTrust } from '@/components/corporate/CorporateTrust';
import { CorporateFaq } from '@/components/corporate/CorporateFaq';
import { CorporateFinalCta } from '@/components/corporate/CorporateFinalCta';

export const metadata: Metadata = {
  title: 'Corporate Transportation Charlottetown | Business Travel PEI',
  description:
    'Corporate transportation across Prince Edward Island — executive and client travel, airport pickups for staff and guests, conference and group movement, with pre-arranged accounts.',
  alternates: { canonical: SITE_IS_LIVE ? '/corporate-travel/' : undefined },
  robots: SITE_IS_LIVE ? { index: true, follow: true } : { index: false, follow: false },
};

export default function CorporateTransportationPage() {
  return (
    <main id="main">
      <CorporateHero />
      <CorporateSolutions />
      <CorporateBuiltForBusiness />
      <CorporateClients />
      <CorporateRequestSection />
      <CorporateTrust />
      <CorporateFaq />
      <CorporateFinalCta />
    </main>
  );
}
