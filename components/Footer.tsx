import Image from 'next/image';
import Link from 'next/link';

export function Footer() {
  return (
    <footer id="contact">
      <div className="wrap">
        <div className="foot-top">
          <div className="foot-brand">
            <p className="fabout">
              Prince Edward Island&apos;s licensed 24-hour taxi and private transportation service.
              Charlottetown based, Island-wide, and answering the phone at 3am since 2016.
            </p>
            <div className="fbtns">
              <a href="tel:+17823777533" className="btn btn-brass btn-sm">
                Call Now
              </a>
              <a href="sms:+17823777533" className="btn btn-outline btn-sm">
                Text Us
              </a>
            </div>
            <div className="social">
              <a
                href="https://www.facebook.com/charlottetowntaxi"
                rel="noopener"
                aria-label="Charlottetown Taxi on Facebook"
              >
                <svg viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M22 12a10 10 0 10-11.6 9.9v-7H7.9V12h2.5V9.8c0-2.5 1.5-3.9 3.8-3.9 1.1 0 2.2.2 2.2.2v2.5h-1.3c-1.2 0-1.6.8-1.6 1.6V12h2.8l-.4 2.9h-2.4v7A10 10 0 0022 12z" />
                </svg>
              </a>
              <a
                href="https://www.instagram.com/charlottetowntaxi"
                rel="noopener"
                aria-label="Charlottetown Taxi on Instagram"
              >
                <svg viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M12 2.2c3.2 0 3.6 0 4.9.1 1.2.1 1.8.2 2.2.4.6.2 1 .5 1.4.9.4.4.7.8.9 1.4.2.4.4 1 .4 2.2.1 1.3.1 1.7.1 4.9s0 3.6-.1 4.9c-.1 1.2-.2 1.8-.4 2.2-.2.6-.5 1-.9 1.4-.4.4-.8.7-1.4.9-.4.2-1 .4-2.2.4-1.3.1-1.7.1-4.9.1s-3.6 0-4.9-.1c-1.2-.1-1.8-.2-2.2-.4-.6-.2-1-.5-1.4-.9-.4-.4-.7-.8-.9-1.4-.2-.4-.4-1-.4-2.2C2.2 15.6 2.2 15.2 2.2 12s0-3.6.1-4.9c.1-1.2.2-1.8.4-2.2.2-.6.5-1 .9-1.4.4-.4.8-.7 1.4-.9.4-.2 1-.4 2.2-.4C8.4 2.2 8.8 2.2 12 2.2zm0 1.8c-3.1 0-3.5 0-4.7.1-1.1.1-1.7.2-2.1.3-.5.2-.9.4-1.2.8-.4.3-.6.7-.8 1.2-.1.4-.3 1-.3 2.1-.1 1.2-.1 1.6-.1 4.7s0 3.5.1 4.7c.1 1.1.2 1.7.3 2.1.2.5.4.9.8 1.2.3.4.7.6 1.2.8.4.1 1 .3 2.1.3 1.2.1 1.6.1 4.7.1s3.5 0 4.7-.1c1.1-.1 1.7-.2 2.1-.3.5-.2.9-.4 1.2-.8.4-.3.6-.7.8-1.2.1-.4.3-1 .3-2.1.1-1.2.1-1.6.1-4.7s0-3.5-.1-4.7c-.1-1.1-.2-1.7-.3-2.1-.2-.5-.4-.9-.8-1.2-.3-.4-.7-.6-1.2-.8-.4-.1-1-.3-2.1-.3-1.2-.1-1.6-.1-4.7-.1zm0 3.1a4.9 4.9 0 110 9.8 4.9 4.9 0 010-9.8zm0 8.1a3.2 3.2 0 100-6.4 3.2 3.2 0 000 6.4zm6.2-8.3a1.1 1.1 0 11-2.3 0 1.1 1.1 0 012.3 0z" />
                </svg>
              </a>
              <a
                href="https://www.tiktok.com/@charlottetowntaxi"
                rel="noopener"
                aria-label="Charlottetown Taxi on TikTok"
              >
                <svg viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M16.6 5.8a4.8 4.8 0 01-1-2.8h-3v11.9a2.5 2.5 0 11-1.8-2.4V9.4A5.6 5.6 0 1015 15V9.6a7.9 7.9 0 004.5 1.4V8a4.8 4.8 0 01-2.9-2.2z" />
                </svg>
              </a>
            </div>
            <a
              className="greview"
              href="https://maps.app.goo.gl/ZZrF6niQafN5k8JJ8"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="gr-stars" aria-hidden="true">
                ★★★★★
              </span>
              <span className="gr-t">Read our Google reviews</span>
            </a>
          </div>

          <div className="foot-links">
            <div>
              <h3>Services</h3>
              <ul>
                <li>
                  <Link href="/taxi-service/">Taxi Service</Link>
                </li>
                <li>
                  <Link href="/airport-transfer/">Airport Transfers</Link>
                </li>
                <li>
                  <Link href="/cruise-transfers/">Cruise &amp; Ferry</Link>
                </li>
                <li>
                  <Link href="/golf-transportation/">Golf Transportation</Link>
                </li>
                <li>
                  <Link href="/island-tours/">Island Tours</Link>
                </li>
                <li>
                  <Link href="/corporate-travel/">Corporate Travel</Link>
                </li>
                <li>
                  <Link href="/event-transfers/">Weddings &amp; Events</Link>
                </li>
                <li>
                  <Link href="/hourly-chauffeur/">Hourly Chauffeur</Link>
                </li>
                <li>
                  <Link href="/medical-transportation/">Medical Transport</Link>
                </li>
              </ul>
            </div>
            <div>
              <h3>Airport &amp; Ports</h3>
              <ul>
                <li>
                  <Link href="/airport-transfer/">Charlottetown Airport (YYG)</Link>
                </li>
                <li>
                  <Link href="/airport-transfer/">YYG Arrivals pickup</Link>
                </li>
                <li>
                  <Link href="/airport-transfer/">YYG Departures</Link>
                </li>
                <li>
                  <Link href="/cruise-transfers/">Charlottetown Cruise Port</Link>
                </li>
                <li>
                  <Link href="/cruise-transfers/">Wood Islands Ferry</Link>
                </li>
                <li>
                  <Link href="/cruise-transfers/">CTMA Ferry, Souris</Link>
                </li>
                <li>
                  <Link href="/long-distance/">Confederation Bridge</Link>
                </li>
              </ul>
            </div>
            <div>
              <h3>Island Destinations</h3>
              <ul>
                <li>
                  <Link href="/island-tours/">Green Gables, Cavendish</Link>
                </li>
                <li>
                  <Link href="/island-tours/">Cavendish Beach</Link>
                </li>
                <li>
                  <Link href="/island-tours/">North Rustico</Link>
                </li>
                <li>
                  <Link href="/island-tours/">Brackley Beach</Link>
                </li>
                <li>
                  <Link href="/island-tours/">Point Prim Lighthouse</Link>
                </li>
                <li>
                  <Link href="/island-tours/">Victoria-by-the-Sea</Link>
                </li>
                <li>
                  <Link href="/taxi-service/">Stratford &amp; Cornwall</Link>
                </li>
                <li>
                  <Link href="/long-distance/">Summerside</Link>
                </li>
                <li>
                  <Link href="/long-distance/">Montague &amp; Souris</Link>
                </li>
              </ul>
            </div>
            <div>
              <h3>Company</h3>
              <ul>
                <li>
                  <Link href="/about-us/">About Us</Link>
                </li>
                <li>
                  <Link href="/our-fleet/">Our Fleet</Link>
                </li>
                <li>
                  <Link href="/blog/">Travel Notes</Link>
                </li>
                <li>
                  <Link href="/contact-us/">Contact</Link>
                </li>
                <li>
                  <a href="#faq">FAQs</a>
                </li>
                <li>
                  <Link href="/privacy-policy/">Privacy Policy</Link>
                </li>
                <li>
                  <Link href="/terms/">Terms of Service</Link>
                </li>
              </ul>
              <h3 className="mt">Contact</h3>
              <ul>
                <li>
                  72 Kensington Road
                  <br />
                  Charlottetown, PE C1A 5J2
                </li>
                <li>
                  <a href="tel:+17823777533">Call +1 (782) 377-7533</a>
                </li>
                <li>
                  <a href="sms:+17823777533">Text +1 (782) 377-7533</a>
                </li>
                <li>
                  <a href="mailto:info@charlottetowntaxi.ca">info@charlottetowntaxi.ca</a>
                </li>
                <li>Open 24 hours, 7 days a week</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="foot-creds">
          <div className="fc-marks">
            <Image src="/images/bbb-badge.png" alt="BBB Accredited Business" width={210} height={80} />
            <Image src="/images/tiapei-badge.png" alt="TIAPEI Proud Member" width={130} height={130} />
            <Image
              src="/images/payment-icons.png"
              alt="Visa, Mastercard and Apple Pay accepted"
              width={259}
              height={32}
            />
          </div>
          <p className="fc-lic">
            Licensed and commercially insured under the City of Charlottetown Taxi Bylaw #2021-TX-01.
            Fares as published by City Council; airport fares per the Charlottetown Airport Authority
            tariff.
          </p>
        </div>

        <div className="fbot">
          <span>© 2026 Charlottetown Taxi. All rights reserved.</span>
          <span>BBB Accredited Business · TIAPEI Proud Member · Licensed &amp; Insured</span>
        </div>
      </div>
    </footer>
  );
}
