import { CoverageZones } from '@/components/sections/CoverageZones';

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
          <CoverageZones />
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
      </div>
    </section>
  );
}
