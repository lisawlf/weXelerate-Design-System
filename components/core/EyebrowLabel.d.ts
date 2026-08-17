import * as React from 'react';

/** Mono uppercase section opener preceded by a 28×2px dash — annotation, like an engineering drawing. */
export interface EyebrowLabelProps {
  children?: React.ReactNode;
  /** light (default, #777 on white), dark (on the #0e0e0e band), photo (over imagery). */
  tone?: 'light' | 'dark' | 'photo';
  style?: React.CSSProperties;
}
export function EyebrowLabel(props: EyebrowLabelProps): JSX.Element;
