interface VehicleCard {
  imgClass: string;
  imgLabel: string;
  icon?: React.ReactNode;
  cat: string;
  title: string;
  spec: { value: string; label: string }[];
  desc: string;
}

const VEHICLES: VehicleCard[] = [
  {
    imgClass: 'vimg-sedan',
    imgLabel: 'Charlottetown Taxi sedan at the Arrivals door of Charlottetown Airport',
    cat: 'Sedan',
    title: 'Airport sedan',
    spec: [
      { value: 'Up to 4', label: 'passengers' },
      { value: '2–3', label: 'cases' },
    ],
    desc: 'The standard vehicle behind the published zone fares. Best for couples, solo travellers and short city runs.',
  },
  {
    imgClass: 'vimg-suv',
    imgLabel: 'Charlottetown Taxi SUV loaded with luggage and golf clubs at Charlottetown Airport',
    cat: 'SUV',
    title: 'SUV',
    spec: [
      { value: 'Up to 4', label: 'passengers' },
      { value: 'Extra', label: 'luggage room' },
    ],
    desc: 'Best for golf bags, skis, oversized luggage and anyone arriving with more than the boot of a sedan will take.',
  },
  {
    imgClass: 'vimg-ph',
    imgLabel: 'Minivan airport transfers for families with luggage',
    icon: (
      <>
        <path d="M3 16.2h18V10l-1.7-3.4H5.2L3 10z" />
        <path d="M8.6 6.6v9.6M14 6.6v9.6" />
        <circle cx={7.4} cy={17.6} r={1.5} />
        <circle cx={16.6} cy={17.6} r={1.5} />
      </>
    ),
    cat: 'Minivan',
    title: 'Minivan',
    spec: [
      { value: 'Up to 6', label: 'passengers' },
      { value: 'Family', label: 'luggage' },
    ],
    desc: 'Best for families arriving together, with room for a full set of cases and a stroller.',
  },
  {
    imgClass: 'vimg-ph',
    imgLabel: 'Multiple vehicles dispatched together for group airport arrivals',
    icon: (
      <>
        <path d="M2 14.6h11v-3l-1.4-3H3.4L2 11.6z" />
        <circle cx={5} cy={15.8} r={1.3} />
        <circle cx={10.4} cy={15.8} r={1.3} />
        <path d="M12.8 18.6h9.2v-3l-1.4-3h-8.2" />
        <circle cx={15.4} cy={19.7} r={1.3} />
        <circle cx={20.2} cy={19.7} r={1.3} />
      </>
    ),
    cat: 'Group',
    title: 'Group transportation',
    spec: [
      { value: '7+', label: 'passengers' },
      { value: 'Multiple', label: 'vehicles' },
    ],
    desc: 'Best for golf groups, wedding parties and conference arrivals. Vehicles reach the terminal together.',
  },
];

const STEPS: { sn: string; title: string; desc: string }[] = [
  {
    sn: 'STEP 01',
    title: 'Send your flight',
    desc: "Flight number, date and where you're going. That's enough for us to plan the whole transfer.",
  },
  {
    sn: 'STEP 02',
    title: 'We confirm your trip',
    desc: 'Dispatch comes back with your vehicle, pickup time and fare. Nothing is charged online.',
  },
  {
    sn: 'STEP 03',
    title: 'We monitor the flight',
    desc: 'On arrival day we track your flight status and shift the pickup automatically if it moves.',
  },
  {
    sn: 'STEP 04',
    title: 'Meet your driver',
    desc: 'Your driver is waiting when you walk out, luggage loaded, and away.',
  },
];

export function AirportVehicles() {
  return (
    <>
      <section id="vehicles">
        <div className="wrap">
          <div className="head reveal">
            <span className="eyebrow">Vehicles</span>
            <h2>
              The right vehicle, <em>decided before you land</em>
            </h2>
            <p>
              Tell us passengers, bags and anything oversized when you book, and dispatch assigns
              the vehicle to match.
            </p>
          </div>
          <div className="vfleet reveal">
            {VEHICLES.map((v) => (
              <article className="vcard" key={v.title}>
                <div className={`vimg ${v.imgClass}`} role="img" aria-label={v.imgLabel}>
                  {v.icon && (
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.1} aria-hidden="true">
                      {v.icon}
                    </svg>
                  )}
                </div>
                <div className="vbody">
                  <div className="vcat">{v.cat}</div>
                  <h3>{v.title}</h3>
                  <div className="vspec">
                    {v.spec.map((s) => (
                      <div key={s.label}>
                        <strong>{s.value}</strong>
                        {s.label}
                      </div>
                    ))}
                  </div>
                  <p>{v.desc}</p>
                </div>
              </article>
            ))}
          </div>
          <p className="vmore reveal">
            <a className="go" href="/our-fleet/">
              View our full fleet
            </a>
          </p>
        </div>
      </section>

      <section>
        <div className="wrap">
          <div className="head reveal center">
            <span className="eyebrow">How It Works</span>
            <h2>
              How airport transfers <em>actually work</em>
            </h2>
          </div>
          <div className="steps reveal">
            {STEPS.map((s) => (
              <div className="stepc" key={s.sn}>
                <div className="sn">{s.sn}</div>
                <h3>{s.title}</h3>
                <p>{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
