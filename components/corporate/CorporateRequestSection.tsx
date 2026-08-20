'use client';

import { useRef, useState } from 'react';

const emailRe = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
const phoneRe = /^[\d\s()+.\-]{7,}$/;

const REQUIRED_IDS = ['org', 'cname', 'cemail', 'ctype', 'cdetail'];

function isValid(id: string, value: string, required: boolean): boolean {
  const v = value.trim();
  if (required && !v) return false;
  if (!v) return true;
  if (id === 'cemail' && !emailRe.test(v)) return false;
  if (id === 'cphone' && !phoneRe.test(v)) return false;
  return true;
}

export function CorporateRequestSection() {
  const [fields, setFields] = useState<Record<string, string>>({});
  const [invalid, setInvalid] = useState<Set<string>>(new Set());
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const formRef = useRef<HTMLFormElement>(null);

  const val = (id: string) => fields[id] || '';
  const setField = (id: string, value: string) => setFields((prev) => ({ ...prev, [id]: value }));

  function blurCheck(id: string) {
    setInvalid((prev) => {
      const next = new Set(prev);
      if (isValid(id, val(id), REQUIRED_IDS.includes(id))) next.delete(id);
      else next.add(id);
      return next;
    });
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (val('website')) return; // honeypot

    const nextInvalid = new Set<string>();
    for (const id of REQUIRED_IDS) {
      if (!isValid(id, val(id), true)) nextInvalid.add(id);
    }
    if (val('cphone') && !isValid('cphone', val('cphone'), false)) nextInvalid.add('cphone');
    setInvalid(nextInvalid);
    if (nextInvalid.size) {
      const firstBad = [...REQUIRED_IDS, 'cphone'].find((id) => nextInvalid.has(id));
      if (firstBad) formRef.current?.querySelector<HTMLElement>(`#${firstBad}`)?.focus();
      return;
    }

    setStatus('submitting');
    try {
      const res = await fetch('/api/corporate-enquiry', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          org: val('org'),
          contactName: val('cname'),
          email: val('cemail'),
          phone: val('cphone'),
          type: val('ctype'),
          frequency: val('cfreq'),
          details: val('cdetail'),
          pageUrl: window.location.href,
          website: val('website'),
        }),
      });
      if (!res.ok) throw new Error('Request failed');
      setStatus('success');
    } catch {
      setStatus('error');
    }
  }

  // The "invalid" class must land on the .field wrapper, not the input — that's what
  // globals.css's `.field.invalid input` / `.field.invalid .err` selectors key off.
  const fieldWrapClass = (id: string) => `field${invalid.has(id) ? ' invalid' : ''}`;

  return (
    <section className="sec sec-tight dark" id="request" aria-labelledby="acctTitle">
      <div className="wrap">
        <div className="acct">
          <div className="acct-copy">
            <p className="eyebrow">Corporate accounts</p>
            <h2 id="acctTitle">
              Set up an <em>ongoing arrangement</em>
            </h2>
            <p>
              Organizations that book more than occasionally can put a transportation
              arrangement in place instead of handling each ride separately. Tell us what you
              expect to need and we will confirm what we can commit to, in writing, before the
              first trip.
            </p>
            <ul>
              <li>One-time bookings, recurring schedules or a standing account</li>
              <li>Consolidated billing rather than payment per ride</li>
              <li>Priority handling for booked corporate work</li>
              <li>Documentation for procurement and expense records</li>
            </ul>
          </div>

          <div className="acct-form">
            <h3>Discuss your transportation needs</h3>
            <p className="bsub">A short brief is enough to start. Fields marked * are required.</p>

            {status === 'success' ? (
              <div className="ok show" tabIndex={-1}>
                Request received. We will reply by email with what we can commit to and, where
                relevant, account and billing terms. For anything urgent, call +1 (782) 377-7533.
              </div>
            ) : (
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
                <div className="frow">
                  <div className={fieldWrapClass('org')}>
                    <label htmlFor="org">
                      Organization <span className="rq">*</span>
                    </label>
                    <input
                      type="text"
                      id="org"
                      placeholder="Company or institution"
                      value={val('org')}
                      onChange={(e) => setField('org', e.target.value)}
                      onBlur={() => blurCheck('org')}
                    />
                    <span className="err">Please enter your organization.</span>
                  </div>
                  <div className={fieldWrapClass('cname')}>
                    <label htmlFor="cname">
                      Contact name <span className="rq">*</span>
                    </label>
                    <input
                      type="text"
                      id="cname"
                      placeholder="Who we should reply to"
                      value={val('cname')}
                      onChange={(e) => setField('cname', e.target.value)}
                      onBlur={() => blurCheck('cname')}
                    />
                    <span className="err">Please enter a contact name.</span>
                  </div>
                </div>
                <div className="frow">
                  <div className={fieldWrapClass('cemail')}>
                    <label htmlFor="cemail">
                      Work email <span className="rq">*</span>
                    </label>
                    <input
                      type="email"
                      id="cemail"
                      placeholder="name@organization.ca"
                      value={val('cemail')}
                      onChange={(e) => setField('cemail', e.target.value)}
                      onBlur={() => blurCheck('cemail')}
                    />
                    <span className="err">Please check the email address.</span>
                  </div>
                  <div className={fieldWrapClass('cphone')}>
                    <label htmlFor="cphone">Phone</label>
                    <input
                      type="tel"
                      id="cphone"
                      placeholder="Optional"
                      value={val('cphone')}
                      onChange={(e) => setField('cphone', e.target.value)}
                      onBlur={() => blurCheck('cphone')}
                    />
                    <span className="err">Please check the phone number.</span>
                  </div>
                </div>
                <div className="frow">
                  <div className={fieldWrapClass('ctype')}>
                    <label htmlFor="ctype">
                      Transportation type <span className="rq">*</span>
                    </label>
                    <select
                      id="ctype"
                      value={val('ctype')}
                      onChange={(e) => setField('ctype', e.target.value)}
                      onBlur={() => blurCheck('ctype')}
                    >
                      <option value="">Select</option>
                      <option>Executive or client transport</option>
                      <option>Airport transportation for staff or guests</option>
                      <option>Conference or convention movement</option>
                      <option>Employee or recurring scheduled transport</option>
                      <option>Group or multi-vehicle movement</option>
                      <option>Corporate account enquiry</option>
                    </select>
                    <span className="err">Please choose a transportation type.</span>
                  </div>
                  <div className="field">
                    <label htmlFor="cfreq">Frequency</label>
                    <select id="cfreq" value={val('cfreq')} onChange={(e) => setField('cfreq', e.target.value)}>
                      <option>One-time</option>
                      <option>Occasional</option>
                      <option>Recurring / scheduled</option>
                      <option>Not sure yet</option>
                    </select>
                  </div>
                </div>
                <div className={fieldWrapClass('cdetail')}>
                  <label htmlFor="cdetail">
                    Brief details <span className="rq">*</span>
                  </label>
                  <textarea
                    id="cdetail"
                    rows={3}
                    placeholder="Dates, passenger numbers, pickup and destination points, and anything time-critical"
                    value={val('cdetail')}
                    onChange={(e) => setField('cdetail', e.target.value)}
                    onBlur={() => blurCheck('cdetail')}
                  />
                  <span className="err">Please add a few details so we can respond usefully.</span>
                </div>
                {status === 'error' && (
                  <div className="ok error show" role="status">
                    Something went wrong sending your request. Please call dispatch directly at{' '}
                    <a href="tel:+17823777533">+1 (782) 377-7533</a> or email{' '}
                    <a href="mailto:info@charlottetowntaxi.ca">info@charlottetowntaxi.ca</a>.
                  </div>
                )}
                <button type="submit" className="btn btn-brass btn-block" disabled={status === 'submitting'}>
                  {status === 'submitting' ? 'Sending…' : 'Send request'}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
