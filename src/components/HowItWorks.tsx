import React from 'react';
import { HOW_IMAGE, HOW_IT_WORKS } from '../data/iptvData';
import { Check, SectionHeading } from './ui';

export const HowItWorks: React.FC = () => (
  <section id="how" className="relative overflow-hidden bg-navy py-20">
    <div
      className="absolute inset-0 bg-cover bg-center"
      style={{ backgroundImage: `url('${HOW_IMAGE}')` }}
    />
    <div className="absolute inset-0 bg-navy/85" />

    <div className="relative mx-auto max-w-[1180px] px-5">
      <SectionHeading
        light
        sub={
          <>
            Met <strong className="font-bold text-white">IPTV Abonnement</strong>, geniet van de{' '}
            <strong className="font-bold text-white">beste IPTV in Nederland</strong>: snelle
            installatie, HD/4K kwaliteit, onbeperkte VOD en 24/7 support.
          </>
        }
      >
        Hoe werkt IPTV Abonnement — eenvoudig, snel en onbeperkt
      </SectionHeading>

      <div className="mt-10 grid gap-5 md:grid-cols-3">
        {HOW_IT_WORKS.map((step) => (
          <article
            key={step.id}
            className="card-lift rounded-2xl bg-white/[0.07] px-6 py-7 ring-1 ring-white/10"
          >
            <span className="flex h-11 w-11 items-center justify-center rounded-full bg-orange-soft text-lg font-extrabold text-white">
              {step.number}
            </span>
            <h3 className="mt-5 text-lg font-extrabold text-white">{step.title}</h3>
            <p className="mt-2 text-[14px] leading-relaxed text-white/80">{step.body}</p>
            <ul className="mt-4 space-y-2">
              {step.bullets.map((bullet) => (
                <li key={bullet} className="flex items-start gap-2.5 text-[13.5px] text-white/85">
                  <Check className="text-orange-soft" />
                  {bullet}
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>

      <div className="mt-12 flex flex-col items-center justify-center gap-4 sm:flex-row">
        <a
          href="#pricing"
          className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-white px-8 py-3.5 text-[15px] font-bold text-navy shadow-card transition-transform hover:-translate-y-0.5 sm:w-auto"
        >
          <span aria-hidden="true">⚡</span> Bekijk prijzen
        </a>
        <a
          href="#faq"
          className="inline-flex w-full items-center justify-center gap-2 rounded-xl border-2 border-white/70 px-8 py-3.5 text-[15px] font-bold text-white transition-colors hover:bg-white hover:text-navy sm:w-auto"
        >
          <span aria-hidden="true">❓</span> FAQ
        </a>
      </div>
    </div>
  </section>
);
