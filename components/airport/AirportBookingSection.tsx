import { AirportBookingFields } from '@/components/airport/AirportBookingFields';

export function AirportBookingSection() {
  return (
    <section id="book" style={{ background: 'var(--stone)' }}>
      <div className="wrap">
        <div className="head reveal">
          <span className="eyebrow">Booking</span>
          <h2>
            Book your <em>YYG airport transfer</em>
          </h2>
          <p>
            Choose whether you&rsquo;re arriving or departing and we&rsquo;ll ask only for the
            details needed for that trip.
          </p>
        </div>
        <div className="booking">
          <div className="bform reveal">
            <AirportBookingFields />
          </div>
        </div>
      </div>
    </section>
  );
}
