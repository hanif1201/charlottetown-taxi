import { Hero } from '@/components/sections/Hero';
import { TrustBar } from '@/components/sections/TrustBar';
import { Services } from '@/components/sections/Services';
import { Pricing } from '@/components/sections/Pricing';
import { Highlights } from '@/components/sections/Highlights';
import { Fleet } from '@/components/sections/Fleet';
import { BookingSection } from '@/components/booking/BookingSection';
import { Coverage } from '@/components/sections/Coverage';
import { IslandTours } from '@/components/sections/IslandTours';
import { Reviews } from '@/components/sections/Reviews';
import { Licences } from '@/components/sections/Licences';
import { Faq } from '@/components/sections/Faq';
import { FinalCta } from '@/components/sections/FinalCta';

export default function Home() {
  return (
    <main id="main">
      <Hero />
      <TrustBar />
      <Services />
      <Pricing />
      <Highlights />
      <Fleet />
      <BookingSection />
      <Coverage />
      <IslandTours />
      <Reviews />
      <Licences />
      <Faq />
      <FinalCta />
    </main>
  );
}
