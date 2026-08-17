const { Button, Card, GlassPanel, EyebrowLabel, SectionBand, Input, Icon } = window.WeXelerateDesignSystem_417c29;

function Events({ onNavigate }) {
  const [registered, setRegistered] = React.useState(null);
  const events = [
    ['Quantum Summit Vienna', 'Sep 24, 2026 · 09:00', 'Main stage'],
    ['AI Adoption Demo Day', 'Oct 08, 2026 · 17:00', 'Event floor'],
    ['Ecosystem Breakfast', 'Oct 21, 2026 · 08:30', 'Café level']
  ];
  return (
    <>
      <SectionBand eyebrow="Events" title="Come to the building"
        intro="Demo days, summits and tours. Most are free; all are in Vienna.">
        <div style={{ display: 'grid', gridTemplateColumns: '1.6fr 1fr', gap: 'var(--wx-space-card-gap)' }}>
          <Card variant="photo" eyebrow="Featured · Sep 24" title="Quantum Summit Vienna"
            description="Research groups, funds and industrial partners on one stage for a day.">
            <Button variant="onDark" size="sm" style={{ alignSelf: 'flex-start', marginTop: 6 }} onClick={() => setRegistered('Quantum Summit Vienna')}>Register</Button>
          </Card>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--wx-space-card-gap)' }}>
            {events.map(([n, when, where], i) => (
              <GlassPanel key={n} padding="18px 20px" style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
                <span style={{ fontFamily: 'var(--wx-font-mono)', fontSize: 'var(--wx-eyebrow-size)', letterSpacing: 'var(--wx-eyebrow-ls)', textTransform: 'uppercase', color: 'var(--wx-muted)' }}>{when}</span>
                <span style={{ fontFamily: 'var(--wx-font-display)', fontWeight: 700, fontSize: 'var(--wx-heading-sm-size)', color: 'var(--wx-ink-soft)' }}>{n}</span>
                <span style={{ display: 'flex', alignItems: 'center', gap: 8, fontSize: 'var(--wx-body-sm-size)', color: 'var(--wx-body-2)' }}><Icon name="map-pin" size={14} />{where}</span>
                <a href="#" onClick={(e) => { e.preventDefault(); setRegistered(n); }} style={{ marginTop: 4, fontFamily: 'var(--wx-font-display)', fontSize: 'var(--wx-label-sm-size)', fontWeight: 600, letterSpacing: 'var(--wx-label-sm-ls)', color: 'var(--wx-link)', borderBottom: 'none' }}>Register →</a>
              </GlassPanel>
            ))}
          </div>
        </div>
      </SectionBand>
      <SectionBand tone="dark" eyebrow="Tours" title="See the space" quiet
        intro="Guided tours every Thursday at 16:00.">
        <div style={{ display: 'flex', gap: 12, alignItems: 'flex-end', maxWidth: 520 }}>
          <div style={{ flex: 1 }}><Input tone="dark" label="Work email" placeholder="you@company.at" /></div>
          <Button variant="onDark" onClick={() => setRegistered('Guided tour')}>Book a slot</Button>
        </div>
      </SectionBand>
      {registered ? (
        <div style={{ position: 'fixed', left: 0, right: 0, bottom: 24, display: 'flex', justifyContent: 'center', zIndex: 70 }}>
          <GlassPanel radius="sm" padding="14px 20px" style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
            <span style={{ width: 28, height: 2, background: 'var(--wx-whisper)' }} />
            <span style={{ fontFamily: 'var(--wx-font-body)', fontSize: 'var(--wx-body-sm-size)', color: 'var(--wx-ink)' }}>Registered for <strong>{registered}</strong>. Confirmation on its way.</span>
            <button onClick={() => setRegistered(null)} style={{ background: 'none', border: 'none', cursor: 'pointer', color: 'var(--wx-muted)', fontFamily: 'var(--wx-font-mono)', fontSize: 11, letterSpacing: '.1em' }}>CLOSE</button>
          </GlassPanel>
        </div>
      ) : null}
    </>
  );
}
Object.assign(window, { Events });
