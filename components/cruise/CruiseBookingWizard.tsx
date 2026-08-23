'use client';

import { useEffect, useReducer, useRef, useState } from 'react';
import { useCruiseBooking } from '@/components/cruise/CruiseBookingContext';
import {
  cruiseBookingReducer,
  initialCruiseBookingState,
  TOTAL_STEPS,
  STEP_LABELS,
  CruiseMode,
  FerryDirection,
  TripType,
  ContactMethod,
} from '@/lib/cruise-booking-types';
import { requiredFieldIdsForStep, stepPickErrors } from '@/lib/cruise-booking-required';
import { isFieldValid } from '@/lib/booking-validate';
import { buildCruiseReviewRows, buildCruisePayload } from '@/lib/cruise-payload';
import { CRUISE_SHIPS } from '@/lib/cruise-ships';

const NEED_OPTIONS = [
  'Port pickup / transportation',
  'Private PEI shore transportation',
  'Custom island transportation',
  'Other',
];
const DUR_OPTIONS = ['2 hours', '3 hours', '4 hours', '5 hours', '6 hours', 'Custom'];
const PLACE_OPTIONS: { value: string; label: string }[] = [
  { value: 'Green Gables Heritage Place', label: 'Green Gables Heritage Place' },
  { value: 'Cavendish', label: 'Cavendish' },
  { value: 'PEI National Park / north shore', label: 'PEI National Park / north shore' },
  { value: 'Covehead Lighthouse', label: 'Covehead Lighthouse' },
  { value: 'Brackley Beach', label: 'Brackley Beach' },
  { value: 'North Rustico', label: 'North Rustico' },
  { value: 'Dalvay-by-the-Sea', label: 'Dalvay-by-the-Sea' },
  { value: 'Cape Tryon', label: 'Cape Tryon' },
  { value: 'Confederation Bridge', label: 'Confederation Bridge' },
  { value: 'Charlottetown', label: 'Charlottetown' },
  { value: 'Let us recommend', label: 'Custom / let us recommend' },
];
const TERM_OPTIONS: { value: string; label: string }[] = [
  { value: 'Wood Islands Ferry Terminal', label: 'Wood Islands' },
  { value: 'Souris Ferry Terminal', label: 'Souris' },
  { value: 'Other', label: 'Other' },
];
const DIR_OPTIONS: FerryDirection[] = ['Pickup from ferry', 'Drop-off at ferry'];
const TRIP_OPTIONS: TripType[] = ['One way', 'Round trip'];
const CONTACT_OPTIONS: ContactMethod[] = ['Email', 'WhatsApp', 'Phone', 'Text message'];

export function CruiseBookingWizard() {
  const { pendingMode, clearPendingMode } = useCruiseBooking();
  const [state, dispatch] = useReducer(cruiseBookingReducer, initialCruiseBookingState);
  const [invalid, setInvalid] = useState<Set<string>>(new Set());
  const [pickError, setPickError] = useState<string | null>(null);
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [minDate, setMinDate] = useState('');
  const boxRef = useRef<HTMLDivElement>(null);
  const formRef = useRef<HTMLFormElement>(null);

  useEffect(() => {
    // Computed post-mount so server and client markup match; see BookingForm's identical pattern.
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setMinDate(new Date(Date.now() - new Date().getTimezoneOffset() * 60000).toISOString().slice(0, 10));
  }, []);

  useEffect(() => {
    if (pendingMode) {
      dispatch({ type: 'SET_MODE', mode: pendingMode });
      dispatch({ type: 'SET_STEP', step: 1 });
      clearPendingMode();
    }
  }, [pendingMode, clearPendingMode]);

  useEffect(() => {
    const box = boxRef.current;
    if (!box) return;
    if (box.getBoundingClientRect().top < 0) {
      const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      box.scrollIntoView({ behavior: reduce ? 'auto' : 'smooth' });
    }
  }, [state.step]);

  const val = (id: string) => state.fields[id] || '';
  const setField = (id: string, value: string) => dispatch({ type: 'SET_FIELD', id, value });

  function blurCheck(id: string) {
    const required = requiredFieldIdsForStep(state).includes(id);
    setInvalid((prev) => {
      const next = new Set(prev);
      if (isFieldValid(id, val(id), required)) next.delete(id);
      else next.add(id);
      return next;
    });
  }

  function pickMode(mode: CruiseMode) {
    dispatch({ type: 'SET_MODE', mode });
    setPickError(null);
  }

  function goNext() {
    const err = stepPickErrors(state);
    if (err) {
      setPickError(err);
      return;
    }
    const required = requiredFieldIdsForStep(state);
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
    dispatch({ type: 'SET_STEP', step: Math.min(state.step + 1, TOTAL_STEPS) });
  }

  function goBack() {
    dispatch({ type: 'SET_STEP', step: Math.max(state.step - 1, 1) });
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (val('website')) return; // honeypot

    setStatus('submitting');
    try {
      const payload = buildCruisePayload(state, window.location.href);
      const res = await fetch('/api/bookings/', {
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

  const showDurBlock = state.need === 'Private PEI shore transportation' || state.need === 'Custom island transportation';
  // The class has to land on the .field wrapper, not the input — see globals.css's
  // `.field.invalid` selectors.
  const fieldWrapClass = (id: string) => `field${invalid.has(id) ? ' invalid' : ''}`;

  return (
    <section className="sec sec-tight stone" id="book" aria-labelledby="bookTitle">
      <div className="wrap">
        <div className="head head-tight center">
          <p className="eyebrow">Request transportation</p>
          <h2 id="bookTitle">Cruise &amp; ferry booking</h2>
        </div>

        <div className="cfbox" ref={boxRef}>
          {status === 'success' ? (
            <div className="done-panel show" tabIndex={-1}>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" aria-hidden="true">
                <circle cx={12} cy={12} r={9.5} />
                <path d="M8 12.3l2.7 2.7L16 9.6" />
              </svg>
              <h3>Request received</h3>
              <p>
                Thank you. This is a request, not a confirmed booking — your transportation is
                confirmed once we have checked availability and replied with the pickup
                arrangement in writing. If your travel is within the next few hours, call{' '}
                <a href="tel:+17823777533" style={{ color: 'var(--champagne)', borderBottom: '1px solid var(--brass)' }}>
                  +1 (782) 377-7533
                </a>
                .
              </p>
              <div className="row">
                <a href="tel:+17823777533" className="btn btn-brass">
                  Call dispatch
                </a>
                <a href="https://wa.me/17823777533" rel="noopener" className="btn btn-outline">
                  WhatsApp
                </a>
              </div>
            </div>
          ) : (
            <>
              <div
                className="steps-bar"
                role="progressbar"
                aria-valuemin={1}
                aria-valuemax={TOTAL_STEPS}
                aria-valuenow={state.step}
                aria-label="Booking progress"
              >
                {[1, 2, 3, 4, 5].map((n) => (
                  <span className={`sb${n < state.step ? ' done' : n === state.step ? ' active' : ''}`} key={n}>
                    <i />
                  </span>
                ))}
              </div>
              <p className="step-label">
                Step {state.step} of {TOTAL_STEPS} &middot; {STEP_LABELS[state.step - 1]}
              </p>

              <form ref={formRef} noValidate onSubmit={handleSubmit}>
                <input
                  type="text"
                  id="website"
                  className="hp"
                  tabIndex={-1}
                  autoComplete="off"
                  aria-hidden="true"
                  value={val('website')}
                  onChange={(e) => setField('website', e.target.value)}
                />

                {state.step === 1 && (
                  <div className="cstep show">
                    <h3>What are you travelling by?</h3>
                    <p className="cs-sub">This decides which details we ask for. Nothing else is shown until you choose.</p>
                    <div className="modes">
                      <button
                        type="button"
                        className="mode"
                        aria-pressed={state.mode === 'cruise'}
                        onClick={() => pickMode('cruise')}
                      >
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" aria-hidden="true">
                          <path d="M3 18.5c1.6 0 1.6 1.2 3.2 1.2s1.6-1.2 3.2-1.2 1.6 1.2 3.2 1.2 1.6-1.2 3.2-1.2 1.6 1.2 3.2 1.2" />
                          <path d="M4.8 16l1.4-5.2h11.6L19.2 16" />
                          <path d="M9 10.8V7.2h6v3.6M12 7.2V4" />
                        </svg>
                        <span className="mt">Cruise ship</span>
                        <span className="md">Arriving at Port Charlottetown</span>
                      </button>
                      <button
                        type="button"
                        className="mode"
                        aria-pressed={state.mode === 'ferry'}
                        onClick={() => pickMode('ferry')}
                      >
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" aria-hidden="true">
                          <path d="M3 19c1.6 0 1.6 1.1 3.2 1.1S7.8 19 9.4 19s1.6 1.1 3.2 1.1S14.2 19 15.8 19s1.6 1.1 3.2 1.1" />
                          <path d="M5 16.5l1.3-5h11.4l1.3 5" />
                          <path d="M8 11.5v-4h8v4" />
                          <path d="M10.5 7.5V5h3v2.5" />
                        </svg>
                        <span className="mt">Ferry</span>
                        <span className="md">Wood Islands or Souris</span>
                      </button>
                    </div>
                    {pickError === 'mode' && <span className="err" style={{ display: 'block' }}>Please choose cruise or ferry.</span>}
                    <div className="navrow">
                      <button type="button" className="btn btn-brass" onClick={goNext}>
                        Continue &rarr;
                      </button>
                    </div>
                  </div>
                )}

                {state.step === 2 && state.mode === 'cruise' && (
                  <div className="cstep show">
                    <h3>Cruise details</h3>
                    <p className="cs-sub">Fields marked * are required.</p>

                    <div className="frow">
                      <div className={fieldWrapClass('ship')}>
                        <label htmlFor="ship">
                          Cruise ship <span className="rq">*</span>
                        </label>
                        <select
                          id="ship"
                          value={val('ship')}
                          onChange={(e) => setField('ship', e.target.value)}
                          onBlur={() => blurCheck('ship')}
                        >
                          <option value="">Select your ship</option>
                          {CRUISE_SHIPS.map((s) => (
                            <option key={s.name}>{s.name}</option>
                          ))}
                          <option value="other">Other / not listed</option>
                        </select>
                        <span className="err">Please choose your ship.</span>
                      </div>
                      <div className="field">
                        <label htmlFor="line">Cruise line</label>
                        <input type="text" id="line" placeholder="Fills in automatically" value={val('line')} readOnly />
                      </div>
                    </div>

                    <div className="frow">
                      <div className={fieldWrapClass('cArrive')}>
                        <label htmlFor="cArrive">
                          Arrival date in port <span className="rq">*</span>
                        </label>
                        <input
                          type="date"
                          id="cArrive"
                          min={minDate}
                          value={val('cArrive')}
                          onChange={(e) => setField('cArrive', e.target.value)}
                          onBlur={() => blurCheck('cArrive')}
                        />
                        <span className="err">Please choose your date in port.</span>
                      </div>
                      <div className={fieldWrapClass('cPickup')}>
                        <label htmlFor="cPickup">
                          Desired pickup time <span className="rq">*</span>
                        </label>
                        <input
                          type="time"
                          id="cPickup"
                          value={val('cPickup')}
                          onChange={(e) => setField('cPickup', e.target.value)}
                          onBlur={() => blurCheck('cPickup')}
                        />
                        <span className="err">Please choose a pickup time.</span>
                      </div>
                    </div>

                    <span className="grouplab">
                      What do you need? <span className="rq">*</span>
                    </span>
                    <div className="pills">
                      {NEED_OPTIONS.map((opt) => (
                        <button
                          type="button"
                          className="pill"
                          key={opt}
                          aria-pressed={state.need === opt}
                          onClick={() => {
                            dispatch({ type: 'SET_NEED', value: opt });
                            setPickError(null);
                          }}
                        >
                          {opt}
                        </button>
                      ))}
                    </div>
                    {pickError === 'need' && <span className="err" style={{ display: 'block' }}>Please choose what you need.</span>}

                    {showDurBlock && (
                      <div className="cond show" style={{ marginTop: 20 }}>
                        <span className="grouplab">Roughly how long?</span>
                        <div className="pills">
                          {DUR_OPTIONS.map((opt) => (
                            <button
                              type="button"
                              className="pill"
                              key={opt}
                              aria-pressed={state.dur === opt}
                              onClick={() => dispatch({ type: 'SET_DUR', value: opt })}
                            >
                              {opt}
                            </button>
                          ))}
                        </div>

                        <span className="grouplab" style={{ marginTop: 22 }}>
                          Places you would like to visit
                        </span>
                        <div className="chips">
                          {PLACE_OPTIONS.map((opt) => (
                            <button
                              type="button"
                              className="chip"
                              key={opt.value}
                              aria-pressed={state.places.includes(opt.value)}
                              onClick={() => dispatch({ type: 'TOGGLE_PLACE', place: opt.value })}
                            >
                              {opt.label}
                            </button>
                          ))}
                        </div>
                        <p className="micro">Pick as many as you like. We will tell you honestly what fits the hours you have.</p>
                      </div>
                    )}

                    <div style={{ marginTop: 24 }}>
                      <span className="grouplab">Return to ship</span>
                      <div className="frow">
                        <div className={fieldWrapClass('cBack')}>
                          <label htmlFor="cBack">
                            Requested port return time <span className="rq">*</span>
                          </label>
                          <input
                            type="time"
                            id="cBack"
                            value={val('cBack')}
                            onChange={(e) => setField('cBack', e.target.value)}
                            onBlur={() => blurCheck('cBack')}
                          />
                          <span className="err">Please choose a return time.</span>
                        </div>
                        <div className="field">
                          <label htmlFor="cSail">Ship departure time</label>
                          <input type="time" id="cSail" value={val('cSail')} onChange={(e) => setField('cSail', e.target.value)} />
                        </div>
                      </div>
                      <p className="micro">
                        We plan the return with time in hand before all-aboard. Cruise line schedules are outside our
                        control, so leave yourself a comfortable margin rather than the minimum.
                      </p>
                    </div>

                    <div className="navrow">
                      <button type="button" className="btn btn-outline" onClick={goBack}>
                        &larr; Back
                      </button>
                      <button type="button" className="btn btn-brass" onClick={goNext}>
                        Continue &rarr;
                      </button>
                    </div>
                  </div>
                )}

                {state.step === 2 && state.mode === 'ferry' && (
                  <div className="cstep show">
                    <h3>Ferry details</h3>
                    <p className="cs-sub">Fields marked * are required.</p>

                    <span className="grouplab">
                      Which ferry terminal? <span className="rq">*</span>
                    </span>
                    <div className="pills">
                      {TERM_OPTIONS.map((opt) => (
                        <button
                          type="button"
                          className="pill"
                          key={opt.value}
                          aria-pressed={state.term === opt.value}
                          onClick={() => {
                            dispatch({ type: 'SET_TERM', value: opt.value });
                            setPickError(null);
                          }}
                        >
                          {opt.label}
                        </button>
                      ))}
                    </div>
                    {pickError === 'term' && <span className="err" style={{ display: 'block' }}>Please choose a terminal.</span>}

                    <span className="grouplab" style={{ marginTop: 22 }}>
                      Are we picking you up, or taking you to the ferry? <span className="rq">*</span>
                    </span>
                    <div className="pills">
                      {DIR_OPTIONS.map((opt) => (
                        <button
                          type="button"
                          className="pill"
                          key={opt}
                          aria-pressed={state.dir === opt}
                          onClick={() => {
                            dispatch({ type: 'SET_DIR', value: opt });
                            setPickError(null);
                          }}
                        >
                          {opt}
                        </button>
                      ))}
                    </div>
                    {pickError === 'dir' && <span className="err" style={{ display: 'block' }}>Please choose one.</span>}

                    {state.dir === 'Pickup from ferry' && (
                      <div className="cond show" style={{ marginTop: 22 }}>
                        <div className="frow">
                          <div className={fieldWrapClass('fpDate')}>
                            <label htmlFor="fpDate">
                              Arrival date <span className="rq">*</span>
                            </label>
                            <input
                              type="date"
                              id="fpDate"
                              min={minDate}
                              value={val('fpDate')}
                              onChange={(e) => setField('fpDate', e.target.value)}
                              onBlur={() => blurCheck('fpDate')}
                            />
                            <span className="err">Please choose the arrival date.</span>
                          </div>
                          <div className={fieldWrapClass('fpTime')}>
                            <label htmlFor="fpTime">
                              Ferry arrival time <span className="rq">*</span>
                            </label>
                            <input
                              type="time"
                              id="fpTime"
                              value={val('fpTime')}
                              onChange={(e) => setField('fpTime', e.target.value)}
                              onBlur={() => blurCheck('fpTime')}
                            />
                            <span className="err">Please add the sailing arrival time.</span>
                          </div>
                        </div>
                        <div className="frow">
                          <div className="field">
                            <label htmlFor="fpFrom">Travelling from</label>
                            <input
                              type="text"
                              id="fpFrom"
                              placeholder="e.g. Caribou, Nova Scotia"
                              value={val('fpFrom')}
                              onChange={(e) => setField('fpFrom', e.target.value)}
                            />
                          </div>
                          <div className={fieldWrapClass('fpTo')}>
                            <label htmlFor="fpTo">
                              Destination in PEI <span className="rq">*</span>
                            </label>
                            <input
                              type="text"
                              id="fpTo"
                              placeholder="Hotel, address, YYG airport"
                              value={val('fpTo')}
                              onChange={(e) => setField('fpTo', e.target.value)}
                              onBlur={() => blurCheck('fpTo')}
                            />
                            <span className="err">Please tell us where you are going.</span>
                          </div>
                        </div>
                      </div>
                    )}

                    {state.dir === 'Drop-off at ferry' && (
                      <div className="cond show" style={{ marginTop: 22 }}>
                        <div className={fieldWrapClass('fdFrom')}>
                          <label htmlFor="fdFrom">
                            Pickup address <span className="rq">*</span>
                          </label>
                          <input
                            type="text"
                            id="fdFrom"
                            placeholder="Where we collect you on PEI"
                            value={val('fdFrom')}
                            onChange={(e) => setField('fdFrom', e.target.value)}
                            onBlur={() => blurCheck('fdFrom')}
                          />
                          <span className="err">Please enter a pickup address.</span>
                        </div>
                        <div className="frow">
                          <div className={fieldWrapClass('fdDate')}>
                            <label htmlFor="fdDate">
                              Travel date <span className="rq">*</span>
                            </label>
                            <input
                              type="date"
                              id="fdDate"
                              min={minDate}
                              value={val('fdDate')}
                              onChange={(e) => setField('fdDate', e.target.value)}
                              onBlur={() => blurCheck('fdDate')}
                            />
                            <span className="err">Please choose the travel date.</span>
                          </div>
                          <div className={fieldWrapClass('fdTime')}>
                            <label htmlFor="fdTime">
                              Ferry departure time <span className="rq">*</span>
                            </label>
                            <input
                              type="time"
                              id="fdTime"
                              value={val('fdTime')}
                              onChange={(e) => setField('fdTime', e.target.value)}
                              onBlur={() => blurCheck('fdTime')}
                            />
                            <span className="err">Please add your sailing time.</span>
                          </div>
                        </div>
                        <p className="micro">
                          We work the pickup time back from your sailing and the operator&rsquo;s check-in requirement,
                          then confirm it with you — we do not set it automatically.
                        </p>
                      </div>
                    )}

                    <span className="grouplab" style={{ marginTop: 22 }}>
                      Ferry trip
                    </span>
                    <div className="pills">
                      {TRIP_OPTIONS.map((opt) => (
                        <button
                          type="button"
                          className="pill"
                          key={opt}
                          aria-pressed={state.trip === opt}
                          onClick={() => dispatch({ type: 'SET_TRIP', value: opt })}
                        >
                          {opt}
                        </button>
                      ))}
                    </div>
                    {state.trip === 'Round trip' && (
                      <div className="cond show" style={{ marginTop: 18 }}>
                        <div className="frow">
                          <div className="field">
                            <label htmlFor="rtDate">Return date</label>
                            <input type="date" id="rtDate" min={minDate} value={val('rtDate')} onChange={(e) => setField('rtDate', e.target.value)} />
                          </div>
                          <div className="field">
                            <label htmlFor="rtTime">Return sailing time</label>
                            <input type="time" id="rtTime" value={val('rtTime')} onChange={(e) => setField('rtTime', e.target.value)} />
                          </div>
                        </div>
                      </div>
                    )}

                    <div className="navrow">
                      <button type="button" className="btn btn-outline" onClick={goBack}>
                        &larr; Back
                      </button>
                      <button type="button" className="btn btn-brass" onClick={goNext}>
                        Continue &rarr;
                      </button>
                    </div>
                  </div>
                )}

                {state.step === 3 && (
                  <div className="cstep show">
                    <h3>Passengers</h3>
                    <p className="cs-sub">So the right vehicle is assigned before the day.</p>
                    <div className="frow3">
                      <div className={fieldWrapClass('adults')}>
                        <label htmlFor="adults">
                          Adults <span className="rq">*</span>
                        </label>
                        <select
                          id="adults"
                          value={val('adults')}
                          onChange={(e) => setField('adults', e.target.value)}
                          onBlur={() => blurCheck('adults')}
                        >
                          <option value="">Select</option>
                          {['1', '2', '3', '4', '5', '6', '7 or more'].map((n) => (
                            <option key={n}>{n}</option>
                          ))}
                        </select>
                        <span className="err">Please choose.</span>
                      </div>
                      <div className="field">
                        <label htmlFor="children">Children</label>
                        <select id="children" value={val('children') || '0'} onChange={(e) => setField('children', e.target.value)}>
                          {['0', '1', '2', '3', '4 or more'].map((n) => (
                            <option key={n}>{n}</option>
                          ))}
                        </select>
                      </div>
                      <div className="field">
                        <label htmlFor="lug">Luggage</label>
                        <select id="lug" value={val('lug')} onChange={(e) => setField('lug', e.target.value)}>
                          <option>None</option>
                          <option>Day bags only</option>
                          <option>1–2 suitcases</option>
                          <option>3+ suitcases</option>
                        </select>
                      </div>
                    </div>
                    <div className="check">
                      <input
                        type="checkbox"
                        id="seat"
                        checked={state.seat}
                        onChange={(e) => dispatch({ type: 'SET_SEAT', checked: e.target.checked })}
                      />
                      <label htmlFor="seat">A child seat is required</label>
                    </div>
                    <div className="field" style={{ marginTop: 18 }}>
                      <label htmlFor="access">Accessibility or mobility requirements</label>
                      <input
                        type="text"
                        id="access"
                        placeholder="Walker, wheelchair, step-free access, anything we should plan for"
                        value={val('access')}
                        onChange={(e) => setField('access', e.target.value)}
                      />
                    </div>
                    <div className="field">
                      <label htmlFor="notes">Additional notes</label>
                      <textarea
                        id="notes"
                        rows={3}
                        placeholder="Anything else that affects the booking"
                        value={val('notes')}
                        onChange={(e) => setField('notes', e.target.value)}
                      />
                    </div>
                    <div className="navrow">
                      <button type="button" className="btn btn-outline" onClick={goBack}>
                        &larr; Back
                      </button>
                      <button type="button" className="btn btn-brass" onClick={goNext}>
                        Continue &rarr;
                      </button>
                    </div>
                  </div>
                )}

                {state.step === 4 && (
                  <div className="cstep show">
                    <h3>Your contact details</h3>
                    <p className="cs-sub">We reply with confirmation and the pickup arrangement.</p>
                    <div className="frow">
                      <div className={fieldWrapClass('name')}>
                        <label htmlFor="name">
                          Full name <span className="rq">*</span>
                        </label>
                        <input
                          type="text"
                          id="name"
                          placeholder="Who the driver is meeting"
                          value={val('name')}
                          onChange={(e) => setField('name', e.target.value)}
                          onBlur={() => blurCheck('name')}
                        />
                        <span className="err">Please enter a name.</span>
                      </div>
                      <div className={fieldWrapClass('email')}>
                        <label htmlFor="email">
                          Email <span className="rq">*</span>
                        </label>
                        <input
                          type="email"
                          id="email"
                          placeholder="name@example.com"
                          value={val('email')}
                          onChange={(e) => setField('email', e.target.value)}
                          onBlur={() => blurCheck('email')}
                        />
                        <span className="err">Please check the email address.</span>
                      </div>
                    </div>
                    <div className="frow">
                      <div className={fieldWrapClass('phone')}>
                        <label htmlFor="phone">
                          Phone or WhatsApp <span className="rq">*</span>
                        </label>
                        <input
                          type="tel"
                          id="phone"
                          placeholder="Include the country code"
                          value={val('phone')}
                          onChange={(e) => setField('phone', e.target.value)}
                          onBlur={() => blurCheck('phone')}
                        />
                        <span className="err">Please enter a number we can reach.</span>
                      </div>
                      {state.mode === 'cruise' && (
                        <div className="field cond show">
                          <label htmlFor="country">Country</label>
                          <input
                            type="text"
                            id="country"
                            placeholder="Where you are travelling from"
                            value={val('country')}
                            onChange={(e) => setField('country', e.target.value)}
                          />
                        </div>
                      )}
                    </div>
                    <span className="grouplab">Preferred contact method</span>
                    <div className="pills">
                      {CONTACT_OPTIONS.map((opt) => (
                        <button
                          type="button"
                          className="pill"
                          key={opt}
                          aria-pressed={state.contact === opt}
                          onClick={() => dispatch({ type: 'SET_CONTACT', value: opt })}
                        >
                          {opt}
                        </button>
                      ))}
                    </div>
                    <div className="navrow">
                      <button type="button" className="btn btn-outline" onClick={goBack}>
                        &larr; Back
                      </button>
                      <button type="button" className="btn btn-brass" onClick={goNext}>
                        Review &rarr;
                      </button>
                    </div>
                  </div>
                )}

                {state.step === 5 && (
                  <div className="cstep show">
                    <h3>Review your request</h3>
                    <p className="cs-sub">Check this over, then send it to dispatch.</p>
                    <dl className="rev-list">
                      {buildCruiseReviewRows(state).map((row) => (
                        <div key={row.k}>
                          <dt>{row.k}</dt>
                          <dd>{row.v}</dd>
                        </div>
                      ))}
                    </dl>
                    {status === 'error' && (
                      <div className="ok error show" role="status">
                        Something went wrong sending your request. Please call or text dispatch directly at{' '}
                        <a href="tel:+17823777533">+1 (782) 377-7533</a> and we&apos;ll get you booked.
                      </div>
                    )}
                    <div className="navrow">
                      <button type="button" className="btn btn-outline" onClick={goBack}>
                        &larr; Back
                      </button>
                      <button type="submit" className="btn btn-brass" disabled={status === 'submitting'}>
                        {status === 'submitting'
                          ? 'Sending…'
                          : state.mode === 'ferry'
                            ? 'Request ferry transportation'
                            : 'Request cruise transportation'}
                      </button>
                    </div>
                  </div>
                )}
              </form>
            </>
          )}
        </div>
      </div>
    </section>
  );
}
