import React from 'react';
import { FOOTBALL_IMAGE } from '../data/iptvData';
import { SectionHeading } from './ui';

export const Football: React.FC = () => (
  <section id="voetbal" className="relative overflow-hidden bg-navy-band py-16">
    <div
      className="absolute inset-0 bg-cover bg-center"
      style={{ backgroundImage: `url('${FOOTBALL_IMAGE}')` }}
    />
    <div className="absolute inset-0 bg-navy-band/85" />

    <div className="relative mx-auto max-w-[1180px] px-5 text-center">
      <SectionHeading
        light
        sub={
          <>
            Geniet van live voetbal met vloeiende{' '}
            <strong className="font-bold text-white">HD/4K</strong> streaming. Bekijk de grote
            sportevenementen het hele seizoen door, eenvoudig toegankelijk op{' '}
            <strong className="font-bold text-white">
              Smart TV, Android, iOS, Box &amp; PC
            </strong>
            .
          </>
        }
      >
        Het beste van voetbal — IPTV Abonnement
      </SectionHeading>

      <p className="mt-6 text-[14px] font-bold text-white/90">
        Stabiele streaming • HD/4K Kwaliteit • WhatsApp Support 24/7
      </p>
    </div>
  </section>
);
