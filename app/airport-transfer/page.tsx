import type { Metadata } from 'next';
import { SITE_IS_LIVE } from '@/lib/seo';
import { AirportHero } from '@/components/airport/AirportHero';
import { AirportTrust } from '@/components/airport/AirportTrust';
import { AirportFares } from '@/components/airport/AirportFares';
import { AirportDarkCta } from '@/components/airport/AirportDarkCta';
import { AirportBookingSection } from '@/components/airport/AirportBookingSection';
import { AirportWhyUs } from '@/components/airport/AirportWhyUs';
import { AirportVehicles } from '@/components/airport/AirportVehicles';
import { DestinationsRail } from '@/components/airport/DestinationsRail';
import { AirportReviews } from '@/components/airport/AirportReviews';
import { AirportGuides } from '@/components/airport/AirportGuides';
import { AirportFaq } from '@/components/airport/AirportFaq';
import { AirportFinalCta } from '@/components/airport/AirportFinalCta';

export const metadata: Metadata = {
  title: 'Charlottetown Airport Taxi | YYG Airport Transfers 24/7',
  description:
    'Charlottetown Airport taxi and YYG transfers, 24 hours. Published zone fares — $20 Charlottetown, $30 Stratford and Cornwall — with flight-tracked pickups.',
  alternates: { canonical: SITE_IS_LIVE ? '/airport-transfer/' : undefined },
  robots: SITE_IS_LIVE ? { index: true, follow: true } : { index: false, follow: false },
};

export default function AirportTransferPage() {
  return (
    <main id="main">
      <AirportHero />
      <AirportTrust />
      <AirportFares />
      <AirportDarkCta />
      <AirportBookingSection />
      <AirportWhyUs />
      <AirportVehicles />
      <DestinationsRail />
      <AirportReviews />
      <AirportGuides />
      <AirportFaq />
      <AirportFinalCta />
    </main>
  );
}
