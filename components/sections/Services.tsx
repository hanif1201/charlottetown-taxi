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

          <article className="svc svc-icon">
            <svg
              className="sic"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={1.2}
              aria-hidden="true"
            >
              <path d="M2 18h20" />
              <path d="M4 18V9l8-4 8 4v9" />
              <path d="M9 18v-5h6v5" />
              <path d="M2 21h20" />
            </svg>
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

          <article className="svc svc-icon">
            <svg
              className="sic"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={1.2}
              aria-hidden="true"
            >
              <path d="M11 21V4l7 3-7 3" />
              <circle cx={8} cy={19} r={2.5} />
              <path d="M11 19h8" />
            </svg>
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

          <article className="svc svc-icon">
            <svg
              className="sic"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={1.2}
              aria-hidden="true"
            >
              <rect x={3} y={7} width={18} height={13} rx={1.5} />
              <path d="M9 7V5a2 2 0 012-2h2a2 2 0 012 2v2" />
              <path d="M3 12h18" />
            </svg>
            <div className="sbody">
              <h3>Corporate Travel</h3>
              <p>
                Corporate transportation in PEI — executive travel for visiting teams and clients,
                business accounts and monthly invoicing.
              </p>
              <a className="go" href="#book">
                Corporate transport PEI →
              </a>
            </div>
          </article>

          <article className="svc svc-icon">
            <svg
              className="sic"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={1.2}
              aria-hidden="true"
            >
              <path d="M12 21c-4-3.5-7-6.3-7-9.6A4.4 4.4 0 0112 8a4.4 4.4 0 017 3.4c0 3.3-3 6.1-7 9.6z" />
            </svg>
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

          <article className="svc svc-icon">
            <svg
              className="sic"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={1.2}
              aria-hidden="true"
            >
              <circle cx={12} cy={12} r={9} />
              <path d="M12 7v5l3.5 2" />
            </svg>
            <div className="sbody">
              <h3>Hourly Chauffeur</h3>
              <p>
                Hourly chauffeur hire in Charlottetown — a vehicle and driver held for the hours you
                book, with unlimited stops and wait time included.
              </p>
              <a className="go" href="#book">
                Hourly chauffeur →
              </a>
            </div>
          </article>

          <article className="svc svc-icon">
            <svg
              className="sic"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={1.2}
              aria-hidden="true"
            >
              <path d="M4 12h4l2-5 4 10 2-5h4" />
            </svg>
            <div className="sbody">
              <h3>Medical &amp; Long-Distance Transport, PEI</h3>
              <p>
                Medical appointment transportation across PEI and long-distance travel off-Island,
                quoted upfront with no meter running.
              </p>
              <a className="go" href="#book">
                Medical &amp; long distance →
              </a>
            </div>
          </article>

          <article className="svc svc-icon">
            <svg
              className="sic"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={1.2}
              aria-hidden="true"
            >
              <path d="M12 3l8 3v6c0 5-3.5 8-8 9-4.5-1-8-4-8-9V6z" />
              <path d="M9.2 12.1l1.9 1.9 3.7-3.8" />
            </svg>
            <div className="sbody">
              <h3>Executive Transfers</h3>
              <p>
                An executive sedan or SUV, a chauffeur briefed on your schedule, and a fixed price
                agreed in advance — for business travel, client collections and wedding parties.
              </p>
              <a className="go" href="#book">
                Request a quote →
              </a>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
