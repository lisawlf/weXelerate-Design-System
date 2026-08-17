/* @ds-bundle: {"format":4,"namespace":"WeXelerateDesignSystem_417c29","components":[{"name":"Button","sourcePath":"components/core/Button.jsx"},{"name":"Card","sourcePath":"components/core/Card.jsx"},{"name":"EyebrowLabel","sourcePath":"components/core/EyebrowLabel.jsx"},{"name":"GlassPanel","sourcePath":"components/core/GlassPanel.jsx"},{"name":"Icon","sourcePath":"components/core/Icon.jsx"},{"name":"Input","sourcePath":"components/forms/Input.jsx"},{"name":"SectionBand","sourcePath":"components/layout/SectionBand.jsx"},{"name":"NavBar","sourcePath":"components/navigation/NavBar.jsx"},{"name":"NavLink","sourcePath":"components/navigation/NavLink.jsx"}],"sourceHashes":{"components/core/Button.jsx":"6be8f38aa9d3","components/core/Card.jsx":"59ef0f81e19e","components/core/EyebrowLabel.jsx":"fc6a4b3751b8","components/core/GlassPanel.jsx":"303e217b7e0d","components/core/Icon.jsx":"6bf4c98fe03e","components/forms/Input.jsx":"4e149413bb93","components/layout/SectionBand.jsx":"da1cc092a008","components/navigation/NavBar.jsx":"ef749bfbe7e0","components/navigation/NavLink.jsx":"3b4e5834fe85","ui_kits/website/Chrome.jsx":"ab37cbb97c04","ui_kits/website/Contact.jsx":"d68eadb7878a","ui_kits/website/Events.jsx":"dd8fa66c4c1c","ui_kits/website/Home.jsx":"483cdeced973","ui_kits/website/Programs.jsx":"695a3b8f5e01"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.WeXelerateDesignSystem_417c29 = window.WeXelerateDesignSystem_417c29 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/core/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const BASE = {
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: 8,
  fontFamily: 'var(--wx-font-display)',
  fontWeight: 'var(--wx-button-weight)',
  fontSize: 'var(--wx-button-size)',
  lineHeight: 1,
  letterSpacing: 0,
  borderRadius: 'var(--wx-radius-pill)',
  cursor: 'pointer',
  whiteSpace: 'nowrap',
  transition: 'background-color var(--wx-dur-hover) var(--wx-ease), color var(--wx-dur-hover) var(--wx-ease), border-color var(--wx-dur-hover) var(--wx-ease)'
};
const SIZES = {
  sm: {
    padding: '8px 18px'
  },
  md: {
    padding: '11px 26px'
  },
  lg: {
    padding: '14px 32px',
    fontSize: 14
  }
};

// Ghost pill at rest, inversion on hover. There is no filled button at rest —
// the inversion IS the emphasis. `brand` is the one filled variant (teal, white label).
const VARIANTS = {
  primary: {
    rest: {
      background: 'transparent',
      color: 'var(--wx-ink)',
      border: '1px solid var(--wx-ink)'
    },
    hover: {
      background: 'var(--wx-ink)',
      color: 'var(--wx-canvas)',
      border: '1px solid var(--wx-ink)'
    }
  },
  onDark: {
    rest: {
      background: 'transparent',
      color: 'var(--wx-on-dark-muted)',
      border: '1px solid #444'
    },
    hover: {
      background: 'var(--wx-on-dark)',
      color: 'var(--wx-ink)',
      border: '1px solid var(--wx-on-dark)'
    }
  },
  brand: {
    rest: {
      background: 'var(--wx-primary)',
      color: 'var(--wx-ink-invert)',
      border: '1px solid var(--wx-primary)'
    },
    hover: {
      background: 'var(--wx-primary-deep)',
      color: 'var(--wx-ink-invert)',
      border: '1px solid var(--wx-primary-deep)'
    }
  },
  spark: {
    rest: {
      background: 'var(--wx-whisper)',
      color: 'var(--wx-ink)',
      border: '1px solid var(--wx-whisper)'
    },
    hover: {
      background: 'var(--wx-ink)',
      color: 'var(--wx-whisper)',
      border: '1px solid var(--wx-ink)'
    }
  }
};
function Button({
  children,
  variant = 'primary',
  size = 'md',
  disabled = false,
  as = 'button',
  icon = null,
  iconAfter = null,
  onClick,
  href,
  style,
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  const v = VARIANTS[variant] || VARIANTS.primary;
  const Tag = href ? 'a' : as;
  return /*#__PURE__*/React.createElement(Tag, _extends({
    href: href,
    onClick: disabled ? undefined : onClick,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    disabled: Tag === 'button' ? disabled : undefined,
    style: {
      ...BASE,
      ...(SIZES[size] || SIZES.md),
      ...(disabled || !hover ? v.rest : v.hover),
      opacity: disabled ? 0.4 : 1,
      cursor: disabled ? 'not-allowed' : 'pointer',
      textDecoration: 'none',
      borderBottom: undefined,
      ...style
    }
  }, rest), icon, children, iconAfter);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Button.jsx", error: String((e && e.message) || e) }); }

// components/core/EyebrowLabel.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
// Every section opens with one: a 28×2px dash, then mono uppercase micro-copy.
function EyebrowLabel({
  children,
  tone = 'light',
  style,
  ...rest
}) {
  const onPhoto = tone === 'photo';
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 10,
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("span", {
    style: {
      width: 28,
      height: 2,
      background: onPhoto ? 'rgba(255,255,255,.5)' : tone === 'dark' ? '#3a3a3a' : '#ccc',
      flex: 'none'
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--wx-font-mono)',
      fontSize: 'var(--wx-eyebrow-size)',
      lineHeight: 1.4,
      letterSpacing: 'var(--wx-eyebrow-ls)',
      textTransform: 'uppercase',
      color: onPhoto ? 'rgba(255,255,255,.65)' : tone === 'dark' ? 'var(--wx-on-dark-muted)' : 'var(--wx-muted)'
    }
  }, children));
}
Object.assign(__ds_scope, { EyebrowLabel });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/EyebrowLabel.jsx", error: String((e && e.message) || e) }); }

// components/core/GlassPanel.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
// The base box. Every box on a weXelerate page is this one material — only fill
// density and radius vary. The rim + glint live in .wx-glass (tokens/material.css).
function GlassPanel({
  children,
  tone = 'light',
  density = 'dense',
  radius = 'glass',
  padding = 'var(--wx-space-lg)',
  className = '',
  style,
  ...rest
}) {
  const classes = ['wx-glass'];
  if (tone === 'dark') classes.push('wx-glass--dark');
  if (density === 'chrome') classes.push('wx-glass--chrome');
  if (radius === 'sm') classes.push('wx-glass--sm');
  if (className) classes.push(className);
  return /*#__PURE__*/React.createElement("div", _extends({
    className: classes.join(' '),
    style: {
      padding,
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { GlassPanel });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/GlassPanel.jsx", error: String((e && e.message) || e) }); }

// components/core/Card.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
// Content card = a GlassPanel at content scale. Hover THINS the fill (more backdrop
// reads through) — it never gains a grey tint.
function Card({
  title,
  description,
  eyebrow,
  accentBar = false,
  href,
  linkLabel,
  variant = 'default',
  image,
  icon,
  children,
  style,
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  const dark = variant === 'dark';
  if (variant === 'photo') {
    return /*#__PURE__*/React.createElement("div", _extends({
      onMouseEnter: () => setHover(true),
      onMouseLeave: () => setHover(false),
      style: {
        position: 'relative',
        overflow: 'hidden',
        borderRadius: 'var(--wx-radius-glass)',
        minHeight: 320,
        background: image ? `#0e0e0e url(${image}) center/cover no-repeat` : 'var(--wx-dark)',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-end',
        ...style
      }
    }, rest), /*#__PURE__*/React.createElement("div", {
      style: {
        position: 'absolute',
        inset: 0,
        background: 'var(--wx-overlay-photo)'
      }
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        position: 'relative',
        padding: 'var(--wx-space-lg)',
        display: 'flex',
        flexDirection: 'column',
        gap: 10
      }
    }, eyebrow ? /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: 'var(--wx-font-mono)',
        fontSize: 'var(--wx-eyebrow-size)',
        letterSpacing: 'var(--wx-eyebrow-ls)',
        textTransform: 'uppercase',
        color: 'rgba(255,255,255,.65)'
      }
    }, eyebrow) : null, title ? /*#__PURE__*/React.createElement("h3", {
      style: {
        fontFamily: 'var(--wx-font-display)',
        fontWeight: 700,
        fontSize: 'var(--wx-heading-md-size)',
        lineHeight: 'var(--wx-heading-md-lh)',
        letterSpacing: 'var(--wx-heading-md-ls)',
        color: 'var(--wx-on-dark)',
        margin: 0
      }
    }, title) : null, description ? /*#__PURE__*/React.createElement("p", {
      style: {
        fontFamily: 'var(--wx-font-body)',
        fontSize: 'var(--wx-body-sm-size)',
        lineHeight: 'var(--wx-body-sm-lh)',
        color: 'rgba(255,255,255,.78)',
        margin: 0,
        maxWidth: 460
      }
    }, description) : null, children));
  }
  return /*#__PURE__*/React.createElement(__ds_scope.GlassPanel, _extends({
    tone: dark ? 'dark' : 'light',
    density: hover && !dark ? 'chrome' : 'dense',
    padding: dark ? 'var(--wx-card-dark-pad)' : 'var(--wx-card-pad)',
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 10,
      ...style
    }
  }, rest), accentBar ? /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'block',
      width: 28,
      height: 2,
      background: 'var(--wx-whisper)',
      marginBottom: 6
    }
  }) : null, icon ? /*#__PURE__*/React.createElement("span", {
    style: {
      width: 36,
      height: 36,
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: 'var(--wx-radius-md)',
      background: dark ? 'var(--wx-dark-elevated)' : 'var(--wx-surface-card)',
      marginBottom: 6
    }
  }, icon) : null, eyebrow ? /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--wx-font-mono)',
      fontSize: 'var(--wx-eyebrow-size)',
      letterSpacing: 'var(--wx-eyebrow-ls)',
      textTransform: 'uppercase',
      color: dark ? 'var(--wx-on-dark-muted)' : 'var(--wx-muted)'
    }
  }, eyebrow) : null, title ? /*#__PURE__*/React.createElement("h3", {
    style: {
      fontFamily: 'var(--wx-font-display)',
      fontWeight: 700,
      fontSize: dark ? 'var(--wx-heading-md-size)' : 'var(--wx-heading-sm-size)',
      lineHeight: 'var(--wx-heading-sm-lh)',
      letterSpacing: dark ? 'var(--wx-heading-md-ls)' : 0,
      color: dark ? 'var(--wx-on-dark)' : 'var(--wx-ink-soft)',
      margin: 0
    }
  }, title) : null, description ? /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--wx-font-body)',
      fontSize: 'var(--wx-body-sm-size)',
      lineHeight: 'var(--wx-body-sm-lh)',
      color: dark ? 'var(--wx-on-dark-muted)' : 'var(--wx-body-2)',
      margin: 0
    }
  }, description) : null, children, linkLabel ? /*#__PURE__*/React.createElement("a", {
    href: href || '#',
    style: {
      marginTop: 'auto',
      paddingTop: 12,
      fontFamily: 'var(--wx-font-display)',
      fontSize: 'var(--wx-label-sm-size)',
      fontWeight: 'var(--wx-label-sm-weight)',
      letterSpacing: 'var(--wx-label-sm-ls)',
      color: dark ? 'var(--wx-on-dark)' : 'var(--wx-link)',
      textDecoration: 'none',
      borderBottom: 'none'
    }
  }, linkLabel, " \u2192") : null);
}
Object.assign(__ds_scope, { Card });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Card.jsx", error: String((e && e.message) || e) }); }

// components/core/Icon.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
// SUBSTITUTION: the brand's canonical set is Streamline Ultimate (Light), which is
// licensed and not present in the provided sources. Lucide (1.1px-equivalent thin
// stroke, round caps) stands in from CDN. Monochrome, currentColor, never lime.
const CDN = 'https://cdn.jsdelivr.net/npm/lucide-static@0.441.0/icons/';
function Icon({
  name,
  size = 20,
  stroke = 1.1,
  style,
  ...rest
}) {
  const url = `url("${CDN}${name}.svg")`;
  return /*#__PURE__*/React.createElement("span", _extends({
    role: "img",
    "aria-label": name,
    style: {
      display: 'inline-block',
      width: size,
      height: size,
      flex: 'none',
      background: 'currentColor',
      WebkitMask: `${url} center/contain no-repeat`,
      mask: `${url} center/contain no-repeat`,
      opacity: stroke < 1.5 ? 0.92 : 1,
      ...style
    }
  }, rest));
}
Object.assign(__ds_scope, { Icon });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Icon.jsx", error: String((e && e.message) || e) }); }

// components/forms/Input.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Input({
  tone = 'light',
  label,
  hint,
  type = 'text',
  placeholder,
  value,
  onChange,
  disabled = false,
  style,
  ...rest
}) {
  const [focus, setFocus] = React.useState(false);
  const dark = tone === 'dark';
  return /*#__PURE__*/React.createElement("label", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 6,
      fontFamily: 'var(--wx-font-body)'
    }
  }, label ? /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--wx-font-display)',
      fontSize: 'var(--wx-label-sm-size)',
      fontWeight: 'var(--wx-label-sm-weight)',
      letterSpacing: 'var(--wx-label-sm-ls)',
      color: dark ? 'var(--wx-on-dark-muted)' : 'var(--wx-body-2)'
    }
  }, label) : null, /*#__PURE__*/React.createElement("input", _extends({
    type: type,
    placeholder: placeholder,
    value: value,
    onChange: onChange,
    disabled: disabled,
    onFocus: () => setFocus(true),
    onBlur: () => setFocus(false),
    style: {
      font: 'inherit',
      fontSize: 'var(--wx-body-sm-size)',
      lineHeight: 'var(--wx-body-sm-lh)',
      padding: '9px 12px',
      borderRadius: 'var(--wx-radius-sm)',
      outline: 'none',
      background: disabled ? 'var(--wx-offwhite)' : dark ? 'var(--wx-dark-elevated)' : 'var(--wx-canvas)',
      color: dark ? 'var(--wx-on-dark)' : 'var(--wx-ink)',
      border: dark ? `1px solid ${focus ? '#555' : '#333'}` : `1px solid ${focus ? 'var(--wx-primary)' : '#e0e0e0'}`,
      transition: 'border-color var(--wx-dur-hover) var(--wx-ease)',
      ...style
    }
  }, rest)), hint ? /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 12,
      color: dark ? 'var(--wx-on-dark-muted)' : 'var(--wx-muted)'
    }
  }, hint) : null);
}
Object.assign(__ds_scope, { Input });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Input.jsx", error: String((e && e.message) || e) }); }

// components/layout/SectionBand.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
// Editorial band: full-width, 80px vertical padding, closed by a 1px hairline,
// content capped at 1440px with 48px gutters.
function SectionBand({
  eyebrow,
  title,
  intro,
  tone = 'canvas',
  quiet = false,
  divider = true,
  children,
  style,
  ...rest
}) {
  const dark = tone === 'dark';
  const bg = dark ? 'var(--wx-dark-whitespace)' : tone === 'tint' ? 'var(--wx-surface-card)' : 'var(--wx-canvas)';
  return /*#__PURE__*/React.createElement("section", _extends({
    style: {
      background: bg,
      padding: `${quiet ? 'var(--wx-section-y-quiet)' : 'var(--wx-section-y)'} var(--wx-page-x)`,
      borderBottom: divider ? `1px solid ${dark ? '#2a2a2a' : 'var(--wx-hairline)'}` : 'none',
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--wx-container)',
      margin: '0 auto'
    }
  }, eyebrow || title || intro ? /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--wx-space-base)',
      marginBottom: 'var(--wx-space-2xl)',
      maxWidth: 760
    }
  }, eyebrow ? /*#__PURE__*/React.createElement(__ds_scope.EyebrowLabel, {
    tone: dark ? 'dark' : 'light'
  }, eyebrow) : null, title ? /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: 'var(--wx-font-display)',
      fontWeight: 700,
      fontSize: 'var(--wx-display-md-size)',
      lineHeight: 'var(--wx-display-md-lh)',
      letterSpacing: 'var(--wx-display-md-ls)',
      color: dark ? 'var(--wx-on-dark)' : 'var(--wx-ink-soft)',
      margin: 0
    }
  }, title) : null, intro ? /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--wx-font-body)',
      fontSize: 'var(--wx-body-lg-size)',
      lineHeight: 'var(--wx-body-lg-lh)',
      color: dark ? 'var(--wx-on-dark-muted)' : 'var(--wx-body)',
      margin: 0
    }
  }, intro) : null) : null, children));
}
Object.assign(__ds_scope, { SectionBand });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/layout/SectionBand.jsx", error: String((e && e.message) || e) }); }

// components/navigation/NavLink.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
// Sticky-nav item. Hover darkens the text to ink and washes an ink tint behind it,
// so it reads on glass regardless of what is scrolling underneath.
function NavLink({
  children,
  href = '#',
  active = false,
  tone = 'light',
  hasMenu = false,
  onClick,
  style,
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  const dark = tone === 'dark';
  const on = hover || active;
  return /*#__PURE__*/React.createElement("a", _extends({
    href: href,
    onClick: onClick,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 6,
      padding: '7px 14px',
      fontFamily: 'var(--wx-font-display)',
      fontSize: 'var(--wx-button-size)',
      fontWeight: 'var(--wx-button-weight)',
      lineHeight: 1,
      borderRadius: 'var(--wx-radius-pill)',
      textDecoration: 'none',
      borderBottom: 'none',
      color: dark ? on ? 'var(--wx-on-dark)' : 'var(--wx-on-dark-muted)' : on ? 'var(--wx-ink)' : 'var(--wx-body-2)',
      background: on ? dark ? 'rgba(255,255,255,.10)' : 'rgba(14,14,14,.06)' : 'transparent',
      transition: 'color var(--wx-dur-hover) var(--wx-ease), background var(--wx-dur-ui) var(--wx-ease)',
      ...style
    }
  }, rest), children, hasMenu ? /*#__PURE__*/React.createElement("span", {
    style: {
      width: 0,
      height: 0,
      borderLeft: '3.5px solid transparent',
      borderRight: '3.5px solid transparent',
      borderTop: '4px solid currentColor',
      opacity: .65,
      marginTop: 1
    }
  }) : null);
}
Object.assign(__ds_scope, { NavLink });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/NavLink.jsx", error: String((e && e.message) || e) }); }

// components/navigation/NavBar.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
// The reference glass implementation: a 60px sticky chrome slab with a bottom hairline.
function NavBar({
  items = [],
  activeItem,
  onNavigate,
  cta = 'Get in touch',
  onCta,
  logo = 'assets/logo-black.svg',
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("header", _extends({
    className: "wx-glass wx-glass--chrome",
    style: {
      position: 'sticky',
      top: 0,
      zIndex: 40,
      height: 'var(--wx-nav-h)',
      borderRadius: 0,
      boxShadow: 'none',
      borderBottom: '1px solid var(--wx-hairline)',
      display: 'flex',
      alignItems: 'center',
      gap: 'var(--wx-space-lg)',
      padding: '0 var(--wx-page-x)',
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("a", {
    href: "#top",
    style: {
      display: 'flex',
      alignItems: 'center',
      borderBottom: 'none'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: logo,
    alt: "weXelerate",
    style: {
      height: 19,
      display: 'block'
    }
  })), /*#__PURE__*/React.createElement("nav", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 2,
      marginLeft: 'var(--wx-space-base)'
    }
  }, items.map(it => /*#__PURE__*/React.createElement(__ds_scope.NavLink, {
    key: it.label,
    href: it.href || '#',
    hasMenu: !!it.hasMenu,
    active: activeItem === it.label,
    onClick: e => {
      if (onNavigate) {
        e.preventDefault();
        onNavigate(it);
      }
    }
  }, it.label))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginLeft: 'auto'
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Button, {
    size: "sm",
    onClick: onCta
  }, cta)));
}
Object.assign(__ds_scope, { NavBar });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/NavBar.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Chrome.jsx
try { (() => {
const {
  NavBar,
  GlassPanel,
  Button,
  Input,
  Icon,
  EyebrowLabel
} = window.WeXelerateDesignSystem_417c29;

// Placeholder for imagery: the provided sources contained no photography, so image
// areas render as labelled empty plates rather than invented pictures.
function Placeholder({
  label = 'Image',
  height = 'auto',
  style
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      height,
      background: 'var(--wx-offwhite)',
      borderRadius: 'var(--wx-radius-glass)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      ...style
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--wx-font-mono)',
      fontSize: 11,
      letterSpacing: '.1em',
      textTransform: 'uppercase',
      color: 'var(--wx-muted)'
    }
  }, label));
}
const NAV = [{
  label: 'Programs',
  hasMenu: true
}, {
  label: 'Ecosystem'
}, {
  label: 'Events'
}, {
  label: 'About'
}];
function SiteHeader({
  page,
  onNavigate
}) {
  return /*#__PURE__*/React.createElement(NavBar, {
    logo: "../../assets/logo-black.svg",
    items: NAV,
    activeItem: page,
    cta: "Get in touch",
    onNavigate: it => onNavigate(it.label),
    onCta: () => onNavigate('Contact')
  });
}
function SiteFooter() {
  const cols = [['Programs', ['Startup programs', 'Corporate labs', 'AI Adoption Lab', 'Quantum Austria']], ['Ecosystem', ['Partners', 'Startups', 'Investors', 'Community']], ['Company', ['About', 'Team', 'Careers', 'Press']]];
  return /*#__PURE__*/React.createElement("footer", {
    style: {
      background: 'var(--wx-dark)',
      color: 'var(--wx-on-dark)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--wx-container)',
      margin: '0 auto',
      padding: '56px var(--wx-page-x) 40px',
      display: 'grid',
      gridTemplateColumns: '2.2fr 1fr 1fr 1fr 1.6fr',
      gap: 'var(--wx-space-xl)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 14
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/logo-white.svg",
    alt: "weXelerate",
    style: {
      width: 150
    }
  }), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 'var(--wx-body-sm-size)',
      lineHeight: 'var(--wx-body-sm-lh)',
      color: 'var(--wx-on-dark-muted)',
      margin: 0,
      maxWidth: 300
    }
  }, "An ecosystem for innovation in Austria \u2014 connecting corporates, startups and researchers."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 8
    }
  }, ['linkedin', 'instagram', 'youtube'].map(n => /*#__PURE__*/React.createElement("span", {
    key: n,
    style: {
      width: 36,
      height: 36,
      borderRadius: 'var(--wx-radius-pill)',
      background: 'var(--wx-dark-elevated)',
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: 'var(--wx-on-dark-muted)'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: n,
    size: 16
  }))))), cols.map(([h, links]) => /*#__PURE__*/React.createElement("div", {
    key: h,
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 10
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--wx-font-display)',
      fontSize: 'var(--wx-label-sm-size)',
      fontWeight: 600,
      letterSpacing: 'var(--wx-label-sm-ls)',
      color: 'var(--wx-on-dark)'
    }
  }, h), links.map(l => /*#__PURE__*/React.createElement("a", {
    key: l,
    href: "#",
    style: {
      fontSize: 'var(--wx-body-sm-size)',
      color: 'var(--wx-faint)',
      textDecoration: 'none',
      borderBottom: 'none'
    }
  }, l)))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 12
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--wx-font-display)',
      fontSize: 'var(--wx-label-sm-size)',
      fontWeight: 600,
      letterSpacing: 'var(--wx-label-sm-ls)'
    }
  }, "Newsletter"), /*#__PURE__*/React.createElement(Input, {
    tone: "dark",
    placeholder: "your@email.com"
  }), /*#__PURE__*/React.createElement(Button, {
    variant: "onDark",
    size: "sm",
    style: {
      alignSelf: 'flex-start'
    }
  }, "Subscribe"))), /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--wx-dark-deep)',
      borderTop: '1px solid #2a2a2a'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--wx-container)',
      margin: '0 auto',
      padding: '16px var(--wx-page-x)',
      display: 'flex',
      gap: 20,
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--wx-font-mono)',
      fontSize: 'var(--wx-eyebrow-size)',
      letterSpacing: 'var(--wx-eyebrow-ls)',
      textTransform: 'uppercase',
      color: 'var(--wx-muted)'
    }
  }, "\xA9 2026 weXelerate \xB7 Vienna"), /*#__PURE__*/React.createElement("span", {
    style: {
      marginLeft: 'auto',
      display: 'flex',
      gap: 18
    }
  }, ['Imprint', 'Privacy', 'Terms'].map(l => /*#__PURE__*/React.createElement("a", {
    key: l,
    href: "#",
    style: {
      fontFamily: 'var(--wx-font-mono)',
      fontSize: 'var(--wx-eyebrow-size)',
      letterSpacing: 'var(--wx-eyebrow-ls)',
      textTransform: 'uppercase',
      color: 'var(--wx-muted)',
      textDecoration: 'none',
      borderBottom: 'none'
    }
  }, l))))));
}
Object.assign(window, {
  Placeholder,
  SiteHeader,
  SiteFooter,
  WX_NAV: NAV
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Chrome.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Contact.jsx
try { (() => {
const {
  Button,
  GlassPanel,
  EyebrowLabel,
  SectionBand,
  Input,
  Icon
} = window.WeXelerateDesignSystem_417c29;
function Contact() {
  const [sent, setSent] = React.useState(false);
  return /*#__PURE__*/React.createElement(SectionBand, {
    eyebrow: "Contact",
    title: "Tell us what you are building",
    intro: "We answer within two working days."
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1.2fr 1fr',
      gap: 'var(--wx-space-xl)',
      alignItems: 'start'
    }
  }, /*#__PURE__*/React.createElement(GlassPanel, {
    padding: "var(--wx-space-xl)",
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 14
    }
  }, /*#__PURE__*/React.createElement(Input, {
    label: "Name",
    placeholder: "Anna Berger"
  }), /*#__PURE__*/React.createElement(Input, {
    label: "Company",
    placeholder: "Acme GmbH"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      gridColumn: '1 / -1'
    }
  }, /*#__PURE__*/React.createElement(Input, {
    label: "Work email",
    placeholder: "anna@acme.at"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      gridColumn: '1 / -1'
    }
  }, /*#__PURE__*/React.createElement(Input, {
    label: "What do you want to do?",
    placeholder: "Run a corporate lab in Q1",
    hint: "A sentence is plenty."
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      gridColumn: '1 / -1',
      display: 'flex',
      alignItems: 'center',
      gap: 14
    }
  }, /*#__PURE__*/React.createElement(Button, {
    onClick: () => setSent(true)
  }, sent ? 'Sent — thank you' : 'Send message'), sent ? /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--wx-font-mono)',
      fontSize: 11,
      letterSpacing: '.1em',
      textTransform: 'uppercase',
      color: 'var(--wx-muted)'
    }
  }, "We reply within 2 days") : null)), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 14
    }
  }, /*#__PURE__*/React.createElement(EyebrowLabel, null, "Vienna"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 'var(--wx-body-md-size)',
      lineHeight: 'var(--wx-body-md-lh)',
      color: 'var(--wx-body)',
      margin: 0
    }
  }, "Praterstra\xDFe 1, 1020 Vienna", /*#__PURE__*/React.createElement("br", null), "Austria"), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontSize: 'var(--wx-body-md-size)'
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: "#"
  }, "hello@wexelerate.com")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 8
    }
  }, ['linkedin', 'instagram', 'youtube'].map(n => /*#__PURE__*/React.createElement("span", {
    key: n,
    style: {
      width: 36,
      height: 36,
      borderRadius: 'var(--wx-radius-pill)',
      border: '1px solid var(--wx-hairline-strong)',
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: 'var(--wx-ink)'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: n,
    size: 15
  })))))));
}
Object.assign(window, {
  Contact
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Contact.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Events.jsx
try { (() => {
const {
  Button,
  Card,
  GlassPanel,
  EyebrowLabel,
  SectionBand,
  Input,
  Icon
} = window.WeXelerateDesignSystem_417c29;
function Events({
  onNavigate
}) {
  const [registered, setRegistered] = React.useState(null);
  const events = [['Quantum Summit Vienna', 'Sep 24, 2026 · 09:00', 'Main stage'], ['AI Adoption Demo Day', 'Oct 08, 2026 · 17:00', 'Event floor'], ['Ecosystem Breakfast', 'Oct 21, 2026 · 08:30', 'Café level']];
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(SectionBand, {
    eyebrow: "Events",
    title: "Come to the building",
    intro: "Demo days, summits and tours. Most are free; all are in Vienna."
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1.6fr 1fr',
      gap: 'var(--wx-space-card-gap)'
    }
  }, /*#__PURE__*/React.createElement(Card, {
    variant: "photo",
    eyebrow: "Featured \xB7 Sep 24",
    title: "Quantum Summit Vienna",
    description: "Research groups, funds and industrial partners on one stage for a day."
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "onDark",
    size: "sm",
    style: {
      alignSelf: 'flex-start',
      marginTop: 6
    },
    onClick: () => setRegistered('Quantum Summit Vienna')
  }, "Register")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--wx-space-card-gap)'
    }
  }, events.map(([n, when, where], i) => /*#__PURE__*/React.createElement(GlassPanel, {
    key: n,
    padding: "18px 20px",
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 6
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--wx-font-mono)',
      fontSize: 'var(--wx-eyebrow-size)',
      letterSpacing: 'var(--wx-eyebrow-ls)',
      textTransform: 'uppercase',
      color: 'var(--wx-muted)'
    }
  }, when), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--wx-font-display)',
      fontWeight: 700,
      fontSize: 'var(--wx-heading-sm-size)',
      color: 'var(--wx-ink-soft)'
    }
  }, n), /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 8,
      fontSize: 'var(--wx-body-sm-size)',
      color: 'var(--wx-body-2)'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "map-pin",
    size: 14
  }), where), /*#__PURE__*/React.createElement("a", {
    href: "#",
    onClick: e => {
      e.preventDefault();
      setRegistered(n);
    },
    style: {
      marginTop: 4,
      fontFamily: 'var(--wx-font-display)',
      fontSize: 'var(--wx-label-sm-size)',
      fontWeight: 600,
      letterSpacing: 'var(--wx-label-sm-ls)',
      color: 'var(--wx-link)',
      borderBottom: 'none'
    }
  }, "Register \u2192")))))), /*#__PURE__*/React.createElement(SectionBand, {
    tone: "dark",
    eyebrow: "Tours",
    title: "See the space",
    quiet: true,
    intro: "Guided tours every Thursday at 16:00."
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 12,
      alignItems: 'flex-end',
      maxWidth: 520
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }, /*#__PURE__*/React.createElement(Input, {
    tone: "dark",
    label: "Work email",
    placeholder: "you@company.at"
  })), /*#__PURE__*/React.createElement(Button, {
    variant: "onDark",
    onClick: () => setRegistered('Guided tour')
  }, "Book a slot"))), registered ? /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'fixed',
      left: 0,
      right: 0,
      bottom: 24,
      display: 'flex',
      justifyContent: 'center',
      zIndex: 70
    }
  }, /*#__PURE__*/React.createElement(GlassPanel, {
    radius: "sm",
    padding: "14px 20px",
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 14
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 28,
      height: 2,
      background: 'var(--wx-whisper)'
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--wx-font-body)',
      fontSize: 'var(--wx-body-sm-size)',
      color: 'var(--wx-ink)'
    }
  }, "Registered for ", /*#__PURE__*/React.createElement("strong", null, registered), ". Confirmation on its way."), /*#__PURE__*/React.createElement("button", {
    onClick: () => setRegistered(null),
    style: {
      background: 'none',
      border: 'none',
      cursor: 'pointer',
      color: 'var(--wx-muted)',
      fontFamily: 'var(--wx-font-mono)',
      fontSize: 11,
      letterSpacing: '.1em'
    }
  }, "CLOSE"))) : null);
}
Object.assign(window, {
  Events
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Events.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Home.jsx
try { (() => {
const {
  Button,
  Card,
  GlassPanel,
  EyebrowLabel,
  SectionBand,
  Icon
} = window.WeXelerateDesignSystem_417c29;
function Hero({
  onNavigate
}) {
  const [open, setOpen] = React.useState(0);
  const panels = ['Startups', 'Corporates', 'Researchers', 'Investors'];
  return /*#__PURE__*/React.createElement("section", {
    style: {
      borderBottom: '1px solid var(--wx-hairline)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--wx-container)',
      margin: '0 auto',
      padding: 'var(--wx-section-y) var(--wx-page-x)',
      display: 'flex',
      gap: 72,
      alignItems: 'flex-start'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 380,
      flex: 'none',
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--wx-space-lg)'
    }
  }, /*#__PURE__*/React.createElement(EyebrowLabel, null, "Innovation ecosystem \xB7 Austria"), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontSize: 'var(--wx-display-lg-size)',
      lineHeight: 'var(--wx-display-lg-lh)',
      letterSpacing: 'var(--wx-display-lg-ls)',
      color: 'var(--wx-ink-soft)'
    }
  }, "Where Austria builds what comes next"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 'var(--wx-body-lg-size)',
      lineHeight: 'var(--wx-body-lg-lh)',
      color: 'var(--wx-body)',
      margin: 0
    }
  }, "We run applied programs in AI and quantum, and connect the corporates, startups and researchers who deliver them."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 10
    }
  }, /*#__PURE__*/React.createElement(Button, {
    onClick: () => onNavigate('Programs')
  }, "See the programs"), /*#__PURE__*/React.createElement(Button, {
    variant: "brand",
    size: "md",
    onClick: () => onNavigate('Events')
  }, "Book a tour")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 8,
      marginTop: 'var(--wx-space-sm)'
    }
  }, ['linkedin', 'instagram', 'youtube'].map(n => /*#__PURE__*/React.createElement("span", {
    key: n,
    style: {
      width: 34,
      height: 34,
      borderRadius: 'var(--wx-radius-pill)',
      border: '1px solid var(--wx-hairline-strong)',
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: 'var(--wx-ink)'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: n,
    size: 15
  }))))), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      height: 520,
      display: 'flex',
      gap: 12
    }
  }, panels.map((p, i) => /*#__PURE__*/React.createElement("div", {
    key: p,
    onMouseEnter: () => setOpen(i),
    style: {
      flex: open === i ? 3 : 1,
      position: 'relative',
      overflow: 'hidden',
      borderRadius: 'var(--wx-radius-glass)',
      background: 'var(--wx-offwhite)',
      transition: 'flex var(--wx-dur-slow) var(--wx-ease)',
      cursor: 'pointer',
      display: 'flex',
      alignItems: 'flex-end'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      inset: 0,
      background: 'var(--wx-overlay-photo)',
      opacity: open === i ? 1 : .55
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'relative',
      padding: 18,
      fontFamily: 'var(--wx-font-display)',
      fontWeight: 700,
      fontSize: 17,
      color: 'var(--wx-on-dark)',
      writingMode: open === i ? 'horizontal-tb' : 'vertical-rl'
    }
  }, p), /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      top: 14,
      left: 14,
      fontFamily: 'var(--wx-font-mono)',
      fontSize: 10,
      letterSpacing: '.1em',
      color: 'rgba(255,255,255,.6)'
    }
  }, "IMAGE"))))), /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--wx-container)',
      margin: '0 auto',
      padding: '0 var(--wx-page-x) var(--wx-section-y-quiet)'
    }
  }, /*#__PURE__*/React.createElement(GlassPanel, {
    density: "chrome",
    radius: "sm",
    padding: "18px 26px",
    style: {
      display: 'flex',
      gap: 'var(--wx-space-3xl)',
      flexWrap: 'wrap',
      border: '1px solid var(--wx-ink)',
      boxShadow: 'none',
      borderRadius: 'var(--wx-radius-pill)'
    }
  }, [['700+', 'startups supported'], ['150+', 'corporate partners'], ['9', 'program cohorts'], ['€1.2bn', 'follow-on funding']].map(([n, l]) => /*#__PURE__*/React.createElement("div", {
    key: l,
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 2
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--wx-font-display)',
      fontWeight: 700,
      fontSize: 26,
      letterSpacing: '-1px',
      color: 'var(--wx-ink)'
    }
  }, n), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--wx-font-mono)',
      fontSize: 'var(--wx-eyebrow-size)',
      letterSpacing: 'var(--wx-eyebrow-ls)',
      textTransform: 'uppercase',
      color: 'var(--wx-muted)'
    }
  }, l))))));
}
const PROGRAMS = [['AI Adoption Lab', 'Twelve weeks pairing corporates with applied AI startups.'], ['Quantum Austria', 'From research group to first industrial pilot.'], ['Venture Studio', 'We co-found with operators who have domain depth.'], ['Corporate Labs', 'Innovation programs run inside your organisation.'], ['Scale Program', 'Market entry support for Series A and later.']];
function Home({
  onNavigate
}) {
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Hero, {
    onNavigate: onNavigate
  }), /*#__PURE__*/React.createElement(SectionBand, {
    eyebrow: "Programs",
    title: "Applied programs, not accelerator theatre",
    intro: "Each program pairs a cohort with the corporates and researchers who can put the work into production."
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(5,1fr)',
      gap: 'var(--wx-space-card-gap)'
    }
  }, PROGRAMS.map(([t, d], i) => /*#__PURE__*/React.createElement(Card, {
    key: t,
    accentBar: i === 0,
    eyebrow: `0${i + 1}`,
    title: t,
    description: d,
    linkLabel: "Learn more",
    href: "#"
  })))), /*#__PURE__*/React.createElement(SectionBand, {
    tone: "dark",
    eyebrow: "Why weXelerate",
    title: "One address for Austrian innovation",
    intro: "Programs, space and network in one place \u2014 12,000m\xB2 in Vienna's second district."
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 'var(--wx-space-card-gap)'
    }
  }, /*#__PURE__*/React.createElement(Card, {
    variant: "dark",
    title: "Corporate innovation",
    description: "We design and run the program, recruit the startups, and stay until something ships.",
    icon: /*#__PURE__*/React.createElement(Icon, {
      name: "building-2",
      style: {
        color: 'var(--wx-on-dark)'
      }
    })
  }), /*#__PURE__*/React.createElement(Card, {
    variant: "dark",
    title: "Community & space",
    description: "Desks, labs and event floors for 600 people building in the same building.",
    icon: /*#__PURE__*/React.createElement(Icon, {
      name: "users",
      style: {
        color: 'var(--wx-on-dark)'
      }
    })
  }))), /*#__PURE__*/React.createElement(SectionBand, {
    tone: "tint",
    eyebrow: "Testimonials",
    title: "What partners say",
    quiet: true
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3,1fr)',
      gap: 'var(--wx-space-card-gap)'
    }
  }, [['“The cohort gave us three pilots in a quarter — two are now in production.”', 'Head of Digital, Energy'], ['“The only place in Vienna where research, corporates and founders sit on one floor.”', 'Professor, TU Wien'], ['“Programs are run by operators. It shows.”', 'Partner, Seed Fund']].map(([q, a]) => /*#__PURE__*/React.createElement(Card, {
    key: a
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      gap: 2,
      color: 'var(--wx-rating-gold)'
    }
  }, [0, 1, 2, 3, 4].map(i => /*#__PURE__*/React.createElement(Icon, {
    key: i,
    name: "star",
    size: 13
  }))), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--wx-font-body)',
      fontSize: 'var(--wx-body-md-size)',
      lineHeight: 'var(--wx-body-md-lh)',
      color: 'var(--wx-ink-soft)',
      margin: '8px 0 0'
    }
  }, q), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--wx-font-mono)',
      fontSize: 'var(--wx-eyebrow-size)',
      letterSpacing: 'var(--wx-eyebrow-ls)',
      textTransform: 'uppercase',
      color: 'var(--wx-muted)',
      marginTop: 12
    }
  }, a))))));
}
Object.assign(window, {
  Home,
  WX_PROGRAMS: PROGRAMS
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Home.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Programs.jsx
try { (() => {
const {
  Button,
  Card,
  GlassPanel,
  EyebrowLabel,
  SectionBand,
  Icon
} = window.WeXelerateDesignSystem_417c29;
const FILTERS = ['All', 'AI', 'Quantum', 'Corporate', 'Scale'];
function Programs({
  onNavigate
}) {
  const [filter, setFilter] = React.useState('All');
  const [selected, setSelected] = React.useState(null);
  const rows = [['AI Adoption Lab', 'AI', '12 weeks · Vienna', 'Applications open'], ['Quantum Austria', 'Quantum', '6 months · Vienna + Linz', 'Applications open'], ['Venture Studio', 'AI', 'Rolling · Vienna', 'By introduction'], ['Corporate Labs', 'Corporate', 'Custom · On site', 'Enquire'], ['Scale Program', 'Scale', '9 months · DACH', 'Waitlist']].filter(r => filter === 'All' || r[1] === filter);
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(SectionBand, {
    eyebrow: "Programs",
    title: "Choose the program that fits the stage you are at",
    intro: "Five programs, one ecosystem. Every cohort is matched to corporate partners before it starts."
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 8,
      marginBottom: 'var(--wx-space-lg)'
    }
  }, FILTERS.map(fl => /*#__PURE__*/React.createElement("button", {
    key: fl,
    onClick: () => setFilter(fl),
    style: {
      padding: '8px 18px',
      borderRadius: 'var(--wx-radius-pill)',
      cursor: 'pointer',
      fontFamily: 'var(--wx-font-display)',
      fontSize: 'var(--wx-button-size)',
      fontWeight: 600,
      border: '1px solid ' + (filter === fl ? 'var(--wx-ink)' : 'var(--wx-hairline-strong)'),
      background: filter === fl ? 'var(--wx-ink)' : 'transparent',
      color: filter === fl ? 'var(--wx-canvas)' : 'var(--wx-body-2)',
      transition: 'all var(--wx-dur-hover) var(--wx-ease)'
    }
  }, fl))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--wx-space-card-gap)'
    }
  }, rows.map(([name, tag, meta, status], i) => /*#__PURE__*/React.createElement(GlassPanel, {
    key: name,
    padding: "20px 24px",
    onClick: () => setSelected(name),
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 'var(--wx-space-lg)',
      cursor: 'pointer'
    }
  }, i === 0 ? /*#__PURE__*/React.createElement("span", {
    style: {
      width: 28,
      height: 2,
      background: 'var(--wx-whisper)',
      flex: 'none'
    }
  }) : null, /*#__PURE__*/React.createElement("div", {
    style: {
      minWidth: 240
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--wx-font-display)',
      fontWeight: 700,
      fontSize: 'var(--wx-heading-sm-size)',
      color: 'var(--wx-ink-soft)'
    }
  }, name), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--wx-font-mono)',
      fontSize: 'var(--wx-eyebrow-size)',
      letterSpacing: 'var(--wx-eyebrow-ls)',
      textTransform: 'uppercase',
      color: 'var(--wx-muted)',
      marginTop: 4
    }
  }, tag)), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 'var(--wx-body-sm-size)',
      color: 'var(--wx-body-2)'
    }
  }, meta), /*#__PURE__*/React.createElement("div", {
    style: {
      marginLeft: 'auto',
      display: 'flex',
      alignItems: 'center',
      gap: 16
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--wx-font-display)',
      fontSize: 'var(--wx-label-sm-size)',
      fontWeight: 600,
      letterSpacing: 'var(--wx-label-sm-ls)',
      color: 'var(--wx-link)'
    }
  }, status), /*#__PURE__*/React.createElement(Icon, {
    name: "arrow-right",
    size: 16,
    style: {
      color: 'var(--wx-ink)'
    }
  })))))), selected ? /*#__PURE__*/React.createElement("div", {
    onClick: () => setSelected(null),
    style: {
      position: 'fixed',
      inset: 0,
      background: 'rgba(14,14,14,.42)',
      zIndex: 60,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: 24
    }
  }, /*#__PURE__*/React.createElement(GlassPanel, {
    padding: "var(--wx-space-xl)",
    onClick: e => e.stopPropagation(),
    style: {
      width: 520,
      display: 'flex',
      flexDirection: 'column',
      gap: 14
    }
  }, /*#__PURE__*/React.createElement(EyebrowLabel, null, "Program \xB7 apply"), /*#__PURE__*/React.createElement("h3", {
    style: {
      fontFamily: 'var(--wx-font-display)',
      fontWeight: 700,
      fontSize: 'var(--wx-heading-md-size)',
      letterSpacing: 'var(--wx-heading-md-ls)',
      color: 'var(--wx-ink-soft)',
      margin: 0
    }
  }, selected), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 'var(--wx-body-md-size)',
      lineHeight: 'var(--wx-body-md-lh)',
      color: 'var(--wx-body)',
      margin: 0
    }
  }, "Cohorts start twice a year. Applications are reviewed with the corporate partners who host the pilots, so expect two conversations before a decision."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 10,
      marginTop: 6
    }
  }, /*#__PURE__*/React.createElement(Button, {
    onClick: () => setSelected(null)
  }, "Start application"), /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    size: "md",
    style: {
      border: '1px solid var(--wx-hairline-strong)'
    },
    onClick: () => setSelected(null)
  }, "Close")))) : null);
}
Object.assign(window, {
  Programs
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Programs.jsx", error: String((e && e.message) || e) }); }

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Card = __ds_scope.Card;

__ds_ns.EyebrowLabel = __ds_scope.EyebrowLabel;

__ds_ns.GlassPanel = __ds_scope.GlassPanel;

__ds_ns.Icon = __ds_scope.Icon;

__ds_ns.Input = __ds_scope.Input;

__ds_ns.SectionBand = __ds_scope.SectionBand;

__ds_ns.NavBar = __ds_scope.NavBar;

__ds_ns.NavLink = __ds_scope.NavLink;

})();
