interface FaqItem {
  q: string;
  a: string;
}

const FAQ_LEFT: FaqItem[] = [
  {
    q: 'Can you pick us up from the Charlottetown cruise port?',
    a: 'Yes. Transportation from Port Charlottetown is arranged in advance. Send your ship, arrival date and preferred pickup time and we confirm the meeting arrangement with you before your call, in line with the pickup procedures in place at the terminal on the day.',
  },
  {
    q: 'Can we book private transportation to Green Gables from our cruise ship?',
    a: 'Yes. Private chauffeur-driven transportation to Green Gables Heritage Place, Cavendish and the north shore can be arranged for the hours your ship is in port. You travel in your own vehicle rather than with a large group. A driver is provided, not a guide.',
  },
];

const FAQ_RIGHT: FaqItem[] = [
  {
    q: 'Do you provide transportation to Wood Islands Ferry Terminal?',
    a: 'Yes. We arrange drop-offs at Wood Islands Ferry Terminal from Charlottetown and other points on Prince Edward Island. Give us your sailing time and we work the pickup back from it, allowing for the check-in the ferry operator requires.',
  },
  {
    q: 'Can you pick us up when our ferry arrives in PEI?',
    a: 'Yes. Pickups from Wood Islands and Souris are pre-arranged rather than dispatched on demand, because neither terminal has taxis waiting. Send your arrival date and sailing time and your destination on the Island, and we will confirm the pickup.',
  },
];

function FaqColumn({ items }: { items: FaqItem[] }) {
  return (
    <div>
      {items.map((item) => (
        <details className="faq" key={item.q}>
          <summary>{item.q}</summary>
          <p>{item.a}</p>
        </details>
      ))}
    </div>
  );
}

export function CruiseFaq() {
  return (
    <section className="sec sec-tight stone" aria-labelledby="faqTitle">
      <div className="wrap">
        <div className="head head-tight">
          <p className="eyebrow">Questions</p>
          <h2 id="faqTitle">Four things travellers ask</h2>
        </div>
        <div className="faq-cols">
          <FaqColumn items={FAQ_LEFT} />
          <FaqColumn items={FAQ_RIGHT} />
        </div>
      </div>
    </section>
  );
}
