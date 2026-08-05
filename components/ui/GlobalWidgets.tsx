import { WhatsAppIcon } from '@/components/ui/Icon';

export function GlobalWidgets() {
  return (
    <>
      <a
        className="wa-float"
        href="https://wa.me/17823777533"
        rel="noopener"
        aria-label="Message us on WhatsApp"
      >
        <WhatsAppIcon />
      </a>

      <div className="dockbar">
        <div className="dock-info">
          <span className="dock-k">Dispatch 24/7</span>
          <span className="dock-v">+1 (782) 377-7533</span>
        </div>
        <div className="dock-actions">
          <a href="sms:+17823777533" className="dock-alt">
            Text
          </a>
          <a href="tel:+17823777533" className="dock-go">
            Call now
          </a>
        </div>
      </div>
    </>
  );
}
