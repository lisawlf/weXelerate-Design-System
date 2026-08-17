import React from 'react';

const BASE = {
  display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: 8,
  fontFamily: 'var(--wx-font-display)', fontWeight: 'var(--wx-button-weight)',
  fontSize: 'var(--wx-button-size)', lineHeight: 1, letterSpacing: 0,
  borderRadius: 'var(--wx-radius-pill)', cursor: 'pointer', whiteSpace: 'nowrap',
  transition: 'background-color var(--wx-dur-hover) var(--wx-ease), color var(--wx-dur-hover) var(--wx-ease), border-color var(--wx-dur-hover) var(--wx-ease)'
};

const SIZES = {
  sm: { padding: '8px 18px' },
  md: { padding: '11px 26px' },
  lg: { padding: '14px 32px', fontSize: 14 }
};

// Ghost pill at rest, inversion on hover. There is no filled button at rest —
// the inversion IS the emphasis. `brand` is the one filled variant (teal, white label).
const VARIANTS = {
  primary: {
    rest: { background: 'transparent', color: 'var(--wx-ink)', border: '1px solid var(--wx-ink)' },
    hover: { background: 'var(--wx-ink)', color: 'var(--wx-canvas)', border: '1px solid var(--wx-ink)' }
  },
  onDark: {
    rest: { background: 'transparent', color: 'var(--wx-on-dark-muted)', border: '1px solid #444' },
    hover: { background: 'var(--wx-on-dark)', color: 'var(--wx-ink)', border: '1px solid var(--wx-on-dark)' }
  },
  brand: {
    rest: { background: 'var(--wx-primary)', color: 'var(--wx-ink-invert)', border: '1px solid var(--wx-primary)' },
    hover: { background: 'var(--wx-primary-deep)', color: 'var(--wx-ink-invert)', border: '1px solid var(--wx-primary-deep)' }
  },
  spark: {
    rest: { background: 'var(--wx-whisper)', color: 'var(--wx-ink)', border: '1px solid var(--wx-whisper)' },
    hover: { background: 'var(--wx-ink)', color: 'var(--wx-whisper)', border: '1px solid var(--wx-ink)' }
  }
};

export function Button({ children, variant = 'primary', size = 'md', disabled = false, as = 'button', icon = null, iconAfter = null, onClick, href, style, ...rest }) {
  const [hover, setHover] = React.useState(false);
  const v = VARIANTS[variant] || VARIANTS.primary;
  const Tag = href ? 'a' : as;
  return (
    <Tag
      href={href}
      onClick={disabled ? undefined : onClick}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      disabled={Tag === 'button' ? disabled : undefined}
      style={{ ...BASE, ...(SIZES[size] || SIZES.md), ...(disabled || !hover ? v.rest : v.hover),
        opacity: disabled ? 0.4 : 1, cursor: disabled ? 'not-allowed' : 'pointer',
        textDecoration: 'none', borderBottom: undefined, ...style }}
      {...rest}
    >
      {icon}{children}{iconAfter}
    </Tag>
  );
}
