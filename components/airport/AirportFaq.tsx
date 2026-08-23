'use client';

import { useState } from 'react';

interface FaqItem {
  q: string;
  a: string;
}

const PRIMARY_LEFT: FaqItem[] = [
  {
    q: 'How much is a taxi from Charlottetown Airport to downtown?',
    a: '$20, HST included. It is a fixed zone fare rather than a meter reading, so the price is the same in any licensed taxi at the curb.',
  },
  {
    q: 'Where will I meet my driver at YYG?',
    a: 'Ground pickups happen outside the Arrivals door, and the airport has taxi kiosk staff on hand to help. If you have pre-booked, you can ask for a name board inside Arrivals instead of a curbside meet.',
  },
  {
    q: 'What happens if my flight is delayed?',
    a: 'Give us your flight number when you book and we follow the inbound flight, moving your pickup to the new landing time. You do not need to call us from the plane.',
  },
  {
    q: 'Do I need to book an airport taxi in advance?',
    a: 'Not always, but it is worth it. There are no hotel shuttles operating at Charlottetown Airport at present, so ground transport is a taxi or a rental car. Pre-booking matters most for late arrivals, early departures, groups and the July to August peak.',
  },
];

const PRIMARY_RIGHT: FaqItem[] = [
  {
    q: 'Do you cover early-morning airport departures?',
    a: 'Yes. Dispatch runs 24 hours. Book early for pre-dawn, summer and cruise-day travel — a ride is confirmed only when dispatch sends confirmation.',
  },
  {
    q: 'Can you take me from YYG to Cavendish or Summerside?',
    a: 'Yes, and to any community on Prince Edward Island. Cavendish is roughly 40 minutes from the terminal and Summerside about 55. Both are priced by distance and confirmed with you before the trip.',
  },
  {
    q: 'Can you carry large luggage or golf clubs?',
    a: 'Yes. Tell us how many bags and any oversized items when you book and we assign an SUV or a larger vehicle rather than a sedan.',
  },
  {
    q: 'Can I book my return airport transfer at the same time?',
    a: 'Yes. The booking form has a return section, so an arrival and the departure that follows it are confirmed together in one booking.',
  },
];

const MORE_LEFT: FaqItem[] = [
  {
    q: 'How far is Charlottetown Airport from the city centre?',
    a: 'About 8 km, typically a 15 minute drive in normal conditions.',
  },
  {
    q: 'How early should I be picked up for my flight?',
    a: 'Allow arrival at the terminal 90 minutes before a domestic departure, and two hours for transborder or international flights. Tell us the flight and we will confirm a pickup time that fits.',
  },
  {
    q: 'Is there a charge for additional passengers?',
    a: 'The published airport tariff adds $5 for each additional passenger travelling to the same destination, to a maximum of $10. Children under 12 travel free.',
  },
  {
    q: 'How can I pay for an airport transfer?',
    a: 'Card and cash are both accepted, and company accounts are available on request. Tell dispatch how you would like to pay when you book.',
  },
];

const MORE_RIGHT: FaqItem[] = [
  {
    q: 'Do you have child seats?',
    a: 'Child and booster seats can be requested when you book, and there is a field for them on the booking form. Let us know the ages so the right seat is fitted.',
  },
  {
    q: 'Can you handle a group arriving on the same flight?',
    a: 'Yes. We dispatch multiple vehicles that reach the terminal together so the whole party leaves at the same time. Give us the passenger count and luggage when you book.',
  },
  {
    q: 'Are your drivers licensed and background-checked?',
    a: 'Taxi drivers in Charlottetown are licensed by Charlottetown Police Services under the city taxi bylaw, which requires a criminal record check at every annual renewal and a licence displayed in the vehicle.',
  },
  {
    q: 'Can you collect me from anywhere in PEI for a departure?',
    a: 'Yes. Departures are picked up from any address on the Island, with the fare quoted before you travel.',
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

export function AirportFaq() {
  const [expanded, setExpanded] = useState(false);

  return (
    <section className="sec stone" id="faq">
      <div className="wrap">
        <div className="head reveal">
          <span className="eyebrow">Airport Questions</span>
          <h2>
            Everything travellers ask <em>before they book</em>
          </h2>
        </div>

        <div className="faq-cols reveal">
          <FaqColumn items={PRIMARY_LEFT} />
          <FaqColumn items={PRIMARY_RIGHT} />
        </div>

        <div className="faq-cols" id="faqMore" hidden={!expanded}>
          <FaqColumn items={MORE_LEFT} />
          <FaqColumn items={MORE_RIGHT} />
        </div>

        <p className="faq-toggle reveal">
          <button
            type="button"
            className="btn btn-dark btn-sm"
            id="faqMoreBtn"
            aria-expanded={expanded}
            aria-controls="faqMore"
            onClick={() => setExpanded((v) => !v)}
          >
            {expanded ? 'Show fewer questions' : 'View more airport questions'}
          </button>
        </p>
      </div>
    </section>
  );
}
