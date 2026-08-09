export function Pricing() {
  return (
    <section className="sec dark alt" id="pricing">
      <div className="wrap">
        <div className="head reveal">
          <span className="eyebrow">Pricing</span>
          <h2>
            Charlottetown Taxi Fares — <em>regulated, agreed before you travel</em>
          </h2>
          <p>Nothing is added at the end of the journey, and nothing changes because the weather did.</p>
        </div>
        <div className="reveal">
          <table className="ptable">
            <caption>Charlottetown Taxi fares. Standard fares include HST.</caption>
            <thead>
              <tr>
                <th scope="col">Service</th>
                <th scope="col">What it covers</th>
                <th scope="col">Fare</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <span className="svc-name">Zone Fare</span>
                  <span className="svc-sub">City &amp; neighbouring</span>
                </td>
                <td className="detail">
                  Charlottetown, Stratford and Cornwall. Price set by destination rather than a
                  meter, so traffic and detours never change it.
                </td>
                <td>
                  <span className="fare">
                    from $8.50
                    <small>per trip · HST included</small>
                  </span>
                </td>
              </tr>
              <tr>
                <td>
                  <span className="svc-name">Airport Transfer</span>
                  <span className="svc-sub">Charlottetown YYG</span>
                </td>
                <td className="detail">
                  Published Airport Authority tariff with live flight monitoring and luggage
                  assistance. No waiting charge for delays.
                </td>
                <td>
                  <span className="fare">
                    from $20
                    <small>YYG to Charlottetown zone</small>
                  </span>
                </td>
              </tr>
              <tr>
                <td>
                  <span className="svc-name">Hourly Hire</span>
                  <span className="svc-sub">Held for you</span>
                </td>
                <td className="detail">
                  Unlimited stops within your booked hours and all wait time included. Ideal for
                  appointments, tours and event days.
                </td>
                <td>
                  <span className="fare">
                    Quoted
                    <small>per hour · minimum 2 hours</small>
                  </span>
                </td>
              </tr>
              <tr>
                <td>
                  <span className="svc-name">Island &amp; Long Distance</span>
                  <span className="svc-sub">Beyond the six zones</span>
                </td>
                <td className="detail">
                  Destinations outside the City&rsquo;s six zones fall outside the bylaw fare
                  schedule and are charged per kilometre. Every PEI community plus off-Island
                  travel; bridge and ferry tolls itemised, return trips priced together.
                </td>
                <td>
                  <span className="fare">
                    $2.00 / km
                    <small>quoted and agreed before you travel</small>
                  </span>
                </td>
              </tr>
            </tbody>
          </table>

          <p className="price-note">
            Cash, Interac debit, Visa, Mastercard, American Express and Apple Pay accepted — card
            machine in every vehicle. Corporate accounts invoiced monthly.
          </p>
          <p className="price-note" style={{ marginTop: 8, opacity: 0.7, fontSize: 12.5 }}>
            Fares current as of August 2026, per City of Charlottetown Taxi Bylaw #2021-TX-01.
          </p>
        </div>
      </div>
    </section>
  );
}
