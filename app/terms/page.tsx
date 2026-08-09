import type { Metadata } from 'next';
import { SITE_IS_LIVE } from '@/lib/seo';

export const metadata: Metadata = {
  title: 'Terms of Service | Charlottetown Taxi',
  description: 'The terms that apply when you book a ride with Charlottetown Taxi.',
  alternates: { canonical: SITE_IS_LIVE ? '/terms/' : undefined },
  robots: SITE_IS_LIVE ? { index: true, follow: true } : { index: false, follow: false },
};

export default function TermsPage() {
  return (
    <main id="main">
      <section className="sec">
        <div className="wrap legal">
          <span className="eyebrow">Legal</span>
          <h1>Terms of Service</h1>
          <p className="legal-updated">Last updated: August 2026</p>

          <p>
            These terms apply when you book a ride with Charlottetown Taxi, whether through this
            website, by phone, text or WhatsApp.
          </p>

          <h2>Bookings</h2>
          <p>
            A booking submitted through this site or by phone is confirmed once dispatch has
            contacted you to acknowledge it. We aim to confirm every booking promptly, but
            confirmation is not automatic on submission — call or text dispatch directly if you need
            immediate confirmation.
          </p>

          <h2>Fares</h2>
          <p>
            Fares within Charlottetown, Stratford and Cornwall follow the zone rates set out in the
            City of Charlottetown Taxi Bylaw #2021-TX-01. Airport transfers follow the tariff
            published by the Charlottetown Airport Authority. Journeys outside these areas are quoted
            and agreed with dispatch before travel. We do not apply surge pricing.
          </p>

          <h2>Cancellations</h2>
          <p>
            You can cancel or change a booking by calling or texting dispatch. Please give as much
            notice as you can, particularly for pre-booked airport, golf and event transportation, so
            we can release the vehicle for other passengers.
          </p>

          <h2>Payment</h2>
          <p>
            Payment is made in the vehicle at the end of your trip. We accept cash, Interac debit,
            Visa, Mastercard, American Express and Apple Pay. Corporate accounts can be arranged for
            monthly invoicing.
          </p>

          <h2>Conduct and liability</h2>
          <p>
            Vehicles and drivers operate under Prince Edward Island commercial licensing and
            insurance requirements. We are not liable for delays caused by circumstances outside our
            control, including weather, road conditions, flight delays or traffic. Passengers are
            responsible for their own belongings left in a vehicle.
          </p>

          <h2>Website use</h2>
          <p>
            This website is provided to describe our services and take booking requests. We aim to
            keep the fare and route information on it accurate and current, but the fare confirmed by
            dispatch at the time of booking is the fare that applies.
          </p>

          <h2>Contact us</h2>
          <p>
            Questions about these terms can be sent to{' '}
            <a href="mailto:info@charlottetowntaxi.ca">info@charlottetowntaxi.ca</a> or by calling{' '}
            <a href="tel:+17823777533">+1 (782) 377-7533</a>.
          </p>

          <p className="legal-note">
            This is a plain-language summary of our terms of service and is not a substitute for
            legal advice.
          </p>
        </div>
      </section>
    </main>
  );
}
