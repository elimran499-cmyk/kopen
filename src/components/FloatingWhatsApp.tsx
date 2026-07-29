import React from 'react';
import { CONTACT } from '../data/iptvData';
import { WhatsAppGlyph } from './ui';

export const FloatingWhatsApp: React.FC = () => (
  <a
    href={CONTACT.whatsapp}
    target="_blank"
    rel="noopener noreferrer"
    aria-label="Contact via WhatsApp"
    className="fixed bottom-6 right-6 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-wa text-white shadow-[0_10px_30px_-8px_rgba(37,211,102,0.7)] transition-transform hover:scale-105"
  >
    <WhatsAppGlyph className="h-7 w-7" />
  </a>
);
