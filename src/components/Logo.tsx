import React from 'react';
import crownUrl from '../assets/iptv-koning-crown.png';
import wordmarkUrl from '../assets/iptv-koning-logo-trans.png';
import wordmarkLightUrl from '../assets/iptv-koning-logo-light.png';

/**
 * IPTV Koning brand mark.
 *
 * The supplied artwork is a single raster wordmark — gold crown, navy "IPTV",
 * orange "Koning", grey tagline — drawn on a solid white plate. Three variants
 * are derived from it at build time (see the generator note in the assets
 * folder): the plate keyed out for light backgrounds, a version whose navy
 * glyphs are turned white for dark backgrounds, and the crown on its own.
 *
 * Nothing here recolours the brand: the crown and the orange stay exactly as
 * delivered on every surface.
 */

interface MarkProps {
  /** Unused for the crown, which reads on both grounds; kept for a common API. */
  inverted?: boolean;
  className?: string;
  style?: React.CSSProperties;
}

/** Crown only — used where a square mark is needed, such as the splash intro. */
export const LogoMark: React.FC<MarkProps> = ({ className = '', style }) => (
  <img
    src={crownUrl}
    alt=""
    aria-hidden="true"
    className={`object-contain ${className}`}
    style={style}
  />
);

interface LogoProps {
  /** Use the light artwork, for dark backgrounds like the footer. */
  inverted?: boolean;
  className?: string;
}

/** Full wordmark, used in the header and footer. */
export const Logo: React.FC<LogoProps> = ({ inverted = false, className = '' }) => (
  <img
    src={inverted ? wordmarkLightUrl : wordmarkUrl}
    alt="IPTV Koning — beste IPTV in Nederland"
    width={1000}
    height={250}
    className={`h-14 sm:h-16 w-auto object-contain ${className}`}
  />
);
