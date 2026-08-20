import { Hero } from '@/components/sections/Hero';
import { TrustBar } from '@/components/sections/TrustBar';
import { Services } from '@/components/sections/Services';
import { Pricing } from '@/components/sections/Pricing';
import { Fleet } from '@/components/sections/Fleet';
import { BookingSection } from '@/components/booking/BookingSection';
import { Coverage } from '@/components/sections/Coverage';
import { Reviews } from '@/components/sections/Reviews';
import { Faq } from '@/components/sections/Faq';
import { FinalCta } from '@/components/sections/FinalCta';

export default function Home() {
  return (
    <main id="main">
      <Hero />
      <TrustBar />
      <Services />
      <Pricing />
      <Fleet />
      <BookingSection />
      <Coverage />
      <Reviews />
      <Faq />
      <FinalCta />
    </main>
  );
}
