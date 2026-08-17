import * as React from 'react';

/** Sticky-nav item: pill-shaped, ink-wash hover so it stays legible over glass. */
export interface NavLinkProps {
  children?: React.ReactNode;
  href?: string;
  active?: boolean;
  /** light for the white sticky bar, dark for footer/dark-band navigation. */
  tone?: 'light' | 'dark';
  /** Adds the small caret for items that open a dropdown or mega panel. */
  hasMenu?: boolean;
  onClick?: (e: React.MouseEvent) => void;
  style?: React.CSSProperties;
}
export function NavLink(props: NavLinkProps): JSX.Element;
