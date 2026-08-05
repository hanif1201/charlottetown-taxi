'use client';

import { useBooking } from '@/components/booking/BookingProvider';
import { buildSummaryLines } from '@/lib/booking-summary';
import { SERVICES } from '@/lib/services';

export function SummaryPanel() {
  const { state } = useBooking();
  const lines = buildSummaryLines(state);
  const hasContent = lines.length > 1;

  return (
    <div className="summary" id="summaryPanel">
      <h4>Your booking</h4>
      <p className="ssub">Updates live as you fill the form.</p>
      <div id="summaryBody">
        {hasContent ? (
          lines.map((line, i) => (
            <div className="sline" key={i}>
              <span className="sk">{line.k}</span>
              <span className="sv">{line.v}</span>
            </div>
          ))
        ) : (
          <div className="sempty">Start filling in the form and your trip summary will appear here.</div>
        )}
      </div>
      <div className="included">
        <h5>Included with every booking</h5>
        <ul>
          {SERVICES[state.svc].inc.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}
