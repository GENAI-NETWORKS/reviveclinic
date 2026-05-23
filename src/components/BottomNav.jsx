import { Calendar, MapPin, Phone } from 'lucide-react';

export default function BottomNav() {
  return (
    <div className="bottom-nav-bar">
      <a href="/#contact" className="bottom-nav-link">
        <Calendar />
        <span>Book Appointment</span>
      </a>
      <a href="https://www.google.com/maps/place/REVIVE+Skin,+Hair+and+Mind+Clinic/@11.6271869,78.1455354,17z/data=!3m1!4b1!4m6!3m5!1s0x3babef3e4f401225:0x59aa31edb3388109!8m2!3d11.6271869!4d78.1481103!16s%2Fg%2F11lztc_cl8?hl=en&entry=ttu&g_ep=EgoyMDI2MDUxNy4wIKXMDSoASAFQAw%3D%3D" target="_blank" rel="noopener noreferrer" className="bottom-nav-link">
        <MapPin />
        <span>Location</span>
      </a>
      <a href="tel:+919025011711" className="bottom-nav-link">
        <Phone />
        <span>Call</span>
      </a>
    </div>
  );
}
