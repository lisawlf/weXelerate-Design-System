import React from 'react';
import { NavLink } from './NavLink.jsx';
import { Button } from '../core/Button.jsx';

// The reference glass implementation: a 60px sticky chrome slab with a bottom hairline.
export function NavBar({ items = [], activeItem, onNavigate, cta = 'Get in touch', onCta, logo = 'assets/logo-black.png', style, ...rest }) {
  return (
    <header
      className="wx-glass wx-glass--chrome"
      style={{ position: 'sticky', top: 0, zIndex: 40, height: 'var(--wx-nav-h)', borderRadius: 0,
        boxShadow: 'none', borderBottom: '1px solid var(--wx-hairline)',
        display: 'flex', alignItems: 'center', gap: 'var(--wx-space-lg)',
        padding: '0 var(--wx-page-x)', ...style }}
      {...rest}
    >
      <a href="#top" style={{ display: 'flex', alignItems: 'center', borderBottom: 'none' }}>
        <img src={logo} alt="weXelerate" style={{ height: 19, display: 'block' }} />
      </a>
      <nav style={{ display: 'flex', alignItems: 'center', gap: 2, marginLeft: 'var(--wx-space-base)' }}>
        {items.map((it) => (
          <NavLink key={it.label} href={it.href || '#'} hasMenu={!!it.hasMenu} active={activeItem === it.label}
            onClick={(e) => { if (onNavigate) { e.preventDefault(); onNavigate(it); } }}>
            {it.label}
          </NavLink>
        ))}
      </nav>
      <div style={{ marginLeft: 'auto' }}>
        <Button size="sm" onClick={onCta}>{cta}</Button>
      </div>
    </header>
  );
}
