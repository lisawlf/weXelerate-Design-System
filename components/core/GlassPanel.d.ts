import * as React from 'react';

/** Liquid-glass slab — the material every weXelerate box (nav bar, dropdown, card, modal, stat plate) is made of. */
export interface GlassPanelProps {
  children?: React.ReactNode;
  /** light glass over the white canvas or photography; dark glass over the #0e0e0e band or navy panel. */
  tone?: 'light' | 'dark';
  /** dense = reading surfaces (panels, dropdowns, cards); chrome = nav bars, chips, badges. */
  density?: 'dense' | 'chrome';
  /** glass = 18px slab; sm = 14px for small dropdowns and chips. */
  radius?: 'glass' | 'sm';
  padding?: string | number;
  className?: string;
  style?: React.CSSProperties;
}
export function GlassPanel(props: GlassPanelProps): JSX.Element;
