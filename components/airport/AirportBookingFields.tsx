'use client';

import { useEffect, useState } from 'react';
import { useBooking } from '@/components/booking/BookingProvider';

function useField() {
  const { state, dispatch } = useBooking();
  const val = (id: string) => state.fields[id] || '';
  const setField = (id: string, value: string) => dispatch({ type: 'SET_FIELD', id, value });
  return { state, dispatch, val, setField };
}

function suggestionText(flightTime: string, flightType: string): string | null {
  if (!flightTime) return null;
  const leadMinutes = flightType === 'Domestic' ? 90 : 120;
  const driveMinutes = 20;
  const target = new Date(new Date(flightTime).getTime() - (leadMinutes + driveMinutes) * 60000);
  if (isNaN(target.getTime())) return null;
  const pretty = target.toLocaleString('en-CA', {
    weekday: 'short',
    month: 'short',
    day: 'numeric',
    hour: 'numeric',
    minute: '2-digit',
  });
  return `Suggested pickup: ${pretty} — ${leadMinutes} minutes at the terminal plus travel time. Adjust above if you prefer.`;
}

export function AirportBookingFields() {
  const { state, dispatch, val, setField } = useField();
  const [arrivalReturnOpen, setArrivalReturnOpen] = useState(false);
  const [departureReturnOpen, setDepartureReturnOpen] = useState(false);
  const [minDT, setMinDT] = useState('');

  useEffect(() => {
    // Computed post-mount so server and client markup match; see BookingForm's identical pattern.
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setMinDT(new Date(Date.now() - new Date().getTimezoneOffset() * 60000).toISOString().slice(0, 16));
  }, []);

  const flightTime = val('flightTime');
  const flightType = val('flightType');

  useEffect(() => {
    if (!flightTime) return;
    const leadMinutes = flightType === 'Domestic' ? 90 : 120;
    const driveMinutes = 20;
    const target = new Date(new Date(flightTime).getTime() - (leadMinutes + driveMinutes) * 60000);
    if (isNaN(target.getTime())) return;
    // Guard matches the original: only fill "when" if the rider hasn't already set it.
    if (!val('when')) {
      const local = new Date(target.getTime() - target.getTimezoneOffset() * 60000);
      setField('when', local.toISOString().slice(0, 16));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [flightTime, flightType]);

  const suggestion = suggestionText(flightTime, flightType);

  return (
    <>
      <div className="bigseg" id="dirSeg" role="group" aria-label="Choose arrival or departure">
        <button
          type="button"
          data-v="arrival"
          aria-pressed={state.dir === 'arrival'}
          onClick={() => dispatch({ type: 'SET_DIR', dir: 'arrival' })}
        >
          <span className="bt">Arrival</span>
          <span className="bd">Landing at YYG</span>
        </button>
        <button
          type="button"
          data-v="departure"
          aria-pressed={state.dir === 'departure'}
          onClick={() => dispatch({ type: 'SET_DIR', dir: 'departure' })}
        >
          <span className="bt">Departure</span>
          <span className="bd">Flying out of YYG</span>
        </button>
      </div>

      {state.dir === 'arrival' && (
        <div className="panel show" id="arrivalPanel">
          <div className="panel-note">
            <strong>Flight monitoring included</strong>
            Your flight number is all we need — we follow the inbound flight and move your pickup
            with it, so a delay doesn&rsquo;t need a phone call.
          </div>
          <div className="frow3">
            <div className="field">
              <label htmlFor="flight">
                Flight number <span className="rq">*</span>
              </label>
              <input
                type="text"
                id="flight"
                placeholder="e.g. AC8514"
                value={val('flight')}
                onChange={(e) => setField('flight', e.target.value)}
              />
              <div className="err">Flight number lets us track delays.</div>
            </div>
            <div className="field">
              <label htmlFor="airline">Airline</label>
              <input
                type="text"
                id="airline"
                placeholder="e.g. Air Canada"
                value={val('airline')}
                onChange={(e) => setField('airline', e.target.value)}
              />
            </div>
            <div className="field">
              <label htmlFor="origin">Flying in from</label>
              <input
                type="text"
                id="origin"
                placeholder="e.g. Toronto (YYZ)"
                value={val('origin')}
                onChange={(e) => setField('origin', e.target.value)}
              />
            </div>
          </div>
          <div className="frow">
            <div className="field">
              <label htmlFor="meet">Where should the driver meet you?</label>
              <select id="meet" value={val('meet')} onChange={(e) => setField('meet', e.target.value)}>
                <option>Inside Arrivals with a name board</option>
                <option>Curbside at the Arrivals door</option>
                <option>Call me when I land</option>
              </select>
            </div>
            <div className="field">
              <label htmlFor="zone">Destination zone</label>
              <select id="zone" value={val('zone')} onChange={(e) => setField('zone', e.target.value)}>
                <option>Charlottetown — $20</option>
                <option>Stratford — $30</option>
                <option>Cornwall — $30</option>
                <option>Elsewhere on PEI — quoted</option>
                <option>Not sure — please advise</option>
              </select>
            </div>
          </div>
          <div className="check">
            <input
              type="checkbox"
              id="a-return"
              checked={arrivalReturnOpen}
              onChange={(e) => setArrivalReturnOpen(e.target.checked)}
            />
            <label htmlFor="a-return">I&rsquo;d also like to book my departure transfer back to YYG</label>
          </div>
          <div className={`rtblock${arrivalReturnOpen ? ' show' : ''}`} id="a-returnBlock">
            <div className="rt">Return departure to the airport</div>
            <div className="frow">
              <div className="field">
                <label htmlFor="ret_flight">Departing flight number</label>
                <input
                  type="text"
                  id="ret_flight"
                  placeholder="e.g. AC8515"
                  value={val('ret_flight')}
                  onChange={(e) => setField('ret_flight', e.target.value)}
                />
              </div>
              <div className="field">
                <label htmlFor="ret_when">Departure time</label>
                <input
                  type="datetime-local"
                  id="ret_when"
                  min={minDT}
                  value={val('ret_when')}
                  onChange={(e) => setField('ret_when', e.target.value)}
                />
              </div>
            </div>
            <div className="field">
              <label htmlFor="ret_address">Return pickup from</label>
              <input
                type="text"
                id="ret_address"
                placeholder="Leave blank if same as drop-off address"
                value={val('ret_address')}
                onChange={(e) => setField('ret_address', e.target.value)}
              />
            </div>
          </div>
        </div>
      )}

      {state.dir === 'departure' && (
        <div className="panel show" id="departurePanel">
          <div className="panel-note">
            <strong>We work back from your flight</strong>
            Tell us your departure time and we&rsquo;ll calculate a pickup that gets you to the
            terminal without a rush — 90 minutes ahead for domestic, two hours for transborder and
            international.
          </div>
          <div className="frow3">
            <div className="field">
              <label htmlFor="flight">
                Flight number <span className="rq">*</span>
              </label>
              <input
                type="text"
                id="flight"
                placeholder="e.g. AC8515"
                value={val('flight')}
                onChange={(e) => setField('flight', e.target.value)}
              />
              <div className="err">Please enter your flight number.</div>
            </div>
            <div className="field">
              <label htmlFor="airline">Airline</label>
              <input
                type="text"
                id="airline"
                placeholder="e.g. Air Canada"
                value={val('airline')}
                onChange={(e) => setField('airline', e.target.value)}
              />
            </div>
            <div className="field">
              <label htmlFor="flightType">Flight type</label>
              <select
                id="flightType"
                value={val('flightType')}
                onChange={(e) => setField('flightType', e.target.value)}
              >
                <option>Domestic</option>
                <option>Transborder (USA)</option>
                <option>International</option>
              </select>
            </div>
          </div>
          <div className="frow">
            <div className="field">
              <label htmlFor="flightTime">
                Flight departure time <span className="rq">*</span>
              </label>
              <input
                type="datetime-local"
                id="flightTime"
                min={minDT}
                value={flightTime}
                onChange={(e) => setField('flightTime', e.target.value)}
              />
              <div className="err">Please enter your departure time.</div>
            </div>
            <div className="field">
              <label htmlFor="zone">Pickup zone</label>
              <select id="zone" value={val('zone')} onChange={(e) => setField('zone', e.target.value)}>
                <option>Charlottetown</option>
                <option>Stratford</option>
                <option>Cornwall</option>
                <option>Elsewhere on PEI — quoted</option>
              </select>
            </div>
          </div>
          {suggestion && (
            <p style={{ fontSize: 12.8, color: 'var(--brass)', margin: '-4px 0 14px', fontWeight: 300 }}>
              {suggestion}
            </p>
          )}
          <div className="check">
            <input
              type="checkbox"
              id="d-return"
              checked={departureReturnOpen}
              onChange={(e) => setDepartureReturnOpen(e.target.checked)}
            />
            <label htmlFor="d-return">
              I&rsquo;d also like to book my arrival transfer from YYG on the way back
            </label>
          </div>
          <div className={`rtblock${departureReturnOpen ? ' show' : ''}`} id="d-returnBlock">
            <div className="rt">Return arrival from the airport</div>
            <div className="frow">
              <div className="field">
                <label htmlFor="ret_flight">Returning flight number</label>
                <input
                  type="text"
                  id="ret_flight"
                  placeholder="e.g. AC8514"
                  value={val('ret_flight')}
                  onChange={(e) => setField('ret_flight', e.target.value)}
                />
              </div>
              <div className="field">
                <label htmlFor="ret_when">Scheduled landing</label>
                <input
                  type="datetime-local"
                  id="ret_when"
                  min={minDT}
                  value={val('ret_when')}
                  onChange={(e) => setField('ret_when', e.target.value)}
                />
              </div>
            </div>
            <div className="field">
              <label htmlFor="ret_address">Return drop-off address</label>
              <input
                type="text"
                id="ret_address"
                placeholder="Leave blank if same as pickup address"
                value={val('ret_address')}
                onChange={(e) => setField('ret_address', e.target.value)}
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
}
