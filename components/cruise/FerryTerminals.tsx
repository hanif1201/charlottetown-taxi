const TERMINALS: { fk: string; title: string; desc: string; points: string[] }[] = [
  {
    fk: 'Northumberland Ferries',
    title: 'Wood Islands Ferry Terminal',
    desc: "The seasonal crossing between Wood Islands, PEI and Caribou, Nova Scotia, about an hour's drive south-east of Charlottetown along Route 1.",
    points: [
      'Charlottetown → Wood Islands for your sailing',
      'Wood Islands → Charlottetown, YYG, hotels or anywhere on PEI',
      'Timed against the check-in the operator requires before departure',
      'One way or return, foot passengers welcome',
    ],
  },
  {
    fk: 'CTMA',
    title: 'Souris Ferry Terminal',
    desc: 'The crossing between Souris in eastern PEI and the Îles de la Madeleine, Quebec — roughly an hour and a quarter from Charlottetown.',
    points: [
      'Charlottetown → Souris for your sailing',
      'Souris → Charlottetown, YYG airport or your accommodation',
      'Early and late sailings covered — dispatch runs 24 hours',
      'Luggage-appropriate vehicle assigned at booking',
    ],
  },
];

export function FerryTerminals() {
  return (
    <section className="sec sec-tight" aria-labelledby="ferryTitle">
      <div className="wrap">
        <div className="head head-tight">
          <p className="eyebrow">Ferry</p>
          <h2 id="ferryTitle">
            PEI ferry terminal <em>transportation</em>
          </h2>
          <p>
            Neither ferry terminal has taxis sitting and waiting, and both are well outside
            Charlottetown. Pre-arranging the ride is the difference between stepping off the boat
            into a car and standing in a car park making phone calls.
          </p>
        </div>
        <div className="ferry">
          {TERMINALS.map((t) => (
            <div className="fc reveal" key={t.title}>
              <p className="fk">{t.fk}</p>
              <h3>{t.title}</h3>
              <p>{t.desc}</p>
              <ul>
                {t.points.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <p className="fare-note" style={{ marginTop: 24 }}>
          Sailing times and check-in requirements are set by the ferry operators and change
          through the season, so we do not publish them here — send us your sailing and we will
          work the pickup back from it. For travel elsewhere on the Island, see{' '}
          <a href="/charlottetown-taxi/">taxi service</a>.
        </p>
      </div>
    </section>
  );
}
