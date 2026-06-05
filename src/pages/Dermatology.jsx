import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  ChevronRight, User, CheckCircle, Calendar, Zap, Star, Sun, Shield, Droplets, Heart, Search, Microscope, Activity, Wind, TrendingUp, Pill, ChevronDown
} from 'lucide-react';
import yogeswariImg from '../assets/Yogeswari Subramanian.jpeg';

function TreatmentCard({ id, icon, title, conditionsLabel = "Conditions Treated", conditions = [], treatments = [], openCard, setOpenCard }) {
  const isOpen = openCard === id;
  return (
    <div className={`treatment-card tc-accordion ${isOpen ? 'tc-open' : ''}`} onClick={() => setOpenCard(isOpen ? null : id)}>
      <div className="tc-header">
        <div className="tc-icon">{icon}</div>
        <h3>{title}</h3>
        <ChevronDown size={18} className={`tc-chevron ${isOpen ? 'rotated' : ''}`} />
      </div>
      <div className="tc-body">
        {conditions.length > 0 && (
          <div className="tc-section">
            <h4>{conditionsLabel}</h4>
            <ul>
              {conditions.map((c, i) => <li key={i}>{c}</li>)}
            </ul>
          </div>
        )}
        {treatments.length > 0 && (
          <div className="tc-section">
            <h4>Treatments Available</h4>
            <ul>
              {treatments.map((t, i) => <li key={i}>{t}</li>)}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}

export default function Dermatology() {
  const [openCard, setOpenCard] = useState(null);

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
          <TreatmentCard 
            id="skin-1" openCard={openCard} setOpenCard={setOpenCard}
            icon={<Zap />} 
            title="Acne &amp; Acne Scars" 
            conditions={["Acne (Pimples)", "Acne Marks", "Acne Scars"]}
            treatments={["Medical Management", "Chemical Peels", "Microneedling", "PRP Therapy", "Subcision", "TCA CROSS", "Intralesional Injections", "Laser Treatments"]}
          />
          <TreatmentCard 
            id="skin-2" openCard={openCard} setOpenCard={setOpenCard}
            icon={<Sun />} 
            title="Pigmentation &amp; Uneven Skin Tone" 
            conditions={["Melasma", "Post-inflammatory Pigmentation", "Sunspots", "Uneven Skin Tone"]}
            treatments={["Medical Management", "Chemical Peels", "Mesotherapy", "Injectable Treatments"]}
          />
          <TreatmentCard 
            id="skin-3" openCard={openCard} setOpenCard={setOpenCard}
            icon={<Star />} 
            title="Skin Rejuvenation &amp; Anti-Ageing" 
            conditionsLabel="Concerns Treated"
            conditions={["Fine Lines", "Wrinkles", "Ageing Skin", "Dull Skin"]}
            treatments={["Medical Management", "PRP Therapy", "Botox", "Skin Boosters"]}
          />
          <TreatmentCard 
            id="skin-4" openCard={openCard} setOpenCard={setOpenCard}
            icon={<Shield />} 
            title="Skin Allergies" 
            conditions={["Allergic Skin Reactions", "Contact Dermatitis", "Urticaria (Hives)", "Itchy Skin Conditions"]}
            treatments={["Medical Management", "Allergy Evaluation", "Trigger Identification & Avoidance Guidance"]}
          />
          <TreatmentCard 
            id="skin-5" openCard={openCard} setOpenCard={setOpenCard}
            icon={<Droplets />} 
            title="Skin Infections" 
            conditions={["Fungal Infections", "Bacterial Infections", "Folliculitis (Boils)", "Warts", "Herpes Infection", "Herpes Zoster (Shingles)", "Chickenpox", "Scabies"]}
            treatments={["Medical Management", "Cryotherapy (for suitable lesions such as warts)"]}
          />
          <TreatmentCard 
            id="skin-6" openCard={openCard} setOpenCard={setOpenCard}
            icon={<Activity />} 
            title="Chronic &amp; Autoimmune Skin Conditions" 
            conditions={["Psoriasis", "Eczema", "Vitiligo", "Lichen Planus", "Bullous Disorders", "Leprosy"]}
            treatments={["Medical Management", "Advanced Biological Treatments"]}
          />
          <TreatmentCard 
            id="skin-7" openCard={openCard} setOpenCard={setOpenCard}
            icon={<Heart />} 
            title="Pediatric Dermatology" 
            conditions={["Atopic Dermatitis", "Diaper Rash", "Childhood Eczema", "Skin Infections in Children", "Birthmarks", "Common Pediatric Skin Disorders"]}
            treatments={["Child-Friendly Medical Management", "Parent Counselling & Skin Care Guidance"]}
          />
          <TreatmentCard 
            id="skin-8" openCard={openCard} setOpenCard={setOpenCard}
            icon={<TrendingUp />} 
            title="Scars, Keloids &amp; Stretch Marks" 
            conditions={["Acne Scars", "Chickenpox Scars", "Post-Traumatic Scars", "Hypertrophic Scars", "Keloids", "Stretch Marks"]}
            treatments={["Intralesional Injections", "Cryotherapy", "Microneedling", "PRP Therapy", "Laser Treatments"]}
          />
        </div>

        <div className="sp-section-label" style={{ marginTop: '40px' }}><h2>Hair &amp; Scalp Care (Trichology)</h2></div>
        <div className="treatments-grid">
          <TreatmentCard 
            id="hair-1" openCard={openCard} setOpenCard={setOpenCard}
            icon={<Search />} 
            title="Hair Fall &amp; Hair Loss" 
            conditions={["Hair Fall", "Male Pattern Baldness (Androgenetic Alopecia)", "Female Pattern Hair Loss", "Alopecia Areata"]}
            treatments={["Medical Management", "PRP Therapy", "GFC (Growth Factor Concentrate) Therapy", "Hair Transplantation"]}
          />
          <TreatmentCard 
            id="hair-2" openCard={openCard} setOpenCard={setOpenCard}
            icon={<Wind />} 
            title="Dandruff &amp; Scalp Disorders" 
            conditions={["Dandruff", "Seborrheic Dermatitis", "Scalp Psoriasis"]}
            treatments={["Medical Management", "Maintenance Care"]}
          />
          <TreatmentCard 
            id="hair-3" openCard={openCard} setOpenCard={setOpenCard}
            icon={<Zap />} 
            title="Unwanted Hair Removal" 
            conditionsLabel="Concerns Treated"
            conditions={["Excess Facial Hair", "Excess Body Hair"]}
            treatments={["Medical Management", "Laser Hair Reduction"]}
          />
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
