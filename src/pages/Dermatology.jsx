import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  ChevronRight, User, CheckCircle, Calendar, Zap, Star, Sun, Shield, Droplets, Heart, Search, Microscope, Activity, Wind, TrendingUp, Pill, ChevronDown
} from 'lucide-react';
import yogeswariImg from '../assets/Yogeswari Subramanian.jpeg';

function TreatmentCard({ icon, title, desc }) {
  const [open, setOpen] = useState(false);
  return (
    <div className={`treatment-card tc-accordion ${open ? 'tc-open' : ''}`} onClick={() => setOpen(v => !v)}>
      <div className="tc-header">
        <div className="tc-icon">{icon}</div>
        <h3>{title}</h3>
        <ChevronDown size={18} className={`tc-chevron ${open ? 'rotated' : ''}`} />
      </div>
      <div className="tc-body">
        <p>{desc}</p>
      </div>
    </div>
  );
}

export default function Dermatology() {
  return (
    <main>
      <section className="sp-hero">
        <div className="sp-hero-orb"></div>
        <div className="container sp-hero-inner">
          <div className="sp-hero-pill"><User /> Dermatology &amp; Hair Care</div>
          <h1>Advanced <span>Dermatology</span><br/>&amp; Hair Care</h1>
          <p className="sp-hero-sub">Science-backed treatments designed to restore, protect, and illuminate your skin, hair, and scalp - tailored uniquely for you.</p>
          <div className="sp-hero-stats">
            <div className="sp-stat"><strong>10+</strong><span>Clinical Treatments</span></div>
            <div className="sp-stat"><strong>1100+</strong><span>Happy Patients</span></div>
            <div className="sp-stat"><strong>4.9★</strong><span>Google Rating</span></div>
          </div>
        </div>
      </section>

      <nav className="sp-breadcrumb">
        <div className="container sp-breadcrumb-inner">
          <Link to="/">Home</Link>
          <ChevronRight />
          <Link to="/#services">Services</Link>
          <ChevronRight />
          <span>Dermatology &amp; Hair Care</span>
        </div>
      </nav>

      <div className="container">
        <div className="sp-top-layout">
          <div className="sp-content-top">
          <div className="sp-section-label"><h2>About Dermatology &amp; Hair Care</h2></div>
          
          <div className="doctor-profile-split">
            <div className="doctor-profile-text">
              <h3 style={{ marginTop: '-8px' }}>Dr. Yogeswari Subramanian</h3>
              <div className="dp-specialty">Board certified Dermatologist</div>
              <p style={{ textAlign: 'justify' }}>Dr. Yogeswari Subramanian (MBBS, MD, DNB - DVL) is a highly skilled dermatologist specializing in advanced clinical and aesthetic care. She provides tailored, evidence-based solutions for radiant skin and healthy hair.</p>
            </div>
            <div className="doctor-profile-img">
              <img src={yogeswariImg} alt="Dr. Yogeswari Subramanian" />
            </div>
          </div>
        </div>
      </div>

      <div className="sp-content-bottom">
        <div className="sp-section-label" style={{ marginTop: 0 }}><h2>Skin Care Treatments</h2></div>
        <div className="treatments-grid">
          <TreatmentCard icon={<Zap />} title="Acne &amp; Scar Management" desc="Advanced chemical peels, laser therapy, and personalized topical regimens to clear acne and resurface skin for a flawless complexion." />
          <TreatmentCard icon={<Star />} title="Anti-Aging &amp; Rejuvenation" desc="Micro-needling, gentle injectables, and hydration facials to stimulate collagen and restore youthful, plump skin." />
          <TreatmentCard icon={<Sun />} title="Pigmentation &amp; Glow Rituals" desc="Targeted Q-switch laser sessions and customized peels to treat melasma, sunspots, and uneven tone for a radiant complexion." />
          <TreatmentCard icon={<Shield />} title="Eczema &amp; Medical Dermatology" desc="Fast-acting relief and long-term management strategies for eczema, psoriasis, and severe rashes to soothe and protect your skin." />
          <TreatmentCard icon={<Droplets />} title="Chemical Peels &amp; Lasers" desc="Medical-grade chemical exfoliation and laser resurfacing for deep skin renewal, pore reduction, and texture improvement." />
          <TreatmentCard icon={<Heart />} title="Skin Allergy &amp; Infections" desc="Comprehensive patch testing, allergy management, and targeted antimicrobial therapies for all skin infections and reactions." />
        </div>

        <div className="sp-section-label" style={{ marginTop: '40px' }}><h2>Hair &amp; Scalp Care (Trichology)</h2></div>
        <div className="treatments-grid">
          <TreatmentCard icon={<Search />} title="Hair Fall &amp; Alopecia" desc="Advanced dermoscopy analysis to identify the root cause of hair fall - whether Telogen Effluvium or progressive alopecia - with a personalized treatment plan." />
          <TreatmentCard icon={<Microscope />} title="Scalp Analysis &amp; Treatment" desc="Comprehensive microscopic scalp assessment to evaluate follicle health, density, and scalp condition for targeted therapeutic intervention." />
          <TreatmentCard icon={<Activity />} title="PRP Hair Therapy" desc="Platelet-Rich Plasma injections using your own growth factors to stimulate dormant follicles, extend the growth phase, and increase hair thickness significantly." />
          <TreatmentCard icon={<Wind />} title="Dandruff &amp; Seborrheic Dermatitis" desc="Medical-grade topical treatments and deep-cleansing scalp therapies to restore balance, eliminate flakes, and relieve chronic scalp irritation." />
          <TreatmentCard icon={<TrendingUp />} title="Hair Growth Protocols" desc="Customized growth protocols combining targeted serums, low-level laser therapy, and nutritional support for maximum hair density restoration." />
          <TreatmentCard icon={<Pill />} title="Nutritional Hair Support" desc="Comprehensive nutritional profiling to correct deficiencies in Iron, Vitamin D, and Zinc that fuel hair growth from the inside out." />
        </div>

        <div className="process-section">
          <div className="sp-section-label"><h2>Your Journey With Us</h2></div>
          <div className="process-step">
            <div className="step-num">1</div>
            <div>
              <h4>Initial Consultation</h4>
              <p>A detailed skin assessment with our specialist to understand your concerns, medical history, and lifestyle factors.</p>
            </div>
          </div>
          <div className="process-step">
            <div className="step-num">2</div>
            <div>
              <h4>Personalized Treatment Plan</h4>
              <p>We design a science-backed, step-by-step care plan uniquely suited to your skin type and goals.</p>
            </div>
          </div>
          <div className="process-step">
            <div className="step-num">3</div>
            <div>
              <h4>Treatment &amp; Monitoring</h4>
              <p>Professional in-clinic procedures combined with an at-home regimen, with regular check-ins to track progress.</p>
            </div>
          </div>
          <div className="process-step">
            <div className="step-num">4</div>
            <div>
              <h4>Long-Term Skin Health</h4>
              <p>Ongoing maintenance plans and preventive care to ensure your results are lasting and your skin stays its best.</p>
            </div>
          </div>
        </div>

        <div className="bottom-widgets-grid">
          <div className="sw-book sidebar-widget">
            <h3>Book a Consultation</h3>
            <p>Get a personalized assessment from our expert dermatologist for skin, hair, or scalp. All appointments are confidential.</p>
            <a href="/#contact" className="btn-white"><Calendar /> Book Now</a>
          </div>

          <div className="sidebar-widget">
            <h3>What's Included</h3>
            <ul className="sw-checklist">
              <li>Comprehensive skin &amp; hair analysis</li>
              <li>Dermoscopic scalp assessment if needed</li>
              <li>Personalized treatment protocol</li>
              <li>In-clinic procedure sessions</li>
              <li>At-home daily care regimen</li>
              <li>Follow-up progress tracking</li>
            </ul>
          </div>
        </div>
      </div>
      </div>
    </main>
  );
}
