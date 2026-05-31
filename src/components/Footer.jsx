import { Link } from 'react-router-dom';
import { Star } from 'lucide-react';
import logoImg from '../assets/logo.jpeg';

export default function Footer() {
  return (
    <footer id="footer">
      <div className="container footer-grid">
        <div className="footer-brand">
          <div className="footer-logo">
            <img src={logoImg} alt="REVIVE Clinic Logo" className="footer-logo-img" />
            <span>REVIVE</span>
          </div>
          <p className="footer-tagline">Holistic Care for Your Skin, Hair &amp; Mind</p>
          <p className="footer-addr">First Floor, S.S. Complex, Trichy Main Road,<br />Seelanaickenpatti, Salem, Tamil Nadu</p>
          <a href="tel:+919025011711" className="footer-phone">+91 90250 11711</a>
        </div>
        <div className="footer-links">
          <h4>Services</h4>
          <ul>
            <li><Link to="/service-dermatology">Dermatology &amp; Hair Care</Link></li>
            <li><Link to="/service-psychiatry">Psychiatry &amp; Counseling</Link></li>
          </ul>
        </div>
        <div className="footer-links">
          <h4>Clinic</h4>
          <ul>
            <li><Link to="/about">About Us</Link></li>
            <li><a href="/#reviews">Patient Reviews</a></li>
            <li><a href="/#location">Location</a></li>
            <li><a href="/#contact">Book Appointment</a></li>
          </ul>
        </div>
        <div className="footer-cta">
          <h4>Ready to feel better?</h4>
          <p>Book your consultation today. Closes at 8 PM.</p>
          <a href="/#contact" className="btn-primary">Book Now</a>
          <div className="footer-lgbtq">Inclusive &amp; Welcoming Space</div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>© 2026 REVIVE Skin, Hair and Mind Clinic. All rights reserved.</p>
        <p>Salem, Tamil Nadu · <a href="tel:+919025011711">+91 90250 11711</a></p>
      </div>
    </footer>
  );
}
