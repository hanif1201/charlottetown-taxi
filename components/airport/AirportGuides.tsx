const GUIDES: { imgClass: string; imgLabel: string; cat: string; title: string; desc: string; href: string; linkText: string }[] = [
  {
    imgClass: 'gimg-air',
    imgLabel: 'Charlottetown Airport arrivals pickup area',
    cat: 'Arrivals',
    title: 'YYG to downtown Charlottetown: what the drive is really like',
    desc: '8 km, typically fifteen minutes — and the three summer scenarios that turn it into thirty.',
    href: '/blog/yyg-to-downtown-charlottetown/',
    linkText: 'Read the YYG to downtown guide',
  },
  {
    imgClass: 'gimg-suv',
    imgLabel: 'Charlottetown Taxi vehicle waiting for an early morning airport departure',
    cat: 'Departures',
    title: 'How early to leave for a flight out of YYG',
    desc: 'Working back from your departure time for domestic, transborder and international flights — with real terminal timings, not guesses.',
    href: '/blog/how-early-leave-for-yyg-flight/',
    linkText: 'Read the departure timing guide',
  },
  {
    imgClass: 'gimg-sedan',
    imgLabel: 'Luggage being loaded into a Charlottetown Taxi vehicle at the airport',
    cat: 'Fares',
    title: 'Charlottetown Airport taxi fares explained',
    desc: 'The published YYG tariff line by line — zones, the per-kilometre rate, extra passengers, and when a shared taxi is worth it.',
    href: '/blog/charlottetown-airport-taxi-fares/',
    linkText: 'Read the airport fares guide',
  },
];

export function AirportGuides() {
  return (
    <section>
      <div className="wrap">
        <div className="head reveal">
          <span className="eyebrow">Travel Notes</span>
          <h2>
            YYG guides from <em>drivers who work the terminal</em>
          </h2>
          <p>Written by our dispatch team from the runs we actually do — not generic airport advice.</p>
        </div>
        <div className="guides reveal">
          {GUIDES.map((g) => (
            <article className="guide" key={g.title}>
              <div className={`gimg ${g.imgClass}`} role="img" aria-label={g.imgLabel} />
              <div className="gbody">
                <div className="gcat">{g.cat}</div>
                <h3>{g.title}</h3>
                <p>{g.desc}</p>
                <a className="go" href={g.href}>
                  {g.linkText}
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
