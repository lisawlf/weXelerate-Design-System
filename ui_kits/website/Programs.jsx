const { Button, Card, GlassPanel, EyebrowLabel, SectionBand, Icon } = window.WeXelerateDesignSystem_417c29;

const FILTERS = ['All', 'AI', 'Quantum', 'Corporate', 'Scale'];

function Programs({ onNavigate }) {
  const [filter, setFilter] = React.useState('All');
  const [selected, setSelected] = React.useState(null);
  const rows = [
    ['AI Adoption Lab', 'AI', '12 weeks · Vienna', 'Applications open'],
    ['Quantum Austria', 'Quantum', '6 months · Vienna + Linz', 'Applications open'],
    ['Venture Studio', 'AI', 'Rolling · Vienna', 'By introduction'],
    ['Corporate Labs', 'Corporate', 'Custom · On site', 'Enquire'],
    ['Scale Program', 'Scale', '9 months · DACH', 'Waitlist']
  ].filter(r => filter === 'All' || r[1] === filter);

  return (
    <>
      <SectionBand eyebrow="Programs" title="Choose the program that fits the stage you are at"
        intro="Five programs, one ecosystem. Every cohort is matched to corporate partners before it starts.">
        <div style={{ display: 'flex', gap: 8, marginBottom: 'var(--wx-space-lg)' }}>
          {FILTERS.map(fl => (
            <button key={fl} onClick={() => setFilter(fl)}
              style={{ padding: '8px 18px', borderRadius: 'var(--wx-radius-pill)', cursor: 'pointer',
                fontFamily: 'var(--wx-font-display)', fontSize: 'var(--wx-button-size)', fontWeight: 600,
                border: '1px solid ' + (filter === fl ? 'var(--wx-ink)' : 'var(--wx-hairline-strong)'),
                background: filter === fl ? 'var(--wx-ink)' : 'transparent',
                color: filter === fl ? 'var(--wx-canvas)' : 'var(--wx-body-2)',
                transition: 'all var(--wx-dur-hover) var(--wx-ease)' }}>{fl}</button>
          ))}
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--wx-space-card-gap)' }}>
          {rows.map(([name, tag, meta, status], i) => (
            <GlassPanel key={name} padding="20px 24px" onClick={() => setSelected(name)}
              style={{ display: 'flex', alignItems: 'center', gap: 'var(--wx-space-lg)', cursor: 'pointer' }}>
              {i === 0 ? <span style={{ width: 28, height: 2, background: 'var(--wx-whisper)', flex: 'none' }} /> : null}
              <div style={{ minWidth: 240 }}>
                <div style={{ fontFamily: 'var(--wx-font-display)', fontWeight: 700, fontSize: 'var(--wx-heading-sm-size)', color: 'var(--wx-ink-soft)' }}>{name}</div>
                <div style={{ fontFamily: 'var(--wx-font-mono)', fontSize: 'var(--wx-eyebrow-size)', letterSpacing: 'var(--wx-eyebrow-ls)', textTransform: 'uppercase', color: 'var(--wx-muted)', marginTop: 4 }}>{tag}</div>
              </div>
              <div style={{ fontSize: 'var(--wx-body-sm-size)', color: 'var(--wx-body-2)' }}>{meta}</div>
              <div style={{ marginLeft: 'auto', display: 'flex', alignItems: 'center', gap: 16 }}>
                <span style={{ fontFamily: 'var(--wx-font-display)', fontSize: 'var(--wx-label-sm-size)', fontWeight: 600, letterSpacing: 'var(--wx-label-sm-ls)', color: 'var(--wx-link)' }}>{status}</span>
                <Icon name="arrow-right" size={16} style={{ color: 'var(--wx-ink)' }} />
              </div>
            </GlassPanel>
          ))}
        </div>
      </SectionBand>

      {selected ? (
        <div onClick={() => setSelected(null)}
          style={{ position: 'fixed', inset: 0, background: 'rgba(14,14,14,.42)', zIndex: 60, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: 24 }}>
          <GlassPanel padding="var(--wx-space-xl)" onClick={(e) => e.stopPropagation()} style={{ width: 520, display: 'flex', flexDirection: 'column', gap: 14 }}>
            <EyebrowLabel>Program · apply</EyebrowLabel>
            <h3 style={{ fontFamily: 'var(--wx-font-display)', fontWeight: 700, fontSize: 'var(--wx-heading-md-size)', letterSpacing: 'var(--wx-heading-md-ls)', color: 'var(--wx-ink-soft)', margin: 0 }}>{selected}</h3>
            <p style={{ fontSize: 'var(--wx-body-md-size)', lineHeight: 'var(--wx-body-md-lh)', color: 'var(--wx-body)', margin: 0 }}>
              Cohorts start twice a year. Applications are reviewed with the corporate partners who host the pilots, so expect two conversations before a decision.
            </p>
            <div style={{ display: 'flex', gap: 10, marginTop: 6 }}>
              <Button onClick={() => setSelected(null)}>Start application</Button>
              <Button variant="primary" size="md" style={{ border: '1px solid var(--wx-hairline-strong)' }} onClick={() => setSelected(null)}>Close</Button>
            </div>
          </GlassPanel>
        </div>
      ) : null}
    </>
  );
}
Object.assign(window, { Programs });
