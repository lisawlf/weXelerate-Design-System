import * as React from 'react';

/** Monochrome line icon in `currentColor`. Intentional addition: a wrapper for the icon set (Lucide stands in for Streamline Ultimate Light). */
export interface IconProps {
  /** Lucide icon slug, e.g. "arrow-right", "building-2", "sparkles". */
  name: string;
  size?: number;
  /** Visual weight hint; the brand uses a thin ~1.1px stroke. */
  stroke?: number;
  style?: React.CSSProperties;
}
export function Icon(props: IconProps): JSX.Element;
