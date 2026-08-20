export function PhoneIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M6.6 10.8a15.1 15.1 0 006.6 6.6l2.2-2.2a1 1 0 011-.24 11.4 11.4 0 003.6.58 1 1 0 011 1V20a1 1 0 01-1 1A17 17 0 013 4a1 1 0 011-1h3.5a1 1 0 011 1 11.4 11.4 0 00.57 3.6 1 1 0 01-.25 1z" />
    </svg>
  );
}

export function SmsIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M20 2H4a2 2 0 00-2 2v18l4-4h14a2 2 0 002-2V4a2 2 0 00-2-2zM7 9h10v2H7zm0-4h10v2H7zm0 8h7v2H7z" />
    </svg>
  );
}

export function WhatsAppIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M12 2a10 10 0 00-8.6 15L2 22l5.2-1.4A10 10 0 1012 2zm5.8 14.2c-.2.7-1.2 1.3-1.9 1.4-.5.1-1.1.1-3.5-.8-2.9-1.2-4.8-4.2-5-4.4-.1-.2-1.1-1.5-1.1-2.9 0-1.3.7-2 1-2.3.2-.3.6-.4.8-.4h.6c.2 0 .4 0 .6.5l.9 2c.1.2.1.4 0 .5l-.3.5-.4.4c-.1.1-.3.3-.1.6.2.3.7 1.2 1.6 2 1.1 1 2 1.3 2.3 1.4.3.1.5.1.6 0l.8-1c.2-.2.4-.2.6-.1l2 .9c.2.1.4.2.4.3s0 .7-.2 1.4z" />
    </svg>
  );
}

export function ChevronDownIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.3} aria-hidden="true">
      <path d="M12 4v15M6 13.5l6 6 6-6" />
    </svg>
  );
}

export function MenuIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.4} aria-hidden="true">
      <path d="M4 7h16M4 12h16M4 17h16" strokeLinecap="round" />
    </svg>
  );
}

export function CloseIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.4} aria-hidden="true">
      <path d="M6 6l12 12M18 6L6 18" strokeLinecap="round" />
    </svg>
  );
}

export function VisaLogo() {
  return (
    <svg viewBox="0 0 48 16" aria-hidden="true">
      <text x="0" y="13" fontFamily="Arial, Helvetica, sans-serif" fontWeight={900} fontStyle="italic" fontSize={16} fill="#1A1F71" letterSpacing="-.5">
        VISA
      </text>
    </svg>
  );
}

export function MastercardLogo() {
  return (
    <svg viewBox="0 0 40 24" aria-hidden="true">
      <circle cx="15" cy="12" r="12" fill="#EB001B" />
      <circle cx="25" cy="12" r="12" fill="#F79E1B" />
      <path d="M20 2.6a12 12 0 010 18.8 12 12 0 010-18.8z" fill="#FF5F00" />
    </svg>
  );
}

export function GooglePayLogo() {
  return (
    <svg viewBox="0 0 84 24" aria-hidden="true">
      <text
        x="0"
        y="17"
        fontFamily="Arial, Helvetica, sans-serif"
        fontSize={16}
        textLength="52"
        lengthAdjust="spacingAndGlyphs"
      >
        <tspan fill="#4285F4">G</tspan>
        <tspan fill="#EA4335">o</tspan>
        <tspan fill="#FBBC05">o</tspan>
        <tspan fill="#4285F4">g</tspan>
        <tspan fill="#34A853">l</tspan>
        <tspan fill="#EA4335">e</tspan>
      </text>
      <text
        x="58"
        y="17"
        fontFamily="Arial, Helvetica, sans-serif"
        fontWeight={500}
        fontSize={16}
        fill="#5F6368"
        textLength="26"
        lengthAdjust="spacingAndGlyphs"
      >
        Pay
      </text>
    </svg>
  );
}
