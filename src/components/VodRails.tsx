import React from 'react';
import { Film, Smartphone, Zap } from 'lucide-react';
import { VOD_CARDS } from '../data/iptvData';
import { Pill, SectionHeading } from './ui';

const ICONS = [
  <Film key="film" className="h-4 w-4" />,
  <Zap key="zap" className="h-4 w-4" />,
  <Smartphone key="phone" className="h-4 w-4" />,
];

export const VodRails: React.FC = () => (
  <section id="vod" className="bg-mist py-20">
    <div className="mx-auto max-w-[1180px] px-5">
      <SectionHeading>VOD in HD/4K — IPTV Abonnement (IPTV Nederland)</SectionHeading>

      <div className="mt-10 rounded-2xl border border-slate-200/80 bg-white p-6 shadow-soft sm:p-8">
        <div className="grid gap-5 md:grid-cols-3">
          {VOD_CARDS.map((card, i) => (
            <article
              key={card.id}
              className="rounded-xl border border-slate-200/70 bg-white px-5 py-6 shadow-soft"
            >
              <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-navy text-white">
                {ICONS[i]}
              </span>
              <h3 className="mt-4 text-[16px] font-extrabold text-navy">{card.title}</h3>
              <p className="mt-2 text-[14px] leading-relaxed text-ink">{card.body}</p>
            </article>
          ))}
        </div>

        <div className="mt-7 flex flex-wrap justify-center gap-3 border-t border-slate-100 pt-6">
          <Pill dot="#ff6b00">Eenvoudige toegang</Pill>
          <Pill dot="#ff6b00">Nederlandse support</Pill>
          <Pill dot="#ff6b00">Begeleide start</Pill>
        </div>
      </div>
    </div>
  </section>
);
