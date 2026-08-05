import Image from 'next/image';

export function Licences() {
  return (
    <section className="sec">
      <div className="wrap">
        <div className="head reveal">
          <span className="eyebrow eyebrow-dk">Licences &amp; Memberships</span>
          <h2>
            Credentials you can <em>check yourself</em>
          </h2>
          <p>
            Every driver and vehicle is licensed and insured under Prince Edward Island regulation,
            and we hold accreditation with the bodies below.
          </p>
        </div>
        <div className="lic-grid reveal">
          <div className="lic">
            <Image src="/images/bbb-badge.png" alt="BBB Accredited Business" width={210} height={80} />
            <div className="ln">BBB Accredited Business</div>
            <div className="ld">
              Accredited with the Better Business Bureau, meeting its standards for trust,
              transparency and complaint resolution.
            </div>
          </div>
          <div className="lic">
            <Image src="/images/tiapei-badge.png" alt="TIAPEI Proud Member" width={130} height={130} />
            <div className="ln">TIAPEI Proud Member</div>
            <div className="ld">
              Member of the Tourism Industry Association of P.E.I., the province&apos;s tourism
              operator association.
            </div>
          </div>
          <div className="lic">
            <svg
              className="licon"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={1.2}
              aria-hidden="true"
            >
              <path d="M12 3l8 3v6c0 5-3.5 8-8 9-4.5-1-8-4-8-9V6z" />
              <path d="M9 12l2 2 4-4" />
            </svg>
            <div className="ln">Licensed &amp; Insured</div>
            <div className="ld">
              Vehicles and drivers licensed and commercially insured under Prince Edward Island
              regulation.
            </div>
          </div>
          <div className="lic">
            <svg
              className="licon"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={1.2}
              aria-hidden="true"
            >
              <circle cx={12} cy={12} r={9} />
              <path d="M12 7v5l3 2" />
            </svg>
            <div className="ln">24/7 Licensed Operator</div>
            <div className="ld">
              Operating around the clock across Charlottetown, Stratford, Cornwall and all Prince
              Edward Island communities.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
