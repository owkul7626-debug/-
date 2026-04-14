import { NavLink } from 'react-router-dom';
import { chapters } from '../data/chapters';
import { BookOpen, Box, ArrowLeftRight, RefreshCw, Sigma, TerminalSquare, Layout, Database, FileCode, CheckCircle } from 'lucide-react';

const iconList = [
  BookOpen, Box, ArrowLeftRight, RefreshCw, Sigma, 
  TerminalSquare, Layout, Database, FileCode, CheckCircle
];

function Sidebar() {
  return (
    <aside className="sidebar">
      <div className="sidebar-section-title">Curriculum</div>
      <div className="sidebar-subtitle">The C Logic Path</div>
      
      <nav className="sidebar-nav">
        {chapters.map((chapter, idx) => {
          const IconComponent = iconList[idx % iconList.length];
          return (
            <NavLink
              key={chapter.id}
              to={`/post/${chapter.id}`}
              className={({ isActive }) => `sidebar-link ${isActive ? 'active' : ''}`}
            >
              <IconComponent size={18} className="icon" />
              <span>{chapter.title.replace(/^\d+\.\s*/, '')}</span>
            </NavLink>
          );
        })}
      </nav>

      <div className="sidebar-bottom">
        <a href="#" className="btn-primary" style={{ width: '100%', justifyContent: 'center', fontSize: '0.85rem' }}>
          DOWNLOAD PDF GUIDE
        </a>
      </div>
    </aside>
  );
}

export default Sidebar;
