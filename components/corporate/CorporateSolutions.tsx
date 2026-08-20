const SOLUTIONS: { icon: React.ReactNode; title: string; desc: React.ReactNode }[] = [
  {
    icon: <path d="M12 3l7.5 2.8v5.6c0 4.7-3.2 7.5-7.5 8.6-4.3-1.1-7.5-3.9-7.5-8.6V5.8z" />,
    title: 'Executive & client transportation',
    desc: 'Door-to-door travel for senior staff, visiting clients and delegations, in an executive sedan or SUV.',
  },
  {
    icon: <path d="M3 14.5l18-6.5M6.5 12L4 9l1.6-.6L8.4 10M9.5 19.5l1.6-3.6" />,
    title: 'Corporate airport transportation',
    desc: (
      <>
        YYG pickups and departures for staff and guests, with flight details held on file. See{' '}
        <a href="/airport-transfer/">airport transfers</a>.
      </>
    ),
  },
  {
    icon: (
      <>
        <path d="M4 19V9l8-5 8 5v10" />
        <path d="M9.5 19v-5h5v5" />
      </>
    ),
    title: 'Hotel ↔ meeting transfers',
    desc: 'Movement between downtown hotels, the convention centre, the government district and offices across the city.',
  },
  {
    icon: (
      <>
        <circle cx={9} cy={8.5} r={2.6} />
        <circle cx={16.5} cy={9.5} r={2.1} />
        <path d="M4 18.5c0-2.8 2.2-4.6 5-4.6s5 1.8 5 4.6M15 18.5c0-2.2 1.4-3.6 3.5-3.6" />
      </>
    ),
    title: 'Conference & convention transport',
    desc: 'Delegate movement across multiple vehicles, planned around your programme rather than dispatched on the day.',
  },
  {
    icon: (
      <>
        <circle cx={12} cy={12} r={8.6} />
        <path d="M12 6.8v5.4l3.6 2.1" />
      </>
    ),
    title: 'Recurring & employee transport',
    desc: 'Standing pickups for shift changes, site visits and regular routes, held as a repeating booking.',
  },
  {
    icon: (
      <>
        <path d="M4 16.5h16M5.5 16.5V12l1.8-4.2A2 2 0 019.1 6.5h5.8a2 2 0 011.8 1.3L18.5 12v4.5" />
        <circle cx={8} cy={16.8} r={1.3} />
        <circle cx={16} cy={16.8} r={1.3} />
      </>
    ),
    title: 'Group & multi-vehicle movement',
    desc: (
      <>
        Teams and larger parties moved together. Private hire for celebrations runs through{' '}
        <a href="/event-transfers/">event transportation</a>.
      </>
    ),
  },
];

export function CorporateSolutions() {
  return (
    <section className="sec sec-tight" aria-labelledby="solTitle">
      <div className="wrap">
        <div className="head head-tight">
          <p className="eyebrow">What we provide</p>
          <h2 id="solTitle">
            Corporate transportation <em>solutions</em>
          </h2>
        </div>
        <div className="csol">
          {SOLUTIONS.map((s) => (
            <div className="cs reveal" key={s.title}>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" aria-hidden="true">
                {s.icon}
              </svg>
              <h3>{s.title}</h3>
              <p>{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
