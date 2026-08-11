'use client';

import { useEffect, useRef, useState } from 'react';
import { useBooking } from '@/components/booking/BookingProvider';
import { SERVICES, WAIT_TIME_SERVICES, TripType } from '@/lib/services';
import { ServiceTopFields, ServiceExtraFields } from '@/components/booking/ServiceFields';
import { GolfItinerary } from '@/components/booking/GolfItinerary';
import { requiredFieldIds } from '@/lib/booking-required';
import { isFieldValid } from '@/lib/booking-validate';
import { recommendedCapacity } from '@/lib/booking-summary';
import { buildBookingPayload } from '@/lib/booking-payload';

const TRIP_LABELS: Record<TripType, string> = { one: 'One way', return: 'Return trip', multi: 'Multi-day' };
const VEHICLES: { name: string; cap: 3 | 4 | 6; desc: string }[] = [
  { name: 'Sedan', cap: 3, desc: 'Up to 3 · 3 bags' },
  { name: 'SUV', cap: 4, desc: 'Up to 4 · 4 bags' },
  { name: 'Van', cap: 6, desc: 'Up to 6 · 6+ bags' },
];

export function BookingForm() {
  const { state, dispatch } = useBooking();
  const service = SERVICES[state.svc];
  const formRef = useRef<HTMLFormElement>(null);
  const [invalid, setInvalid] = useState<Set<string>>(new Set());
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [minDT, setMinDT] = useState('');

  useEffect(() => {
    // Computed post-mount (not during render) so server and client markup match;
    // the datetime inputs' `min` only needs to reflect "now" once the browser is live.
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setMinDT(new Date(Date.now() - new Date().getTimezoneOffset() * 60000).toISOString().slice(0, 16));
  }, []);

  const val = (id: string) => state.fields[id] || '';
  const setField = (id: string, value: string) => dispatch({ type: 'SET_FIELD', id, value });

  function blurCheck(id: string) {
    const required = requiredFieldIds(state.svc, state.trip, state.fields).includes(id);
    setInvalid((prev) => {
      const next = new Set(prev);
      if (isFieldValid(id, val(id), required)) next.delete(id);
      else next.add(id);
      return next;
    });
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (val('website')) return; // honeypot

    const required = requiredFieldIds(state.svc, state.trip, state.fields);
    const nextInvalid = new Set<string>();
    for (const id of required) {
      if (!isFieldValid(id, val(id), true)) nextInvalid.add(id);
    }
    setInvalid(nextInvalid);
    if (nextInvalid.size) {
      const firstBad = required.find((id) => nextInvalid.has(id));
      if (firstBad) formRef.current?.querySelector<HTMLElement>(`#${firstBad}`)?.focus();
      return;
    }

    setStatus('submitting');
    try {
      const payload = buildBookingPayload(state, window.location.href);
      const res = await fetch('/api/bookings', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });
      if (!res.ok) throw new Error('Request failed');
      setStatus('success');
    } catch {
      setStatus('error');
    }
  }

  const cap = recommendedCapacity(state);
  const showWaitField = WAIT_TIME_SERVICES.includes(state.svc);
  const showDropoff = state.svc !== 'hourly';

  return (
    <form className="bform reveal" ref={formRef} noValidate onSubmit={handleSubmit}>
      <h3 id="formTitle">{service.title}</h3>
      <p className="bsub" id="formSub">
        {service.sub}
      </p>

      <div className="bstep">
        <div className="step-h">
          <span className="snum">01</span>
          <h4>Trip details</h4>
          <span className="shint">{service.hint}</span>
        </div>

        {service.trips.length > 1 && (
          <div className="field">
            <label>Trip type</label>
            <div className="seg">
              {(['one', 'return', 'multi'] as TripType[])
                .filter((t) => service.trips.includes(t))
                .map((t) => (
                  <button
                    key={t}
                    type="button"
                    aria-pressed={state.trip === t}
                    onClick={() => dispatch({ type: 'SET_TRIP', trip: t })}
                  >
                    {TRIP_LABELS[t]}
                  </button>
                ))}
            </div>
          </div>
        )}

        <ServiceTopFields />

        <div className="frow">
          <div className="field">
            <label htmlFor="pickup">
              Pickup address <span className="rq">*</span>
            </label>
            <input
              type="text"
              id="pickup"
              placeholder="Address, hotel or landmark"
              value={val('pickup')}
              onChange={(e) => setField('pickup', e.target.value)}
              onBlur={() => blurCheck('pickup')}
              className={invalid.has('pickup') ? 'invalid' : undefined}
            />
            <div className="err">Please enter a pickup location.</div>
          </div>
          {showDropoff && (
            <div className="field">
              <label htmlFor="dropoff">
                Drop-off address <span className="rq">*</span>
              </label>
              <input
                type="text"
                id="dropoff"
                placeholder="Where are you heading?"
                value={val('dropoff')}
                onChange={(e) => setField('dropoff', e.target.value)}
                onBlur={() => blurCheck('dropoff')}
                className={invalid.has('dropoff') ? 'invalid' : undefined}
              />
              <div className="err">Please enter a drop-off location.</div>
            </div>
          )}
        </div>

        <div className="frow">
          <div className="field">
            <label htmlFor="when">
              Pickup date &amp; time <span className="rq">*</span>
            </label>
            <input
              type="datetime-local"
              id="when"
              min={minDT}
              value={val('when')}
              onChange={(e) => setField('when', e.target.value)}
              onBlur={() => blurCheck('when')}
              className={invalid.has('when') ? 'invalid' : undefined}
            />
            <div className="err">Please choose a valid future date and time.</div>
          </div>
          {showWaitField && (
            <div className="field">
              <label htmlFor="waittime">Wait time needed</label>
              <select id="waittime" value={val('waittime')} onChange={(e) => setField('waittime', e.target.value)}>
                <option>No wait — drop off only</option>
                <option>Driver waits (under 30 min)</option>
                <option>Driver waits (30–60 min)</option>
                <option>Driver waits (over 1 hour)</option>
              </select>
            </div>
          )}
        </div>

        {state.trip === 'return' && (
          <div className="return-block show">
            <div className="rt">Return journey</div>
            <div className="frow">
              <div className="field">
                <label htmlFor="retWhen">
                  Return date &amp; time <span className="rq">*</span>
                </label>
                <input
                  type="datetime-local"
                  id="retWhen"
                  min={minDT}
                  value={val('retWhen')}
                  onChange={(e) => setField('retWhen', e.target.value)}
                  onBlur={() => blurCheck('retWhen')}
                  className={invalid.has('retWhen') ? 'invalid' : undefined}
                />
                <div className="err">Please choose a return date and time.</div>
              </div>
              <div className="field">
                <label htmlFor="retFrom">Return pickup</label>
                <select id="retFrom" value={val('retFrom')} onChange={(e) => setField('retFrom', e.target.value)}>
                  <option>Same as drop-off address</option>
                  <option>Different location</option>
                </select>
              </div>
            </div>
            {val('retFrom') === 'Different location' && (
              <div className="field">
                <label htmlFor="retOther">Return pickup address</label>
                <input
                  type="text"
                  id="retOther"
                  placeholder="Where should we collect you?"
                  value={val('retOther')}
                  onChange={(e) => setField('retOther', e.target.value)}
                />
              </div>
            )}
          </div>
        )}

        {state.svc === 'golf' ? <GolfItinerary /> : <ServiceExtraFields />}
      </div>

      <div className="bstep">
        <div className="step-h">
          <span className="snum">02</span>
          <h4>Passengers &amp; luggage</h4>
          <span className="shint">So we send the right vehicle</span>
        </div>
        <div className="frow3">
          <div className="field">
            <label htmlFor="pax">
              Passengers <span className="rq">*</span>
            </label>
            <select
              id="pax"
              value={val('pax')}
              onChange={(e) => setField('pax', e.target.value)}
              onBlur={() => blurCheck('pax')}
              className={invalid.has('pax') ? 'invalid' : undefined}
            >
              <option value="">Select</option>
              {['1', '2', '3', '4', '5', '6', '7', '8+'].map((n) => (
                <option key={n}>{n}</option>
              ))}
            </select>
            <div className="err">Please select passenger count.</div>
          </div>
          <div className="field">
            <label htmlFor="luggage">Luggage</label>
            <select id="luggage" value={val('luggage')} onChange={(e) => setField('luggage', e.target.value)}>
              <option>None</option>
              <option>1–2 bags</option>
              <option>3–4 bags</option>
              <option>5–6 bags</option>
              <option>7+ bags</option>
            </select>
          </div>
          <div className="field">
            <label htmlFor="seats">Child seats</label>
            <select id="seats" value={val('seats')} onChange={(e) => setField('seats', e.target.value)}>
              <option>None</option>
              <option>1 child seat</option>
              <option>2 child seats</option>
              <option>1 booster</option>
              <option>2 boosters</option>
            </select>
          </div>
        </div>
        <div className="field">
          <label htmlFor="access">Accessibility needs</label>
          <select id="access" value={val('access')} onChange={(e) => setField('access', e.target.value)}>
            <option>None</option>
            <option>Assistance walking to vehicle</option>
            <option>Folding wheelchair or walker in trunk</option>
            <option>Front seat preferred</option>
            <option>Other — noted below</option>
          </select>
        </div>
      </div>

      <div className="bstep">
        <div className="step-h">
          <span className="snum">03</span>
          <h4>Vehicle preference</h4>
          <span className="shint">We recommend based on your party</span>
        </div>
        <div className="vehicles">
          {VEHICLES.map((v) => (
            <button
              key={v.name}
              type="button"
              className={`vsel${cap === v.cap ? ' rec' : ''}`}
              aria-pressed={state.vehicle === v.name}
              onClick={() => dispatch({ type: 'SET_VEHICLE', vehicle: v.name })}
            >
              <span className="vn">{v.name}</span>
              <span className="vc">{v.desc}</span>
              <span className="vrec">Recommended</span>
            </button>
          ))}
        </div>
        <div className="field" style={{ marginTop: 14 }}>
          <label htmlFor="vehnote">Multiple vehicles?</label>
          <select id="vehnote" value={val('vehnote')} onChange={(e) => setField('vehnote', e.target.value)}>
            <option>One vehicle is fine</option>
            <option>Two vehicles travelling together</option>
            <option>Three or more — please advise</option>
          </select>
        </div>
      </div>

      <div className="bstep">
        <div className="step-h">
          <span className="snum">04</span>
          <h4>Contact details</h4>
          <span className="shint">How dispatch reaches you</span>
        </div>
        <div className="frow">
          <div className="field">
            <label htmlFor="name">
              Full name <span className="rq">*</span>
            </label>
            <input
              type="text"
              id="name"
              autoComplete="name"
              value={val('name')}
              onChange={(e) => setField('name', e.target.value)}
              onBlur={() => blurCheck('name')}
              className={invalid.has('name') ? 'invalid' : undefined}
            />
            <div className="err">Please enter your name.</div>
          </div>
          <div className="field">
            <label htmlFor="phone">
              Phone <span className="rq">*</span>
            </label>
            <input
              type="tel"
              id="phone"
              autoComplete="tel"
              placeholder="(902) 000-0000"
              value={val('phone')}
              onChange={(e) => setField('phone', e.target.value)}
              onBlur={() => blurCheck('phone')}
              className={invalid.has('phone') ? 'invalid' : undefined}
            />
            <div className="err">Please enter a valid phone number.</div>
          </div>
        </div>
        <div className="frow">
          <div className="field">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              autoComplete="email"
              value={val('email')}
              onChange={(e) => setField('email', e.target.value)}
              onBlur={() => blurCheck('email')}
              className={invalid.has('email') ? 'invalid' : undefined}
            />
            <div className="err">Please enter a valid email address.</div>
          </div>
          <div className="field">
            <label htmlFor="confirmBy">Preferred confirmation</label>
            <select id="confirmBy" value={val('confirmBy')} onChange={(e) => setField('confirmBy', e.target.value)}>
              <option>Text message</option>
              <option>Phone call</option>
              <option>Email</option>
              <option>WhatsApp</option>
            </select>
          </div>
        </div>
        <div className="field">
          <label htmlFor="notes">Anything else we should know?</label>
          <textarea
            id="notes"
            rows={3}
            placeholder="Gate codes, pets, oversized items, meeting instructions…"
            value={val('notes')}
            onChange={(e) => setField('notes', e.target.value)}
          />
        </div>
        <div className="hp" aria-hidden="true">
          <label htmlFor="website">Leave empty</label>
          <input
            type="text"
            id="website"
            tabIndex={-1}
            autoComplete="off"
            value={val('website')}
            onChange={(e) => setField('website', e.target.value)}
          />
        </div>
        <button type="submit" className="btn btn-brass btn-block" disabled={status === 'submitting'}>
          {status === 'submitting' ? 'Sending…' : 'Send Booking Request'}
        </button>
        <div className={`ok${status === 'success' ? ' show' : ''}`} role="status" tabIndex={-1}>
          Request received. Dispatch will confirm your vehicle, timing and fare shortly. For anything
          urgent, call or text +1 (782) 377-7533.
        </div>
        <div className={`ok error${status === 'error' ? ' show' : ''}`} role="status" tabIndex={-1}>
          Something went wrong sending your request. Please call or text dispatch directly at{' '}
          <a href="tel:+17823777533">+1 (782) 377-7533</a> and we&apos;ll get you booked.
        </div>
      </div>
    </form>
  );
}
