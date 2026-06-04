import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Dermatology from './pages/Dermatology';
import Psychiatry from './pages/Psychiatry';
import Aesthetic from './pages/Aesthetic';
import BlogPost from './pages/BlogPost';
import Admin from './pages/Admin';
import ScrollToTop from './components/ScrollToTop';
import MainLayout from './components/MainLayout';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/gallery" element={<About />} />
          <Route path="/service-dermatology" element={<Dermatology />} />
          <Route path="/service-aesthetic" element={<Aesthetic />} />
          <Route path="/service-psychiatry" element={<Psychiatry />} />
          <Route path="/blog/:id" element={<BlogPost />} />
        </Route>
        <Route path="/admin" element={<Admin />} />
      </Routes>
    </Router>
  );
}

export default App;
