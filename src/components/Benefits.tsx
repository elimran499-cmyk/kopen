import React from 'react';
import { ArrowRight, Flag, Lock, Star, Zap } from 'lucide-react';
import { BENEFITS } from '../data/iptvData';
import { NavyPill, SectionHeading, WhatsAppGlyph } from './ui';

const PILLS = [
  { label: 'Veilige betaling', icon: <Lock className="h-3.5 w-3.5" /> },
  { label: 'Activering 5–15 min', icon: <Zap className="h-3.5 w-3.5" /> },
  { label: 'HD/4K Kwaliteit', icon: <Star className="h-3.5 w-3.5" /> },
  { label: 'WhatsApp 24/7', icon: <WhatsAppGlyph className="h-3.5 w-3.5" /> },
  { label: 'Focus op Nederland', icon: <Flag className="h-3.5 w-3.5" /> },
];

export const Benefits: React.FC = () => (
  <section id="voordelen" className="bg-white py-20">
    <div className="mx-auto max-w-[1180px] px-5">
      <SectionHeading
        sub={
          <>
            Met ons{' '}
            <a href="#pricing" className="font-bold text-navy underline">
              IPTV Abonnement
            </a>{' '}
            speciaal voor <strong className="font-bold">IPTV Nederland</strong>, geniet je van{' '}
            <strong className="font-bold">premium IPTV</strong> dat{' '}
            <strong className="font-bold">stabiel en onbeperkt</strong> is: kwaliteit in{' '}
            <strong className="font-bold">HD/4K</strong>, enorme VOD-collectie, live sport en{' '}
            <strong className="font-bold">24/7</strong> ondersteuning. Compatibel met Smart TV,
            Android, iOS, Box &amp; PC — zonder verplichtingen.
          </>
        }
      >
        IPTV Abonnement — voordelen van de beste IPTV in Nederland
      </SectionHeading>

      <div className="mt-9 flex flex-wrap justify-center gap-3">
        {PILLS.map((pill) => (
          <NavyPill key={pill.label} icon={pill.icon}>
            {pill.label}
          </NavyPill>
        ))}
      </div>

      <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {BENEFITS.map((card) => (
          <article
            key={card.id}
            className="card-lift rounded-2xl bg-navy px-6 py-6 text-white shadow-card"
          >
            <h3 className="flex items-start gap-2.5 text-[17px] font-extrabold leading-snug">
              <span aria-hidden="true">✅</span>
              {card.title}
            </h3>
            <p className="mt-3 text-[14px] leading-relaxed text-white/85">{card.body}</p>
          </article>
        ))}
      </div>

      <div className="mt-12 text-center">
        <a
          href="#pricing"
          className="inline-flex items-center gap-3 rounded-xl bg-gradient-to-r from-navy to-blue-cta px-8 py-4 text-[15px] font-bold text-white shadow-card transition-transform hover:-translate-y-0.5"
        >
          <span aria-hidden="true">🚀</span>
          Vandaag beginnen — bekijk tarieven
          <ArrowRight className="h-4 w-4" />
        </a>
      </div>
    </div>
  </section>
);
