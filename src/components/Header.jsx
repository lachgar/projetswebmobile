export default function Header() {
  return (
    <header style={{ padding: '1.25rem 0', background: 'rgba(8, 12, 22, 0.75)', borderBottom: '1px solid rgba(255,255,255,0.05)', backdropFilter: 'blur(20px)', boxShadow: '0 10px 30px rgba(0,0,0,0.5)', position: 'sticky', top: 0, zIndex: 100 }}>
      <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <h2 style={{ fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '0.3rem', lineHeight: 1 }} className="text-gradient">Projets Web Mobile 2</h2>
          <span style={{ fontSize: '0.75rem', color: 'var(--text-secondary)', fontWeight: 500, letterSpacing: '0.02em', textTransform: 'uppercase' }}>
            Université Cadi Ayyad • École Normale Supérieure • Département d'Informatique
          </span>
        </div>
        <nav>
          <ul style={{ display: 'flex', gap: '2rem', listStyle: 'none' }}>
            <li><a href="#" style={{ color: 'var(--text-secondary)', textDecoration: 'none', transition: 'color 0.2s', fontWeight: 500 }} onMouseOver={e=>e.target.style.color='var(--text-primary)'} onMouseOut={e=>e.target.style.color='var(--text-secondary)'}>Accueil</a></li>
            <li><a href="#projects" style={{ color: 'var(--text-secondary)', textDecoration: 'none', transition: 'color 0.2s', fontWeight: 500 }} onMouseOver={e=>e.target.style.color='var(--text-primary)'} onMouseOut={e=>e.target.style.color='var(--text-secondary)'}>Projets</a></li>
            <li><a href="#contact" style={{ color: 'var(--text-secondary)', textDecoration: 'none', transition: 'color 0.2s', fontWeight: 500 }} onMouseOver={e=>e.target.style.color='var(--text-primary)'} onMouseOut={e=>e.target.style.color='var(--text-secondary)'}>Contact</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
