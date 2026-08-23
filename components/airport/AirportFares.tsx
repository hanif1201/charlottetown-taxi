const ZONE_SNAPSHOTS: { zone: string; price: string; priceSuffix?: string; desc: string; quote?: boolean }[] = [
  {
    zone: 'Charlottetown zone',
    price: '$20',
    desc: 'Downtown, hotels and the waterfront — about 8 km, typically 15 minutes.',
  },
  {
    zone: 'Stratford zone',
    price: '$30',
    desc: 'Across the Hillsborough Bridge, including Bunbury and Kinlock.',
  },
  {
    zone: 'Cornwall zone',
    price: '$30',
    desc: 'West on the Trans-Canada, covering North River and Eliot River.',
  },
  {
    zone: 'Everywhere else in PEI',
    price: '$2.25',
    priceSuffix: ' / km',
    desc: 'Cavendish, Summerside, Souris and beyond — quoted before you travel.',
    quote: true,
  },
];

const TARIFF_ROWS: { label: string; note?: string; fare: string }[] = [
  { label: 'Charlottetown zone', fare: '$20' },
  { label: 'Stratford zone', fare: '$30' },
  { label: 'Cornwall zone', fare: '$30' },
  { label: 'All other destinations', fare: '$2.25 / km' },
  {
    label: 'Additional passenger, same destination',
    note: 'Children under 12 travel free · maximum $10',
    fare: '$5',
  },
  {
    label: 'Shared taxi, separate destinations',
    note: 'Charlottetown / Cornwall & Stratford',
    fare: '$15 / $21',
  },
];

export function AirportFares() {
  return (
    <section id="fares">
      <div className="wrap">
        <div className="head reveal">
          <span className="eyebrow">Airport Fares</span>
          <h2>
            What a taxi from Charlottetown Airport <em>actually costs</em>
          </h2>
          <p>
            The Airport Authority publishes the taxi tariff for journeys leaving the terminal, so
            every licensed operator at the curb charges the same. Here it is in full, with nothing
            added.
          </p>
        </div>

        <div className="faresnap reveal">
          {ZONE_SNAPSHOTS.map((z) => (
            <div className={`fs${z.quote ? ' fs-quote' : ''}`} key={z.zone}>
              <div className="fz">{z.zone}</div>
              <div className="fp">
                {z.price}
                {z.priceSuffix && <small>{z.priceSuffix}</small>}
              </div>
              <div className="fd">{z.desc}</div>
            </div>
          ))}
        </div>

        <div className="fare-card reveal">
          <div className="fch">
            <div className="fct">Published YYG taxi tariff</div>
            <div className="fcs">Set by the airport, not by us</div>
          </div>
          <table className="fares">
            <caption>Current published tariff. All fares include HST.</caption>
            <thead>
              <tr>
                <th scope="col">Destination zone</th>
                <th scope="col">Published airport fare</th>
              </tr>
            </thead>
            <tbody>
              {TARIFF_ROWS.map((row) => (
                <tr key={row.label}>
                  <td>
                    {row.label}
                    {row.note && <span className="fsubn">{row.note}</span>}
                  </td>
                  <td>{row.fare}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <p className="fare-note">
            Verify the current tariff on the Airport Authority&rsquo;s{' '}
            <a
              href="https://flyyyg.com/passengers/parking-transport/ground-transportation/"
              rel="nofollow noopener"
            >
              ground transportation page
            </a>
            . The published tariff covers journeys leaving the airport; for a departure to the
            terminal we confirm your fare when we take the booking.
          </p>
        </div>

        <div className="exec-note reveal">
          <div>
            <div className="et">Upgrade</div>
            <h3>Executive Airport Transfers</h3>
            <p>
              Arriving for business or collecting a client? An executive sedan or SUV, a name
              board inside Arrivals, and a fixed price agreed before you fly. Regular business
              travel is handled through{' '}
              <a href="/corporate-travel/">our corporate travel service</a>.
            </p>
            <ul>
              <li>Executive sedan or SUV</li>
              <li>Name board inside Arrivals</li>
              <li>Fixed price, agreed in advance</li>
            </ul>
          </div>
          <a href="#book" className="btn btn-dark" data-panel="arrival">
            Request a Quote
          </a>
        </div>
      </div>
    </section>
  );
}
