export function Pricing() {
  return (
    <section className="sec dark alt" id="pricing">
      <div className="wrap">
        <div className="head reveal">
          <span className="eyebrow">Pricing</span>
          <h2>
            Regulated fares, <em>agreed before you travel</em>
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

          <div className="bylaw">
            <div className="bylaw-head">
              <span className="by-eb">City of Charlottetown Taxi Bylaw #2021-TX-01 · Part V, Section 11</span>
              <h3>
                The regulated zone fares, <em>published in full</em>
              </h3>
              <p>
                Charlottetown sets taxi fares by bylaw. The City is divided into six zones, and
                every licensed operator charges the same scheduled rate for each. Here is the
                schedule as written, with nothing added or removed.
              </p>
            </div>
            <table className="bylaw-table">
              <caption>Zone fares as set out in the City of Charlottetown Taxi Bylaw. All rates include HST.</caption>
              <thead>
                <tr>
                  <th scope="col">Zone</th>
                  <th scope="col">Scheduled fare</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Zone 1</td>
                  <td>$8.50</td>
                </tr>
                <tr>
                  <td>Zone 2</td>
                  <td>$9.25</td>
                </tr>
                <tr>
                  <td>Zone 3</td>
                  <td>$9.75</td>
                </tr>
                <tr>
                  <td>Zone 4</td>
                  <td>$10.25</td>
                </tr>
                <tr>
                  <td>Zone 5</td>
                  <td>$10.75</td>
                </tr>
                <tr>
                  <td>Zone 6</td>
                  <td>$11.25 – $18.00</td>
                </tr>
              </tbody>
            </table>
            <ul className="bylaw-rules">
              <li>
                <strong>East–west travel</strong> adds $0.25 for each zone boundary line crossed,
                excluding the first. Travel north–south within a zone is charged at the zone rate.
              </li>
              <li>
                <strong>Additional passengers</strong> over the age of 11 are charged $2.00 each.
              </li>
              <li>
                <strong>Card payment is mandatory.</strong> Under Section 12.1, an operator may not
                refuse a passenger for wanting to pay by credit or debit, and must issue a receipt on
                request.
              </li>
              <li>
                <strong>No extra charge for accessibility.</strong> Section 12.2 prohibits any
                additional fee for transporting wheelchairs or for escorting passengers with
                disabilities to and from the first accessible door.
              </li>
              <li>
                <strong>Airport journeys are separate.</strong> The bylaw excludes fares involving the
                Charlottetown Airport Authority, which are set under its own negotiated tariff.
              </li>
            </ul>
            <p className="bylaw-src">
              Source:{' '}
              <a
                href="https://www.charlottetown.ca/common/pages/GetFile.ashx?key=04ksAQB3"
                rel="noopener"
              >
                City of Charlottetown Taxi Bylaw #2021-TX-01
              </a>
              , Part V, Section 11 (page 13), as amended 24 July 2023. Rates are set by Council and
              may be reviewed under Section 14.4.
            </p>
          </div>

          <div className="regnote">
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={1.3}
              aria-hidden="true"
            >
              <path d="M12 3l8 3v6c0 5-3.5 8-8 9-4.5-1-8-4-8-9V6z" />
              <path d="M12 9v4" />
              <path d="M12 16h.01" />
            </svg>
            <div>
              <h3>Why our fares start at $8.50</h3>
              <p>
                $8.50 is not a price we chose. It is the Zone 1 fare set by the City of Charlottetown
                in its Taxi Bylaw, and it applies to every properly licensed and insured operator
                working in the city. Any company following the City&apos;s rules charges from that
                schedule — which is why our fares match it exactly.
              </p>
              <p>
                Because the schedule is set by Council, a fare quoted meaningfully <em>below</em> or{' '}
                <em>above</em> the scheduled rate is not consistent with the bylaw. If you are ever
                quoted a fare that does not match the schedule above, we would encourage you to ask
                that operator to confirm their City taxi licence and their commercial insurance
                before you travel. It is a fair question, every properly licensed operator will
                answer it happily, and it protects you — the bylaw requires $1,000,000 in public
                liability and passenger hazard coverage, and a vehicle operating outside those
                requirements leaves you without recourse.
              </p>
              <p className="regfoot">
                Our City of Charlottetown taxi licensing and insurance details are available on
                request, and our accreditations are shown throughout this site.
              </p>
            </div>
          </div>

          <div className="exec-note">
            <div>
              <div className="et">Upgrade</div>
              <h3>Executive Transfers</h3>
              <p>
                For business travel, client collections, wedding parties and anyone who simply wants
                the better car: an executive sedan or SUV, a chauffeur briefed on your schedule, and
                a fixed price agreed in advance. Available on any service above.
              </p>
              <ul>
                <li>Executive sedan or SUV</li>
                <li>Priority dispatch</li>
                <li>Meet &amp; greet with name board</li>
                <li>Fixed price, agreed in advance</li>
              </ul>
            </div>
            <a href="#book" className="btn btn-brass">
              Request a Quote
            </a>
          </div>

          <p className="price-note">
            Cash, Interac debit, Visa, Mastercard, American Express and Apple Pay accepted — card
            machine in every vehicle. Corporate accounts invoiced monthly.
          </p>
        </div>
      </div>
    </section>
  );
}
