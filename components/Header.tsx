import Image from 'next/image';
import Link from 'next/link';
import { PhoneIcon, SmsIcon, WhatsAppIcon } from '@/components/ui/Icon';

export function Header() {
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
            <li>
              <Link href="/taxi-service/">Taxi</Link>
            </li>
            <li>
              <Link href="/airport-transfer/">Airport</Link>
            </li>
            <li>
              <Link href="/cruise-transfers/">Cruise</Link>
            </li>
            <li>
              <Link href="/golf-transportation/">Golf</Link>
            </li>
            <li>
              <Link href="/island-tours/">Tours</Link>
            </li>
            <li>
              <a href="#coverage">Coverage</a>
            </li>
            <li>
              <a href="#faq">FAQ</a>
            </li>
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
          <a href="#book" className="btn btn-brass btn-sm">
            Book Now
          </a>
        </div>
      </div>
    </header>
  );
}
