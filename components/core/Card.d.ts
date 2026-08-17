import * as React from 'react';

/**
 * Content card — a glass slab at content scale, in light, dark, or full-bleed photographic form.
 */
export interface CardProps {
  title?: string;
  description?: string;
  /** Mono uppercase opener, e.g. "PROGRAM · 2026". */
  eyebrow?: string;
  /** 28×2px lime signal bar at the top — program cards only, and rare. */
  accentBar?: boolean;
  linkLabel?: string;
  href?: string;
  /** default = light glass; dark = inverted feature card (40px padding); photo = full-bleed image under a black gradient. */
  variant?: 'default' | 'dark' | 'photo';
  /** Background image URL for variant="photo". */
  image?: string;
  icon?: React.ReactNode;
  children?: React.ReactNode;
  style?: React.CSSProperties;
}
export function Card(props: CardProps): JSX.Element;
