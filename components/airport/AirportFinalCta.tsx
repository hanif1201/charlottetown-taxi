export function AirportFinalCta() {
  return (
    <section style={{ paddingTop: 0 }}>
      <div className="wrap">
        <div className="final reveal">
          <span className="eyebrow" style={{ color: 'var(--brass)', justifyContent: 'center' }}>
            Available 24 Hours
          </span>
          <h2>
            Give us the flight number. <em>We&rsquo;ll handle the rest.</em>
          </h2>
          <p>
            Arrivals met at the door, departures timed from your flight, and the fare settled
            before you travel.
          </p>
          <div className="row">
            <a href="#book" className="btn btn-brass">
              Book Airport Transfer
            </a>
            <a href="tel:+17823777533" className="btn btn-outline">
              Call Dispatch
            </a>
            <a href="sms:+17823777533" className="btn btn-outline">
              Text Us
            </a>
            <a href="https://wa.me/17823777533" rel="noopener" className="btn btn-wa">
              WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
