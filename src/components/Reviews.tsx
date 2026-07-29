import React from 'react';
import { REVIEWS } from '../data/iptvData';
import { SectionHeading } from './ui';

const Stars: React.FC = () => (
  <span className="text-[15px] tracking-tight text-orange" aria-label="5 uit 5 sterren">
    ★★★★★
  </span>
);

export const Reviews: React.FC = () => (
  <section id="reviews" className="bg-navy py-20">
    <div className="mx-auto max-w-[1320px] px-5">
      <div className="text-center">
        <h2 className="text-3xl font-extrabold leading-tight text-white sm:text-4xl lg:text-[42px]">
          Zij vertrouwen ons — <span className="text-orange">IPTV Koning</span>
        </h2>
        <p className="mx-auto mt-5 max-w-3xl text-[15px] leading-relaxed text-white/85 sm:text-base">
          Kwaliteit <strong className="font-bold text-white">HD/4K</strong>, directe activering en
          support <strong className="font-bold text-white">24/7</strong> — de{' '}
          <strong className="font-bold text-white">beste IPTV Nederland</strong> en{' '}
          <a href="#pricing" className="font-bold text-white underline">
            IPTV België
          </a>{' '}
          volgens onze klanten.
        </p>

        <a
          href="#pricing"
          className="mt-8 inline-flex items-center justify-center rounded-xl bg-orange px-8 py-4 text-[15px] font-bold text-white shadow-card transition-transform hover:-translate-y-0.5"
        >
          Bekijk onze aanbiedingen en prijzen
        </a>
      </div>

      <div className="mt-10 grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
        {REVIEWS.map((review) => (
          <figure
            key={review.id}
            className="card-lift flex flex-col rounded-2xl bg-navy-card px-5 py-5 ring-1 ring-white/10"
          >
            <div className="flex items-center justify-between gap-2">
              <Stars />
              <span className="rounded-md bg-white/10 px-2.5 py-1 text-[11px] font-bold text-white/85">
                Geverifieerd
              </span>
            </div>
            <blockquote className="mt-3 flex-1 text-[14px] leading-relaxed text-white/90">
              "{review.comment}"
            </blockquote>
            <figcaption className="mt-4 flex items-center gap-2 text-[13px]">
              <span className="text-white/50">—</span>
              <span className="font-bold text-white">{review.author}</span>
              <span className="text-white/60">{review.location}</span>
            </figcaption>
          </figure>
        ))}
      </div>
    </div>
  </section>
);
