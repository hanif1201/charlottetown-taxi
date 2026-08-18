'use client';

import { delayVar } from '@/lib/css-vars';
import { useCruiseBooking } from '@/components/cruise/CruiseBookingContext';

export function CruiseHero() {
  const { requestMode } = useCruiseBooking();

  return (
    <section className="hero-cine" aria-labelledby="heroTitle">
      <div className="hc-media">
        <div
          className="hc-photo hc-photo-sea"
          role="img"
          aria-label="Charlottetown Taxi vehicle waiting for a pre-arranged pickup in Charlottetown, Prince Edward Island"
        />
        <div className="hc-veil" aria-hidden="true" />
        <div className="hc-grain" aria-hidden="true" />
      </div>
      <div className="wrap hc-inner">
        <p className="kicker fade" style={delayVar('.05s')}>
          <span className="kick-rule" aria-hidden="true" />
          Port Charlottetown &middot; Wood Islands &middot; Souris
        </p>
        <h1 id="heroTitle" className="fade" style={delayVar('.15s')}>
          Cruise &amp; ferry transportation in <em>Prince Edward Island.</em>
        </h1>
        <p className="hc-lede fade" style={delayVar('.25s')}>
          Pre-arranged transportation for Port Charlottetown cruise passengers, Wood Islands ferry
          travellers and Souris ferry connections — with private, chauffeur-driven transportation
          across the Island in between.
        </p>
        <div className="hc-actions fade" style={delayVar('.35s')}>
          <a href="#book" className="btn btn-brass hc-primary" onClick={() => requestMode('cruise')}>
            Book cruise transportation
          </a>
          <a href="#book" className="btn btn-outline hc-primary" onClick={() => requestMode('ferry')}>
            Book ferry transportation
          </a>
        </div>
      </div>
    </section>
  );
}
