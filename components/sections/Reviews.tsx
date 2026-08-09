'use client';

import { useRef } from 'react';

const GOOGLE_REVIEWS_URL = 'https://maps.app.goo.gl/ZZrF6niQafN5k8JJ8';

const REVIEWS = [
  {
    text: 'We enjoyed the most spectacular tour of PEI today! Abdul kindly tailored sites to include our interests and so much more, absolutely exceeding our expectations. He even took us shopping and was constantly nearby ready to help with pictures. Thank you, Abdul!',
    who: 'L K',
    tag: 'Island tour',
  },
  {
    text: 'This Taxi service has gone above and beyond for us!!! We are in Alberta and asked them to pick up a gift basket from Sobeys and deliver to our senior mom for her birthday! They did amazing and was so patient! Thank you again!',
    who: 'Amanda Rowe',
    tag: 'Errand & delivery',
  },
  {
    text: 'We used Charlottetown Taxi for transfer from PEI to Halifax airport. Our driver Mahmoud was punctual and friendly. He made the long journey much more pleasant. I would highly recommend their service.',
    who: 'April Richardson',
    tag: 'Long-distance transfer',
  },
  {
    text: 'The best taxi service ever!! Abdul, the owner is the sweetest, kindest and the most helpful person ever. He was the first person I interacted with when I first came into the island, and he definitely is a great example of the kindness in PEI.',
    who: 'Romeo Gautam',
    tag: 'Taxi service',
  },
  {
    text: 'Excellent, fast, courteous service; experienced driver and truly excellent communication. The price was quite reasonable. Completely satisfied.',
    who: 'Paule Renaud',
    tag: 'Taxi service',
  },
];

export function Reviews() {
  const trackRef = useRef<HTMLDivElement>(null);

  function step(dir: 1 | -1) {
    const track = trackRef.current;
    if (!track) return;
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const card = track.querySelector('.rev');
    const width = card ? card.clientWidth + 20 : 340;
    track.scrollBy({ left: dir * width, behavior: reduce ? 'auto' : 'smooth' });
  }

  return (
    <section className="sec stone">
      <div className="wrap">
        <div className="head reveal">
          <span className="eyebrow eyebrow-dk">Rider Feedback</span>
          <h2>
            What people say <em>after the ride</em>
          </h2>
          <a className="rev-see-all" href={GOOGLE_REVIEWS_URL} target="_blank" rel="noopener noreferrer">
            See all our reviews on Google →
          </a>
        </div>
        <div className="rev-track reveal" ref={trackRef} tabIndex={0} aria-label="Customer reviews, scrollable">
          {REVIEWS.map((r) => (
            <div className="rev" key={r.who}>
              <div className="stars" aria-label="5 out of 5 stars">
                ★★★★★
              </div>
              <p>{r.text}</p>
              <div className="who">
                {r.who}
                <span>{r.tag}</span>
              </div>
              <a
                className="rev-google"
                href={GOOGLE_REVIEWS_URL}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Read ${r.who}'s review on Google`}
              >
                <svg viewBox="0 0 18 18" aria-hidden="true">
                  <path
                    fill="#4285F4"
                    d="M17.64 9.2c0-.64-.06-1.25-.16-1.84H9v3.48h4.84a4.14 4.14 0 01-1.8 2.72v2.26h2.9c1.7-1.57 2.68-3.87 2.68-6.62z"
                  />
                  <path
                    fill="#34A853"
                    d="M9 18c2.43 0 4.47-.8 5.96-2.18l-2.9-2.26c-.8.54-1.83.86-3.06.86-2.35 0-4.34-1.59-5.05-3.72H.96v2.33A9 9 0 009 18z"
                  />
                  <path
                    fill="#FBBC05"
                    d="M3.95 10.7A5.4 5.4 0 013.68 9c0-.59.1-1.17.27-1.7V4.97H.96A9 9 0 000 9c0 1.45.35 2.83.96 4.03l2.99-2.33z"
                  />
                  <path
                    fill="#EA4335"
                    d="M9 3.58c1.32 0 2.5.45 3.44 1.35l2.58-2.58C13.46.89 11.43 0 9 0A9 9 0 00.96 4.97l2.99 2.33C4.66 5.17 6.65 3.58 9 3.58z"
                  />
                </svg>
                Posted on Google
              </a>
            </div>
          ))}
        </div>
        <div className="rev-nav">
          <button type="button" aria-label="Previous reviews" onClick={() => step(-1)}>
            ←
          </button>
          <button type="button" aria-label="Next reviews" onClick={() => step(1)}>
            →
          </button>
        </div>
      </div>
    </section>
  );
}
