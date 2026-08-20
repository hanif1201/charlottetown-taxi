import Image from 'next/image';

export function CorporateTrust() {
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
          {/* OWNER VERIFY: swap these two icon cards for the Meet PEI and Chamber of
              Commerce logo files once uploaded, matching the two logo cards above. */}
          <div className="tc reveal">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" aria-hidden="true">
              <path d="M12 3.2l2.6 5.6 6.1.8-4.5 4.2 1.2 6.1L12 17l-5.4 2.9 1.2-6.1-4.5-4.2 6.1-.8z" />
            </svg>
            <span className="tk">Meet PEI Member</span>
            <span className="tl">PEI&rsquo;s business events organization</span>
          </div>
          <div className="tc reveal">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" aria-hidden="true">
              <path d="M4 20h16M6 20V10h12v10M5 10l7-5 7 5M10 20v-5h4v5" />
            </svg>
            <span className="tk">Chamber Member</span>
            <span className="tl">Greater Charlottetown Area Chamber of Commerce</span>
          </div>
        </div>
      </div>
    </section>
  );
}
