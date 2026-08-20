'use client';

import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { PhoneIcon, SmsIcon, WhatsAppIcon } from '@/components/ui/Icon';

// Real routes get aria-current highlighting; homepage-section anchors (below)
// don't represent a single distinct "current page" so they're left unmarked.
const PAGE_LINKS: { href: string; label: string }[] = [
  { href: '/airport-transfer', label: 'Airport' },
  { href: '/cruise-ferry-transportation', label: 'Cruise/Ferry' },
  { href: '/corporate-transportation', label: 'Corporate' },
];

const ANCHOR_LINKS: { href: string; label: string }[] = [
  { href: '/#services', label: 'Services' },
  { href: '/#pricing', label: 'Fares' },
  { href: '/#fleet', label: 'Fleet' },
  { href: '/#coverage', label: 'Coverage' },
  { href: '/#faq', label: 'FAQ' },
];

// Each of these pages has its own #book (or #request) section — link there directly
// so "Book Now" scrolls in place instead of leaving the page. Anywhere else (legal
// pages, etc.) it sends the visitor to the homepage's booking section.
const LOCAL_BOOK_HASH: Record<string, string> = {
  '/': '#book',
  '/airport-transfer': '#book',
  '/cruise-ferry-transportation': '#book',
  '/corporate-transportation': '#request',
};

export function Header() {
  const rawPathname = usePathname();
  // next.config.ts sets trailingSlash: true, so usePathname() returns e.g.
  // "/airport-transfer/" — normalize before comparing against the plain-path keys below.
  const pathname = rawPathname !== '/' ? rawPathname.replace(/\/$/, '') : rawPathname;
  const bookHref = LOCAL_BOOK_HASH[pathname] ?? '/#book';

  return (
    <header className="main">
      <div className="wrap">
        <Link className="logo" href="/" aria-label="Charlottetown Taxi home">
          <Image src="/images/logo-mark.png" alt="" width={38} height={52} priority />
          <span className="lw">
            Charlottetown<span>Taxi</span>
          </span>
        </Link>
        <nav className="primary" aria-label="Primary">
          <ul>
            {PAGE_LINKS.map((link) => (
              <li key={link.href}>
                <Link href={link.href} aria-current={pathname === link.href ? 'page' : undefined}>
                  {link.label}
                </Link>
              </li>
            ))}
            {ANCHOR_LINKS.map((link) => (
              <li key={link.href}>
                <Link href={link.href}>{link.label}</Link>
              </li>
            ))}
          </ul>
        </nav>
        <div className="head-actions">
          <a
            className="hicon"
            href="tel:+17823777533"
            aria-label="Call Charlottetown Taxi on +1 782 377 7533"
            title="Call"
          >
            <PhoneIcon />
          </a>
          <a
            className="hicon"
            href="sms:+17823777533"
            aria-label="Text Charlottetown Taxi on +1 782 377 7533"
            title="Text"
          >
            <SmsIcon />
          </a>
          <a
            className="hicon hicon-wa"
            href="https://wa.me/17823777533"
            rel="noopener"
            aria-label="Message Charlottetown Taxi on WhatsApp"
            title="WhatsApp"
          >
            <WhatsAppIcon />
          </a>
          <a href={bookHref} className="btn btn-brass btn-sm">
            Book Now
          </a>
        </div>
      </div>
    </header>
  );
}
