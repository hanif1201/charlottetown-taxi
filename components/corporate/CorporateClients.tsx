const CLIENTS: { icon: React.ReactNode; label: string }[] = [
  {
    icon: (
      <>
        <path d="M4 20V7l8-3 8 3v13" />
        <path d="M9 20v-4h6v4" />
      </>
    ),
    label: 'Businesses & professional firms',
  },
  {
    icon: (
      <>
        <path d="M3.5 9L12 5l8.5 4L12 13z" />
        <path d="M7 11v4c0 1.4 2.2 2.4 5 2.4s5-1 5-2.4v-4" />
      </>
    ),
    label: 'Universities & colleges',
  },
  {
    icon: (
      <>
        <path d="M4 20V8h16v12" />
        <path d="M8 20v-4h3v4M14 11h2M14 14h2" />
      </>
    ),
    label: 'Hotels & accommodations',
  },
  {
    icon: (
      <>
        <circle cx={9} cy={8.5} r={2.4} />
        <circle cx={16} cy={9.5} r={2} />
        <path d="M4 18c0-2.6 2.1-4.3 5-4.3s5 1.7 5 4.3M15 18c0-2 1.3-3.4 3.3-3.4" />
      </>
    ),
    label: 'Conference & event planners',
  },
  {
    icon: (
      <>
        <path d="M12 6v12M6 12h12" />
        <circle cx={12} cy={12} r={8.4} />
      </>
    ),
    label: 'Healthcare organizations',
  },
  {
    icon: (
      <>
        <path d="M4 20h16M6 20V10h12v10M5 10l7-5 7 5" />
      </>
    ),
    label: 'Government & public sector',
  },
  {
    icon: (
      <>
        <path d="M3.5 7.5h13v9h-13z" />
        <path d="M16.5 11l4-2.2v6.4l-4-2.2z" />
      </>
    ),
    label: 'Film & production crews',
  },
  {
    icon: (
      <>
        <path d="M5 19V6.5A1.5 1.5 0 016.5 5h8L19 9.4V19z" />
        <path d="M8.5 12h7M8.5 15.5h5" />
      </>
    ),
    label: 'Associations & non-profits',
  },
];

export function CorporateClients() {
  return (
    <section className="sec sec-tight stone" aria-labelledby="secTitle">
      <div className="wrap">
        <div className="head head-tight">
          <p className="eyebrow">Who we work with</p>
          <h2 id="secTitle">
            Organizations we <em>transport for</em>
          </h2>
          <p>
            Charlottetown&rsquo;s business district, convention venues and airport sit within a
            few minutes of each other, which makes pre-arranged ground transportation
            straightforward to run well.
          </p>
        </div>
        <div className="sect">
          {CLIENTS.map((c) => (
            <div className="sc reveal" key={c.label}>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" aria-hidden="true">
                {c.icon}
              </svg>
              <span>{c.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
