const FAQ_LEFT = [
  {
    q: 'What areas of Prince Edward Island do you serve?',
    a: 'All of it. Charlottetown, Stratford and Cornwall are fixed-fare zones; Summerside, Cavendish, Montague, Souris, Victoria-by-the-Sea and every other community are quoted before you travel.',
  },
  {
    q: 'Are your fares regulated?',
    a: 'Yes. Our starting fare of $8.50 is the standard regulated rate for licensed taxi operators in Charlottetown, and airport journeys follow the tariff published by the Charlottetown Airport Authority. Every fare is confirmed by dispatch before you travel.',
  },
  {
    q: 'Are taxi fares in Charlottetown set by the City?',
    a: 'Yes. The City of Charlottetown Taxi Bylaw #2021-TX-01 divides the city into six zones and sets the fare for each — Zone 1 $8.50 through Zone 6 $11.25–$18.00, all including HST. East–west travel adds $0.25 per zone boundary crossed after the first, and additional passengers over 11 are $2.00 each. Airport fares are set separately with the Charlottetown Airport Authority. The full schedule is published above.',
  },
  {
    q: 'Can a Charlottetown taxi refuse card payment?',
    a: 'No. Section 12.1 of the Taxi Bylaw requires every operator to accept electronic payments and prohibits refusing a passenger solely because they wish to pay by credit or debit card. Operators must also issue a receipt on request — ours carry a card machine in every vehicle.',
  },
  {
    q: 'Is there an extra charge for a wheelchair?',
    a: 'No. Section 12.2 of the Taxi Bylaw prohibits any additional fee for transporting wheelchairs, or for escorting passengers with disabilities to and from the first accessible door of their pickup or destination.',
  },
  {
    q: 'Do you operate 24 hours a day?',
    a: 'Yes. Dispatch runs around the clock, every day of the year, including overnight, holidays and through winter storms.',
  },
  {
    q: 'How do I book?',
    a: 'Call or text +1 (782) 377-7533, message us on WhatsApp, or use the booking form on this page. Every booking is confirmed personally by dispatch, usually within minutes.',
  },
  {
    q: 'Do you charge surge pricing?',
    a: 'No. Fares stay the same during peak hours, cruise days, holidays and severe weather. The price quoted is the price you pay.',
  },
];

const FAQ_RIGHT = [
  {
    q: 'What payment methods do you accept?',
    a: 'Cash, Interac debit, Visa, Mastercard, American Express and Apple Pay. A card machine is carried in every vehicle, and corporate accounts can be invoiced monthly.',
  },
  {
    q: 'Do you meet flights at Charlottetown Airport?',
    a: 'Yes. We monitor your flight number and adjust the pickup automatically, so an early landing or a delay costs you nothing. Drivers can meet you inside Arrivals with a name board or at the curb.',
  },
  {
    q: 'Can you carry golf clubs and oversized luggage?',
    a: "Yes. Tell us what you're bringing when you book and we'll assign an SUV or van with the space for it rather than a sedan.",
  },
  {
    q: 'Do you run private Island tours?',
    a: 'Yes. Private tours cover Green Gables Heritage Place, Cavendish, North Rustico, Brackley Beach, Point Prim Lighthouse and other stops you choose, at your own pace with a local driver.',
  },
  {
    q: 'Are your drivers licensed and insured?',
    a: "Every driver and vehicle is licensed and commercially insured under Prince Edward Island regulation. We're also a BBB Accredited Business and a member of the Tourism Industry Association of P.E.I.",
  },
];

export function Faq() {
  return (
    <section className="sec stone" id="faq">
      <div className="wrap">
        <div className="head reveal">
          <span className="eyebrow eyebrow-dk">Questions</span>
          <h2>
            Before you <em>book</em>
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
