import React from 'react';
import { PRICING_PLANS } from '../data/iptvData';
import { Check, PaymentRow, Pill, SectionHeading } from './ui';

interface PricingProps {
  onOpenOrderModal: (planId: string) => void;
}

export const Pricing: React.FC<PricingProps> = ({ onOpenOrderModal }) => (
  <section id="pricing" className="bg-white py-20">
    <div className="mx-auto max-w-[1320px] px-5">
      <SectionHeading
        sub={
          <>
            Kies de formule die bij je past en geniet van een{' '}
            <strong className="font-bold">stabiel IPTV abonnement</strong> in{' '}
            <strong className="font-bold">HD/4K</strong> met WhatsApp support 7/7.{' '}
            <strong className="font-bold">7 dagen geld-terug garantie</strong>.
          </>
        }
      >
        Kies jouw IPTV Abonnement — IPTV Nederland
      </SectionHeading>

      <div className="mt-8 flex flex-wrap justify-center gap-3">
        <Pill dot="#22c55e">Directe activatie (±5 min)</Pill>
        <Pill dot="#22c55e">7 dagen geld-terug</Pill>
        <Pill dot="#22c55e">Werkt op alle apparaten</Pill>
      </div>

      <div className="mt-10 grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
        {PRICING_PLANS.map((plan) => (
          <article
            key={plan.id}
            className={`card-lift relative flex flex-col overflow-hidden rounded-2xl px-6 py-7 text-white shadow-card ${
              plan.featured ? 'border-2 border-orange bg-navy-mid' : 'bg-navy'
            }`}
          >
            {plan.ribbon && (
              <span className="absolute -right-9 top-5 w-32 rotate-45 bg-orange py-1 text-center text-[11px] font-bold text-white">
                {plan.ribbon}
              </span>
            )}

            {plan.badge && (
              <span className="mx-auto mb-3 inline-flex items-center gap-1.5 rounded-full bg-orange px-4 py-1.5 text-[12px] font-bold text-white">
                {plan.badge}
              </span>
            )}

            <h3 className="pr-14 text-[15px] font-extrabold text-white/90">{plan.duration}</h3>

            <div className="mt-2 flex flex-wrap items-baseline gap-2.5">
              <span className="text-[40px] font-extrabold leading-none">{plan.price}</span>
              <span className="text-[15px] font-semibold text-white/50 line-through">
                {plan.originalPrice}
              </span>
            </div>

            <div className="mt-4 rounded-xl bg-white/15 px-4 py-3 text-[13.5px] font-bold">
              {plan.perMonthLabel}
            </div>
            <div className="mt-3 flex items-center gap-2.5 rounded-xl border border-dashed border-white/35 px-4 py-3 text-[13.5px] font-bold">
              <span
                aria-hidden="true"
                className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-white/15 text-[13px]"
              >
                {plan.highlightIcon}
              </span>
              {plan.highlightLabel}
            </div>

            <ul className="mt-5 flex-1 space-y-2.5 text-[13.5px]">
              {plan.features.map((feature) => (
                <li key={feature} className="flex items-start gap-2.5 text-white/90">
                  <Check />
                  {feature}
                </li>
              ))}
              <li className="flex items-start gap-2.5 font-bold">
                <Check />
                {plan.screens}
              </li>
            </ul>

            <button
              type="button"
              onClick={() => onOpenOrderModal(plan.id)}
              className="mt-6 w-full rounded-xl bg-white px-6 py-3.5 text-[15px] font-bold text-navy transition-colors hover:bg-orange hover:text-white"
            >
              Koop Nu – {plan.price}
            </button>

            <PaymentRow className="mt-4" />
          </article>
        ))}
      </div>
    </div>
  </section>
);
