import { CountUp } from '@/components/ui/CountUp';
import { pinDelayVar } from '@/lib/css-vars';

const ROUTES: [string, string, string][] = [
  ['Charlottetown', 'YYG Airport', '10–15 min'],
  ['Charlottetown', 'Cruise Port', '5–10 min'],
  ['Charlottetown', 'Stratford', '~10 min'],
  ['Charlottetown', 'Cornwall', '~15 min'],
  ['Charlottetown', 'Brackley Beach', '~25 min'],
  ['Charlottetown', 'Green Gables, Cavendish', '~40 min'],
  ['Cruise Port', 'Green Gables', '~40 min'],
  ['Charlottetown', 'North Rustico', '~35 min'],
  ['Charlottetown', 'Rodd Crowbush Golf Resort', '~45 min'],
  ['Charlottetown', 'Brudenell River / Dundarave', '~45 min'],
  ['Charlottetown', 'Glasgow Hills, Hunter River', '~30 min'],
  ['Charlottetown', 'Fox Meadow, Stratford', '~12 min'],
  ['Charlottetown', 'Point Prim Lighthouse', '~45 min'],
  ['Charlottetown', 'Victoria-by-the-Sea', '~35 min'],
  ['Charlottetown', 'Montague', '~45 min'],
  ['Charlottetown', 'Wood Islands Ferry', '~60 min'],
  ['Charlottetown', 'CTMA Ferry, Souris', '~65 min'],
  ['Charlottetown', 'Summerside', '~50 min'],
  ['Charlottetown', 'Confederation Bridge', '~55 min'],
  ['Charlottetown', 'Mill River, O’Leary', '~1 hr 40'],
  ['Charlottetown', 'Souris', '~1 hr 5'],
  ['Charlottetown', 'Tignish', '~2 hr'],
];

export function IslandTours() {
  return (
    <section className="sec island" id="island" aria-labelledby="islandTitle">
      <div className="wrap">
        <div className="head reveal center">
          <span className="eyebrow">Island-Wide</span>
          <h2 id="islandTitle">
            Serving every corner of <em>Prince Edward Island</em>
          </h2>
          <p>
            From the Confederation Bridge to the Souris ferry, 224 kilometres end to end. We drive
            all of it — and we know what each route actually takes in July.
          </p>
        </div>

        <div className="island-stage reveal">
          <div className="island-map">
            <svg viewBox="0 0 620 260" role="img" aria-labelledby="mapTitle" className="pei-map">
              <title id="mapTitle">
                Stylised map of Prince Edward Island showing Charlottetown Taxi service points from
                Tignish in the west to Souris in the east
              </title>
              <path
                className="pei-shape"
                d="M32 150c14-22 34-28 56-24 18 3 26 16 44 14 20-3 26-20 47-24 24-5 40 10 62 8 20-2 30-14 51-15 25-1 38 14 61 15 22 1 34-11 56-9 24 2 36 18 59 21 22 3 39-6 60-1 22 5 34 22 56 24-8 16-26 24-45 27-24 4-42-8-66-6-24 2-38 18-62 20-25 2-40-13-65-13-23 0-36 13-59 15-24 2-40-11-64-11-22 0-34 12-56 13-26 1-41-14-66-16-23-2-42 8-63 4z"
              />
              <g className="pei-routes">
                <path d="M92 148 L206 132 L318 128 L430 136 L536 150" />
              </g>
              <g className="pei-pins">
                <g className="pin" style={pinDelayVar('.1s')}>
                  <circle cx={92} cy={148} r={5} />
                  <text x={92} y={176}>
                    Tignish
                  </text>
                </g>
                <g className="pin" style={pinDelayVar('.2s')}>
                  <circle cx={164} cy={140} r={5} />
                  <text x={164} y={168}>
                    Summerside
                  </text>
                </g>
                <g className="pin" style={pinDelayVar('.3s')}>
                  <circle cx={252} cy={122} r={5} />
                  <text x={252} y={110}>
                    Cavendish
                  </text>
                </g>
                <g className="pin pin-hub" style={pinDelayVar('.4s')}>
                  <circle cx={318} cy={140} r={8} />
                  <text x={318} y={172}>
                    Charlottetown
                  </text>
                </g>
                <g className="pin" style={pinDelayVar('.5s')}>
                  <circle cx={360} cy={120} r={5} />
                  <text x={366} y={108}>
                    YYG
                  </text>
                </g>
                <g className="pin" style={pinDelayVar('.6s')}>
                  <circle cx={430} cy={146} r={5} />
                  <text x={430} y={174}>
                    Montague
                  </text>
                </g>
                <g className="pin" style={pinDelayVar('.7s')}>
                  <circle cx={536} cy={150} r={5} />
                  <text x={530} y={178}>
                    Souris
                  </text>
                </g>
              </g>
            </svg>
          </div>

          <div className="island-stats">
            <div className="istat">
              <CountUp target={224} suffix=" km" />
              <span className="ilab">End to end, west to east</span>
            </div>
            <div className="istat">
              <CountUp target={6} />
              <span className="ilab">City fare zones we operate</span>
            </div>
            <div className="istat">
              <CountUp target={24} suffix="/7" />
              <span className="ilab">Dispatch, every day of the year</span>
            </div>
            <div className="istat">
              <CountUp target={10} suffix=" services" />
              <span className="ilab">From city cab to Island tour</span>
            </div>
          </div>
        </div>

        <div className="island-routes reveal">
          <h3>Routes we run most</h3>
          <ul>
            {ROUTES.map(([from, to, time]) => (
              <li key={to}>
                <span className="ir-from">{from}</span>
                <span className="ir-arw" aria-hidden="true">
                  →
                </span>
                <span className="ir-to">{to}</span>
                <span className="ir-t">{time}</span>
              </li>
            ))}
          </ul>
          <p className="ir-note">
            Drive times in normal conditions. Summer weekends and cruise mornings run longer —
            dispatch will tell you honestly when you book.
          </p>
        </div>
      </div>
    </section>
  );
}
