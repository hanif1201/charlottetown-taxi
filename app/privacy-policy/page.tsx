import type { Metadata } from 'next';
import { SITE_IS_LIVE } from '@/lib/seo';

export const metadata: Metadata = {
  title: 'Privacy Policy | Charlottetown Taxi',
  description: 'How Charlottetown Taxi collects, uses and protects the information you share when you book a ride.',
  alternates: { canonical: SITE_IS_LIVE ? '/privacy-policy/' : undefined },
  robots: SITE_IS_LIVE ? { index: true, follow: true } : { index: false, follow: false },
};

export default function PrivacyPolicyPage() {
  return (
    <main id="main">
      <section className="sec">
        <div className="wrap legal">
          <span className="eyebrow">Legal</span>
          <h1>Privacy Policy</h1>
          <p className="legal-updated">Last updated: August 2026</p>

          <p>
            Charlottetown Taxi (&ldquo;we&rdquo;, &ldquo;us&rdquo;) operates charlottetowntaxi.ca and takes
            bookings by phone, text, WhatsApp and the form on this site. This page explains what
            information we collect when you book a ride, what we do with it, and how to reach us
            about it.
          </p>

          <h2>Information we collect</h2>
          <p>When you submit a booking, we collect:</p>
          <ul>
            <li>Your name, phone number and, if you provide it, your email address</li>
            <li>Pickup and drop-off details, date and time, and any trip-specific information you give us (flight number, golf tee times, venue details and similar)</li>
            <li>Passenger, luggage, child seat and accessibility preferences, if provided</li>
            <li>Any notes you add to your booking</li>
          </ul>
          <p>
            We do not require an account, and payment for your ride is handled in the vehicle at the
            time of travel — we do not collect card numbers through this website.
          </p>

          <h2>How we use it</h2>
          <p>
            Booking information is used solely to arrange, dispatch and confirm your ride, and to
            contact you about it. A copy of each booking is emailed to our dispatch inbox so a
            person can act on it. We do not sell, rent or share your information with third parties
            for marketing purposes.
          </p>

          <h2>How it&apos;s stored</h2>
          <p>
            Booking records are stored in a secured database and retained for our operating and
            record-keeping needs. If you would like a booking record deleted, contact us using the
            details below and we will action the request.
          </p>

          <h2>Cookies and tracking</h2>
          <p>
            This site does not run third-party advertising or analytics trackers. Any cookies in use
            are limited to what the site needs to function.
          </p>

          <h2>Third parties</h2>
          <p>
            We use Resend to deliver booking notification emails, and a hosted database provider to
            store booking records. Both process data only as needed to provide those services to us.
          </p>

          <h2>Contact us</h2>
          <p>
            Questions about this policy, or a request to access or delete your information, can be
            sent to{' '}
            <a href="mailto:info@charlottetowntaxi.ca">info@charlottetowntaxi.ca</a> or by calling{' '}
            <a href="tel:+17823777533">+1 (782) 377-7533</a>.
          </p>

          <p className="legal-note">
            This policy is a plain-language summary of our data practices and is not a substitute
            for legal advice.
          </p>
        </div>
      </section>
    </main>
  );
}
