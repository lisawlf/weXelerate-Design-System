import * as React from 'react';

/** Text input — the newsletter field on dark, its mirrored white-plate variant on light. */
export interface InputProps {
  /** dark = #2a2a2a well with a #333 hairline (footer newsletter); light = white plate with a #e0e0e0 hairline. */
  tone?: 'light' | 'dark';
  label?: string;
  hint?: string;
  type?: string;
  placeholder?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  disabled?: boolean;
  style?: React.CSSProperties;
}
export function Input(props: InputProps): JSX.Element;
