import { CRUISE_SHIPS } from '@/lib/cruise-ships';

export function CruiseShips() {
  return (
    <section className="sec sec-tight dark" aria-labelledby="shipTitle">
      <div className="wrap">
        <div className="head head-tight">
          <p className="eyebrow">Ships calling at Charlottetown</p>
          <h2 id="shipTitle">
            Cruising into Charlottetown? <em>We can arrange your PEI transportation.</em>
          </h2>
        </div>
        <div className="ships">
          {CRUISE_SHIPS.map((s) => (
            <div className="ship reveal" key={s.name}>
              <p className="sn">{s.name}</p>
              <p className="sl">{s.line}</p>
            </div>
          ))}
        </div>
        <p className="ship-note">
          Ships listed from the current Port Charlottetown season. Sailing not shown? Choose
          &ldquo;Other / not listed&rdquo; in the booking form. Schedules change without notice —
          confirm your call with the{' '}
          <a href="https://portcharlottetown.com/cruise-schedule/" rel="nofollow noopener">
            official Port Charlottetown cruise schedule
          </a>
          . Independent transportation provider. Not affiliated with or endorsed by the cruise
          lines listed.
        </p>
      </div>
    </section>
  );
}
