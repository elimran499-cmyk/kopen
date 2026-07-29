import React, { useEffect, useMemo, useState } from 'react';
import { Lock, X } from 'lucide-react';
import { CONTACT, MULTISCREEN_PLANS, PRICING_PLANS } from '../data/iptvData';
import { Check, PaymentRow, WhatsAppGlyph } from './ui';

interface OrderModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialPlanId?: string;
}

/** Flat list of every orderable plan, single-screen and multi-screen. */
const ALL_PLANS = [
  ...PRICING_PLANS.map((p) => ({
    id: p.id,
    label: `${p.duration} — ${p.screens}`,
    price: p.price,
  })),
  ...MULTISCREEN_PLANS.map((p) => ({
    id: p.id,
    label: p.title,
    price: p.price,
  })),
];

export const OrderModal: React.FC<OrderModalProps> = ({ isOpen, onClose, initialPlanId }) => {
  const [planId, setPlanId] = useState(initialPlanId ?? 'plan-12m');

  useEffect(() => {
    if (isOpen && initialPlanId) setPlanId(initialPlanId);
  }, [isOpen, initialPlanId]);

  useEffect(() => {
    if (!isOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, [isOpen, onClose]);

  const plan = useMemo(() => ALL_PLANS.find((p) => p.id === planId) ?? ALL_PLANS[0], [planId]);

  if (!isOpen) return null;

  const waLink = `${CONTACT.whatsapp}?text=${encodeURIComponent(
    `Hallo IPTV Koning, ik wil graag bestellen: ${plan.label} (${plan.price}).`,
  )}`;

  return (
    <div
      className="fixed inset-0 z-[60] flex items-end justify-center bg-navy/60 p-4 backdrop-blur-sm sm:items-center"
      role="dialog"
      aria-modal="true"
      aria-label="Bestelling afronden"
      onClick={onClose}
    >
      <div
        className="animate-fadeIn w-full max-w-lg overflow-hidden rounded-2xl bg-white shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between gap-4 bg-navy px-6 py-5 text-white">
          <div>
            <h2 className="text-xl font-extrabold">Bestelling afronden</h2>
            <p className="mt-1 text-[13px] text-white/80">Activering in 5–15 minuten</p>
          </div>
          <button
            type="button"
            onClick={onClose}
            aria-label="Sluiten"
            className="rounded-lg p-1.5 text-white/80 transition-colors hover:bg-white/10 hover:text-white"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        <div className="px-6 py-6">
          <label htmlFor="plan" className="block text-[13px] font-bold text-navy">
            Kies je abonnement
          </label>
          <select
            id="plan"
            value={planId}
            onChange={(e) => setPlanId(e.target.value)}
            className="mt-2 w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-[15px] font-semibold text-navy outline-none focus:border-navy"
          >
            {ALL_PLANS.map((p) => (
              <option key={p.id} value={p.id}>
                {p.label} — {p.price}
              </option>
            ))}
          </select>

          <div className="mt-5 rounded-xl bg-tint px-5 py-4">
            <div className="flex items-baseline justify-between">
              <span className="text-[14px] font-semibold text-navy">Totaal</span>
              <span className="text-3xl font-extrabold text-navy">{plan.price}</span>
            </div>
            <ul className="mt-3 space-y-2 text-[13px] text-ink">
              {['7 dagen geld-terug garantie', 'Geen automatische verlenging', 'Nederlandse support 7/7'].map(
                (line) => (
                  <li key={line} className="flex items-center gap-2">
                    <Check className="text-navy" />
                    {line}
                  </li>
                ),
              )}
            </ul>
          </div>

          <a
            href={waLink}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-5 flex items-center justify-center gap-2.5 rounded-xl bg-gradient-to-r from-emerald-400 to-green-400 px-6 py-4 text-[15px] font-bold text-white transition-transform hover:-translate-y-0.5"
          >
            <WhatsAppGlyph /> Bestel via WhatsApp
          </a>

          <p className="mt-4 flex items-center justify-center gap-2 text-[12px] font-semibold text-muted">
            <Lock className="h-3.5 w-3.5" /> Veilige betaling — je gegevens blijven privé
          </p>

          <PaymentRow className="mt-3 border border-slate-200" />
        </div>
      </div>
    </div>
  );
};
