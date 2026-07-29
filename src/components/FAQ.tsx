import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { CONTACT, FAQ_ITEMS } from '../data/iptvData';
import { Check, WhatsAppGlyph } from './ui';

export const FAQ: React.FC = () => {
  const [openId, setOpenId] = useState<string | null>(null);

  return (
    <section id="faq" className="bg-mist py-20">
      <div className="mx-auto max-w-[1180px] px-5">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold leading-tight sm:text-4xl lg:text-[42px]">
            <span className="text-navy underline decoration-2 underline-offset-4">FAQ</span>{' '}
            <span className="text-navy">—</span> <span className="text-orange">IPTV Abonnement</span>{' '}
            <span className="text-navy">(IPTV Nederland)</span>
          </h2>
          <p className="mx-auto mt-5 max-w-3xl text-[15px] text-ink">
            Alles over activering, installatie, compatibiliteit en support van onze{' '}
            <strong className="font-bold">premium IPTV</strong>.
          </p>
        </div>

        <div className="mt-10 grid gap-6 lg:grid-cols-[1fr_400px]">
          {/* Accordion */}
          <div className="space-y-3">
            {FAQ_ITEMS.map((item) => {
              const isOpen = openId === item.id;
              return (
                <div
                  key={item.id}
                  className="overflow-hidden rounded-xl bg-white shadow-soft transition-shadow"
                >
                  <button
                    type="button"
                    aria-expanded={isOpen}
                    onClick={() => setOpenId(isOpen ? null : item.id)}
                    className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left"
                  >
                    <span className="text-[15px] font-bold text-navy">{item.question}</span>
                    <ChevronDown
                      className={`h-5 w-5 shrink-0 text-navy transition-transform ${
                        isOpen ? 'rotate-180' : ''
                      }`}
                    />
                  </button>
                  {isOpen && (
                    <p className="animate-fadeIn border-t border-slate-100 px-5 py-4 text-[14px] leading-relaxed text-ink">
                      {item.answer}
                    </p>
                  )}
                </div>
              );
            })}
          </div>

          {/* Support sidebar */}
          <aside className="h-fit rounded-2xl bg-navy px-6 py-7 text-white shadow-card">
            <h3 className="text-xl font-extrabold">Direct hulp nodig?</h3>
            <p className="mt-3 text-[14px] leading-relaxed text-white/85">
              Neem contact op via WhatsApp voor snelle hulp en persoonlijke support.
            </p>

            <a
              href={CONTACT.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-5 flex items-center justify-center gap-2.5 rounded-xl bg-gradient-to-r from-emerald-400 to-green-400 px-6 py-3.5 text-[15px] font-bold text-white transition-transform hover:-translate-y-0.5"
            >
              <WhatsAppGlyph /> WhatsApp • Direct contact
            </a>

            <ul className="mt-5 space-y-2.5 text-[13.5px] font-semibold">
              {[
                'Directe activering (Geen wachttijd)',
                'HD/4K stabiel & onbeperkt',
                'Installatiehulp inbegrepen',
              ].map((line) => (
                <li key={line} className="flex items-start gap-2.5">
                  <Check className="text-amber-300" />
                  {line}
                </li>
              ))}
            </ul>

            <p className="mt-5 text-center text-[12px] text-white/70">
              Of mail ons op{' '}
              <a href={`mailto:${CONTACT.email}`} className="font-semibold text-white underline">
                {CONTACT.email}
              </a>
            </p>
          </aside>
        </div>
      </div>
    </section>
  );
};
