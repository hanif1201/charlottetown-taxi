const STEPS: { pn: string; title: string; desc: string }[] = [
  {
    pn: '01',
    title: 'Port pickup',
    desc: 'Meet your pre-arranged vehicle in line with the confirmed pickup instructions we send you before your call.',
  },
  {
    pn: '02',
    title: 'Private transportation',
    desc: 'Your own vehicle and driver for the day rather than a seat on a coach with forty other people.',
  },
  {
    pn: '03',
    title: 'Custom stops',
    desc: 'Green Gables, Cavendish, the north shore, beaches and lighthouses — as many as your port time allows.',
  },
  {
    pn: '04',
    title: 'Return planning',
    desc: "The itinerary is built backwards from your ship's departure, with time in hand before all-aboard.",
  },
];

export function CruiseIntro() {
  return (
    <section className="sec sec-tight stone" aria-labelledby="cruiseTitle">
      <div className="wrap">
        <div className="head head-tight">
          <p className="eyebrow">Cruise</p>
          <h2 id="cruiseTitle">
            Charlottetown cruise port <em>transportation</em>
          </h2>
          <p>
            Ships dock a short walk from downtown Charlottetown, but the places most passengers
            want to see — Green Gables, Cavendish, the north shore — are an hour or more away.
            Booking a vehicle in advance is how you get there without spending your port time
            queuing.
          </p>
        </div>
        <ul className="pts">
          {STEPS.map((s) => (
            <li className="reveal" key={s.pn}>
              <p className="pn">{s.pn}</p>
              <h3>{s.title}</h3>
              <p>{s.desc}</p>
            </li>
          ))}
        </ul>
        <p className="fare-note" style={{ marginTop: 26 }}>
          A driver is provided, not a guide — this is private chauffeur-driven shore
          transportation, so you set the stops and the pace. If you would prefer a structured
          sightseeing route with commentary, see <a href="/island-tours/">PEI island tours</a>.
          Vehicle capacity for larger parties is on the <a href="/our-fleet/">fleet page</a>.
        </p>
      </div>
    </section>
  );
}
