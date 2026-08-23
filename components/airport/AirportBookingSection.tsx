'use client';

import { useEffect, useRef, useState } from 'react';
import { useBooking } from '@/components/booking/BookingProvider';
import { AirportBookingFields } from '@/components/airport/AirportBookingFields';
import { requiredFieldIds } from '@/lib/booking-required';
import { isFieldValid } from '@/lib/booking-validate';
import { buildBookingPayload } from '@/lib/booking-payload';

export function AirportBookingSection() {
  const { state, dispatch } = useBooking();
  const formRef = useRef<HTMLFormElement>(null);
  const [invalid, setInvalid] = useState<Set<string>>(new Set());
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  useEffect(() => {
    // This page is airport-only, so the shared booking state should reflect that
    // the moment it mounts rather than whatever service was last selected elsewhere.
    dispatch({ type: 'SET_SVC', svc: 'airport' });
    // The initial state.dir === 'arrival' is a plain default value, not a dispatched
    // action, so the SET_DIR reducer's pickup auto-fill never runs unless the rider
    // happens to click the (already-selected) Arrival button. Dispatch it once here
    // so the auto-fill actually fires even if they never touch the toggle.
    dispatch({ type: 'SET_DIR', dir: 'arrival' });
  }, [dispatch]);

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

  return (
    <section id="book" style={{ background: 'var(--stone)' }}>
      <div className="wrap">
        <div className="head reveal">
          <span className="eyebrow">Booking</span>
          <h2>
            Book your <em>YYG airport transfer</em>
          </h2>
          <p>
            Choose whether you&rsquo;re arriving or departing and we&rsquo;ll ask only for the
            details needed for that trip.
          </p>
        </div>
        <div className="booking">
          <form className="bform reveal" ref={formRef} noValidate onSubmit={handleSubmit}>
            <AirportBookingFields invalid={invalid} blurCheck={blurCheck} />

            <div className="frow3">
              <div className={`field${invalid.has('pax') ? ' invalid' : ''}`}>
                <label htmlFor="pax">
                  Passengers <span className="rq">*</span>
                </label>
                <select
                  id="pax"
                  value={val('pax')}
                  onChange={(e) => setField('pax', e.target.value)}
                  onBlur={() => blurCheck('pax')}
                >
                  <option value="">Select</option>
                  {['1', '2', '3', '4', '5', '6', '7+'].map((n) => (
                    <option key={n}>{n}</option>
                  ))}
                </select>
                <div className="err">Please select passenger count.</div>
              </div>
              <div className="field">
                <label htmlFor="luggage">Checked luggage</label>
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

            <div className="frow">
              <div className="field">
                <label htmlFor="oversized">Oversized items</label>
                <select id="oversized" value={val('oversized')} onChange={(e) => setField('oversized', e.target.value)}>
                  <option>None</option>
                  <option>Golf clubs</option>
                  <option>Skis or snowboards</option>
                  <option>Bicycle</option>
                  <option>Musical instrument</option>
                  <option>Wheelchair or mobility aid</option>
                  <option>Other — noted below</option>
                </select>
              </div>
              <div className={`field${invalid.has('payment') ? ' invalid' : ''}`}>
                <label htmlFor="payment">
                  Payment method <span className="rq">*</span>
                </label>
                <select
                  id="payment"
                  value={val('payment')}
                  onChange={(e) => setField('payment', e.target.value)}
                  onBlur={() => blurCheck('payment')}
                >
                  <option value="">Select</option>
                  <option>Cash</option>
                  <option>Interac debit</option>
                  <option>Visa</option>
                  <option>Mastercard</option>
                  <option>American Express</option>
                  <option>Company account / invoice</option>
                </select>
                <div className="err">Please choose a payment method.</div>
              </div>
            </div>

            <div className="field">
              <label htmlFor="notes">Special requests</label>
              <textarea
                id="notes"
                rows={3}
                placeholder="Accessibility needs, extra stop, pet carrier, gate code, meeting instructions…"
                value={val('notes')}
                onChange={(e) => setField('notes', e.target.value)}
              />
            </div>

            <div className="frow">
              <div className={`field${invalid.has('name') ? ' invalid' : ''}`}>
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
                />
                <div className="err">Please enter your name.</div>
              </div>
              <div className={`field${invalid.has('phone') ? ' invalid' : ''}`}>
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
                />
                <div className="err">Please enter a valid phone number.</div>
              </div>
            </div>

            <div className="frow">
              <div className={`field${invalid.has('email') ? ' invalid' : ''}`}>
                <label htmlFor="email">
                  Email <span className="rq">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  autoComplete="email"
                  value={val('email')}
                  onChange={(e) => setField('email', e.target.value)}
                  onBlur={() => blurCheck('email')}
                />
                <div className="err">Please enter a valid email address.</div>
              </div>
              <div className="field">
                <label htmlFor="confirmBy">Confirm my booking by</label>
                <select id="confirmBy" value={val('confirmBy')} onChange={(e) => setField('confirmBy', e.target.value)}>
                  <option>Text message</option>
                  <option>Phone call</option>
                  <option>Email</option>
                  <option>WhatsApp</option>
                </select>
              </div>
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

            <button
              type="submit"
              className="btn btn-brass"
              style={{ width: '100%', marginTop: 10 }}
              disabled={status === 'submitting'}
            >
              {status === 'submitting' ? 'Sending…' : 'Send Booking Request'}
            </button>
            <div className={`ok${status === 'success' ? ' show' : ''}`} role="status" tabIndex={-1}>
              Request received. Dispatch will confirm your driver, pickup time and fare shortly.
              For anything urgent, call +1 (782) 377-7533.
            </div>
            <div className={`ok error${status === 'error' ? ' show' : ''}`} role="status" tabIndex={-1}>
              Something went wrong sending your request. Please call or text dispatch directly at{' '}
              <a href="tel:+17823777533">+1 (782) 377-7533</a> and we&apos;ll get you booked.
            </div>
          </form>
        </div>

        <div className="bside reveal">
          <div className="aside-card">
            <h4>Landing soon?</h4>
            <p>
              If your flight is already in the air or you&rsquo;ve just landed, calling is
              fastest — dispatch can see which vehicle is nearest the terminal.
            </p>
            <div style={{ display: 'flex', gap: 10, marginTop: 16, flexWrap: 'wrap' }}>
              <a href="tel:+17823777533" className="btn btn-dark btn-sm">
                Call Dispatch
              </a>
              <a href="https://wa.me/17823777533" rel="noopener" className="btn btn-wa btn-sm">
                WhatsApp
              </a>
            </div>
          </div>
          <div className="aside-card">
            <h4>Early departure?</h4>
            <p>
              Pre-book the night before for any flight leaving before 8am. Dispatch confirms your
              pickup time ahead of the morning so nothing is left to chance.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
