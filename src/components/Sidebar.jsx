import { NavLink } from 'react-router-dom';
import { chapters } from '../data/chapters';
import { BookOpen, Code2 } from 'lucide-react';

function Sidebar() {
  return (
    <aside className="sidebar">
      <div style={{ marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
        <Code2 color="var(--accent-primary)" size={28} />
        <h2 style={{ margin: 0, fontSize: '1.25rem', letterSpacing: '-0.02em' }}>김민우의 C언어 마스터 하기</h2>
      </div>
      
      <nav style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
        <NavLink 
          to="/" 
          end
          className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
        >
          <BookOpen size={18} />
          <span>소개 및 커리큘럼</span>
        </NavLink>
        
        <div style={{ margin: '1rem 0 0.5rem', fontSize: '0.85rem', color: 'var(--text-muted)', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.05em' }}>
          Chapters
        </div>
        
        {chapters.map((chapter, idx) => (
          <NavLink
            key={chapter.id}
            to={`/old/post/${chapter.id}`}
            className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
          >
            <span style={{ 
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              width: '24px', height: '24px', borderRadius: '4px',
              backgroundColor: 'rgba(255,255,255,0.05)', fontSize: '0.8rem'
            }}>
              {idx + 1}
            </span>
            <span style={{ fontSize: '0.95rem' }}>{chapter.title.replace(/^\d+\.\s*/, '')}</span>
          </NavLink>
        ))}
      </nav>
    </aside>
  );
}

export default Sidebar;
