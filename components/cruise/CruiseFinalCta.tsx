'use client';

import { useCruiseBooking } from '@/components/cruise/CruiseBookingContext';

export function CruiseFinalCta() {
  const { requestMode } = useCruiseBooking();

  return (
    <section className="sec sec-tight">
      <div className="wrap">
        <div className="final">
          <h2>
            Arriving by sea? <em>Tell us your sailing.</em>
          </h2>
          <p>Send the ship or the ferry time and we will build the ground transportation around it.</p>
          <div className="row">
            <a href="#book" className="btn btn-brass" onClick={() => requestMode('cruise')}>
              Book cruise transportation
            </a>
            <a href="#book" className="btn btn-outline" onClick={() => requestMode('ferry')}>
              Book ferry transportation
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
