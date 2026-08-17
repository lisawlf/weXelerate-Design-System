const { NavBar, GlassPanel, Button, Input, Icon, EyebrowLabel } = window.WeXelerateDesignSystem_417c29;

// Placeholder for imagery: the provided sources contained no photography, so image
// areas render as labelled empty plates rather than invented pictures.
function Placeholder({ label = 'Image', height = 'auto', style }) {
  return (
    <div style={{ height, background: 'var(--wx-offwhite)', borderRadius: 'var(--wx-radius-glass)',
      display: 'flex', alignItems: 'center', justifyContent: 'center', ...style }}>
      <span style={{ fontFamily: 'var(--wx-font-mono)', fontSize: 11, letterSpacing: '.1em', textTransform: 'uppercase', color: 'var(--wx-muted)' }}>{label}</span>
    </div>
  );
}

const NAV = [
  { label: 'Programs', hasMenu: true }, { label: 'Ecosystem' }, { label: 'Events' }, { label: 'About' }
];

function SiteHeader({ page, onNavigate }) {
  return <NavBar logo="../../assets/logo-black.svg" items={NAV} activeItem={page} cta="Get in touch"
    onNavigate={(it) => onNavigate(it.label)} onCta={() => onNavigate('Contact')} />;
}

function SiteFooter() {
  const cols = [
    ['Programs', ['Startup programs', 'Corporate labs', 'AI Adoption Lab', 'Quantum Austria']],
    ['Ecosystem', ['Partners', 'Startups', 'Investors', 'Community']],
    ['Company', ['About', 'Team', 'Careers', 'Press']]
  ];
  return (
    <footer style={{ background: 'var(--wx-dark)', color: 'var(--wx-on-dark)' }}>
      <div style={{ maxWidth: 'var(--wx-container)', margin: '0 auto', padding: '56px var(--wx-page-x) 40px',
        display: 'grid', gridTemplateColumns: '2.2fr 1fr 1fr 1fr 1.6fr', gap: 'var(--wx-space-xl)' }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
          <img src="../../assets/logo-white.svg" alt="weXelerate" style={{ width: 150 }} />
          <p style={{ fontSize: 'var(--wx-body-sm-size)', lineHeight: 'var(--wx-body-sm-lh)', color: 'var(--wx-on-dark-muted)', margin: 0, maxWidth: 300 }}>
            An ecosystem for innovation in Austria — connecting corporates, startups and researchers.
          </p>
          <div style={{ display: 'flex', gap: 8 }}>
            {['linkedin', 'instagram', 'youtube'].map((n) => (
              <span key={n} style={{ width: 36, height: 36, borderRadius: 'var(--wx-radius-pill)', background: 'var(--wx-dark-elevated)', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', color: 'var(--wx-on-dark-muted)' }}>
                <Icon name={n} size={16} />
              </span>
            ))}
          </div>
        </div>
        {cols.map(([h, links]) => (
          <div key={h} style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
            <span style={{ fontFamily: 'var(--wx-font-display)', fontSize: 'var(--wx-label-sm-size)', fontWeight: 600, letterSpacing: 'var(--wx-label-sm-ls)', color: 'var(--wx-on-dark)' }}>{h}</span>
            {links.map((l) => <a key={l} href="#" style={{ fontSize: 'var(--wx-body-sm-size)', color: 'var(--wx-faint)', textDecoration: 'none', borderBottom: 'none' }}>{l}</a>)}
          </div>
        ))}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
          <span style={{ fontFamily: 'var(--wx-font-display)', fontSize: 'var(--wx-label-sm-size)', fontWeight: 600, letterSpacing: 'var(--wx-label-sm-ls)' }}>Newsletter</span>
          <Input tone="dark" placeholder="your@email.com" />
          <Button variant="onDark" size="sm" style={{ alignSelf: 'flex-start' }}>Subscribe</Button>
        </div>
      </div>
      <div style={{ background: 'var(--wx-dark-deep)', borderTop: '1px solid #2a2a2a' }}>
        <div style={{ maxWidth: 'var(--wx-container)', margin: '0 auto', padding: '16px var(--wx-page-x)', display: 'flex', gap: 20, alignItems: 'center' }}>
          <span style={{ fontFamily: 'var(--wx-font-mono)', fontSize: 'var(--wx-eyebrow-size)', letterSpacing: 'var(--wx-eyebrow-ls)', textTransform: 'uppercase', color: 'var(--wx-muted)' }}>© 2026 weXelerate · Vienna</span>
          <span style={{ marginLeft: 'auto', display: 'flex', gap: 18 }}>
            {['Imprint', 'Privacy', 'Terms'].map((l) => <a key={l} href="#" style={{ fontFamily: 'var(--wx-font-mono)', fontSize: 'var(--wx-eyebrow-size)', letterSpacing: 'var(--wx-eyebrow-ls)', textTransform: 'uppercase', color: 'var(--wx-muted)', textDecoration: 'none', borderBottom: 'none' }}>{l}</a>)}
          </span>
        </div>
      </div>
    </footer>
  );
}

Object.assign(window, { Placeholder, SiteHeader, SiteFooter, WX_NAV: NAV });
