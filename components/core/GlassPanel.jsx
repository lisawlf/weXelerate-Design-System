import React from 'react';

// The base box. Every box on a weXelerate page is this one material — only fill
// density and radius vary. The rim + glint live in .wx-glass (tokens/material.css).
export function GlassPanel({ children, tone = 'light', density = 'dense', radius = 'glass', padding = 'var(--wx-space-lg)', className = '', style, ...rest }) {
  const classes = ['wx-glass'];
  if (tone === 'dark') classes.push('wx-glass--dark');
  if (density === 'chrome') classes.push('wx-glass--chrome');
  if (radius === 'sm') classes.push('wx-glass--sm');
  if (className) classes.push(className);
  return (
    <div className={classes.join(' ')} style={{ padding, ...style }} {...rest}>
      {children}
    </div>
  );
}
