import { PhoneIcon, WhatsAppIcon, ChevronDownIcon } from '@/components/ui/Icon';
import { delayVar } from '@/lib/css-vars';

export function Hero() {
  return (
    <section className="hero-cine" aria-labelledby="heroTitle">
      <div className="hc-media">
        <div
          className="hc-photo"
          role="img"
          aria-label="Charlottetown Taxi branded Ford Bronco waiting at the Arrivals door of Charlottetown Airport, Prince Edward Island"
        />
        <div className="hc-veil" aria-hidden="true" />
        <div className="hc-grain" aria-hidden="true" />
      </div>

      <div className="wrap hc-inner">
        <p className="kicker fade" style={delayVar('.05s')}>
          <span className="kick-rule" aria-hidden="true" />
          Locally owned · Licensed &amp; insured · Prince Edward Island
        </p>

        <h1 id="heroTitle" className="fade" style={delayVar('.15s')}>
          Every road on this Island, <em>and someone who knows them all.</em>
        </h1>

        <p className="hc-lede fade" style={delayVar('.28s')}>
          Charlottetown&rsquo;s locally owned private transportation company, serving all of Prince
          Edward Island around the clock. YYG airport transfers, cruise port connections, private
          Island tours, golf itineraries, weddings and corporate travel.
        </p>
        <p className="hc-lede fade" style={delayVar('.34s')}>
          Professional licensed drivers, fixed fares set by City bylaw, and dispatch that answers
          whatever the hour.
        </p>

        <p className="hc-line fade" style={delayVar('.44s')}>
          Arrive unhurried. Leave nothing to chance.
        </p>

        <div className="hc-actions fade" style={delayVar('.54s')}>
          <a href="#book" className="btn btn-brass hc-primary">
            Reserve Your Ride
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
          <li>Licensed &amp; Insured</li>
          <li>100+ Five-Star Reviews</li>
          <li>24/7 Dispatch</li>
          <li>Local PEI Company</li>
          <li>Proudly Serving Prince Edward Island</li>
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
