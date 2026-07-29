import React from 'react';
import { CONTACT, HERO_IMAGES, HERO_SLIDE_SECONDS } from '../data/iptvData';
import { WhatsAppGlyph } from './ui';

interface HeroProps {
  onOpenOrderModal: (planId?: string) => void;
}

const CYCLE = HERO_IMAGES.length * HERO_SLIDE_SECONDS;

export const Hero: React.FC<HeroProps> = ({ onOpenOrderModal }) => {
  return (
    <section id="top" className="relative overflow-hidden">
      {/* Gradient sits underneath so the hero never flashes white while a photo loads. */}
      <div
        className="absolute inset-0"
        style={{
          background:
            'radial-gradient(120% 90% at 15% 20%, #1f2a3d 0%, #131a28 45%, #0b0f18 100%)',
        }}
      />

      {/* Crossfading photo stack, driven by the heroFade keyframes. Negative
          delays stagger the layers so each holds for HERO_SLIDE_SECONDS. */}
      {HERO_IMAGES.map((src, i) => (
        <div
          key={src}
          aria-hidden="true"
          className="hero-slide absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url('${src}')`,
            animationDuration: `${CYCLE}s`,
            animationDelay: `${-(((HERO_IMAGES.length - i) % HERO_IMAGES.length) * HERO_SLIDE_SECONDS)}s`,
          }}
        />
      ))}

      <div className="absolute inset-0 bg-black/55" />

      <div className="relative mx-auto max-w-[1180px] px-5 py-20 text-center sm:py-28">
        <span className="inline-flex items-center gap-2.5 rounded-full bg-white/95 px-5 py-2.5 text-[13px] font-bold text-ink shadow-card">
          <span className="h-2.5 w-2.5 rounded-full bg-orange" />
          Exclusieve aanbiedingen vandaag – directe activering
        </span>

        <h1 className="mt-8 text-5xl font-extrabold text-white sm:text-6xl lg:text-7xl">
          IPTV Kopen
        </h1>
        <p className="mt-3 text-lg font-bold text-white sm:text-xl lg:text-2xl">
          Beste IPTV Nederland – HD/4K stabiel en onbeperkt
        </p>

        <p className="mx-auto mt-7 max-w-[820px] text-[15px] leading-8 text-white/90 sm:text-lg">
          Ontdek het ultieme <strong className="font-bold text-white">IPTV Abonnement</strong> voor{' '}
          <strong className="font-bold text-white">IPTV Nederland</strong>: duizenden zenders, films,
          series en live sport — allemaal in{' '}
          <strong className="font-bold text-white">HD/4K kwaliteit</strong>. Inclusief VOD, replay en
          EPG. Eenvoudig te installeren op Smart TV, Android, iOS, Fire Stick, Box &amp; PC. Met onze{' '}
          <strong className="font-bold text-white">premium IPTV</strong> geniet je van stabiele,
          buffervrije streaming en persoonlijke support 7 dagen per week. De{' '}
          <strong className="font-bold text-white">beste IPTV in Nederland</strong> — zonder
          verplichtingen.
        </p>

        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <button
            type="button"
            onClick={() => onOpenOrderModal('plan-12m')}
            className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-blue-cta px-8 py-4 text-[15px] font-bold text-white shadow-card transition-transform hover:-translate-y-0.5 sm:w-auto"
          >
            Bekijk aanbiedingen (1 scherm)
          </button>
          <a
            href="#multiscreen"
            className="inline-flex w-full items-center justify-center gap-2 rounded-xl border-2 border-white/80 px-8 py-4 text-[15px] font-bold text-white transition-colors hover:bg-white hover:text-navy sm:w-auto"
          >
            Multi-scherm (2–3)
          </a>
          <a
            href={CONTACT.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex w-full items-center justify-center gap-2.5 rounded-xl bg-wa px-8 py-4 text-[15px] font-bold text-white shadow-card transition-transform hover:-translate-y-0.5 sm:w-auto"
          >
            <WhatsAppGlyph className="h-5 w-5" /> WhatsApp
          </a>
        </div>

        <p className="mt-10 text-[13px] font-semibold text-white/85">
          Veilige betaling • WhatsApp Support • IPTV Nederland
        </p>
      </div>
    </section>
  );
};
