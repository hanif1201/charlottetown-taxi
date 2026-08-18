import Image from 'next/image';

export function CruiseTrust() {
  return (
    <section className="sec sec-tight" aria-label="Memberships and accreditation">
      <div className="wrap">
        <div className="trow">
          <div className="tc reveal">
            <Image src="/images/bbb-badge.png" alt="BBB Accredited Business" width={210} height={80} />
            <span className="tk">BBB Accredited</span>
          </div>
          <div className="tc reveal">
            <Image src="/images/tiapei-badge.png" alt="TIAPEI Proud Member" width={130} height={130} />
            <span className="tk">TIAPEI Member</span>
          </div>
          <div className="tc reveal">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" aria-hidden="true">
              <path d="M12 3l7.5 2.8v5.6c0 4.7-3.2 7.5-7.5 8.6-4.3-1.1-7.5-3.9-7.5-8.6V5.8z" />
              <path d="M9.2 12.1l1.9 1.9 3.7-3.8" />
            </svg>
            <span className="tk">Licensed &amp; Insured</span>
            <span className="tl">City licensed &middot; commercially insured</span>
          </div>
          <div className="tc reveal">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" aria-hidden="true">
              <circle cx={12} cy={12} r={8.6} />
              <path d="M12 6.8v5.4l3.6 2.1" />
            </svg>
            <span className="tk">24/7 Dispatch</span>
            <span className="tl">Early sailings and late arrivals covered</span>
          </div>
        </div>
      </div>
    </section>
  );
}
