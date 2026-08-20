import { PhoneIcon } from '@/components/ui/Icon';
import { delayVar } from '@/lib/css-vars';

export function CorporateHero() {
  return (
    <section className="hero-cine" aria-labelledby="heroTitle">
      <div className="hc-media">
        <div
          className="hc-photo hc-photo-corp"
          role="img"
          aria-label="Charlottetown Taxi executive sedan positioned for a corporate pickup in Charlottetown, Prince Edward Island"
        />
        <div className="hc-veil" aria-hidden="true" />
        <div className="hc-grain" aria-hidden="true" />
      </div>
      <div className="wrap hc-inner">
        <p className="kicker fade" style={delayVar('.05s')}>
          <span className="kick-rule" aria-hidden="true" />
          Business transportation &middot; Prince Edward Island
        </p>
        <h1 id="heroTitle" className="fade" style={delayVar('.15s')}>
          Corporate transportation for <em>organizations across PEI.</em>
        </h1>
        <p className="hc-lede fade" style={delayVar('.25s')}>
          Executive and client travel, airport pickups for staff and visitors, conference
          movement and recurring scheduled transportation — arranged in advance, confirmed in
          writing, and handled by a licensed Charlottetown company rather than left to whoever is
          available on the day.
        </p>
        <div className="hc-actions fade" style={delayVar('.35s')}>
          <a href="#request" className="btn btn-brass hc-primary">
            Request corporate transportation
          </a>
          <div className="contact-trio">
            <a href="tel:+17823777533" className="ct ct-call">
              <PhoneIcon />
              <span>Call</span>
            </a>
            <a href="mailto:info@charlottetowntaxi.ca" className="ct">
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <path d="M3 5h18v14H3z" fill="none" stroke="currentColor" strokeWidth={1.6} />
                <path d="M3 6l9 6 9-6" fill="none" stroke="currentColor" strokeWidth={1.6} />
              </svg>
              <span>Email</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
