import { Link } from 'react-router-dom';
import { chapters } from '../data/chapters';
import { Terminal, ArrowRight } from 'lucide-react';

function Home() {
  return (
    <div className="fade-in">
      <section className="hero-section">
        <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '1.5rem' }}>
          <div style={{ 
            background: 'rgba(59, 130, 246, 0.1)', 
            padding: '1rem', 
            borderRadius: '50%',
            color: 'var(--accent-primary)',
            boxShadow: '0 0 40px rgba(59, 130, 246, 0.2)'
          }}>
            <Terminal size={48} />
          </div>
        </div>
        <h1 className="hero-title">김민우의 C언어 입문</h1>
        <p style={{ fontSize: '1.2rem', color: 'var(--text-muted)', maxWidth: '600px', margin: '0 auto 2.5rem' }}>
          기초부터 심화까지, 체계적인 커리큘럼으로 C언어의 원리를 이해하고 탄탄한 기본기를 다져보세요.
        </p>
        <Link to={`/old/post/${chapters[0].id}`} className="btn-primary" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem' }}>
          학습 시작하기 <ArrowRight size={18} />
        </Link>
      </section>

      <section style={{ marginTop: '2rem' }}>
        <h2 style={{ fontSize: '1.5rem', borderBottom: '1px solid var(--border-color)', paddingBottom: '1rem', marginBottom: '2rem' }}>
          전체 커리큘럼
        </h2>
        
        <div style={{ display: 'grid', gap: '1.5rem', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))' }}>
          {chapters.map((chapter) => (
            <Link to={`/old/post/${chapter.id}`} key={chapter.id} style={{ color: 'inherit' }}>
              <div className="glass-panel chapter-card" style={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
                <h3 style={{ fontSize: '1.2rem', marginBottom: '0.5rem', color: 'var(--text-main)' }}>
                  {chapter.title}
                </h3>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', flexGrow: 1, marginBottom: '1.5rem' }}>
                  {chapter.summary}
                </p>
                <div style={{ color: 'var(--accent-primary)', fontSize: '0.9rem', fontWeight: 600, display: 'flex', alignItems: 'center', gap: '0.25rem' }}>
                  읽기 <ArrowRight size={14} />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}

export default Home;
