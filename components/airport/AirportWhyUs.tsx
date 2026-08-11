const REASONS: { icon: React.ReactNode; name: string; desc: string }[] = [
  {
    icon: (
      <>
        <path d="M3 15.5l18-6.6-2.2-2.6-5 1.6-5.4-4.3-2 .7 3 5-3.6 1.2-2.4-1.9-1.6.6z" />
        <path d="M4 20h16" />
      </>
    ),
    name: 'Flight-aware pickups',
    desc: 'Your pickup is scheduled from live flight status, so a delay never needs a call from the baggage hall.',
  },
  {
    icon: (
      <>
        <path d="M12 21c-4.1-3.6-7-6.4-7-9.8A5 5 0 0112 8a5 5 0 017 3.2c0 3.4-2.9 6.2-7 9.8z" />
        <circle cx={12} cy={10.9} r={2.1} />
      </>
    ),
    name: 'Local PEI drivers',
    desc: 'Charlottetown-based, licensed by the city, and driving these roads year round.',
  },
  {
    icon: (
      <>
        <circle cx={12} cy={12} r={9} />
        <path d="M3.2 12h17.6M12 3a15 15 0 010 18 15 15 0 010-18z" />
      </>
    ),
    name: 'Island-wide coverage',
    desc: 'Cavendish, Summerside, Brudenell, Souris, the ferry and the bridge — all from the terminal.',
  },
  {
    icon: (
      <>
        <path d="M3 16.5h18v-4l-2-4.5H5l-2 4.5z" />
        <path d="M8 8V5.5h8V8" />
        <circle cx={7.2} cy={17.6} r={1.5} />
        <circle cx={16.8} cy={17.6} r={1.5} />
      </>
    ),
    name: 'Vehicles that fit the trip',
    desc: 'Sedans, SUVs and larger vehicles assigned from your passenger and luggage count.',
  },
];

export function AirportWhyUs() {
  return (
    <section className="sec stone">
      <div className="wrap">
        <div className="head reveal center">
          <span className="eyebrow">Why Charlottetown Taxi</span>
          <h2>
            Built around the terminal, <em>not around a meter</em>
          </h2>
        </div>
        <div className="lic-grid reveal">
          {REASONS.map((r) => (
            <div className="lic" key={r.name}>
              <svg
                className="licon"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#9C7C18"
                strokeWidth={1.2}
                aria-hidden="true"
              >
                {r.icon}
              </svg>
              <div className="ln">{r.name}</div>
              <div className="ld">{r.desc}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
