export default function ProjectCard({ project }) {
  return (
    <div className="glass-3d" style={{ display: 'flex', flexDirection: 'column', overflow: 'hidden', transition: 'transform 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275), box-shadow 0.4s ease' }}
         onMouseOver={e => { e.currentTarget.style.transform = 'translateY(-10px) scale(1.02)'; e.currentTarget.style.boxShadow = '0 30px 60px rgba(0,0,0,0.6), inset 0 1px 0 rgba(255,255,255,0.2), 0 0 20px rgba(0, 242, 254, 0.2)' }}
         onMouseOut={e => { e.currentTarget.style.transform = 'translateY(0) scale(1)'; e.currentTarget.style.boxShadow = 'var(--card-shadow)' }}>
      <div style={{ position: 'relative', width: '100%', paddingTop: '56.25%', background: '#000' }}>
        <iframe 
          style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', border: 'none' }}
          src={project.videoUrl} 
          title={project.title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
          allowFullScreen
          loading="lazy"
        ></iframe>
      </div>
      <div style={{ padding: '2rem', display: 'flex', flexDirection: 'column', flex: 1 }}>
        <h3 style={{ fontSize: '1.35rem', marginBottom: '0.5rem', color: 'var(--text-primary)', lineHeight: 1.3, textShadow: '0 2px 4px rgba(0,0,0,0.5)' }}>{project.title}</h3>
        <p style={{ color: 'var(--accent-cyan)', fontSize: '0.95rem', marginBottom: '1rem', fontWeight: 600 }}>par {project.studentName}</p>
        <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', marginBottom: '1.5rem', flex: 1, lineHeight: 1.5 }}>{project.description}</p>
        
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '2rem' }}>
          {project.tags.map(tag => (
            <span key={tag} style={{ background: 'rgba(142, 45, 226, 0.15)', border: '1px solid rgba(142, 45, 226, 0.3)', padding: '0.3rem 0.8rem', borderRadius: '12px', fontSize: '0.75rem', color: '#e0b3ff', fontWeight: 600, boxShadow: 'inset 0 1px 1px rgba(255,255,255,0.1)' }}>
              {tag}
            </span>
          ))}
        </div>

        <div style={{ display: 'flex', gap: '1rem', marginTop: 'auto' }}>
          <a href={project.portfolioLink} target="_blank" rel="noopener noreferrer" className="btn btn-primary" style={{ flex: 1, padding: '0.6rem', fontSize: '0.9rem' }}>Portfolio</a>
          <a href={project.reportLink} target="_blank" rel="noopener noreferrer" className="btn btn-ghost" style={{ flex: 1, padding: '0.6rem', fontSize: '0.9rem' }}>Rapport</a>
        </div>
      </div>
    </div>
  );
}
