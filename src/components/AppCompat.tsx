import React from 'react';
import { APP_LOGOS } from '../data/iptvData';
import { SectionHeading } from './ui';

export const AppCompat: React.FC = () => (
  <section id="apps" className="bg-mist py-20">
    <div className="mx-auto max-w-[1180px] px-5">
      <SectionHeading
        sub={
          <>
            Geniet van de beste <strong className="font-bold">IPTV Nederland</strong> in{' '}
            <strong className="font-bold">HD/4K</strong> met een eenvoudige configuratie. Ons{' '}
            <strong className="font-bold">IPTV abonnement</strong> werkt met de meest gebruikte apps
            op <strong className="font-bold">Smart TV</strong>,{' '}
            <strong className="font-bold">Android</strong>, <strong className="font-bold">iOS</strong>
            , Box &amp; PC.
          </>
        }
      >
        IPTV Abonnement — compatibel met uw favoriete apps
      </SectionHeading>

      <div className="mx-auto mt-10 grid max-w-[1000px] grid-cols-2 gap-4 sm:grid-cols-4">
        {APP_LOGOS.map((app) => (
          <div
            key={app.id}
            className="card-lift flex h-[74px] items-center justify-center rounded-xl border border-slate-200/80 bg-white px-4 shadow-soft"
          >
            {app.logo ? (
              <img
                src={app.logo}
                alt={app.name}
                loading="lazy"
                decoding="async"
                className="max-h-[40px] w-auto max-w-full object-contain"
              />
            ) : (
              <span className="text-center text-[13px] font-extrabold" style={{ color: app.color }}>
                {app.name}
              </span>
            )}
          </div>
        ))}
      </div>

      <p className="mx-auto mt-10 max-w-3xl text-center text-[15px] leading-relaxed text-ink">
        Onze IPTV-dienst werkt op <strong className="font-bold">Smart TV's</strong> (Samsung, LG),{' '}
        <strong className="font-bold">Android TV</strong>,{' '}
        <strong className="font-bold">Fire Stick</strong>, MAG-boxen, smartphones, tablets en pc met
        VLC of <strong className="font-bold">Smarters Player</strong>.
      </p>
    </div>
  </section>
);
