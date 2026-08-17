const { Button, Card, GlassPanel, EyebrowLabel, SectionBand, Icon } = window.WeXelerateDesignSystem_417c29;

function Hero({ onNavigate }) {
  const [open, setOpen] = React.useState(0);
  const panels = ['Startups', 'Corporates', 'Researchers', 'Investors'];
  return (
    <section style={{ borderBottom: '1px solid var(--wx-hairline)' }}>
      <div style={{ maxWidth: 'var(--wx-container)', margin: '0 auto', padding: 'var(--wx-section-y) var(--wx-page-x)',
        display: 'flex', gap: 72, alignItems: 'flex-start' }}>
        <div style={{ width: 380, flex: 'none', display: 'flex', flexDirection: 'column', gap: 'var(--wx-space-lg)' }}>
          <EyebrowLabel>Innovation ecosystem · Austria</EyebrowLabel>
          <h1 style={{ fontSize: 'var(--wx-display-lg-size)', lineHeight: 'var(--wx-display-lg-lh)', letterSpacing: 'var(--wx-display-lg-ls)', color: 'var(--wx-ink-soft)' }}>
            Where Austria builds what comes next
          </h1>
          <p style={{ fontSize: 'var(--wx-body-lg-size)', lineHeight: 'var(--wx-body-lg-lh)', color: 'var(--wx-body)', margin: 0 }}>
            We run applied programs in AI and quantum, and connect the corporates, startups and researchers who deliver them.
          </p>
          <div style={{ display: 'flex', gap: 10 }}>
            <Button onClick={() => onNavigate('Programs')}>See the programs</Button>
            <Button variant="brand" size="md" onClick={() => onNavigate('Events')}>Book a tour</Button>
          </div>
          <div style={{ display: 'flex', gap: 8, marginTop: 'var(--wx-space-sm)' }}>
            {['linkedin', 'instagram', 'youtube'].map((n) => (
              <span key={n} style={{ width: 34, height: 34, borderRadius: 'var(--wx-radius-pill)', border: '1px solid var(--wx-hairline-strong)', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', color: 'var(--wx-ink)' }}><Icon name={n} size={15} /></span>
            ))}
          </div>
        </div>
        <div style={{ flex: 1, height: 520, display: 'flex', gap: 12 }}>
          {panels.map((p, i) => (
            <div key={p} onMouseEnter={() => setOpen(i)}
              style={{ flex: open === i ? 3 : 1, position: 'relative', overflow: 'hidden',
                borderRadius: 'var(--wx-radius-glass)', background: 'var(--wx-offwhite)',
                transition: 'flex var(--wx-dur-slow) var(--wx-ease)', cursor: 'pointer',
                display: 'flex', alignItems: 'flex-end' }}>
              <span style={{ position: 'absolute', inset: 0, background: 'var(--wx-overlay-photo)', opacity: open === i ? 1 : .55 }} />
              <span style={{ position: 'relative', padding: 18, fontFamily: 'var(--wx-font-display)', fontWeight: 700,
                fontSize: 17, color: 'var(--wx-on-dark)', writingMode: open === i ? 'horizontal-tb' : 'vertical-rl' }}>{p}</span>
              <span style={{ position: 'absolute', top: 14, left: 14, fontFamily: 'var(--wx-font-mono)', fontSize: 10, letterSpacing: '.1em', color: 'rgba(255,255,255,.6)' }}>IMAGE</span>
            </div>
          ))}
        </div>
      </div>
      <div style={{ maxWidth: 'var(--wx-container)', margin: '0 auto', padding: '0 var(--wx-page-x) var(--wx-section-y-quiet)' }}>
        <GlassPanel density="chrome" radius="sm" padding="18px 26px"
          style={{ display: 'flex', gap: 'var(--wx-space-3xl)', flexWrap: 'wrap', border: '1px solid var(--wx-ink)', boxShadow: 'none', borderRadius: 'var(--wx-radius-pill)' }}>
          {[['700+', 'startups supported'], ['150+', 'corporate partners'], ['9', 'program cohorts'], ['€1.2bn', 'follow-on funding']].map(([n, l]) => (
            <div key={l} style={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
              <span style={{ fontFamily: 'var(--wx-font-display)', fontWeight: 700, fontSize: 26, letterSpacing: '-1px', color: 'var(--wx-ink)' }}>{n}</span>
              <span style={{ fontFamily: 'var(--wx-font-mono)', fontSize: 'var(--wx-eyebrow-size)', letterSpacing: 'var(--wx-eyebrow-ls)', textTransform: 'uppercase', color: 'var(--wx-muted)' }}>{l}</span>
            </div>
          ))}
        </GlassPanel>
      </div>
    </section>
  );
}

const PROGRAMS = [
  ['AI Adoption Lab', 'Twelve weeks pairing corporates with applied AI startups.'],
  ['Quantum Austria', 'From research group to first industrial pilot.'],
  ['Venture Studio', 'We co-found with operators who have domain depth.'],
  ['Corporate Labs', 'Innovation programs run inside your organisation.'],
  ['Scale Program', 'Market entry support for Series A and later.']
];

function Home({ onNavigate }) {
  return (
    <>
      <Hero onNavigate={onNavigate} />
      <SectionBand eyebrow="Programs" title="Applied programs, not accelerator theatre"
        intro="Each program pairs a cohort with the corporates and researchers who can put the work into production.">
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(5,1fr)', gap: 'var(--wx-space-card-gap)' }}>
          {PROGRAMS.map(([t, d], i) => (
            <Card key={t} accentBar={i === 0} eyebrow={`0${i + 1}`} title={t} description={d} linkLabel="Learn more" href="#" />
          ))}
        </div>
      </SectionBand>
      <SectionBand tone="dark" eyebrow="Why weXelerate" title="One address for Austrian innovation"
        intro="Programs, space and network in one place — 12,000m² in Vienna's second district.">
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'var(--wx-space-card-gap)' }}>
          <Card variant="dark" title="Corporate innovation" description="We design and run the program, recruit the startups, and stay until something ships." icon={<Icon name="building-2" style={{ color: 'var(--wx-on-dark)' }} />} />
          <Card variant="dark" title="Community & space" description="Desks, labs and event floors for 600 people building in the same building." icon={<Icon name="users" style={{ color: 'var(--wx-on-dark)' }} />} />
        </div>
      </SectionBand>
      <SectionBand tone="tint" eyebrow="Testimonials" title="What partners say" quiet>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 'var(--wx-space-card-gap)' }}>
          {[['“The cohort gave us three pilots in a quarter — two are now in production.”', 'Head of Digital, Energy'],
            ['“The only place in Vienna where research, corporates and founders sit on one floor.”', 'Professor, TU Wien'],
            ['“Programs are run by operators. It shows.”', 'Partner, Seed Fund']].map(([q, a]) => (
            <Card key={a}>
              <span style={{ display: 'inline-flex', gap: 2, color: 'var(--wx-rating-gold)' }}>{[0,1,2,3,4].map(i => <Icon key={i} name="star" size={13} />)}</span>
              <p style={{ fontFamily: 'var(--wx-font-body)', fontSize: 'var(--wx-body-md-size)', lineHeight: 'var(--wx-body-md-lh)', color: 'var(--wx-ink-soft)', margin: '8px 0 0' }}>{q}</p>
              <span style={{ fontFamily: 'var(--wx-font-mono)', fontSize: 'var(--wx-eyebrow-size)', letterSpacing: 'var(--wx-eyebrow-ls)', textTransform: 'uppercase', color: 'var(--wx-muted)', marginTop: 12 }}>{a}</span>
            </Card>
          ))}
        </div>
      </SectionBand>
    </>
  );
}

Object.assign(window, { Home, WX_PROGRAMS: PROGRAMS });
