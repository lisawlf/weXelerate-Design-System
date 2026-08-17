import React from 'react';

// Every section opens with one: a 28×2px dash, then mono uppercase micro-copy.
export function EyebrowLabel({ children, tone = 'light', style, ...rest }) {
  const onPhoto = tone === 'photo';
  return (
    <span style={{ display: 'inline-flex', alignItems: 'center', gap: 10, ...style }} {...rest}>
      <span style={{ width: 28, height: 2, background: onPhoto ? 'rgba(255,255,255,.5)' : tone === 'dark' ? '#3a3a3a' : '#ccc', flex: 'none' }} />
      <span style={{ fontFamily: 'var(--wx-font-mono)', fontSize: 'var(--wx-eyebrow-size)', lineHeight: 1.4, letterSpacing: 'var(--wx-eyebrow-ls)', textTransform: 'uppercase', color: onPhoto ? 'rgba(255,255,255,.65)' : tone === 'dark' ? 'var(--wx-on-dark-muted)' : 'var(--wx-muted)' }}>{children}</span>
    </span>
  );
}
