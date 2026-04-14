import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Post from './pages/Post';

function App() {
  return (
    <Router>
      <Header />
      <div className="layout-wrapper">
        <Sidebar />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/post/:id" element={<Post />} />
          </Routes>
          <Footer />
        </main>
      </div>
    </Router>
  );
}

export default App;
