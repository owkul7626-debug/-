import { useState } from 'react';
import { UserIcon } from 'lucide-react';
import { Link } from 'react-router-dom';

function Header() {
  const [showProfile, setShowProfile] = useState(false);

  return (
    <header className="top-header">
      <div className="header-content">
        <Link to="/" className="logo">
          메인화면
        </Link>
        <nav className="top-nav">
          <Link to="/" className="nav-item active">Curriculum</Link>
        </nav>
        <div className="header-actions" style={{ position: 'relative' }}>
          <button className="icon-btn" onClick={() => setShowProfile(!showProfile)}>
            <UserIcon size={20} />
          </button>
          
          {showProfile && (
            <div style={{
              position: 'absolute',
              top: '120%',
              right: 0,
              background: '#ffffff',
              border: '1px solid var(--border-color)',
              borderRadius: '8px',
              padding: '1.2rem',
              boxShadow: '0 4px 20px rgba(0,0,0,0.08)',
              minWidth: '180px',
              zIndex: 100,
              animation: 'fadeIn 0.2s ease',
            }}>
              <div style={{ fontSize: '1.1rem', fontWeight: 700, color: 'var(--text-main)', marginBottom: '0.25rem' }}>
                김민우
              </div>
              <div style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>
                원광대학교
              </div>
              <div style={{ fontSize: '0.85rem', color: 'var(--accent-primary)', fontWeight: 600, marginTop: '0.5rem' }}>
                20263164
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}

export default Header;
