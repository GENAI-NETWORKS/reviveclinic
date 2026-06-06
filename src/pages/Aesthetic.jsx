import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  ChevronRight, Sparkles, CheckCircle, Calendar, Zap, Droplets, Target, Feather, Smile, Syringe, ChevronDown
} from 'lucide-react';
import yogeswariImg from '../assets/Yogeswari Subramanian.jpeg';

function TreatmentCard({ icon, title, desc, accent }) {
  const [open, setOpen] = useState(false);
  return (
    <div className={`treatment-card tc-accordion ${open ? 'tc-open' : ''}`} onClick={() => setOpen(v => !v)}>
      <div className="tc-header">
        <div className="tc-icon" style={{ background: '#f3e8ff', color: accent || '#9333ea' }}>{icon}</div>
        <h3>{title}</h3>
        <ChevronDown size={18} className={`tc-chevron ${open ? 'rotated' : ''}`} style={{ color: accent || '#9333ea' }} />
      </div>
      <div className="tc-body">
        <p>{desc}</p>
      </div>
    </div>
  );
}

export default function Aesthetic() {
  return (
    <main>
      <section className="sp-hero">
        <div className="sp-hero-orb" style={{ background: 'radial-gradient(circle at center, rgba(168, 85, 247, 0.15) 0%, transparent 60%)' }}></div>
        <div className="container sp-hero-inner">
          <div className="sp-hero-pill" style={{ color: '#a855f7', background: 'rgba(168, 85, 247, 0.1)' }}><Sparkles size={16} /> Aesthetic &amp; Cosmetology</div>
          <h1>Premium <span>Aesthetics</span><br/>&amp; Rejuvenation</h1>
          <p className="sp-hero-sub">Elevate your natural beauty with advanced, non-invasive cosmetic procedures. Precision, safety, and artistry combined to give you radiant confidence.</p>
          <div className="sp-hero-stats">
            <div className="sp-stat"><strong>15+</strong><span>Advanced Procedures</span></div>
            <div className="sp-stat"><strong>100%</strong><span>Safe &amp; FDA Approved</span></div>
            <div className="sp-stat"><strong>Custom</strong><span>Care Plans</span></div>
          </div>
        </div>
      </section>

      <nav className="sp-breadcrumb">
        <div className="container sp-breadcrumb-inner">
          <Link to="/">Home</Link>
          <ChevronRight />
          <Link to="/#services">Services</Link>
          <ChevronRight />
          <span>Aesthetic &amp; Cosmetology</span>
        </div>
      </nav>

      <div className="container">
        <div className="sp-top-layout">
          <div className="sp-content-top">
          <div className="sp-section-label"><h2>About Aesthetic Cosmetology</h2></div>
          
          <div className="doctor-profile-split">
            <div className="doctor-profile-text">
              <h3 style={{ marginTop: '-8px' }}>Dr. Yogeswari Subramanian</h3>
              <div className="dp-specialty">Expert in Aesthetic Dermatology</div>
              <p style={{ textAlign: 'justify' }}>Dr. Yogeswari Subramanian (MBBS, MD, DNB - DVL) blends medical expertise with artistic precision to deliver premium aesthetic care, providing subtle, natural-looking enhancements using advanced treatments.</p>
            </div>
            <div className="doctor-profile-img">
              <img src={yogeswariImg} alt="Dr. Yogeswari Subramanian" />
            </div>
          </div>
        </div>
      </div>

      <div className="sp-content-bottom">
        <div className="sp-section-label" style={{ marginTop: 0 }}><h2>Our Aesthetic Treatments</h2></div>
        <div className="treatments-grid">
          <TreatmentCard icon={<Smile />} title="Botox &amp; Neuromodulators" desc="Targeted anti-wrinkle injections to soften dynamic expression lines, crow's feet, and forehead wrinkles for a refreshed, youthful appearance." />
          <TreatmentCard icon={<Syringe />} title="Skin Boosters" desc="Deep hydrating micro-injections of hyaluronic acid to improve skin elasticity, texture, and luminosity for a natural, radiant glow." />
          <TreatmentCard icon={<Zap />} title="Laser Hair Reduction" desc="Advanced, virtually painless diode and Nd:YAG laser technologies for permanent, safe, and effective hair reduction on all skin types." />
          <TreatmentCard icon={<Droplets />} title="Medi-Facials &amp; Peels" desc="Customized clinical facials (Hydrafacial, Carbon Peels) designed to deep-cleanse, exfoliate, and infuse the skin with powerful hydrating serums." />
          <TreatmentCard icon={<Target />} title="Hair Restoration" desc="Advanced therapies including PRP and targeted treatments to stimulate follicles, reduce hair thinning, and promote natural, healthy hair growth." />
          <TreatmentCard icon={<Feather />} title="Scar &amp; Stretch Mark Revision" desc="Advanced micro-needling with PRP and fractional laser resurfacing to dramatically improve the texture and appearance of scars and stretch marks." />
        </div>

        <div className="process-section">
          <div className="sp-section-label"><h2>The Aesthetic Journey</h2></div>
          <div className="process-step">
            <div className="step-num" style={{ background: '#a855f7' }}>1</div>
            <div>
              <h4>Aesthetic Consultation</h4>
              <p>A comprehensive facial assessment to discuss your concerns, aesthetic goals, and expectations in a comfortable environment.</p>
            </div>
          </div>
          <div className="process-step">
            <div className="step-num" style={{ background: '#a855f7' }}>2</div>
            <div>
              <h4>Customized Blueprint</h4>
              <p>We create a personalized treatment roadmap, recommending the exact procedures and timelines needed to achieve optimal results.</p>
            </div>
          </div>
          <div className="process-step">
            <div className="step-num" style={{ background: '#a855f7' }}>3</div>
            <div>
              <h4>Precision Treatment</h4>
              <p>Your procedure is performed by Dr. Yogeswari using top-tier, sterile equipment focusing heavily on safety and patient comfort.</p>
            </div>
          </div>
          <div className="process-step">
            <div className="step-num" style={{ background: '#a855f7' }}>4</div>
            <div>
              <h4>Aftercare &amp; Maintenance</h4>
              <p>Detailed post-procedure guidelines and follow-up appointments to ensure proper healing and long-lasting aesthetic enhancements.</p>
            </div>
          </div>
        </div>

        <div className="bottom-widgets-grid">
          <div className="sw-book sidebar-widget" style={{ borderTopColor: '#a855f7' }}>
            <h3>Book an Aesthetic Consult</h3>
            <p>Ready to enhance your natural glow? Schedule a private consultation to explore the best aesthetic treatments for your unique features.</p>
            <a href="/#contact" className="btn-white" style={{ color: '#a855f7' }}><Calendar /> Book Now</a>
          </div>

          <div className="sidebar-widget">
            <h3>Why Choose REVIVE?</h3>
            <ul className="sw-checklist">
              <li>Performed by a Board-Certified MD</li>
              <li>FDA-approved products only</li>
              <li>Natural, subtle "undone" look</li>
              <li>Strict hygiene &amp; safety protocols</li>
              <li>Transparent, upfront pricing</li>
              <li>Comprehensive post-care support</li>
            </ul>
          </div>
        </div>
      </div>
      </div>
    </main>
  );
}
