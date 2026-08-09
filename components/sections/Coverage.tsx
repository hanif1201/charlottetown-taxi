export function Coverage() {
  return (
    <section className="sec dark" id="coverage">
      <div className="wrap coverage">
        <div className="reveal">
          <span className="eyebrow">Coverage</span>
          <h2
            style={{
              fontSize: 'clamp(30px,3.6vw,46px)',
              color: 'var(--ivory)',
              marginTop: 16,
              fontWeight: 400,
            }}
          >
            Taxi Service Across{' '}
            <em style={{ fontStyle: 'italic', color: 'var(--champagne)' }}>All of Prince Edward Island</em>
          </h2>
          <p
            style={{
              marginTop: 16,
              color: 'rgba(248,246,241,.65)',
              fontSize: 16,
              lineHeight: 1.85,
              fontWeight: 300,
            }}
          >
            Based at 72 Kensington Road in Charlottetown, dispatching province-wide, 24 hours a day.
            Regulated zone pricing applies within the city and neighbouring communities; everywhere
            else is quoted before you travel.
          </p>
          <div className="zone-list">
            <div className="zone">
              <span className="zn">Charlottetown</span>
              <span className="zd">Regulated zone fare · from $8.50</span>
            </div>
            <div className="zone">
              <span className="zn">Stratford</span>
              <span className="zd">Regulated zone fare</span>
            </div>
            <div className="zone">
              <span className="zn">Cornwall</span>
              <span className="zd">Regulated zone fare</span>
            </div>
            <div className="zone">
              <span className="zn">Charlottetown Airport (YYG)</span>
              <span className="zd">Published airport tariff</span>
            </div>
            <div className="zone">
              <span className="zn">Cavendish &amp; North Shore</span>
              <span className="zd">Quoted before travel</span>
            </div>
            <div className="zone">
              <span className="zn">Summerside &amp; West</span>
              <span className="zd">Quoted before travel</span>
            </div>
            <div className="zone">
              <span className="zn">Montague, Souris &amp; East</span>
              <span className="zd">Quoted before travel</span>
            </div>
            <div className="zone">
              <span className="zn">Off-Island / long distance</span>
              <span className="zd">Quoted before travel</span>
            </div>
          </div>
          <div className="ctwo" style={{ marginTop: 26, maxWidth: 400 }}>
            <a href="tel:+17823777533" className="btn btn-brass">
              Call About Your Route
            </a>
            <a href="sms:+17823777533" className="btn btn-outline">
              Text Us
            </a>
          </div>
        </div>
        <div className="reveal">
          <div className="dest-grid">
            <div className="dest">
              <h3>Downtown Charlottetown</h3>
              <p>Victoria Row, Confederation Centre, the waterfront and every hotel in the core.</p>
            </div>
            <div className="dest">
              <h3>Charlottetown Airport (YYG)</h3>
              <p>Six kilometres from downtown, with flight-monitored pickups around the clock.</p>
            </div>
            <div className="dest">
              <h3>Charlottetown Cruise Port</h3>
              <p>Ship-day transfers timed to docking and all-aboard, plus shore excursions.</p>
            </div>
            <div className="dest">
              <h3>Green Gables &amp; Cavendish</h3>
              <p>The Island&apos;s most-visited heritage site and the north shore beaches beyond it.</p>
            </div>
            <div className="dest">
              <h3>Brackley Beach &amp; North Rustico</h3>
              <p>National park dunes, working harbour and the coastal route through the park.</p>
            </div>
            <div className="dest">
              <h3>Point Prim &amp; Victoria-by-the-Sea</h3>
              <p>The Island&apos;s oldest lighthouse and the seaside village on the south shore.</p>
            </div>
            <div className="dest">
              <h3>Summerside &amp; Confederation Bridge</h3>
              <p>PEI&apos;s second city and the crossing to New Brunswick.</p>
            </div>
            <div className="dest">
              <h3>Montague, Souris &amp; Wood Islands</h3>
              <p>Eastern PEI, the Brudenell resort area, and both ferry terminals.</p>
            </div>
          </div>
        </div>

        <div className="reveal" style={{ gridColumn: '1 / -1', marginTop: 12 }}>
          <table className="ptable">
            <caption>Approximate distance and fare basis for routes we run most.</caption>
            <thead>
              <tr>
                <th scope="col">From</th>
                <th scope="col">To</th>
                <th scope="col">Approx.</th>
                <th scope="col">Fare basis</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Charlottetown Airport</td>
                <td>Downtown Charlottetown</td>
                <td>6 km</td>
                <td>Airport tariff, from $20</td>
              </tr>
              <tr>
                <td>Downtown</td>
                <td>Stratford</td>
                <td>5 km</td>
                <td>Regulated zone fare</td>
              </tr>
              <tr>
                <td>Downtown</td>
                <td>Cornwall</td>
                <td>9 km</td>
                <td>Regulated zone fare</td>
              </tr>
              <tr>
                <td>Downtown</td>
                <td>Cavendish / north shore</td>
                <td>40 km</td>
                <td>Quoted before travel</td>
              </tr>
              <tr>
                <td>Downtown</td>
                <td>Summerside</td>
                <td>70 km</td>
                <td>Quoted before travel</td>
              </tr>
              <tr>
                <td>Downtown</td>
                <td>Brudenell / eastern PEI</td>
                <td>60 km</td>
                <td>Quoted before travel</td>
              </tr>
              <tr>
                <td>Downtown</td>
                <td>Wood Islands ferry</td>
                <td>60 km</td>
                <td>Quoted before travel</td>
              </tr>
              <tr>
                <td>Charlottetown</td>
                <td>Halifax Stanfield (YHZ)</td>
                <td>300 km</td>
                <td>Quoted before travel</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
