'use client';

import { useState } from 'react';

const PRIMARY_ZONES = [
  { zn: 'Charlottetown', zd: 'Regulated local fares' },
  { zn: 'Charlottetown Airport (YYG)', zd: '24/7 airport transfers' },
  { zn: 'Stratford & Cornwall', zd: 'Local taxi service' },
  { zn: 'Cavendish & North Shore', zd: 'Tours and private transfers' },
  { zn: 'Summerside & Eastern PEI', zd: 'Island-wide transportation' },
];

const MORE_AREAS = [
  'Montague',
  'Souris',
  'Brudenell',
  'Wood Islands',
  'North Rustico',
  'Kensington',
  'Borden-Carleton',
  'Confederation Bridge',
  'Off-Island transportation',
  'Moncton',
  'Halifax / Halifax YHZ',
];

export function CoverageZones() {
  const [expanded, setExpanded] = useState(false);

  return (
    <>
      <div className="zone-list">
        {PRIMARY_ZONES.map((zone) => (
          <div className="zone" key={zone.zn}>
            <span className="zn">{zone.zn}</span>
            <span className="zd">{zone.zd}</span>
          </div>
        ))}
      </div>

      <div className="more-areas" id="moreAreas" hidden={!expanded}>
        <ul>
          {MORE_AREAS.map((area) => (
            <li key={area}>{area}</li>
          ))}
        </ul>
      </div>

      <p className="faq-toggle" style={{ textAlign: 'left', marginTop: 18 }}>
        <button
          type="button"
          className="btn btn-outline btn-sm"
          aria-expanded={expanded}
          aria-controls="moreAreas"
          onClick={() => setExpanded((v) => !v)}
        >
          {expanded ? 'Hide service areas' : 'View all service areas'}
        </button>
      </p>
    </>
  );
}
