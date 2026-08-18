'use client';

import { useCruiseBooking, CruiseMode } from '@/components/cruise/CruiseBookingContext';

const PATHS: {
  mode: CruiseMode;
  kicker: string;
  title: string;
  sub: string;
  desc: string;
  cta: string;
  btnClass: string;
}[] = [
  {
    mode: 'cruise',
    kicker: 'Arriving by cruise',
    title: 'Port Charlottetown',
    sub: '1 Weymouth Street, Charlottetown',
    desc: "Private pickup at the cruise terminal, chauffeur-driven transportation around the Island for the hours you are in port, and a return timed against your ship's departure.",
    cta: 'Cruise transportation',
    btnClass: 'btn-brass',
  },
  {
    mode: 'ferry',
    kicker: 'Travelling by ferry',
    title: 'Wood Islands & Souris',
    sub: 'Northumberland Ferries · CTMA',
    desc: 'Pre-arranged terminal pickup and drop-off between the ferry, Charlottetown, YYG airport, hotels and destinations across Prince Edward Island. One way or return.',
    cta: 'Ferry transportation',
    btnClass: 'btn-dark',
  },
];

const WAVE_PATH = (
  <svg className="path-wave" viewBox="0 0 200 60" fill="none" stroke="currentColor" strokeWidth={2} aria-hidden="true">
    <path d="M0 40c16-14 32-14 48 0s32 14 48 0 32-14 48 0 32 14 48 0" />
    <path d="M0 54c16-14 32-14 48 0s32 14 48 0 32-14 48 0 32 14 48 0" />
  </svg>
);

export function CruisePaths() {
  const { requestMode } = useCruiseBooking();

  return (
    <section className="sec sec-tight" aria-labelledby="pathTitle">
      <div className="wrap">
        <h2 id="pathTitle" className="skip" style={{ position: 'absolute', left: -9999 }}>
          Choose how you are travelling
        </h2>
        <div className="paths">
          {PATHS.map((p) => (
            <div className="path reveal" key={p.mode}>
              {WAVE_PATH}
              <p className="pk">{p.kicker}</p>
              <h3>{p.title}</h3>
              <p className="pl">{p.sub}</p>
              <p>{p.desc}</p>
              <a href="#book" className={`btn ${p.btnClass}`} onClick={() => requestMode(p.mode)}>
                {p.cta}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
