export default function Footer() {
  return (
    <footer id="contact" className="glass-3d" style={{ borderTop: '1px solid rgba(255,255,255,0.05)', padding: '4rem 0', background: 'var(--bg-secondary)', marginTop: '4rem', borderRadius: '40px 40px 0 0' }}>
      <div className="container" style={{ textAlign: 'center', color: 'var(--text-secondary)' }}>
        <h3 className="text-gradient" style={{ fontSize: '1.5rem', marginBottom: '1rem', fontWeight: 'bold' }}>Galerie des Projets Web Mobile 2</h3>
        <p style={{ marginBottom: '2rem', maxWidth: '450px', margin: '0 auto 2rem', lineHeight: 1.6 }}>Inspirer la prochaine génération d'ingénieurs et de créateurs pour réaliser l'impossible.</p>
        <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>&copy; {new Date().getFullYear()} Projets Web Mobile 2. Tous droits réservés.</p>
      </div>
    </footer>
  );
}
