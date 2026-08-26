'use client';

import { useBooking } from '@/components/booking/BookingProvider';
import { MEDICAL_FACILITIES, TOUR_STOPS } from '@/lib/services';

function useField() {
  const { state, dispatch } = useBooking();
  const val = (id: string) => state.fields[id] || '';
  const setField = (id: string, value: string) => dispatch({ type: 'SET_FIELD', id, value });
  return { state, dispatch, val, setField };
}

export function ServiceTopFields() {
  const { state, dispatch, val, setField } = useField();

  switch (state.svc) {
    case 'airport':
      return (
        <>
          <div className="field">
            <label>Direction</label>
            <div className="seg" id="dirSeg">
              <button
                type="button"
                data-v="arrival"
                aria-pressed={state.dir === 'arrival'}
                onClick={() => dispatch({ type: 'SET_DIR', dir: 'arrival' })}
              >
                Arriving at YYG
              </button>
              <button
                type="button"
                data-v="departure"
                aria-pressed={state.dir === 'departure'}
                onClick={() => dispatch({ type: 'SET_DIR', dir: 'departure' })}
              >
                Departing from YYG
              </button>
            </div>
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
              <label htmlFor="origin">From / to</label>
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
              <label htmlFor="payment">
                Payment method <span className="rq">*</span>
              </label>
              <select id="payment" value={val('payment')} onChange={(e) => setField('payment', e.target.value)}>
                <option value="">Select</option>
                <option>Card on pickup</option>
                <option>Cash to driver</option>
                <option>Corporate account</option>
              </select>
              <div className="err">Please choose a payment method.</div>
            </div>
            <div className="field">
              <label htmlFor="oversized">Oversized items</label>
              <select id="oversized" value={val('oversized')} onChange={(e) => setField('oversized', e.target.value)}>
                <option>None</option>
                <option>Golf clubs</option>
                <option>Skis or snowboard</option>
                <option>Musical instrument</option>
                <option>Other — noted below</option>
              </select>
            </div>
          </div>
        </>
      );

    case 'cruise':
      return (
        <>
          <div className="field">
            <label htmlFor="port">
              Port or terminal <span className="rq">*</span>
            </label>
            <select id="port" value={val('port')} onChange={(e) => setField('port', e.target.value)}>
              <option value="">Select</option>
              <option>Charlottetown Cruise Port</option>
              <option>Wood Islands Ferry Terminal</option>
              <option>CTMA Ferry — Souris</option>
              <option>Other — noted below</option>
            </select>
            <div className="err">Please select a port.</div>
          </div>
          <div className="frow3">
            <div className="field">
              <label htmlFor="ship">Ship or sailing name</label>
              <input
                type="text"
                id="ship"
                placeholder="e.g. Zuiderdam"
                value={val('ship')}
                onChange={(e) => setField('ship', e.target.value)}
              />
            </div>
            <div className="field">
              <label htmlFor="dock">Docking time</label>
              <input type="time" id="dock" value={val('dock')} onChange={(e) => setField('dock', e.target.value)} />
            </div>
            <div className="field">
              <label htmlFor="aboard">All-aboard time</label>
              <input
                type="time"
                id="aboard"
                value={val('aboard')}
                onChange={(e) => setField('aboard', e.target.value)}
              />
            </div>
          </div>
        </>
      );

    case 'tour': {
      const stops = val('stops');
      function addChip(chip: string) {
        if (stops.indexOf(chip) > -1) return;
        setField('stops', stops.trim() ? stops.trim() + ', ' + chip : chip);
      }
      return (
        <>
          <div className="frow">
            <div className="field">
              <label htmlFor="duration">
                Tour length <span className="rq">*</span>
              </label>
              <select id="duration" value={val('duration')} onChange={(e) => setField('duration', e.target.value)}>
                <option value="">Select</option>
                <option>Half day — up to 4 hours</option>
                <option>Full day — up to 8 hours</option>
                <option>Custom length</option>
              </select>
              <div className="err">Please choose a tour length.</div>
            </div>
            <div className="field">
              <label htmlFor="pace">Preferred pace</label>
              <select id="pace" value={val('pace')} onChange={(e) => setField('pace', e.target.value)}>
                <option>Relaxed — fewer stops, longer at each</option>
                <option>Balanced</option>
                <option>See as much as possible</option>
              </select>
            </div>
          </div>
          <div className="field">
            <label htmlFor="stops">Stops you&rsquo;d like to include</label>
            <textarea
              id="stops"
              rows={2}
              placeholder="Green Gables, Cavendish Beach, North Rustico…"
              value={stops}
              onChange={(e) => setField('stops', e.target.value)}
            />
            <div className="chips-label">Tap to add</div>
            <div className="chips">
              {TOUR_STOPS.map((s) => (
                <button type="button" key={s} onClick={() => addChip(s)}>
                  {s}
                </button>
              ))}
            </div>
          </div>
        </>
      );
    }

    case 'corporate':
      return (
        <>
          <div className="frow">
            <div className="field">
              <label htmlFor="company">
                Company name <span className="rq">*</span>
              </label>
              <input
                type="text"
                id="company"
                value={val('company')}
                onChange={(e) => setField('company', e.target.value)}
              />
              <div className="err">Please enter your company name.</div>
            </div>
            <div className="field">
              <label htmlFor="costcode">Cost centre / PO reference</label>
              <input
                type="text"
                id="costcode"
                placeholder="For your invoice"
                value={val('costcode')}
                onChange={(e) => setField('costcode', e.target.value)}
              />
            </div>
          </div>
          <div className="frow">
            <div className="field">
              <label htmlFor="passenger">Passenger name (if not you)</label>
              <input
                type="text"
                id="passenger"
                value={val('passenger')}
                onChange={(e) => setField('passenger', e.target.value)}
              />
            </div>
            <div className="field">
              <label htmlFor="recurring">Recurring booking</label>
              <select id="recurring" value={val('recurring')} onChange={(e) => setField('recurring', e.target.value)}>
                <option>One-off booking</option>
                <option>Daily — weekdays</option>
                <option>Weekly</option>
                <option>Monthly</option>
                <option>Custom schedule</option>
              </select>
            </div>
          </div>
        </>
      );

    case 'wedding':
      return (
        <>
          <div className="frow">
            <div className="field">
              <label htmlFor="venue">
                Ceremony venue <span className="rq">*</span>
              </label>
              <input
                type="text"
                id="venue"
                placeholder="Church, hall or outdoor location"
                value={val('venue')}
                onChange={(e) => setField('venue', e.target.value)}
              />
              <div className="err">Please enter the venue.</div>
            </div>
            <div className="field">
              <label htmlFor="reception">Reception venue</label>
              <input
                type="text"
                id="reception"
                placeholder="If different"
                value={val('reception')}
                onChange={(e) => setField('reception', e.target.value)}
              />
            </div>
          </div>
          <div className="frow3">
            <div className="field">
              <label htmlFor="ceremony">Ceremony time</label>
              <input
                type="time"
                id="ceremony"
                value={val('ceremony')}
                onChange={(e) => setField('ceremony', e.target.value)}
              />
            </div>
            <div className="field">
              <label htmlFor="guests">Guests needing transport</label>
              <input
                type="number"
                id="guests"
                min={1}
                placeholder="e.g. 24"
                value={val('guests')}
                onChange={(e) => setField('guests', e.target.value)}
              />
            </div>
            <div className="field">
              <label htmlFor="role">Booking for</label>
              <select id="role" value={val('role')} onChange={(e) => setField('role', e.target.value)}>
                <option>Wedding party</option>
                <option>Guest shuttle</option>
                <option>Both</option>
                <option>Couple only</option>
              </select>
            </div>
          </div>
        </>
      );

    case 'hourly':
      return (
        <div className="frow">
          <div className="field">
            <label htmlFor="hours">
              Hours required <span className="rq">*</span>
            </label>
            <select id="hours" value={val('hours')} onChange={(e) => setField('hours', e.target.value)}>
              <option value="">Select</option>
              <option>2 hours</option>
              <option>3 hours</option>
              <option>4 hours</option>
              <option>6 hours</option>
              <option>8 hours</option>
              <option>Full day (10+ hours)</option>
            </select>
            <div className="err">Please select the hours needed.</div>
          </div>
          <div className="field">
            <label htmlFor="purpose">Purpose</label>
            <select id="purpose" value={val('purpose')} onChange={(e) => setField('purpose', e.target.value)}>
              <option>Meetings and appointments</option>
              <option>Sightseeing at own pace</option>
              <option>Photo or film shoot</option>
              <option>Event or night out</option>
              <option>Other</option>
            </select>
          </div>
        </div>
      );

    case 'long':
      return (
        <div className="frow">
          <div className="field">
            <label htmlFor="destcity">
              Destination city / province <span className="rq">*</span>
            </label>
            <input
              type="text"
              id="destcity"
              placeholder="e.g. Halifax, NS"
              value={val('destcity')}
              onChange={(e) => setField('destcity', e.target.value)}
            />
            <div className="err">Please enter your destination.</div>
          </div>
          <div className="field">
            <label htmlFor="crossing">Crossing preference</label>
            <select id="crossing" value={val('crossing')} onChange={(e) => setField('crossing', e.target.value)}>
              <option>Confederation Bridge</option>
              <option>Wood Islands Ferry</option>
              <option>Whichever is faster</option>
              <option>Not leaving the Island</option>
            </select>
          </div>
        </div>
      );

    case 'medical': {
      const facility = val('facility');
      return (
        <>
          <div className="field">
            <label htmlFor="facility">
              Facility or appointment type <span className="rq">*</span>
            </label>
            <select id="facility" value={facility} onChange={(e) => setField('facility', e.target.value)}>
              <option value="">Select</option>
              {MEDICAL_FACILITIES.map((f) => (
                <option key={f}>{f}</option>
              ))}
            </select>
            <div className="err">Please choose a facility.</div>
          </div>
          {facility.indexOf('Other') === 0 && (
            <div className="field">
              <label htmlFor="facOther">Facility name and address</label>
              <input
                type="text"
                id="facOther"
                placeholder="Clinic name and address"
                value={val('facOther')}
                onChange={(e) => setField('facOther', e.target.value)}
              />
            </div>
          )}
          <div className="frow">
            <div className="field">
              <label htmlFor="apptTime">
                Appointment time <span className="rq">*</span>
              </label>
              <input
                type="time"
                id="apptTime"
                value={val('apptTime')}
                onChange={(e) => setField('apptTime', e.target.value)}
              />
              <div className="err">Please enter the appointment time.</div>
            </div>
            <div className="field">
              <label htmlFor="arriveEarly">Arrive before appointment</label>
              <select
                id="arriveEarly"
                value={val('arriveEarly')}
                onChange={(e) => setField('arriveEarly', e.target.value)}
              >
                <option>15 minutes early</option>
                <option>30 minutes early</option>
                <option>45 minutes early</option>
                <option>1 hour early</option>
              </select>
            </div>
          </div>
        </>
      );
    }

    default:
      return null;
  }
}

export function ServiceExtraFields() {
  const { state, val, setField } = useField();

  switch (state.svc) {
    case 'airport':
      return (
        <div className="field">
          <label htmlFor="meet">Meeting preference</label>
          <select id="meet" value={val('meet')} onChange={(e) => setField('meet', e.target.value)}>
            <option>Meet inside at Arrivals with name board</option>
            <option>Curbside pickup — call on landing</option>
            <option>Driver waits in short-term parking</option>
          </select>
        </div>
      );

    case 'cruise':
      return (
        <div className="field">
          <label htmlFor="shore">Shore excursion?</label>
          <select id="shore" value={val('shore')} onChange={(e) => setField('shore', e.target.value)}>
            <option>No — straight transfer</option>
            <option>Yes — sightseeing between docking and all-aboard</option>
          </select>
        </div>
      );

    case 'tour':
      return (
        <div className="field">
          <label htmlFor="lunch">Lunch stop</label>
          <select id="lunch" value={val('lunch')} onChange={(e) => setField('lunch', e.target.value)}>
            <option>No lunch stop needed</option>
            <option>Yes — driver recommends somewhere local</option>
            <option>Yes — we have a place in mind</option>
          </select>
        </div>
      );

    case 'corporate':
      return (
        <div className="frow">
          <div className="field">
            <label htmlFor="billing">Billing contact email</label>
            <input
              type="email"
              id="billing"
              placeholder="accounts@company.ca"
              value={val('billing')}
              onChange={(e) => setField('billing', e.target.value)}
            />
          </div>
          <div className="field">
            <label htmlFor="account">Existing account?</label>
            <select id="account" value={val('account')} onChange={(e) => setField('account', e.target.value)}>
              <option>No — please set one up</option>
              <option>Yes — existing account</option>
              <option>Pay per trip for now</option>
            </select>
          </div>
        </div>
      );

    case 'wedding':
      return (
        <div className="frow">
          <div className="field">
            <label htmlFor="shuttleruns">Shuttle runs needed</label>
            <select
              id="shuttleruns"
              value={val('shuttleruns')}
              onChange={(e) => setField('shuttleruns', e.target.value)}
            >
              <option>Single run each way</option>
              <option>Continuous shuttle during the event</option>
              <option>End-of-night returns only</option>
            </select>
          </div>
          <div className="field">
            <label htmlFor="decor">Vehicle presentation</label>
            <select id="decor" value={val('decor')} onChange={(e) => setField('decor', e.target.value)}>
              <option>Standard — clean and unmarked</option>
              <option>Ribbon or simple decoration</option>
              <option>Discuss with us</option>
            </select>
          </div>
        </div>
      );

    case 'hourly':
      return (
        <div className="field">
          <label htmlFor="itinerary">Rough itinerary</label>
          <textarea
            id="itinerary"
            rows={3}
            placeholder="Where you expect to go and roughly when — we can adjust on the day."
            value={val('itinerary')}
            onChange={(e) => setField('itinerary', e.target.value)}
          />
        </div>
      );

    case 'long':
      return (
        <div className="field">
          <label htmlFor="stopsneeded">Comfort stops</label>
          <select id="stopsneeded" value={val('stopsneeded')} onChange={(e) => setField('stopsneeded', e.target.value)}>
            <option>Driver&rsquo;s discretion</option>
            <option>Please plan a meal stop</option>
            <option>Straight through, no stops</option>
          </select>
        </div>
      );

    case 'medical':
      return (
        <div className="frow">
          <div className="field">
            <label htmlFor="companion">Travelling with a companion?</label>
            <select id="companion" value={val('companion')} onChange={(e) => setField('companion', e.target.value)}>
              <option>No</option>
              <option>Yes — one companion</option>
              <option>Yes — two companions</option>
            </select>
          </div>
          <div className="field">
            <label htmlFor="recurringMed">Recurring appointments</label>
            <select
              id="recurringMed"
              value={val('recurringMed')}
              onChange={(e) => setField('recurringMed', e.target.value)}
            >
              <option>One-off</option>
              <option>Weekly</option>
              <option>Every two weeks</option>
              <option>Monthly</option>
              <option>Custom schedule</option>
            </select>
          </div>
        </div>
      );

    default:
      return null;
  }
}
