export default function Footer() {
  return (
    <footer id="contact" className="glass-3d" style={{ borderTop: '1px solid rgba(15, 23, 42, 0.05)', padding: '4rem 0', background: 'var(--bg-secondary)', marginTop: '4rem', borderRadius: '40px 40px 0 0' }}>
      <div className="container" style={{ textAlign: 'center', color: 'var(--text-secondary)' }}>
        <h3 className="text-gradient" style={{ fontSize: '1.5rem', marginBottom: '1rem', fontWeight: 'bold' }}>Galerie des Projets Web Mobile 2</h3>
        <p style={{ marginBottom: '0.25rem', lineHeight: 1.6 }}>BP 2400 Hay Hassani Route d'essaouira 40000 Marrakech</p>
        <p style={{ marginBottom: '0.25rem', lineHeight: 1.6 }}>(+212) 5 24 34 01 25</p>
        <p style={{ marginBottom: '2rem', lineHeight: 1.6 }}>
          <a href="mailto:contact-ens@uca.ac.ma" style={{ color: 'var(--accent-cyan)', textDecoration: 'none', fontWeight: 500 }}>
            contact-ens@uca.ac.ma
          </a>
        </p>
        <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>&copy; {new Date().getFullYear()} Projets Web Mobile 2. Tous droits réservés.</p>
      </div>
    </footer>
  );
}
