import { Link } from 'react-router-dom';
import { chapters } from '../data/new_chapters';
import { BookOpen, Box, ArrowLeftRight, RefreshCw, Sigma, TerminalSquare, Layout, Database, FileCode, CheckCircle, ArrowRight } from 'lucide-react';

const iconList = [
  BookOpen, Box, ArrowLeftRight, RefreshCw, Sigma, 
  TerminalSquare, Layout, Database, FileCode, CheckCircle
];

function Home() {
  return (
    <div className="fade-in">
      <section className="hero-card">
        {/* Background Decorative Brackets */}
        <div className="hero-bg-shapes">
          <svg width="200" height="200" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M70 20 L20 100 L70 180" stroke="#000" strokeWidth="20" strokeLinecap="square"/>
            <path d="M130 20 L180 100 L130 180" stroke="#000" strokeWidth="20" strokeLinecap="square"/>
          </svg>
        </div>

        <div style={{ position: 'relative', zIndex: 2 }}>
          <span className="hero-badge">LEARN TOGETHER</span>
          
          <h1 className="hero-title">
            김민우의 <strong>C언어</strong> 입문
          </h1>
          
          <p className="hero-desc">
            복잡한 논리를 우아하게 설계하는 기술. <strong>C언어</strong>의 기초부터 심화 메모리 
            구조까지, 프로그래밍의 정수를 학습하는 디지털 매뉴스크립트입니다.
          </p>
          
          <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
            <Link to={`/post/${chapters[0]?.id}`} className="btn-primary">
              학습 시작하기 <ArrowRight size={18} />
            </Link>
            <button className="btn-secondary" onClick={() => window.scrollTo({top: 500, behavior: 'smooth'})}>
              커리큘럼 보기
            </button>
          </div>
        </div>
      </section>

      <section>
        <div className="grid-container">
          {chapters.map((chapter, idx) => {
            const numberString = (idx + 1).toString().padStart(2, '0');
            const IconComponent = iconList[idx % iconList.length];
            
            return (
              <Link to={`/post/${chapter.id}`} key={chapter.id} style={{ color: 'inherit' }}>
                <div className="course-card">
                  <div className="card-header">
                    <span className="card-number">{numberString}</span>
                    <IconComponent size={24} className="card-icon" />
                  </div>
                  <h3 className="card-title">
                    {chapter.title.replace(/^\d+\.\s*/, '')}
                  </h3>
                  <p className="card-desc">
                    {chapter.summary}
                  </p>
                  <div className="card-link">
                    강의 보기 <ArrowRight size={16} style={{ marginLeft: '4px' }} />
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </section>
    </div>
  );
}

export default Home;
