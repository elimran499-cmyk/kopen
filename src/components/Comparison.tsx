import React from 'react';
import {
  Euro,
  Headphones,
  Infinity as InfinityIcon,
  List,
  Monitor,
  RefreshCw,
  Smartphone,
  Star,
  Trophy,
  Zap,
} from 'lucide-react';
import { COMPARISON_ROWS, WHY_CARDS } from '../data/iptvData';
import { Check, Cross, TriRule, WhatsAppGlyph } from './ui';

const ROW_ICONS: Record<string, React.ReactNode> = {
  zap: <Zap className="h-4 w-4" />,
  monitor: <Monitor className="h-4 w-4" />,
  smartphone: <Smartphone className="h-4 w-4" />,
  list: <List className="h-4 w-4" />,
  football: <Trophy className="h-4 w-4" />,
  whatsapp: <WhatsAppGlyph className="h-4 w-4" />,
  euro: <Euro className="h-4 w-4" />,
  refresh: <RefreshCw className="h-4 w-4" />,
};

const WHY_ICONS = [
  <InfinityIcon key="i" className="h-5 w-5" />,
  <Star key="s" className="h-5 w-5" />,
  <Headphones key="h" className="h-5 w-5" />,
];

export const Comparison: React.FC = () => (
  <section id="waarom" className="bg-mist py-20">
    <div className="mx-auto max-w-[1180px] px-5">
      <div className="text-center">
        <h2 className="text-3xl font-extrabold leading-tight sm:text-4xl lg:text-[42px]">
          <span className="text-orange">IPTV Koning</span>{' '}
          <span className="text-navy">— waarom ons kiezen?</span>
        </h2>
        <TriRule />
      </div>

      <div className="mt-8 overflow-hidden rounded-2xl bg-white shadow-soft">
        <div className="overflow-x-auto">
          <table className="w-full min-w-[640px] border-collapse text-left">
            <thead>
              <tr className="border-b border-slate-200">
                <th className="px-6 py-5 text-[15px] font-bold text-navy">Belangrijke criteria</th>
                <th className="border-b-[3px] border-orange bg-tint px-6 py-5 text-center text-[15px] font-bold text-navy">
                  IPTV Koning (IPTV Nederland)
                </th>
                <th className="px-6 py-5 text-center text-[15px] font-bold text-navy">
                  Andere aanbieders
                </th>
              </tr>
            </thead>
            <tbody>
              {COMPARISON_ROWS.map((row) => (
                <tr key={row.id} className="border-b border-slate-100 last:border-0">
                  <td className="px-6 py-4">
                    <span className="flex items-center gap-3">
                      <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-tint text-navy">
                        {ROW_ICONS[row.iconName]}
                      </span>
                      <span className="text-[14.5px] font-bold text-navy">{row.criterion}</span>
                    </span>
                  </td>
                  <td className="px-6 py-4 text-center">
                    <span className="inline-flex justify-center">
                      <Check className="text-navy" />
                    </span>
                  </td>
                  <td className="px-6 py-4 text-center">
                    <span className="inline-flex justify-center">
                      <Cross />
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className="mt-8 grid gap-5 md:grid-cols-3">
        {WHY_CARDS.map((card, i) => (
          <article
            key={card.id}
            className="card-lift rounded-2xl bg-white px-6 py-8 text-center shadow-soft"
          >
            <span className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-tint text-navy">
              {WHY_ICONS[i]}
            </span>
            <h3 className="mt-4 text-[17px] font-extrabold text-navy">{card.title}</h3>
            <p className="mt-2 text-[14px] leading-relaxed text-ink">{card.body}</p>
          </article>
        ))}
      </div>
    </div>
  </section>
);
