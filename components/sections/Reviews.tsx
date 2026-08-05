'use client';

import { useRef } from 'react';

const REVIEWS = [
  {
    text: 'Called at 5:40am for a hospital appointment and the car was outside in twelve minutes. Driver helped my mother in and waited until she was through the door.',
    who: 'Verified rider',
    tag: 'Taxi service · Charlottetown',
  },
  {
    text: "Our flight landed forty minutes early and the driver was already waiting with a name board. He'd been tracking it the whole time.",
    who: 'Verified rider',
    tag: 'Airport transfer · YYG',
  },
  {
    text: "Quoted the fare on the phone before we left Stratford and that's exactly what we paid. No meter climbing while we sat at the lights.",
    who: 'Verified rider',
    tag: 'Taxi service · Stratford',
  },
  {
    text: 'Green Gables, Cavendish and North Rustico in one afternoon. Our driver knew when to hit each stop to miss the crowds.',
    who: 'Verified rider',
    tag: 'Island tour · North Shore',
  },
  {
    text: "New Year's Eve, snowing, and they still came at the normal price. Every other option had doubled.",
    who: 'Verified rider',
    tag: 'Taxi service · Cornwall',
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
        </div>
        <div className="rev-track reveal" ref={trackRef} tabIndex={0} aria-label="Customer reviews, scrollable">
          {REVIEWS.map((r) => (
            <div className="rev" key={r.tag}>
              <div className="stars" aria-label="5 out of 5 stars">
                ★★★★★
              </div>
              <p>{r.text}</p>
              <div className="who">
                {r.who}
                <span>{r.tag}</span>
              </div>
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
