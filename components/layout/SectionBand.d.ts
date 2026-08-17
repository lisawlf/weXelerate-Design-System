import * as React from 'react';

/**
 * A full-width editorial band: eyebrow → headline → intro → content, closed by a hairline.
 */
export interface SectionBandProps {
  eyebrow?: string;
  title?: string;
  intro?: string;
  /** canvas (white), tint (#f7f7f7 alternating band), dark (#0e0e0e world). */
  tone?: 'canvas' | 'tint' | 'dark';
  /** 64px instead of 80px vertical padding, for quieter interstitials. */
  quiet?: boolean;
  divider?: boolean;
  children?: React.ReactNode;
  style?: React.CSSProperties;
}
export function SectionBand(props: SectionBandProps): JSX.Element;
