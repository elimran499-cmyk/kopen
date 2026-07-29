import React from 'react';
import logoUrl from '../assets/iptv-koning-logo.webp';
import { PAYMENT_ICONS, PAYMENT_ICONS_ALT } from '../data/iptvData';

/**
 * Brand logo. The wordmark and tagline are baked into the image, so this is a
 * single <img> rather than composed type — `className` sets the height and the
 * width follows the asset's aspect ratio.
 */
export const Logo: React.FC<{ className?: string }> = ({ className = 'h-10 sm:h-11' }) => (
  <a href="#top" className="flex shrink-0 items-center" aria-label="IPTV Koning — home">
    <img
      src={logoUrl}
      alt="IPTV Koning — Beste IPTV in Nederland"
      className={`w-auto object-contain ${className}`}
    />
  </a>
);

/** Navy / grey / orange rule that sits under every section heading. */
export const TriRule: React.FC = () => (
  <div className="rule-tri my-4">
    <span className="w-8 bg-navy" />
    <span className="w-4 bg-slate-300" />
    <span className="w-8 bg-orange" />
  </div>
);

interface SectionHeadingProps {
  children: React.ReactNode;
  light?: boolean;
  sub?: React.ReactNode;
}

export const SectionHeading: React.FC<SectionHeadingProps> = ({ children, light, sub }) => (
  <div className="text-center">
    <h2
      className={`text-3xl sm:text-4xl lg:text-[42px] font-extrabold leading-tight ${
        light ? 'text-white' : 'text-navy'
      }`}
    >
      {children}
    </h2>
    <TriRule />
    {sub && (
      <p
        className={`mx-auto max-w-3xl text-[15px] sm:text-base leading-relaxed ${
          light ? 'text-white/85' : 'text-ink'
        }`}
      >
        {sub}
      </p>
    )}
  </div>
);

/** Rounded outline chip, e.g. "Directe activatie (±5 min)". */
export const Pill: React.FC<{
  children: React.ReactNode;
  dot?: string;
  className?: string;
}> = ({ children, dot, className = '' }) => (
  <span
    className={`inline-flex items-center gap-2 rounded-full border border-navy/15 bg-white px-4 py-2 text-[13px] font-semibold text-navy shadow-soft ${className}`}
  >
    {dot && <span className="h-2 w-2 rounded-full" style={{ background: dot }} />}
    {children}
  </span>
);

/** Solid navy chip used in the benefits strip. */
export const NavyPill: React.FC<{ children: React.ReactNode; icon?: React.ReactNode }> = ({
  children,
  icon,
}) => (
  <span className="inline-flex items-center gap-2 rounded-full bg-navy px-4 py-2.5 text-[13px] font-semibold text-white shadow-card">
    {icon}
    {children}
  </span>
);

/** Card-brand logos shown at the foot of each pricing card. */
export const PaymentRow: React.FC<{ className?: string }> = ({ className = '' }) => (
  <div
    className={`flex items-center justify-center rounded-lg bg-white px-3 py-2 ${className}`}
  >
    <img
      src={PAYMENT_ICONS}
      alt={PAYMENT_ICONS_ALT}
      loading="lazy"
      decoding="async"
      className="h-[26px] w-auto max-w-full object-contain"
    />
  </div>
);

export const Check: React.FC<{ className?: string }> = ({ className = 'text-emerald-400' }) => (
  <svg viewBox="0 0 20 20" className={`h-4 w-4 shrink-0 ${className}`} fill="currentColor">
    <path d="M7.6 14.6 3.4 10.4l1.4-1.4 2.8 2.8 7-7 1.4 1.4z" />
  </svg>
);

export const Cross: React.FC = () => (
  <svg viewBox="0 0 20 20" className="h-4 w-4 shrink-0 text-slate-800" fill="currentColor">
    <path d="M15.5 5.9 14.1 4.5 10 8.6 5.9 4.5 4.5 5.9 8.6 10l-4.1 4.1 1.4 1.4L10 11.4l4.1 4.1 1.4-1.4L11.4 10z" />
  </svg>
);

/** Official WhatsApp mark, 24×24 viewBox, inherits colour from the parent. */
export const WhatsAppGlyph: React.FC<{ className?: string }> = ({ className = 'h-4 w-4' }) => (
  <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden="true">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z" />
  </svg>
);
