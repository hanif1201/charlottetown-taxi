const POINTS: { bn: string; title: string; desc: React.ReactNode }[] = [
  {
    bn: '01',
    title: 'Booked, not hailed',
    desc: 'Every corporate trip is arranged in advance and confirmed, so nobody is standing outside hoping a car appears.',
  },
  {
    bn: '02',
    title: 'Named point of contact',
    desc: 'One number and one email for your bookings, changes and invoices, rather than a different agent each time.',
  },
  {
    bn: '03',
    title: 'Airport coordination',
    desc: 'Flight numbers held on file and monitored, so a delayed arrival does not become a missed pickup.',
  },
  {
    bn: '04',
    title: 'Licensed & insured',
    desc: 'City-licensed drivers and commercially insured vehicles, with documentation available for your procurement file.',
  },
  {
    bn: '05',
    title: 'Vehicle matched to the trip',
    desc: (
      <>
        Executive sedan, SUV or minivan, decided when the booking is made instead of at the curb.
        See the <a href="/our-fleet/">fleet</a>.
      </>
    ),
  },
  {
    bn: '06',
    title: 'Around the clock',
    desc: 'Dispatch answers at any hour, which matters for red-eye departures and late client dinners.',
  },
];

export function CorporateBuiltForBusiness() {
  return (
    <section className="sec sec-tight dark" aria-labelledby="bizTitle">
      <div className="wrap">
        <div className="head head-tight">
          <p className="eyebrow">Built for business</p>
          <h2 id="bizTitle">
            What organizations <em>actually need</em>
          </h2>
        </div>
        <ul className="bfb">
          {POINTS.map((p) => (
            <li className="reveal" key={p.bn}>
              <p className="bn">{p.bn}</p>
              <h3>{p.title}</h3>
              <p>{p.desc}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
