import * as React from 'react';

/**
 * 60px sticky glass nav bar with the wordmark, pill nav items and a ghost-pill CTA.
 */
export interface NavBarItem { label: string; href?: string; hasMenu?: boolean }
export interface NavBarProps {
  items?: NavBarItem[];
  activeItem?: string;
  onNavigate?: (item: NavBarItem) => void;
  cta?: string;
  onCta?: () => void;
  /** Path to the wordmark asset (default assets/logo-black.png). */
  logo?: string;
  style?: React.CSSProperties;
}
export function NavBar(props: NavBarProps): JSX.Element;
