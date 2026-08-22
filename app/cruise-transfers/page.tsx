import type { Metadata } from 'next';
import { SITE_IS_LIVE } from '@/lib/seo';
import { CruiseBookingProvider } from '@/components/cruise/CruiseBookingContext';
import { CruiseHero } from '@/components/cruise/CruiseHero';
import { CruisePaths } from '@/components/cruise/CruisePaths';
import { CruiseIntro } from '@/components/cruise/CruiseIntro';
import { CruiseShips } from '@/components/cruise/CruiseShips';
import { FerryTerminals } from '@/components/cruise/FerryTerminals';
import { CruiseBookingWizard } from '@/components/cruise/CruiseBookingWizard';
import { CruiseTrust } from '@/components/cruise/CruiseTrust';
import { CruiseFaq } from '@/components/cruise/CruiseFaq';
import { CruiseFinalCta } from '@/components/cruise/CruiseFinalCta';

export const metadata: Metadata = {
  title: 'Charlottetown Cruise & Ferry Transportation | PEI Port Transfers',
  description:
    'Pre-arranged transportation for Port Charlottetown cruise passengers and Wood Islands and Souris ferry travellers — private PEI shore transportation, terminal pickups and drop-offs.',
  alternates: { canonical: SITE_IS_LIVE ? '/cruise-ferry-transportation/' : undefined },
  robots: SITE_IS_LIVE ? { index: true, follow: true } : { index: false, follow: false },
};

export default function CruiseFerryTransportationPage() {
  return (
    <CruiseBookingProvider>
      <main id="main">
        <CruiseHero />
        <CruisePaths />
        <CruiseIntro />
        <CruiseShips />
        <FerryTerminals />
        <CruiseBookingWizard />
        <CruiseTrust />
        <CruiseFaq />
        <CruiseFinalCta />
      </main>
    </CruiseBookingProvider>
  );
}
