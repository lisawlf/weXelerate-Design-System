import * as React from 'react';

/**
 * The signature weXelerate CTA: a ghost pill that inverts to solid ink on hover.
 */
export interface ButtonProps {
  children?: React.ReactNode;
  /** primary = ghost pill on light; onDark = ghost pill on the dark band; brand = filled teal (white label); spark = the one lime moment per view. */
  variant?: 'primary' | 'onDark' | 'brand' | 'spark';
  size?: 'sm' | 'md' | 'lg';
  disabled?: boolean;
  /** Renders as <a> when set. */
  href?: string;
  as?: 'button' | 'a' | 'div';
  icon?: React.ReactNode;
  iconAfter?: React.ReactNode;
  onClick?: (e: React.MouseEvent) => void;
  style?: React.CSSProperties;
}
export function Button(props: ButtonProps): JSX.Element;
