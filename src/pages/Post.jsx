import { useParams, Navigate, Link } from 'react-router-dom';
import { chapters } from '../data/chapters';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import ReactMarkdown from 'react-markdown';

function Post() {
  const { id } = useParams();
  
  const chapterIndex = chapters.findIndex(c => c.id === id);
  const chapter = chapters[chapterIndex];

  if (!chapter) {
    return <Navigate to="/" replace />;
  }

  const prevChapter = chapterIndex > 0 ? chapters[chapterIndex - 1] : null;
  const nextChapter = chapterIndex < chapters.length - 1 ? chapters[chapterIndex + 1] : null;

  return (
    <article className="glass-panel fade-in" style={{ padding: '3rem', maxWidth: '800px', margin: '0 auto' }}>
      <header style={{ marginBottom: '3rem', borderBottom: '1px solid var(--border-color)', paddingBottom: '2rem' }}>
        <h1 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>
          {chapter.title}
        </h1>
        <p style={{ fontSize: '1.1rem', color: 'var(--text-muted)' }}>
          {chapter.summary}
        </p>
      </header>
      
      <div className="markdown-body" style={{ fontSize: '1.05rem', lineHeight: 1.8 }}>
        <ReactMarkdown
          components={{
            h2: ({node, ...props}) => <h2 style={{ fontSize: '1.8rem', marginTop: '2.5rem', marginBottom: '1rem', color: 'var(--text-main)' }} {...props} />,
            h3: ({node, ...props}) => <h3 style={{ fontSize: '1.4rem', marginTop: '2rem', marginBottom: '0.75rem', color: 'var(--text-main)' }} {...props} />,
            p: ({node, ...props}) => <p style={{ marginBottom: '1.5rem' }} {...props} />,
            ul: ({node, ...props}) => <ul style={{ paddingLeft: '1.5rem', marginBottom: '1.5rem' }} {...props} />,
            li: ({node, ...props}) => <li style={{ marginBottom: '0.5rem' }} {...props} />,
            code: ({node, inline, className, children, ...props}) => {
              const match = /language-(\w+)/.exec(className || '');
              return !inline ? (
                <div style={{ margin: '1.5rem 0' }}>
                  <pre className="code-block" {...props}>
                    <code className={className}>
                      {children}
                    </code>
                  </pre>
                </div>
              ) : (
                <code style={{ background: 'rgba(255,255,255,0.1)', padding: '0.2rem 0.4rem', borderRadius: '4px', fontFamily: "'Fira Code', monospace", fontSize: '0.9em', color: '#f87171' }} {...props}>
                  {children}
                </code>
              )
            }
          }}
        >
          {chapter.content}
        </ReactMarkdown>
      </div>

      <nav style={{ display: 'flex', justifyContent: 'space-between', marginTop: '4rem', paddingTop: '2rem', borderTop: '1px solid var(--border-color)' }}>
        {prevChapter ? (
          <Link to={`/post/${prevChapter.id}`} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--text-muted)' }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '40px', height: '40px', borderRadius: '50%', background: 'rgba(255,255,255,0.05)' }}>
              <ArrowLeft size={20} />
            </div>
            <div>
              <div style={{ fontSize: '0.8rem', textTransform: 'uppercase' }}>Previous</div>
              <div style={{ fontWeight: 500, color: 'var(--text-main)' }}>{prevChapter.title.replace(/^\d+\.\s*/, '')}</div>
            </div>
          </Link>
        ) : <div />}

        {nextChapter ? (
          <Link to={`/post/${nextChapter.id}`} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--text-muted)', textAlign: 'right' }}>
            <div>
              <div style={{ fontSize: '0.8rem', textTransform: 'uppercase' }}>Next</div>
              <div style={{ fontWeight: 500, color: 'var(--text-main)' }}>{nextChapter.title.replace(/^\d+\.\s*/, '')}</div>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '40px', height: '40px', borderRadius: '50%', background: 'rgba(255,255,255,0.05)' }}>
              <ArrowRight size={20} />
            </div>
          </Link>
        ) : <div />}
      </nav>
    </article>
  );
}

export default Post;
