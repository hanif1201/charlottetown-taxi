// OWNER VERIFY: every review below is a placeholder. Replace each excerpt, first
// name and date with a genuine Google review before this page goes live — do not
// publish with placeholder text visible.
const REVIEWS: { text: string; who: string; date: string }[] = [
  {
    text: '[OWNER VERIFY: paste a genuine Google review about an airport arrival here.]',
    who: '[First name]',
    date: '[date]',
  },
  {
    text: '[OWNER VERIFY: paste a genuine Google review about an early-morning departure here.]',
    who: '[First name]',
    date: '[date]',
  },
  {
    text: '[OWNER VERIFY: paste a genuine Google review about a longer Island transfer here.]',
    who: '[First name]',
    date: '[date]',
  },
];

export function AirportReviews() {
  return (
    <section>
      <div className="wrap">
        <div className="head reveal">
          <span className="eyebrow">Reviews</span>
          <h2>
            What riders say about <em>our airport runs</em>
          </h2>
          <p>Reviews below are pulled from our Google Business Profile.</p>
        </div>
        <div className="rev-grid reveal">
          {REVIEWS.map((r) => (
            <div className="rev" key={r.text}>
              <div className="stars" aria-label="5 out of 5 stars">
                ★★★★★
              </div>
              <p>{r.text}</p>
              <div className="who">
                {r.who}
                <span>Google review &middot; {r.date}</span>
              </div>
            </div>
          ))}
        </div>
        <p className="revlink reveal">
          <a
            className="go"
            href="https://www.google.com/search?q=Charlottetown+Taxi+reviews"
            rel="nofollow noopener"
          >
            Read our reviews on Google
          </a>
        </p>
      </div>
    </section>
  );
}
