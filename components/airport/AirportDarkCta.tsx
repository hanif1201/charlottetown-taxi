const DIRECTIONS: {
  adt: string;
  title: string;
  desc: string;
  points: string[];
  cta: string;
  panel: 'arrival' | 'departure';
}[] = [
  {
    adt: 'Arriving at YYG',
    title: 'Arrivals',
    desc: 'Landing at YYG. Give us the flight number and your pickup is scheduled around the flight itself — early, late or exactly on time.',
    points: [
      'Pickup scheduled around your live flight status',
      'Meet at the Arrivals door, or inside with a name board',
      'Luggage loaded for you, oversized items planned for',
      'Groups kept together across multiple vehicles',
      'Late arrivals covered — dispatch runs 24 hours',
    ],
    cta: 'Book an Arrival',
    panel: 'arrival',
  },
  {
    adt: 'Flying from YYG',
    title: 'Departures',
    desc: 'Flying out of YYG. We set the pickup from your departure time so you reach the terminal without a rush.',
    points: [
      'Pickup timed from your departure, not guessed at',
      'Early-morning flights pre-booked the night before',
      'Pickup from anywhere on Prince Edward Island',
      'Luggage help from your door to the terminal',
      'Company accounts available on request',
    ],
    cta: 'Book a Departure',
    panel: 'departure',
  },
];

export function AirportDarkCta() {
  return (
    <section className="dark">
      <div className="wrap">
        <div className="head reveal center">
          <span className="eyebrow">Choose Your Direction</span>
          <h2>
            Arriving or <em>departing?</em>
          </h2>
          <p>
            An arrival is about being found quickly with your luggage. A departure is about
            leaving early enough, from an address that may be nowhere near the airport. We plan
            them separately.
          </p>
        </div>
        <div className="ad-grid reveal">
          {DIRECTIONS.map((d) => (
            <article className="ad" key={d.title}>
              <div className="adt">{d.adt}</div>
              <h3>{d.title}</h3>
              <p>{d.desc}</p>
              <ul>
                {d.points.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
              <a href="#book" className="btn btn-brass btn-sm" data-panel={d.panel}>
                {d.cta}
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
