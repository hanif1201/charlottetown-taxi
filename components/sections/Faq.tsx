const FAQ_LEFT = [
  {
    q: 'How much does a taxi cost in Charlottetown?',
    a: 'Charlottetown uses regulated zone fares ranging from $8.50 to $18, depending on the pickup and destination zones, all including HST. An additional $2.50 applies for each extra passenger over 11 years old, as set out in Part V of the City Taxi Bylaw.',
  },
  {
    q: 'Do you charge surge pricing?',
    a: "No. Charlottetown taxi fares follow the City's regulated zone system and do not increase because of demand, weather or the time of day. Trips outside the regulated zones are quoted and confirmed before travel.",
  },
  {
    q: 'Is Charlottetown Taxi available 24 hours?',
    a: 'Yes. We provide 24-hour taxi service in Charlottetown and across PEI, including weekends and holidays. Advance booking is recommended for early-morning airport transfers and long-distance trips.',
  },
];

const FAQ_RIGHT = [
  {
    q: 'What payment methods do you accept?',
    a: 'We accept cash, Interac debit, major credit cards and supported mobile payments. Section 12.1 of the City Taxi Bylaw requires taxi operators to accept credit and debit cards and provide a receipt upon request.',
  },
  {
    q: 'What areas do you serve?',
    a: 'We provide taxi and private transportation throughout PEI, including Charlottetown, Stratford, Cornwall, Summerside, Cavendish, North Rustico, Souris, Montague, Wood Islands and surrounding communities. We also offer pre-booked long-distance transportation to Moncton, Halifax, Halifax Stanfield International Airport and other Maritime destinations.',
  },
];

export function Faq() {
  return (
    <section className="sec stone" id="faq">
      <div className="wrap">
        <div className="head reveal">
          <span className="eyebrow eyebrow-dk">Questions</span>
          <h2>
            Charlottetown Taxi FAQs — <em>before you book</em>
          </h2>
        </div>
        <div className="faq-cols reveal">
          <div>
            {FAQ_LEFT.map((item) => (
              <details className="faq" key={item.q}>
                <summary>{item.q}</summary>
                <p>{item.a}</p>
              </details>
            ))}
          </div>
          <div>
            {FAQ_RIGHT.map((item) => (
              <details className="faq" key={item.q}>
                <summary>{item.q}</summary>
                <p>{item.a}</p>
              </details>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
