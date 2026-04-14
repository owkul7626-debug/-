import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

/* Old Version Components */
import Sidebar from './components/Sidebar';
import Home from './pages/Home';
import Post from './pages/Post';

/* New Version Components */
import NewSidebar from './components/NewSidebar';
import NewHeader from './components/NewHeader';
import NewFooter from './components/NewFooter';
import NewHome from './pages/NewHome';
import NewPost from './pages/NewPost';

/* CSS Scoping */
import './index.css';
import './new_index.css';

function MainShowcase() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', width: '100%', overflowX: 'hidden' }}>
      {/* Old Version: Top */}
      <div className="theme-old theme-old-body" style={{ minHeight: '100vh', width: '100%', background: 'var(--bg-dark)' }}>
        <div className="layout-wrapper" style={{ width: '100%', maxWidth: '1200px', margin: '0 auto' }}>
          <Sidebar />
          <main className="main-content" style={{ width: '100%' }}>
            <Home />
          </main>
        </div>
      </div>
      
      {/* Divider */}
      <div style={{ 
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        padding: '4rem', background: '#0f172a', color: '#f8fafc', 
        fontSize: '2rem', fontWeight: '800', letterSpacing: '-0.03em',
        boxShadow: '0 10px 30px rgba(0,0,0,0.5)', zIndex: 100, position: 'relative'
      }}>
        👇 디자인 전면 개편 후 👇
      </div>

      {/* New Version: Bottom */}
      <div className="theme-new theme-new-body" style={{ minHeight: '100vh', width: '100%', background: 'var(--bg-main)' }}>
        <NewHeader />
        <div className="layout-wrapper" style={{ width: '100%', maxWidth: '1200px', margin: '0 auto' }}>
          <NewSidebar />
          <main className="main-content" style={{ width: '100%' }}>
            <NewHome />
          </main>
        </div>
        <NewFooter />
      </div>
    </div>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainShowcase />} />
        
        {/* Old Post Route */}
        <Route path="/old/post/:id" element={
          <div className="theme-old theme-old-body" style={{ minHeight: '100vh', width: '100%', background: 'var(--bg-dark)' }}>
            <div className="layout-wrapper" style={{ width: '100%', maxWidth: '1200px', margin: '0 auto' }}>
              <Sidebar />
              <main className="main-content" style={{ width: '100%' }}>
                <Post />
              </main>
            </div>
          </div>
        } />

        {/* New Post Route */}
        <Route path="/post/:id" element={
          <div className="theme-new theme-new-body" style={{ minHeight: '100vh', width: '100%', background: 'var(--bg-main)' }}>
            <NewHeader />
            <div className="layout-wrapper" style={{ width: '100%' }}>
              <NewSidebar />
              <main className="main-content" style={{ width: '100%' }}>
                <NewPost />
              </main>
            </div>
            <NewFooter />
          </div>
        } />
      </Routes>
    </Router>
  );
}

export default App;
