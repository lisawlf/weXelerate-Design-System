const { Button, GlassPanel, EyebrowLabel, SectionBand, Input, Icon } = window.WeXelerateDesignSystem_417c29;

function Contact() {
  const [sent, setSent] = React.useState(false);
  return (
    <SectionBand eyebrow="Contact" title="Tell us what you are building"
      intro="We answer within two working days.">
      <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 1fr', gap: 'var(--wx-space-xl)', alignItems: 'start' }}>
        <GlassPanel padding="var(--wx-space-xl)" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 14 }}>
          <Input label="Name" placeholder="Anna Berger" />
          <Input label="Company" placeholder="Acme GmbH" />
          <div style={{ gridColumn: '1 / -1' }}><Input label="Work email" placeholder="anna@acme.at" /></div>
          <div style={{ gridColumn: '1 / -1' }}><Input label="What do you want to do?" placeholder="Run a corporate lab in Q1" hint="A sentence is plenty." /></div>
          <div style={{ gridColumn: '1 / -1', display: 'flex', alignItems: 'center', gap: 14 }}>
            <Button onClick={() => setSent(true)}>{sent ? 'Sent — thank you' : 'Send message'}</Button>
            {sent ? <span style={{ fontFamily: 'var(--wx-font-mono)', fontSize: 11, letterSpacing: '.1em', textTransform: 'uppercase', color: 'var(--wx-muted)' }}>We reply within 2 days</span> : null}
          </div>
        </GlassPanel>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
          <EyebrowLabel>Vienna</EyebrowLabel>
          <p style={{ fontSize: 'var(--wx-body-md-size)', lineHeight: 'var(--wx-body-md-lh)', color: 'var(--wx-body)', margin: 0 }}>
            Praterstraße 1, 1020 Vienna<br />Austria
          </p>
          <p style={{ margin: 0, fontSize: 'var(--wx-body-md-size)' }}><a href="#">hello@wexelerate.com</a></p>
          <div style={{ display: 'flex', gap: 8 }}>
            {['linkedin', 'instagram', 'youtube'].map(n => (
              <span key={n} style={{ width: 36, height: 36, borderRadius: 'var(--wx-radius-pill)', border: '1px solid var(--wx-hairline-strong)', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', color: 'var(--wx-ink)' }}><Icon name={n} size={15} /></span>
            ))}
          </div>
        </div>
      </div>
    </SectionBand>
  );
}
Object.assign(window, { Contact });
