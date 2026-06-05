import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  ChevronRight, Brain, CheckCircle, Calendar, CloudLightning, HeartCrack, Moon, Users, Briefcase, Rainbow, ChevronDown
} from 'lucide-react';
import sivakumarImg from '../assets/sivakumar.jpeg';
import counselingImg from '../assets/counseling.jpg';

function TreatmentCard({ id, icon, title, desc, openCard, setOpenCard }) {
  const isOpen = openCard === id;
  return (
    <div className={`treatment-card tc-accordion ${isOpen ? 'tc-open' : ''}`} onClick={() => setOpenCard(isOpen ? null : id)}>
      <div className="tc-header">
        <div className="tc-icon">{icon}</div>
        <h3>{title}</h3>
        <ChevronDown size={18} className={`tc-chevron ${isOpen ? 'rotated' : ''}`} />
      </div>
      <div className="tc-body">
        <p>{desc}</p>
      </div>
    </div>
  );
}

export default function Psychiatry() {
  const [openCard, setOpenCard] = useState(null);

  return (
    <main className="psychiatry-theme">
      <section className="sp-hero" style={{ position: 'relative' }}>
        <img
          src={counselingImg}
          alt=""
          aria-hidden="true"
          style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', opacity: 0.28, zIndex: 0 }}
        />
        <div className="sp-hero-orb" style={{ zIndex: 1 }}></div>
        <div className="container sp-hero-inner" style={{ position: 'relative', zIndex: 1 }}>
          <div className="sp-hero-pill"><Brain /> Mental Peace</div>
          <h1>Compassionate <span>Psychiatry</span><br/>&amp; Counseling</h1>
          <p className="sp-hero-sub">A safe, confidential space for your mental health. Overcome anxiety, manage stress, and find balance with our empathetic specialists.</p>
          <div className="sp-hero-stats">
            <div className="sp-stat"><strong>5+</strong><span>Therapy Types</span></div>
            <div className="sp-stat"><strong>100%</strong><span>Confidential</span></div>
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
          <span>Psychiatry &amp; Counseling</span>
        </div>
      </nav>

      <div className="container">
        <div className="sp-top-layout">
          <div className="sp-content-top">
            <div className="sp-section-label"><h2>About Our Mental Health Service</h2></div>
            <div className="doctor-profile-split">
              <div className="doctor-profile-text">
                <h3 style={{ marginTop: '-8px' }}>Dr. P.T. Sivakumar</h3>
                <div className="dp-specialty">Consultant Psychiatrist</div>
                <p style={{ textAlign: 'justify' }}>Dr. P.T. Sivakumar (MBBS, MD - CMC Vellore) provides compassionate, holistic psychiatric care. He combines medical interventions with empathetic counseling to effectively treat anxiety, depression, and stress.</p>
              </div>
              <div className="doctor-profile-img">
                <img src={sivakumarImg} alt="Dr. P.T. Sivakumar" />
              </div>
            </div>
          </div>
        </div>

        <div className="sp-content-bottom">
          <div className="sp-section-label" style={{ marginTop: 0 }}><h2>Areas of Support</h2></div>
          <div className="treatments-grid">
            <TreatmentCard id="psych-1" openCard={openCard} setOpenCard={setOpenCard} icon={<CloudLightning />} title="Anxiety &amp; Panic" desc="Evidence-based therapies, including CBT, to help you identify triggers, manage panic attacks, and build emotional resilience against chronic stress." />
            <TreatmentCard id="psych-2" openCard={openCard} setOpenCard={setOpenCard} icon={<HeartCrack />} title="Depression &amp; Mood" desc="Comprehensive support through both pharmacological management and deep talk therapy to treat clinical depression and mood imbalances safely." />
            <TreatmentCard id="psych-3" openCard={openCard} setOpenCard={setOpenCard} icon={<Moon />} title="Sleep &amp; Insomnia" desc="Diagnosis of sleep disorders linked to psychological stress, treated with targeted sleep hygiene protocols and relaxation therapies." />
            <TreatmentCard id="psych-4" openCard={openCard} setOpenCard={setOpenCard} icon={<Users />} title="Relationship Counseling" desc="A supportive framework for couples and families to improve communication skills, foster healthier dynamics, and navigate conflict." />
            <TreatmentCard id="psych-5" openCard={openCard} setOpenCard={setOpenCard} icon={<Briefcase />} title="Stress &amp; Burnout" desc="Strategic interventions for high-performing individuals experiencing professional burnout, focusing on boundary setting and work-life balance." />
            <TreatmentCard id="psych-6" openCard={openCard} setOpenCard={setOpenCard} icon={<Rainbow />} title="LGBTQ+ Affirmative Therapy" desc="A completely inclusive, celebratory space providing culturally competent mental health support for individuals across all identities." />
          </div>

          <div className="process-section">
            <div className="sp-section-label"><h2>Your Path to Recovery</h2></div>
            <div className="process-step">
              <div className="step-num">1</div>
              <div>
                <h4>Safe Space Assessment</h4>
                <p>An initial, deeply confidential session to listen to your concerns, understand your history, and establish a comfortable connection.</p>
              </div>
            </div>
            <div className="process-step">
              <div className="step-num">2</div>
              <div>
                <h4>Collaborative Care Plan</h4>
                <p>Together, we design a holistic approach that may include talk therapy, lifestyle adjustments, and/or psychiatric medication management.</p>
              </div>
            </div>
            <div className="process-step">
              <div className="step-num">3</div>
              <div>
                <h4>Consistent Support Sessions</h4>
                <p>Regular counseling appointments to process emotions, learn new coping mechanisms, and track your emotional growth.</p>
              </div>
            </div>
            <div className="process-step">
              <div className="step-num">4</div>
              <div>
                <h4>Ongoing Resilience Building</h4>
                <p>Equipping you with the lifelong tools and strategies needed to navigate future challenges independently and confidently.</p>
              </div>
            </div>
          </div>

          <div className="bottom-widgets-grid">
            <div className="sw-book sidebar-widget">
              <h3>Book a Session</h3>
              <p>Take the first step towards mental clarity. Our scheduling is strictly confidential.</p>
              <a href="/#contact" className="btn-white"><Calendar /> Book Now</a>
            </div>

            <div className="sidebar-widget">
              <h3>Our Commitment</h3>
              <ul className="sw-checklist">
                <li>100% Confidentiality</li>
                <li>Non-judgmental environment</li>
                <li>Evidence-based therapies</li>
                <li>LGBTQ+ affirmative care</li>
                <li>Experienced psychiatrists</li>
                <li>Compassionate counselors</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
