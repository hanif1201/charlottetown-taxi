'use client';

import { useRef } from 'react';

interface Destination {
  fare: string;
  title: string;
  distance: string;
  drive: string;
  desc: string;
  linkHref: string;
  linkText: string;
}

const DESTINATIONS: Destination[] = [
  {
    fare: 'Zone fare · $20',
    title: 'YYG → Downtown Charlottetown',
    distance: '8 km',
    drive: 'typically 15 min',
    desc: 'Hotels on Grafton and Kent, Victoria Row and the waterfront. Our shortest run, and the busiest on a cruise day.',
    linkHref: '/#book',
    linkText: 'Charlottetown taxi service →',
  },
  {
    fare: 'Zone fare · $30',
    title: 'YYG → Stratford',
    distance: '12 km',
    drive: '15–20 min',
    desc: 'Across the Hillsborough Bridge for Bunbury, Kinlock and the Tea Hill side.',
    linkHref: '/#book',
    linkText: 'Rides around Stratford →',
  },
  {
    fare: 'Zone fare · $30',
    title: 'YYG → Cornwall',
    distance: '17 km',
    drive: 'about 20 min',
    desc: 'West on the Trans-Canada for Cornwall, North River and Eliot River.',
    linkHref: '/#book',
    linkText: 'Rides around Cornwall →',
  },
  {
    fare: 'Quoted before travel',
    title: 'YYG → Cavendish & Green Gables',
    distance: '38 km',
    drive: 'about 40 min',
    desc: 'Route 2 to Hunter River, then Route 13 north. The busiest visitor run on the Island in July and August.',
    linkHref: '/#services',
    linkText: 'Cavendish and North Shore travel →',
  },
  {
    fare: 'Quoted before travel',
    title: 'YYG → North Rustico',
    distance: '30 km',
    drive: 'about 30 min',
    desc: 'The harbour, the boardwalk and the cottages along Route 6.',
    linkHref: '/#services',
    linkText: 'Island sightseeing travel →',
  },
  {
    fare: 'Quoted before travel',
    title: 'YYG → Summerside',
    distance: '60 km',
    drive: 'about 55 min',
    desc: 'Straight west for conferences, Holland College and the waterfront.',
    linkHref: '/#services',
    linkText: 'Long-distance travel across PEI →',
  },
  {
    fare: 'Quoted before travel',
    title: 'YYG → Brudenell',
    distance: '55 km',
    drive: 'about 50 min',
    desc: 'East along Route 3 for the Brudenell resort area, Georgetown and the Points East coast.',
    linkHref: '/#services',
    linkText: 'Golf course transportation →',
  },
  {
    fare: 'Quoted before travel',
    title: 'YYG → Souris',
    distance: '80 km',
    drive: 'about 1 h 15',
    desc: 'The longest regular airport run on the Island, and the connection for CTMA sailings to the Magdalen Islands.',
    linkHref: '/#services',
    linkText: 'Travel to eastern PEI →',
  },
  {
    fare: 'Quoted before travel',
    title: 'YYG → Wood Islands Ferry',
    distance: '65 km',
    drive: 'about 1 hour',
    desc: 'For the crossing to Caribou, Nova Scotia. Give us the sailing time and we work backwards from it.',
    linkHref: '/cruise-transfers/',
    linkText: 'Ferry and cruise transfers →',
  },
  {
    fare: 'Quoted before travel',
    title: 'YYG → Confederation Bridge',
    distance: '60 km',
    drive: 'about 45 min',
    desc: 'Borden-Carleton for the bridge crossing and onward connections to New Brunswick.',
    linkHref: '/#services',
    linkText: 'Off-Island connections →',
  },
];

export function DestinationsRail() {
  const railRef = useRef<HTMLDivElement>(null);
  const firstCardRef = useRef<HTMLElement>(null);

  function step(dir: 1 | -1) {
    const rail = railRef.current;
    if (!rail) return;
    const card = firstCardRef.current;
    const width = card ? card.getBoundingClientRect().width + 18 : 318;
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    rail.scrollBy({ left: dir * width * 2, behavior: reduce ? 'auto' : 'smooth' });
  }

  return (
    <section className="dark" id="destinations">
      <div className="wrap">
        <div className="head reveal">
          <span className="eyebrow">Popular Routes</span>
          <h2>
            From the terminal to <em>anywhere on the Island</em>
          </h2>
          <p>
            Distances are measured from the terminal. Drive times assume normal conditions —
            summer traffic on Route 6 and the North Shore adds to them.
          </p>
        </div>
        <div
          className="rrail reveal"
          id="destRail"
          ref={railRef}
          tabIndex={0}
          role="group"
          aria-label="Popular destinations from Charlottetown Airport"
        >
          {DESTINATIONS.map((d, i) => (
            <article className="rcard" key={d.title} ref={i === 0 ? firstCardRef : undefined}>
              <div className="rc-k">{d.fare}</div>
              <h3>{d.title}</h3>
              <div className="rc-m">
                <div>
                  <strong>{d.distance}</strong>approx. distance
                </div>
                <div>
                  <strong>{d.drive}</strong>typical drive
                </div>
              </div>
              <p>{d.desc}</p>
              <a className="go" href={d.linkHref}>
                {d.linkText}
              </a>
            </article>
          ))}
        </div>
        <div className="rail-nav reveal">
          <button type="button" aria-label="Scroll destinations left" aria-controls="destRail" onClick={() => step(-1)}>
            ←
          </button>
          <button type="button" aria-label="Scroll destinations right" aria-controls="destRail" onClick={() => step(1)}>
            →
          </button>
          <span className="rail-hint">Swipe for more destinations</span>
        </div>
        <p className="rail-note reveal">
          Anything beyond the Charlottetown, Stratford and Cornwall zones is quoted before you
          travel at the published rate of $2.25 per kilometre. Parks Canada publishes{' '}
          <a
            href="https://parks.canada.ca/lhn-nhs/pe/greengables/visit/visit2"
            rel="nofollow noopener"
          >
            driving directions to Green Gables
          </a>{' '}
          if you want to check that route yourself.
        </p>
      </div>
    </section>
  );
}
