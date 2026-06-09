import { useState, useEffect, useRef } from 'react';
import { Phone, MapPin, Calendar, ArrowUp, X } from 'lucide-react';

export default function Fab() {
  const [active, setActive] = useState(false);
  const fabRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (fabRef.current && !fabRef.current.contains(e.target)) {
        setActive(false);
      }
    };
    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, []);

  return (
    <div className="fab-container" id="fabContainer" ref={fabRef}>
      <div className={`fab-menu ${active ? 'active' : ''}`} id="fabMenu">
        <a href="tel:+919025011711" className="fab-item" aria-label="Call Us" title="Call Us">
          <Phone />
        </a>
        <a href="https://www.google.com/maps/place/REVIVE+Skin,+Hair+and+Mind+Clinic/@11.6271869,78.1455354,17z/data=!3m1!4b1!4m6!3m5!1s0x3babef3e4f401225:0x59aa31edb3388109!8m2!3d11.6271869!4d78.1481103!16s%2Fg%2F11lztc_cl8?hl=en&entry=ttu&g_ep=EgoyMDI2MDUxNy4wIKXMDSoASAFQAw%3D%3D" target="_blank" rel="noopener noreferrer" className="fab-item" aria-label="Location" title="Location">
          <MapPin />
        </a>
        <a href="/#contact" className="fab-item" aria-label="Book Appointment" title="Book Appointment">
          <Calendar />
        </a>
      </div>
      <button 
        className={`fab-main ${active ? 'active' : ''}`} 
        id="fabMain" 
        aria-label="Contact Us"
        onClick={(e) => { e.stopPropagation(); setActive(!active); }}
      >
        <ArrowUp className="fab-icon-open" />
        <X className="fab-icon-close" />
      </button>
    </div>
  );
}
