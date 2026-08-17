import React from 'react';
import { EyebrowLabel } from '../core/EyebrowLabel.jsx';

// Editorial band: full-width, 80px vertical padding, closed by a 1px hairline,
// content capped at 1440px with 48px gutters.
export function SectionBand({ eyebrow, title, intro, tone = 'canvas', quiet = false, divider = true, children, style, ...rest }) {
  const dark = tone === 'dark';
  const bg = dark ? 'var(--wx-dark-whitespace)' : tone === 'tint' ? 'var(--wx-surface-card)' : 'var(--wx-canvas)';
  return (
    <section
      style={{ background: bg, padding: `${quiet ? 'var(--wx-section-y-quiet)' : 'var(--wx-section-y)'} var(--wx-page-x)`,
        borderBottom: divider ? `1px solid ${dark ? '#2a2a2a' : 'var(--wx-hairline)'}` : 'none', ...style }}
      {...rest}
    >
      <div style={{ maxWidth: 'var(--wx-container)', margin: '0 auto' }}>
        {(eyebrow || title || intro) ? (
          <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--wx-space-base)', marginBottom: 'var(--wx-space-2xl)', maxWidth: 760 }}>
            {eyebrow ? <EyebrowLabel tone={dark ? 'dark' : 'light'}>{eyebrow}</EyebrowLabel> : null}
            {title ? <h2 style={{ fontFamily: 'var(--wx-font-display)', fontWeight: 700, fontSize: 'var(--wx-display-md-size)', lineHeight: 'var(--wx-display-md-lh)', letterSpacing: 'var(--wx-display-md-ls)', color: dark ? 'var(--wx-on-dark)' : 'var(--wx-ink-soft)', margin: 0 }}>{title}</h2> : null}
            {intro ? <p style={{ fontFamily: 'var(--wx-font-body)', fontSize: 'var(--wx-body-lg-size)', lineHeight: 'var(--wx-body-lg-lh)', color: dark ? 'var(--wx-on-dark-muted)' : 'var(--wx-body)', margin: 0 }}>{intro}</p> : null}
          </div>
        ) : null}
        {children}
      </div>
    </section>
  );
}
