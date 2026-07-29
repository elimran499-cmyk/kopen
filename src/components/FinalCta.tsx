import React from 'react';
import { ArrowRight } from 'lucide-react';
import { CONTACT } from '../data/iptvData';
import { WhatsAppGlyph } from './ui';

export const FinalCta: React.FC = () => (
  <section
    id="final-cta"
    className="py-20"
    style={{ background: 'linear-gradient(135deg, #0a2e66 0%, #1c3b6e 55%, #2b4a86 100%)' }}
  >
    <div className="mx-auto max-w-[1180px] px-5 text-center">
      <h2 className="text-3xl font-extrabold leading-tight text-white sm:text-4xl lg:text-[42px]">
        Krijg toegang tot <span className="text-orange">IPTV Koning</span>
        <br />
        in HD / 4K kwaliteit vanaf vandaag
      </h2>

      <p className="mt-6 text-[15px] font-bold text-white/90">
        WhatsApp support &amp; directe activering:
      </p>

      <div className="mt-8 flex flex-col items-center gap-5">
        <a
          href="#pricing"
          className="inline-flex w-full max-w-[300px] items-center justify-center gap-2.5 rounded-xl bg-gradient-to-r from-orange to-orange-soft px-8 py-4 text-[15px] font-bold text-white shadow-card transition-transform hover:-translate-y-0.5"
        >
          <span aria-hidden="true">⚡</span> Bekijk prijzen <ArrowRight className="h-4 w-4" />
        </a>
        <a
          href={CONTACT.whatsapp}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex w-full max-w-[320px] items-center justify-center gap-2.5 rounded-xl bg-gradient-to-r from-emerald-400 to-green-400 px-8 py-4 text-[15px] font-bold text-white shadow-card transition-transform hover:-translate-y-0.5"
        >
          <WhatsAppGlyph /> WhatsApp contact <ArrowRight className="h-4 w-4" />
        </a>
      </div>
    </div>
  </section>
);
