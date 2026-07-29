import React from 'react';
import { Clock, Link2, Lock, ShieldCheck, Star, Zap } from 'lucide-react';
import { CONTACT, FOOTER_PAGES, PAYMENT_ICONS, PAYMENT_ICONS_ALT } from '../data/iptvData';
import { Logo, WhatsAppGlyph } from './ui';

const LEGAL = ['Privacy', 'Terugbetaling', 'Voorwaarden', 'Disclaimer'];

export const Footer: React.FC = () => (
  <footer className="bg-mist">
    <div className="mx-auto max-w-[1400px] px-5 py-14 lg:px-10">
      <div className="grid gap-10 lg:grid-cols-[1.4fr_1fr_1fr_1.1fr]">
        {/* Brand */}
        <div>
          <h3 className="text-[13px] font-extrabold tracking-[0.12em] text-navy">IPTV KONING</h3>
          <p className="mt-4 text-[14px] leading-relaxed text-navy">
            Ontdek het ultieme <strong className="font-bold">IPTV Abonnement</strong> voor{' '}
            <strong className="font-bold">IPTV Nederland</strong>: duizenden zenders, films, series
            en live sport in <strong className="font-bold">HD/4K kwaliteit</strong>. De{' '}
            <strong className="font-bold">beste IPTV</strong> — zonder verplichtingen.
          </p>
          <div className="mt-5 flex flex-wrap gap-2">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-white px-3 py-1.5 text-[12px] font-semibold text-navy shadow-soft">
              <ShieldCheck className="h-3.5 w-3.5 text-orange" /> Stabiel
            </span>
            <span className="inline-flex items-center gap-1.5 rounded-full bg-white px-3 py-1.5 text-[12px] font-semibold text-navy shadow-soft">
              <Zap className="h-3.5 w-3.5 text-orange" /> Snel
            </span>
            <span className="inline-flex items-center gap-1.5 rounded-full bg-white px-3 py-1.5 text-[12px] font-semibold text-navy shadow-soft">
              <WhatsAppGlyph className="h-3.5 w-3.5" /> 24/7 Support
            </span>
          </div>
        </div>

        {/* Pages */}
        <div>
          <h3 className="text-[13px] font-extrabold tracking-[0.12em] text-navy">PAGINA'S</h3>
          <ul className="mt-4 space-y-3">
            {FOOTER_PAGES.map((page) => (
              <li key={page}>
                <a
                  href="#top"
                  className="text-[14px] font-semibold text-navy transition-colors hover:text-orange"
                >
                  {page}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-[13px] font-extrabold tracking-[0.12em] text-navy">CONTACT</h3>
          <ul className="mt-4 space-y-3 text-[14px]">
            <li className="flex items-center gap-2.5">
              <WhatsAppGlyph className="h-4 w-4 text-navy/60" />
              <a href={CONTACT.whatsapp} className="font-bold text-navy hover:text-orange">
                {CONTACT.phone}
              </a>
            </li>
            <li className="flex items-center gap-2.5 text-muted">
              <Clock className="h-4 w-4" /> Support 7/7 beschikbaar
            </li>
            <li className="flex items-center gap-2.5 text-muted">
              <Zap className="h-4 w-4" /> Activering in 5–15 min
            </li>
          </ul>
        </div>

        {/* Secure payment card */}
        <div className="h-fit rounded-2xl border border-slate-200/80 bg-white px-5 py-5 shadow-soft">
          <p className="flex items-center justify-center gap-2 text-[14px] font-bold text-navy">
            <Lock className="h-4 w-4" /> Veilig betalen
          </p>
          <div className="mt-4 flex justify-center">
            <img
              src={PAYMENT_ICONS}
              alt={PAYMENT_ICONS_ALT}
              loading="lazy"
              decoding="async"
              className="h-[28px] w-auto max-w-full object-contain"
            />
          </div>
          <p className="mt-4 text-center text-[12px] font-semibold leading-relaxed text-navy">
            Beveiligde betaling via iDEAL, Visa, Mastercard, PayPal &amp; Bancontact
          </p>
        </div>
      </div>

      {/* Partner links */}
      <div className="mt-12 border-t border-slate-200 pt-8">
        <div className="flex items-center gap-4">
          <h3 className="text-lg font-extrabold text-navy">Sites Web partenaires</h3>
          <span className="h-[3px] w-16 rounded-full bg-orange" />
        </div>
        <a
          href="#top"
          className="mt-4 inline-flex items-center gap-2.5 text-[14px] font-semibold text-navy hover:text-orange"
        >
          <Link2 className="h-4 w-4 text-muted" /> Abonnement IPTV
        </a>
      </div>

      {/* Trust chips */}
      <div className="mt-8 flex flex-wrap justify-center gap-3 border-t border-slate-200 pt-8">
        <span className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2.5 text-[13px] font-semibold text-navy shadow-soft">
          <ShieldCheck className="h-4 w-4" /> SSL Beveiligd
        </span>
        <span className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2.5 text-[13px] font-semibold text-navy shadow-soft">
          <Star className="h-4 w-4" /> 4.9/5 Beoordeling
        </span>
        <span className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2.5 text-[13px] font-semibold text-navy shadow-soft">
          <span aria-hidden="true">🇳🇱</span> Nederlandse Service
        </span>
      </div>

      {/* Bottom bar */}
      <div className="mt-8 flex flex-col items-center gap-6 border-t border-slate-200 pt-8 lg:flex-row lg:justify-between">
        <p className="text-[13px] text-ink">
          © 2026 IPTV Koning — Premium IPTV Nederland. Alle rechten voorbehouden.
        </p>
        <Logo />
        <ul className="flex flex-wrap items-center justify-center gap-x-4 gap-y-2">
          {LEGAL.map((item) => (
            <li key={item}>
              <a
                href="#top"
                className="text-[13px] font-semibold text-navy transition-colors hover:text-orange"
              >
                {item}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  </footer>
);
