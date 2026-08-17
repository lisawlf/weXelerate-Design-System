import React from 'react';

export function Input({ tone = 'light', label, hint, type = 'text', placeholder, value, onChange, disabled = false, style, ...rest }) {
  const [focus, setFocus] = React.useState(false);
  const dark = tone === 'dark';
  return (
    <label style={{ display: 'flex', flexDirection: 'column', gap: 6, fontFamily: 'var(--wx-font-body)' }}>
      {label ? <span style={{ fontFamily: 'var(--wx-font-display)', fontSize: 'var(--wx-label-sm-size)', fontWeight: 'var(--wx-label-sm-weight)', letterSpacing: 'var(--wx-label-sm-ls)', color: dark ? 'var(--wx-on-dark-muted)' : 'var(--wx-body-2)' }}>{label}</span> : null}
      <input
        type={type} placeholder={placeholder} value={value} onChange={onChange} disabled={disabled}
        onFocus={() => setFocus(true)} onBlur={() => setFocus(false)}
        style={{ font: 'inherit', fontSize: 'var(--wx-body-sm-size)', lineHeight: 'var(--wx-body-sm-lh)',
          padding: '9px 12px', borderRadius: 'var(--wx-radius-sm)', outline: 'none',
          background: disabled ? 'var(--wx-offwhite)' : dark ? 'var(--wx-dark-elevated)' : 'var(--wx-canvas)',
          color: dark ? 'var(--wx-on-dark)' : 'var(--wx-ink)',
          border: dark ? `1px solid ${focus ? '#555' : '#333'}` : `1px solid ${focus ? 'var(--wx-primary)' : '#e0e0e0'}`,
          transition: 'border-color var(--wx-dur-hover) var(--wx-ease)', ...style }}
        {...rest}
      />
      {hint ? <span style={{ fontSize: 12, color: dark ? 'var(--wx-on-dark-muted)' : 'var(--wx-muted)' }}>{hint}</span> : null}
    </label>
  );
}
