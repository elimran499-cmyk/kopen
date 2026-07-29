import React from 'react';
import { MULTISCREEN_FEATURES, MULTISCREEN_PLANS } from '../data/iptvData';
import { Check, PaymentRow, SectionHeading } from './ui';

interface MultiScreenProps {
  onOpenOrderModal: (planId?: string) => void;
}

export const MultiScreen: React.FC<MultiScreenProps> = ({ onOpenOrderModal }) => (
  <section id="multiscreen" className="bg-white py-20">
    <div className="mx-auto max-w-[1180px] px-5">
      <SectionHeading
        sub={
          <>
            Kijk met <strong className="font-bold">3, 4 of 5 apparaten tegelijk</strong>. Perfect
            voor gezinnen — iedereen kijkt wat hij wil. Dezelfde topkwaliteit, extra stabiliteit,
            alle functies inbegrepen.
          </>
        }
      >
        IPTV Multischerm Abonnementen
      </SectionHeading>

      <div className="mt-10 grid gap-6 lg:grid-cols-3">
        {MULTISCREEN_PLANS.map((plan) => (
          <article
            key={plan.id}
            className="card-lift relative flex flex-col overflow-hidden rounded-2xl border-2 border-orange bg-navy px-6 py-7 text-white shadow-card"
          >
            <span className="absolute -right-9 top-4 w-32 rotate-45 bg-orange py-1 text-center text-[11px] font-bold text-white">
              Gezin
            </span>

            <h3 className="pr-16 text-[15px] font-extrabold text-white/90">{plan.title}</h3>
            <div className="mt-2 text-4xl font-extrabold">{plan.price}</div>

            <div className="mt-4 rounded-xl bg-white/15 px-4 py-3 text-[13.5px] font-bold">
              {plan.screensLabel}
            </div>
            <div className="mt-3 flex items-center gap-2.5 rounded-xl border border-dashed border-white/35 px-4 py-3 text-[13.5px] font-bold">
              <span
                aria-hidden="true"
                className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-white/15 text-[13px]"
              >
                {plan.badgeIcon}
              </span>
              {plan.badge}
            </div>

            <ul className="mt-5 space-y-2.5 text-[13.5px]">
              <li className="flex items-start gap-2.5 font-semibold">
                <Check />
                {plan.connections}
              </li>
              {MULTISCREEN_FEATURES.map((feature) => (
                <li key={feature} className="flex items-start gap-2.5 text-white/90">
                  <Check />
                  {feature}
                </li>
              ))}
            </ul>

            <button
              type="button"
              onClick={() => onOpenOrderModal(plan.id)}
              className="mt-6 w-full rounded-xl bg-white px-6 py-3.5 text-[15px] font-bold text-navy transition-colors hover:bg-orange hover:text-white"
            >
              Bestel Nu – {plan.price}
            </button>

            <PaymentRow className="mt-4" />
          </article>
        ))}
      </div>
    </div>
  </section>
);
