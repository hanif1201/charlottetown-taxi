import Link from 'next/link';

export function Services() {
  return (
    <section className="sec dark" id="services">
      <div className="wrap">
        <div className="head reveal">
          <span className="eyebrow">Our Services</span>
          <h2>
            Our Charlottetown Taxi &amp; PEI Transport Services — <em>every journey on the Island</em>
          </h2>
          <p>
            A ride across Charlottetown and a three-day golf itinerary are different disciplines.
            Whether you need an airport chauffeur at dawn, cruise port transportation for a group, or
            a driver who can talk you through the north shore, each service runs to its own standard —
            the right vehicle, the right timing, and someone briefed on what the trip actually
            involves.
          </p>
        </div>
        <div className="svc-grid reveal">
          <article className="svc svc-photo">
            <div
              className="simg simg-sedan"
              role="img"
              aria-label="Charlottetown Taxi executive sedan on a Prince Edward Island street"
            />
            <div className="sbody">
              <h3>Charlottetown Taxi Service</h3>
              <p>
                Licensed cabs across Charlottetown, Stratford and Cornwall at regulated fares from
                $8.50 — 24/7, no surge pricing.
              </p>
              <a className="go" href="#book">
                Charlottetown taxi service →
              </a>
            </div>
          </article>

          <article className="svc svc-photo">
            <div
              className="simg simg-airport"
              role="img"
              aria-label="Airplane at the gate at Charlottetown Airport YYG"
            />
            <div className="sbody">
              <h3>YYG Airport Taxi &amp; Transfers</h3>
              <p>
                Charlottetown Airport taxi service at YYG with live flight monitoring, meet &amp;
                greet and published airport fares.
              </p>
              <Link className="go" href="/airport-transfer/">
                YYG airport taxi →
              </Link>
            </div>
          </article>

          <article className="svc svc-photo">
            <div
              className="simg simg-tour"
              role="img"
              aria-label="Green Gables Heritage Place in Cavendish, Prince Edward Island"
            />
            <div className="sbody">
              <h3>Private PEI Island Tours</h3>
              <p>
                Private PEI tours to Anne of Green Gables, Cavendish, North Rustico and Point Prim —
                at your pace with a local driver.
              </p>
              <a className="go" href="#book">
                Private tours PEI →
              </a>
            </div>
          </article>

          <article className="svc svc-photo">
            <div
              className="simg simg-cruise"
              role="img"
              aria-label="Northumberland Ferries vessel docked at Wood Islands, Prince Edward Island"
            />
            <div className="sbody">
              <h3>Charlottetown Cruise Port Transfers</h3>
              <p>
                Cruise ship transportation in PEI — Charlottetown Cruise Port, Wood Islands Ferry and
                CTMA Souris, timed to docking and all-aboard.
              </p>
              <a className="go" href="#book">
                Cruise port transfers →
              </a>
            </div>
          </article>

          <article className="svc svc-photo">
            <div
              className="simg simg-golf"
              role="img"
              aria-label="Golfer teeing off on a Prince Edward Island coastal golf course"
            />
            <div className="sbody">
              <h3>PEI Golf Course Transportation</h3>
              <p>
                Golf transportation across PEI — Crowbush Cove, Brudenell, Dundarave and Green
                Gables, multi-course itineraries with room for clubs.
              </p>
              <a className="go" href="#book">
                Golf transport PEI →
              </a>
            </div>
          </article>

          <article className="svc svc-photo">
            <div
              className="simg simg-corporate"
              role="img"
              aria-label="A chauffeur holding the door of a black executive SUV for two business travellers arriving at a hotel entrance"
            />
            <div className="sbody">
              <h3>Corporate &amp; Executive Travel</h3>
              <p>
                Executive sedans and SUVs for business accounts, visiting teams and client travel —
                billed monthly, or booked one-off with a fixed price agreed in advance.
              </p>
              <div className="go-row">
                <Link className="go" href="/corporate-transportation/">
                  Corporate accounts →
                </Link>
                <a className="go" href="#book">
                  Request a quote →
                </a>
              </div>
            </div>
          </article>

          <article className="svc svc-photo">
            <div
              className="simg simg-wedding"
              role="img"
              aria-label="A bride and groom walking arm in arm outside a barn wedding venue on Prince Edward Island"
            />
            <div className="sbody">
              <h3>Wedding Transportation</h3>
              <p>
                Wedding transportation in PEI — wedding party transport and guest shuttles coordinated
                across venues, timed to your run sheet.
              </p>
              <a className="go" href="#book">
                Wedding transport PEI →
              </a>
            </div>
          </article>

          <article className="svc svc-photo">
            <div
              className="simg simg-hourly"
              role="img"
              aria-label="A Charlottetown Taxi driver checking his phone beside a branded vehicle outside a waterfront hotel"
            />
            <div className="sbody">
              <h3>Hourly &amp; Long-Distance Chauffeur</h3>
              <p>
                A vehicle and driver held by the hour for local stops, or booked for long-distance
                and off-Island travel — quoted upfront with no meter running.
              </p>
              <a className="go" href="#book">
                Hourly &amp; long distance →
              </a>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
