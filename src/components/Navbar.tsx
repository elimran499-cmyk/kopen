import React, { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';
import { CONTACT, NAV_LINKS } from '../data/iptvData';
import { Logo, WhatsAppGlyph } from './ui';

interface NavbarProps {
  onOpenOrderModal: (planId?: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenOrderModal }) => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 bg-white transition-shadow ${
        scrolled ? 'shadow-[0_2px_18px_-6px_rgba(10,46,102,0.25)]' : ''
      }`}
    >
      <nav className="mx-auto flex h-20 max-w-[1400px] items-center justify-between gap-4 px-5 lg:px-10">
        <Logo />

        <ul className="hidden items-center gap-7 xl:flex">
          {NAV_LINKS.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                className="text-[15px] font-semibold text-navy transition-colors hover:text-orange"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={() => onOpenOrderModal('plan-12m')}
            className="hidden rounded-lg bg-blue-cta px-7 py-3 text-[15px] font-bold text-white shadow-card transition-colors hover:bg-navy sm:block"
          >
            Bestellen
          </button>
          <button
            type="button"
            aria-label={open ? 'Menu sluiten' : 'Menu openen'}
            aria-expanded={open}
            aria-controls="mobile-menu"
            onClick={() => setOpen((v) => !v)}
            className="rounded-lg p-2 text-navy xl:hidden"
          >
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </nav>

      {open && (
        <div
          id="mobile-menu"
          className="animate-fadeIn border-t border-slate-100 bg-white px-5 pb-6 shadow-[0_18px_28px_-18px_rgba(10,46,102,0.35)] xl:hidden"
        >
          <ul className="flex flex-col">
            {NAV_LINKS.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="block border-b border-slate-100 py-4 text-[17px] font-bold text-navy transition-colors hover:text-orange"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <button
            type="button"
            onClick={() => {
              setOpen(false);
              onOpenOrderModal('plan-12m');
            }}
            className="mt-5 w-full rounded-xl bg-blue-cta px-6 py-4 text-[16px] font-bold text-white shadow-card"
          >
            Bestellen
          </button>
          <a
            href={CONTACT.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setOpen(false)}
            className="mt-3 flex w-full items-center justify-center gap-2.5 rounded-xl bg-wa px-6 py-4 text-[16px] font-bold text-white shadow-card"
          >
            <WhatsAppGlyph className="h-5 w-5" /> WhatsApp
          </a>
        </div>
      )}
    </header>
  );
};
