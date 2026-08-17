import React from 'react';

// Sticky-nav item. Hover darkens the text to ink and washes an ink tint behind it,
// so it reads on glass regardless of what is scrolling underneath.
export function NavLink({ children, href = '#', active = false, tone = 'light', hasMenu = false, onClick, style, ...rest }) {
  const [hover, setHover] = React.useState(false);
  const dark = tone === 'dark';
  const on = hover || active;
  return (
    <a
      href={href} onClick={onClick}
      onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}
      style={{ display: 'inline-flex', alignItems: 'center', gap: 6, padding: '7px 14px',
        fontFamily: 'var(--wx-font-display)', fontSize: 'var(--wx-button-size)', fontWeight: 'var(--wx-button-weight)', lineHeight: 1,
        borderRadius: 'var(--wx-radius-pill)', textDecoration: 'none', borderBottom: 'none',
        color: dark ? (on ? 'var(--wx-on-dark)' : 'var(--wx-on-dark-muted)') : (on ? 'var(--wx-ink)' : 'var(--wx-body-2)'),
        background: on ? (dark ? 'rgba(255,255,255,.10)' : 'rgba(14,14,14,.06)') : 'transparent',
        transition: 'color var(--wx-dur-hover) var(--wx-ease), background var(--wx-dur-ui) var(--wx-ease)', ...style }}
      {...rest}
    >
      {children}
      {hasMenu ? <span style={{ width: 0, height: 0, borderLeft: '3.5px solid transparent', borderRight: '3.5px solid transparent', borderTop: '4px solid currentColor', opacity: .65, marginTop: 1 }} /> : null}
    </a>
  );
}
