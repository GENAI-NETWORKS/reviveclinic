import React from 'react';
import { Link } from 'react-router-dom';
import { 
  ChevronRight, User, CheckCircle, Calendar, Zap, Star, Sun, Shield, Droplets, Heart, Search, Microscope, Activity, Wind, TrendingUp, Pill
} from 'lucide-react';
import yogeswariImg from '../assets/Yogeswari Subramanian.jpeg';

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
              <p style={{ textAlign: 'justify' }}>At REVIVE Clinic, we believe healthy skin and strong, vibrant hair are foundational to your confidence. Our comprehensive dermatology and hair care services treat a wide spectrum of skin, hair, and scalp conditions.</p>
              <p style={{ textAlign: 'justify' }}>Dr. Yogeswari Subramanian (MBBS, MD, DNB - DVL) is a highly skilled and compassionate dermatologist dedicated to providing comprehensive care. With extensive training in clinical and aesthetic dermatology, she specializes in acne management, scar revision, pigmentation treatments, and advanced hair restoration therapies.</p>
              <p style={{ textAlign: 'justify' }}>By combining medically proven techniques, advanced diagnostics, and customized treatment plans, she ensures that every patient receives tailored care designed to achieve long-lasting, healthy results.</p>
              <p style={{ textAlign: 'justify' }}>Dr. Yogeswari stays at the forefront of dermatological advancements, ensuring that her patients benefit from the latest evidence-based treatments and cutting-edge aesthetic procedures. Whether you are dealing with chronic skin conditions, seeking hair restoration, or looking to rejuvenate your complexion, she provides a welcoming, empathetic environment where your concerns are heard and addressed.</p>
              <ul style={{ listStyle: 'none', padding: 0, margin: '24px 0 0', color: 'var(--text-main)', fontSize: '0.95rem' }}>
                <li style={{ marginBottom: '12px', display: 'flex', alignItems: 'flex-start' }}><CheckCircle style={{ width: '18px', height: '18px', color: 'var(--primary)', marginRight: '12px', flexShrink: 0 }} /> Expert in Clinical &amp; Aesthetic Dermatology</li>
                <li style={{ marginBottom: '12px', display: 'flex', alignItems: 'flex-start' }}><CheckCircle style={{ width: '18px', height: '18px', color: 'var(--primary)', marginRight: '12px', flexShrink: 0 }} /> Advanced Hair Restoration Protocols</li>
                <li style={{ marginBottom: '12px', display: 'flex', alignItems: 'flex-start' }}><CheckCircle style={{ width: '18px', height: '18px', color: 'var(--primary)', marginRight: '12px', flexShrink: 0 }} /> Evidence-Based, Patient-First Approach</li>
              </ul>
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
          <div className="treatment-card">
            <div className="tc-icon"><Zap /></div>
            <h3>Acne &amp; Scar Management</h3>
            <p>Advanced chemical peels, laser therapy, and personalized topical regimens to clear acne and resurface skin for a flawless complexion.</p>
          </div>
          <div className="treatment-card">
            <div className="tc-icon"><Star /></div>
            <h3>Anti-Aging &amp; Rejuvenation</h3>
            <p>Micro-needling, gentle injectables, and hydration facials to stimulate collagen and restore youthful, plump skin.</p>
          </div>
          <div className="treatment-card">
            <div className="tc-icon"><Sun /></div>
            <h3>Pigmentation &amp; Glow Rituals</h3>
            <p>Targeted Q-switch laser sessions and customized peels to treat melasma, sunspots, and uneven tone for a radiant complexion.</p>
          </div>
          <div className="treatment-card">
            <div className="tc-icon"><Shield /></div>
            <h3>Eczema &amp; Medical Dermatology</h3>
            <p>Fast-acting relief and long-term management strategies for eczema, psoriasis, and severe rashes to soothe and protect your skin.</p>
          </div>
          <div className="treatment-card">
            <div className="tc-icon"><Droplets /></div>
            <h3>Chemical Peels &amp; Lasers</h3>
            <p>Medical-grade chemical exfoliation and laser resurfacing for deep skin renewal, pore reduction, and texture improvement.</p>
          </div>
          <div className="treatment-card">
            <div className="tc-icon"><Heart /></div>
            <h3>Skin Allergy &amp; Infections</h3>
            <p>Comprehensive patch testing, allergy management, and targeted antimicrobial therapies for all skin infections and reactions.</p>
          </div>
        </div>

        <div className="sp-section-label" style={{ marginTop: '40px' }}><h2>Hair &amp; Scalp Care (Trichology)</h2></div>
        <div className="treatments-grid">
          <div className="treatment-card">
            <div className="tc-icon"><Search /></div>
            <h3>Hair Fall &amp; Alopecia</h3>
            <p>Advanced dermoscopy analysis to identify the root cause of hair fall - whether Telogen Effluvium or progressive alopecia - with a personalized treatment plan.</p>
          </div>
          <div className="treatment-card">
            <div className="tc-icon"><Microscope /></div>
            <h3>Scalp Analysis &amp; Treatment</h3>
            <p>Comprehensive microscopic scalp assessment to evaluate follicle health, density, and scalp condition for targeted therapeutic intervention.</p>
          </div>
          <div className="treatment-card">
            <div className="tc-icon"><Activity /></div>
            <h3>PRP Hair Therapy</h3>
            <p>Platelet-Rich Plasma injections using your own growth factors to stimulate dormant follicles, extend the growth phase, and increase hair thickness significantly.</p>
          </div>
          <div className="treatment-card">
            <div className="tc-icon"><Wind /></div>
            <h3>Dandruff &amp; Seborrheic Dermatitis</h3>
            <p>Medical-grade topical treatments and deep-cleansing scalp therapies to restore balance, eliminate flakes, and relieve chronic scalp irritation.</p>
          </div>
          <div className="treatment-card">
            <div className="tc-icon"><TrendingUp /></div>
            <h3>Hair Growth Protocols</h3>
            <p>Customized growth protocols combining targeted serums, low-level laser therapy, and nutritional support for maximum hair density restoration.</p>
          </div>
          <div className="treatment-card">
            <div className="tc-icon"><Pill /></div>
            <h3>Nutritional Hair Support</h3>
            <p>Comprehensive nutritional profiling to correct deficiencies in Iron, Vitamin D, and Zinc that fuel hair growth from the inside out.</p>
          </div>
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
