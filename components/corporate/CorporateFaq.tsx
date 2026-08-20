interface FaqItem {
  q: string;
  a: string;
}

const FAQ_LEFT: FaqItem[] = [
  {
    q: 'Can our organization set up a corporate account with billing?',
    a: 'Yes. Organizations booking regularly can arrange a corporate account so trips are billed together rather than paid per ride. Contact us with your expected volume and billing contact and we will confirm the arrangement in writing before the first trip.',
  },
  {
    q: 'Can you handle multiple vehicles for a conference or group?',
    a: 'Yes. Multi-vehicle movements are coordinated in advance rather than dispatched on the day. Send the delegate numbers, venues and timings and we will confirm what we can commit to before you build it into your schedule.',
  },
];

const FAQ_RIGHT: FaqItem[] = [
  {
    q: 'Do you cover business travel outside Charlottetown?',
    a: 'Yes. Corporate work runs across Prince Edward Island, including Stratford, Cornwall, Summerside, the Confederation Bridge and the ferry terminals, with the price agreed before departure.',
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

export function CorporateFaq() {
  return (
    <section className="sec sec-tight stone" aria-labelledby="faqTitle">
      <div className="wrap">
        <div className="head head-tight">
          <p className="eyebrow">Before you enquire</p>
          <h2 id="faqTitle">Three things procurement asks</h2>
        </div>
        <div className="faq-cols">
          <FaqColumn items={FAQ_LEFT} />
          <FaqColumn items={FAQ_RIGHT} />
        </div>
      </div>
    </section>
  );
}
