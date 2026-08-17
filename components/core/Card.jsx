import React from 'react';
import { GlassPanel } from './GlassPanel.jsx';

// Content card = a GlassPanel at content scale. Hover THINS the fill (more backdrop
// reads through) — it never gains a grey tint.
export function Card({ title, description, eyebrow, accentBar = false, href, linkLabel, variant = 'default', image, icon, children, style, ...rest }) {
  const [hover, setHover] = React.useState(false);
  const dark = variant === 'dark';

  if (variant === 'photo') {
    return (
      <div
        onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}
        style={{ position: 'relative', overflow: 'hidden', borderRadius: 'var(--wx-radius-glass)', minHeight: 320,
          background: image ? `#0e0e0e url(${image}) center/cover no-repeat` : 'var(--wx-dark)',
          display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', ...style }}
        {...rest}
      >
        <div style={{ position: 'absolute', inset: 0, background: 'var(--wx-overlay-photo)' }} />
        <div style={{ position: 'relative', padding: 'var(--wx-space-lg)', display: 'flex', flexDirection: 'column', gap: 10 }}>
          {eyebrow ? <span style={{ fontFamily: 'var(--wx-font-mono)', fontSize: 'var(--wx-eyebrow-size)', letterSpacing: 'var(--wx-eyebrow-ls)', textTransform: 'uppercase', color: 'rgba(255,255,255,.65)' }}>{eyebrow}</span> : null}
          {title ? <h3 style={{ fontFamily: 'var(--wx-font-display)', fontWeight: 700, fontSize: 'var(--wx-heading-md-size)', lineHeight: 'var(--wx-heading-md-lh)', letterSpacing: 'var(--wx-heading-md-ls)', color: 'var(--wx-on-dark)', margin: 0 }}>{title}</h3> : null}
          {description ? <p style={{ fontFamily: 'var(--wx-font-body)', fontSize: 'var(--wx-body-sm-size)', lineHeight: 'var(--wx-body-sm-lh)', color: 'rgba(255,255,255,.78)', margin: 0, maxWidth: 460 }}>{description}</p> : null}
          {children}
        </div>
      </div>
    );
  }

  return (
    <GlassPanel
      tone={dark ? 'dark' : 'light'}
      density={hover && !dark ? 'chrome' : 'dense'}
      padding={dark ? 'var(--wx-card-dark-pad)' : 'var(--wx-card-pad)'}
      onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}
      style={{ display: 'flex', flexDirection: 'column', gap: 10, ...style }}
      {...rest}
    >
      {accentBar ? <span style={{ display: 'block', width: 28, height: 2, background: 'var(--wx-whisper)', marginBottom: 6 }} /> : null}
      {icon ? <span style={{ width: 36, height: 36, display: 'inline-flex', alignItems: 'center', justifyContent: 'center', borderRadius: 'var(--wx-radius-md)', background: dark ? 'var(--wx-dark-elevated)' : 'var(--wx-surface-card)', marginBottom: 6 }}>{icon}</span> : null}
      {eyebrow ? <span style={{ fontFamily: 'var(--wx-font-mono)', fontSize: 'var(--wx-eyebrow-size)', letterSpacing: 'var(--wx-eyebrow-ls)', textTransform: 'uppercase', color: dark ? 'var(--wx-on-dark-muted)' : 'var(--wx-muted)' }}>{eyebrow}</span> : null}
      {title ? <h3 style={{ fontFamily: 'var(--wx-font-display)', fontWeight: 700, fontSize: dark ? 'var(--wx-heading-md-size)' : 'var(--wx-heading-sm-size)', lineHeight: 'var(--wx-heading-sm-lh)', letterSpacing: dark ? 'var(--wx-heading-md-ls)' : 0, color: dark ? 'var(--wx-on-dark)' : 'var(--wx-ink-soft)', margin: 0 }}>{title}</h3> : null}
      {description ? <p style={{ fontFamily: 'var(--wx-font-body)', fontSize: 'var(--wx-body-sm-size)', lineHeight: 'var(--wx-body-sm-lh)', color: dark ? 'var(--wx-on-dark-muted)' : 'var(--wx-body-2)', margin: 0 }}>{description}</p> : null}
      {children}
      {linkLabel ? (
        <a href={href || '#'} style={{ marginTop: 'auto', paddingTop: 12, fontFamily: 'var(--wx-font-display)', fontSize: 'var(--wx-label-sm-size)', fontWeight: 'var(--wx-label-sm-weight)', letterSpacing: 'var(--wx-label-sm-ls)', color: dark ? 'var(--wx-on-dark)' : 'var(--wx-link)', textDecoration: 'none', borderBottom: 'none' }}>{linkLabel} →</a>
      ) : null}
    </GlassPanel>
  );
}
