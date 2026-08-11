import Image from 'next/image';

export function AirportTrust() {
  return (
    <section className="sec trustsec" aria-label="Credentials and accreditation">
      <div className="wrap">
        <div className="trust-grid">
          <div className="tcard tcard-logo reveal">
            <Image src="/images/bbb-badge.png" alt="BBB Accredited Business" width={210} height={80} />
            <span className="tc-k">BBB Accredited</span>
          </div>
          <div className="tcard tcard-logo reveal">
            <Image src="/images/tiapei-badge.png" alt="TIAPEI Proud Member" width={130} height={130} />
            <span className="tc-k">TIAPEI Member</span>
          </div>
          <div className="tcard reveal">
            <svg
              className="tc-ic"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={1.2}
              aria-hidden="true"
            >
              <path d="M3 15.5l18-6.6-2.2-2.6-5 1.6-5.4-4.3-2 .7 3 5-3.6 1.2-2.4-1.9-1.6.6z" />
              <path d="M4 20h16" />
            </svg>
            <span className="tc-k">Licensed &amp; Insured</span>
            <span className="tc-l">City licensed &middot; commercially insured</span>
          </div>
          <div className="tcard reveal">
            <svg
              className="tc-ic"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={1.1}
              aria-hidden="true"
            >
              <path d="M12 2.6l2.7 5.9 6.4.8-4.7 4.4 1.2 6.4-5.6-3.1-5.6 3.1 1.2-6.4L2.9 9.3l6.4-.8z" />
            </svg>
            <span className="tc-k">Google Reviewed</span>
            <span className="tc-l">Reviewed on Google</span>
          </div>
          <div className="tcard reveal">
            <svg
              className="tc-ic"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={1.1}
              aria-hidden="true"
            >
              <circle cx={12} cy={12} r={8.6} />
              <path d="M12 6.8v5.4l3.6 2.1" />
            </svg>
            <span className="tc-k">24/7 Dispatch</span>
            <span className="tc-l">Answered, every hour</span>
          </div>
          <div className="tcard reveal">
            <svg
              className="tc-ic"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={1.1}
              aria-hidden="true"
            >
              <path d="M12 3v18" />
              <path d="M16.4 7.4C15.4 6.4 13.9 6 12 6c-2.4 0-3.9 1.1-3.9 2.9s1.7 2.5 3.9 2.9 3.9 1.1 3.9 2.9-1.5 2.9-3.9 2.9c-1.9 0-3.4-.5-4.4-1.5" />
            </svg>
            <span className="tc-k">No Surge Pricing</span>
            <span className="tc-l">Bylaw fares, any hour</span>
          </div>
          <div className="tcard reveal">
            <svg
              className="tc-ic"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={1.2}
              aria-hidden="true"
            >
              <path d="M12 21c-4.1-3.6-7-6.4-7-9.8A5 5 0 0112 8a5 5 0 017 3.2c0 3.4-2.9 6.2-7 9.8z" />
              <circle cx={12} cy={10.9} r={2.1} />
            </svg>
            <span className="tc-k">Local PEI Company</span>
            <span className="tc-l">Charlottetown based</span>
          </div>
          <div className="tcard tcard-pay reveal">
            <Image
              src="/images/payment-icons.png"
              alt="Visa, Mastercard and Apple Pay accepted"
              width={259}
              height={32}
            />
            <span className="tc-l">Card and cash accepted</span>
          </div>
        </div>
      </div>
    </section>
  );
}
