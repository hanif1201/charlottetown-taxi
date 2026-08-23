'use client';

import { useEffect, useRef, useState } from 'react';
import { usePathname } from 'next/navigation';
import { useBooking } from '@/components/booking/BookingProvider';
import { ServiceKey } from '@/lib/services';

const FAB_SERVICES: [string, ServiceKey][] = [
  ['Taxi Service', 'taxi'],
  ['Airport Transfer (YYG)', 'airport'],
  ['Cruise / Ferry Transfer', 'cruise'],
  ['Golf Transportation', 'golf'],
  ['Island Tour', 'tour'],
  ['Corporate Transportation', 'corporate'],
  ['Wedding Transportation', 'wedding'],
  ['Hourly Chauffeur', 'hourly'],
  ['Long Distance', 'long'],
  ['Non-Emergency Appointment', 'medical'],
];

export function FabBooking() {
  const { dispatch } = useBooking();
  // Lives in the root layout, which doesn't remount on client-side navigation —
  // re-run on every route change so the FAB tracks the new page's own hero
  // instead of an IntersectionObserver still watching the previous page's
  // (by then detached) .hero-cine node.
  const pathname = usePathname();
  const [armed, setArmed] = useState(false);
  const [open, setOpen] = useState(false);
  const [service, setService] = useState(FAB_SERVICES[0][0]);
  const [pickup, setPickup] = useState('');
  const [drop, setDrop] = useState('');
  const [when, setWhen] = useState('');
  const [phone, setPhone] = useState('');
  const panelRef = useRef<HTMLDivElement>(null);
  const btnRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const hero = document.querySelector('.hero-cine');
    if (!hero || !('IntersectionObserver' in window)) {
      // No observer support: skip the scroll-based reveal and show the FAB immediately.
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setArmed(true);
      return;
    }
    const io = new IntersectionObserver(([entry]) => setArmed(!entry.isIntersecting), { threshold: 0.12 });
    io.observe(hero);
    return () => io.disconnect();
  }, [pathname]);

  useEffect(() => {
    if (!open) return;
    function onKey(e: KeyboardEvent) {
      if (e.key === 'Escape') setOpen(false);
    }
    document.addEventListener('keydown', onKey);
    panelRef.current?.querySelector<HTMLElement>('select,input')?.focus();
    return () => document.removeEventListener('keydown', onKey);
  }, [open]);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const key = FAB_SERVICES.find(([label]) => label === service)?.[1] ?? 'taxi';
    dispatch({ type: 'SET_SVC', svc: key });
    const values: Record<string, string> = {};
    if (pickup) values.pickup = pickup;
    if (drop) values.dropoff = drop;
    if (when) values.when = when;
    if (phone) values.phone = phone;
    dispatch({ type: 'SET_FIELDS', values });
    setOpen(false);
    document.getElementById('book')?.scrollIntoView({
      behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth',
    });
    setTimeout(() => document.getElementById('name')?.focus(), 600);
  }

  return (
    <>
      <button
        type="button"
        className={`fab${armed ? ' armed' : ''}`}
        aria-expanded={open}
        aria-controls="fabPanel"
        ref={btnRef}
        onClick={() => setOpen(true)}
      >
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.4} aria-hidden="true">
          <rect x={3} y={4.5} width={18} height={16} rx={2} />
          <path d="M3 9.5h18M8 2.5v4M16 2.5v4" />
          <path d="M9 14l2 2 4-4" />
        </svg>
        <span>Quick book</span>
      </button>

      <div
        className="fab-panel"
        id="fabPanel"
        role="dialog"
        aria-modal="false"
        aria-labelledby="fabTitle"
        hidden={!open}
        ref={panelRef}
      >
        <div className="fab-head">
          <div>
            <p className="fab-eb">Fast reservation</p>
            <h2 id="fabTitle">Quick book</h2>
          </div>
          <button
            type="button"
            className="fab-x"
            aria-label="Close quick booking"
            onClick={() => {
              setOpen(false);
              btnRef.current?.focus();
            }}
          >
            &times;
          </button>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="field">
            <label htmlFor="f-service">Service</label>
            <select id="f-service" value={service} onChange={(e) => setService(e.target.value)}>
              {FAB_SERVICES.map(([label]) => (
                <option key={label}>{label}</option>
              ))}
            </select>
          </div>
          <div className="field">
            <label htmlFor="f-pickup">Pickup</label>
            <input
              type="text"
              id="f-pickup"
              placeholder="Address or landmark"
              value={pickup}
              onChange={(e) => setPickup(e.target.value)}
            />
          </div>
          <div className="field">
            <label htmlFor="f-drop">Drop-off</label>
            <input type="text" id="f-drop" placeholder="Where to?" value={drop} onChange={(e) => setDrop(e.target.value)} />
          </div>
          <div className="frow">
            <div className="field">
              <label htmlFor="f-when">When</label>
              <input type="datetime-local" id="f-when" value={when} onChange={(e) => setWhen(e.target.value)} />
            </div>
            <div className="field">
              <label htmlFor="f-phone">Phone</label>
              <input
                type="tel"
                id="f-phone"
                placeholder="For confirmation"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              />
            </div>
          </div>
          <button type="submit" className="btn btn-brass btn-block">
            Continue →
          </button>
        </form>
        <div className="fab-alt">
          <a href="tel:+17823777533">Call</a>
          <a href="sms:+17823777533">Text</a>
          <a href="https://wa.me/17823777533" rel="noopener">
            WhatsApp
          </a>
        </div>
      </div>
    </>
  );
}
