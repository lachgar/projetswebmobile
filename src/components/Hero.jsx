export default function Hero() {
  return (
    <section style={{ padding: '8rem 0 6rem', textAlign: 'center' }}>
      <div className="container">
        <div style={{ marginBottom: '2rem' }}>
          <span style={{ display: 'inline-block', background: 'linear-gradient(135deg, rgba(217, 119, 6, 0.1), rgba(217, 119, 6, 0.05))', color: 'var(--accent-gold)', padding: '0.5rem 1.5rem', borderRadius: '2rem', fontSize: '0.9rem', fontWeight: 700, marginBottom: '0.75rem', border: '1px solid rgba(217, 119, 6, 0.2)', boxShadow: '0 0 20px rgba(217, 119, 6, 0.1)' }}>
            ✨ Projet Fin de Module : Développement web et mobile 2
          </span>
          <p style={{ color: 'var(--text-secondary)', fontSize: '1rem', margin: 0, fontWeight: 500 }}>
            Licence Informatique ENS Marrakech <span style={{ opacity: 0.5, margin: '0 0.75rem' }}>|</span> Pr. Mohamed LACHGAR
          </p>
        </div>
        <h1 className="text-gradient" style={{ fontSize: 'clamp(2.5rem, 5vw, 4.5rem)', marginBottom: '3rem', letterSpacing: '-0.02em', lineHeight: 1.2 }}>
          Conception et Développement<br />des Applications Web et Mobile
        </h1>
        <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center' }}>
          <a href="#projects" className="btn btn-primary" style={{ fontSize: '1.1rem', padding: '0.8rem 2rem' }}>Voir les Projets</a>
          <a href="#contact" className="btn btn-ghost" style={{ fontSize: '1.1rem', padding: '0.8rem 2rem' }}>Nous Contacter</a>
        </div>

        <div style={{ marginTop: '4rem', display: 'flex', justifyContent: 'center' }}>
          <img
            src="/class-photo1.jpg"
            alt="ENS Class Photo"
            style={{
              width: '100%',
              maxWidth: '900px',
              borderRadius: '1rem',
              boxShadow: '0 20px 40px rgba(0,0,0,0.4)',
              border: '1px solid var(--card-border)',
              transition: 'transform 0.3s ease'
            }}
            onMouseOver={e => e.currentTarget.style.transform = 'scale(1.02)'}
            onMouseOut={e => e.currentTarget.style.transform = 'scale(1)'}
          />
        </div>
      </div>
    </section>
  );
}
