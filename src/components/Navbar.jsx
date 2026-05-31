import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ChevronDown, User, Brain } from 'lucide-react';
import logoImg from '../assets/logo.jpeg';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const closeMenu = () => {
    setMenuOpen(false);
    setDropdownOpen(false);
  };

  const toggleMenu = () => setMenuOpen(!menuOpen);

  const toggleDropdown = (e) => {
    if (window.innerWidth <= 992) {
      e.preventDefault();
      setDropdownOpen(!dropdownOpen);
    }
  };

  const location = useLocation();
  const isLightPage = location.pathname !== '/';

  return (
    <>
      <div 
        className={`menu-overlay ${menuOpen ? 'active' : ''}`} 
        id="menuOverlay"
        onClick={closeMenu}
      ></div>

      <nav id="navbar" className={`${scrolled ? 'scrolled' : ''} ${isLightPage ? 'navbar-light' : ''}`}>
        <div className="nav-inner">
          <Link to="/" className="logo" onClick={closeMenu}>
            <img src={logoImg} alt="REVIVE Clinic Logo" className="logo-img" />
            <div className="logo-text-group">
              <span className="logo-text">REVIVE</span>
              <span className="logo-sub">Skin · Hair · Mind</span>
            </div>
          </Link>
          
          <button 
            className={`hamburger ${menuOpen ? 'active' : ''}`} 
            id="hamburger" 
            aria-label="Open menu"
            aria-expanded={menuOpen}
            onClick={toggleMenu}
          >
            <span></span><span></span><span></span>
          </button>
          
          <ul className={`nav-links ${menuOpen ? 'open' : ''}`} id="navLinks">
            <li>
              <Link 
                to="/" 
                onClick={(e) => {
                  closeMenu();
                  if (window.location.pathname === '/') {
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }
                }}
              >
                Home
              </Link>
            </li>
            <li className={`nav-dropdown ${dropdownOpen ? 'open' : ''}`}>
              <a href="#services" className="nav-dropdown-toggle" onClick={toggleDropdown}>
                Services <ChevronDown className="dropdown-chevron" />
              </a>
              <div className="nav-dropdown-menu">
                <Link to="/service-dermatology" className="nav-dropdown-item" onClick={closeMenu}>
                  <span className="nav-dd-icon nav-dd-icon--skin"><User /></span>
                  <span>
                    <strong>Dermatology &amp; Hair Care</strong>
                    <small>Skin, Hair &amp; Scalp Care</small>
                  </span>
                </Link>
                <Link to="/service-psychiatry" className="nav-dropdown-item" onClick={closeMenu}>
                  <span className="nav-dd-icon nav-dd-icon--mind"><Brain /></span>
                  <span>
                    <strong>Psychiatry &amp; Counseling</strong>
                    <small>Mental Health Support</small>
                  </span>
                </Link>
              </div>
            </li>
            <li><Link to="/#about" onClick={closeMenu}>About</Link></li>
            <li><Link to="/#reviews" onClick={closeMenu}>Reviews</Link></li>
            <li><Link to="/#blog" onClick={closeMenu}>Blog</Link></li>
            <li><Link to="/#location" onClick={closeMenu}>Location</Link></li>
            <li><Link to="/#contact" className="nav-cta" onClick={closeMenu}>Book Appointment</Link></li>
          </ul>
        </div>
      </nav>
    </>
  );
}
