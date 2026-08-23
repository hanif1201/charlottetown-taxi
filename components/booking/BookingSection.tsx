'use client';

import { useBooking } from '@/components/booking/BookingProvider';
import { BookingForm } from '@/components/booking/BookingForm';
import { SummaryPanel } from '@/components/booking/SummaryPanel';
import { SERVICES, SERVICE_ORDER } from '@/lib/services';

export function BookingSection() {
  const { state, dispatch } = useBooking();

  return (
    <section className="sec" id="book">
      <div className="wrap">
        <div className="head reveal center">
          <span className="eyebrow eyebrow-dk">Reserve Your Ride</span>
          <h2>
            Book a Charlottetown Taxi <em>Online</em>
          </h2>
          <p>
            Request your ride in under a minute. Dispatch confirms the vehicle, pickup time and
            fare by your chosen contact method.
          </p>
        </div>

        <div className="picker reveal" role="tablist" aria-label="Select a service">
          {SERVICE_ORDER.map((key) => {
            const s = SERVICES[key];
            return (
              <button
                key={key}
                type="button"
                className="pick"
                role="tab"
                aria-selected={state.svc === key}
                onClick={() => dispatch({ type: 'SET_SVC', svc: key })}
              >
                <span className="pn">{s.pickerLabel}</span>
                <span className="pd">{s.pickerDesc}</span>
              </button>
            );
          })}
        </div>

        <div className="booking-grid">
          <BookingForm />
          <aside className="summary-col reveal">
            <SummaryPanel />
          </aside>
        </div>

        <div className="bside reveal">
          <div className="aside-card">
            <h4>Need a ride right now?</h4>
            <p>
              For immediate pickups, calling or texting is fastest — dispatch can see which vehicle is
              nearest to you.
            </p>
            <div className="aside-btns">
              <a href="tel:+17823777533" className="btn btn-ink btn-sm">
                Call Dispatch
              </a>
              <a href="sms:+17823777533" className="btn btn-line btn-sm">
                Text Us
              </a>
              <a href="https://wa.me/17823777533" rel="noopener" className="btn btn-wa btn-sm">
                WhatsApp
              </a>
            </div>
          </div>
          <div className="aside-card">
            <h4>Booking ahead?</h4>
            <p>
              Early-morning departures, medical appointments and airport runs fill quickly in summer.
              Pre-booking holds a vehicle for your exact time at no extra cost.
            </p>
            <p>
              Complex itineraries — multi-day golf, wedding schedules, corporate accounts — are
              usually faster by phone.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
