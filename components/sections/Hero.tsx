import { PhoneIcon, WhatsAppIcon, ChevronDownIcon } from '@/components/ui/Icon';
import { delayVar } from '@/lib/css-vars';

export function Hero() {
  return (
    <section className="hero-cine" aria-labelledby="heroTitle">
      <div className="hc-media">
        <div
          className="hc-photo"
          role="img"
          aria-label="Charlottetown Taxi branded sedan parked outside the Charlottetown Airport terminal at dusk, Prince Edward Island"
        />
        <div className="hc-veil" aria-hidden="true" />
        <div className="hc-grain" aria-hidden="true" />
      </div>

      <div className="wrap hc-inner">
        <p className="kicker fade" style={delayVar('.05s')}>
          <span className="kick-rule" aria-hidden="true" />
          Local, Licensed &amp; Available 24/7
        </p>

        <h1 id="heroTitle" className="fade" style={delayVar('.15s')}>
          Charlottetown Taxi for <em>Every Journey Across PEI &amp; Beyond</em>
        </h1>

        <p className="hc-lede fade" style={delayVar('.28s')}>
          24/7 local rides, YYG airport transfers, cruise and ferry pickups, private tours, golf
          trips, weddings, corporate travel and long-distance transportation across the Maritimes.
        </p>

        <p className="hc-line fade" style={delayVar('.44s')}>
          One local team for every arrival, event and Island itinerary.
        </p>

        <div className="hc-actions fade" style={delayVar('.54s')}>
          <a href="#book" className="btn btn-brass hc-primary">
            Book a Taxi
          </a>
          <div className="contact-trio" role="group" aria-label="Contact dispatch">
            <a href="tel:+17823777533" className="ct ct-call">
              <PhoneIcon />
              <span>Call</span>
            </a>
            <a href="https://wa.me/17823777533" rel="noopener" className="ct ct-wa">
              <WhatsAppIcon />
              <span>WhatsApp</span>
            </a>
          </div>
        </div>

        <p className="hc-dispatch fade" style={delayVar('.62s')}>
          Dispatch answers 24/7 &mdash; <a href="tel:+17823777533">+1 (782) 377-7533</a> &middot;{' '}
          <a href="sms:+17823777533">text us</a>
        </p>

        <ul className="hc-trust fade" style={delayVar('.72s')}>
          <li>BBB Accredited</li>
          <li>TIAPEI Member</li>
          <li>Licensed &amp; Commercially Insured</li>
          <li>24/7 Call &amp; Text Dispatch</li>
        </ul>
      </div>

      <a className="hc-scroll fade" style={delayVar('.86s')} href="#services">
        <span className="hcs-label">Explore our services</span>
        <span className="hcs-arrow" aria-hidden="true">
          <ChevronDownIcon />
        </span>
      </a>
    </section>
  );
}
