import React from 'react';
import { Link } from 'react-router-dom';
import { 
  ChevronRight, Brain, CheckCircle, Calendar, CloudLightning, HeartCrack, Moon, Users, Briefcase, Rainbow
} from 'lucide-react';
import sivakumarImg from '../assets/sivakumar.jpeg';

export default function Psychiatry() {
  return (
    <main className="psychiatry-theme">
      <section className="sp-hero">
        <div className="sp-hero-orb"></div>
        <div className="container sp-hero-inner">
          <div className="sp-hero-pill"><Brain /> Mental Peace</div>
          <h1>Compassionate <span>Psychiatry</span><br/>&amp; Counseling</h1>
          <p className="sp-hero-sub">A safe, confidential space for your mental wellness. Overcome anxiety, manage stress, and find balance with our empathetic specialists.</p>
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
          <div className="sp-section-label"><h2>About Our Mental Wellness Service</h2></div>
          
          <div className="doctor-profile-split">
            <div className="doctor-profile-text">
              <h3 style={{ marginTop: '-8px' }}>Dr. P.T. Sivakumar</h3>
              <div className="dp-specialty">Consultant Psychiatrist</div>
              <p style={{ textAlign: 'justify' }}>True wellness encompasses the mind just as much as the body. At REVIVE Clinic, our empathetic psychiatry and counseling team is dedicated to providing a non-judgmental, strictly confidential environment where you can explore your thoughts and overcome mental health challenges.</p>
              <p style={{ textAlign: 'justify' }}>Dr. P.T. Sivakumar (MBBS, MD - CMC Vellore) is a compassionate and highly experienced Consultant Psychiatrist dedicated to holistic mental health care. Trained at one of India's premier medical institutions, he specializes in the diagnosis, treatment, and ongoing management of a wide variety of psychiatric conditions, including anxiety, depression, and stress-related disorders.</p>
              <p style={{ textAlign: 'justify' }}>Believing strongly in patient-centric care, Dr. Sivakumar combines precise medical interventions with empathetic counseling, empowering patients to regain control of their mental well-being and live fulfilling lives.</p>
              <p style={{ textAlign: 'justify' }}>His approach is deeply rooted in the belief that mental health is a collaborative journey. He works closely with each individual to demystify psychological conditions, breaking down the stigma associated with seeking help.</p>
              <ul style={{ listStyle: 'none', padding: 0, margin: '24px 0 0', color: 'var(--text-main)', fontSize: '0.95rem' }}>
                <li style={{ marginBottom: '12px', display: 'flex', alignItems: 'flex-start' }}><CheckCircle style={{ width: '18px', height: '18px', color: '#6366f1', marginRight: '12px', flexShrink: 0 }} /> Expertise in Anxiety &amp; Mood Disorders</li>
                <li style={{ marginBottom: '12px', display: 'flex', alignItems: 'flex-start' }}><CheckCircle style={{ width: '18px', height: '18px', color: '#6366f1', marginRight: '12px', flexShrink: 0 }} /> Holistic, Collaborative Treatment Plans</li>
                <li style={{ marginBottom: '12px', display: 'flex', alignItems: 'flex-start' }}><CheckCircle style={{ width: '18px', height: '18px', color: '#6366f1', marginRight: '12px', flexShrink: 0 }} /> Compassionate, Non-Judgmental Care</li>
              </ul>
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
          <div className="treatment-card">
            <div className="tc-icon"><CloudLightning /></div>
            <h3>Anxiety &amp; Panic</h3>
            <p>Evidence-based therapies, including CBT, to help you identify triggers, manage panic attacks, and build emotional resilience against chronic stress.</p>
          </div>
          <div className="treatment-card">
            <div className="tc-icon"><HeartCrack /></div>
            <h3>Depression &amp; Mood</h3>
            <p>Comprehensive support through both pharmacological management and deep talk therapy to treat clinical depression and mood imbalances safely.</p>
          </div>
          <div className="treatment-card">
            <div className="tc-icon"><Moon /></div>
            <h3>Sleep &amp; Insomnia</h3>
            <p>Diagnosis of sleep disorders linked to psychological stress, treated with targeted sleep hygiene protocols and relaxation therapies.</p>
          </div>
          <div className="treatment-card">
            <div className="tc-icon"><Users /></div>
            <h3>Relationship Counseling</h3>
            <p>A supportive framework for couples and families to improve communication skills, foster healthier dynamics, and navigate conflict.</p>
          </div>
          <div className="treatment-card">
            <div className="tc-icon"><Briefcase /></div>
            <h3>Stress &amp; Burnout</h3>
            <p>Strategic interventions for high-performing individuals experiencing professional burnout, focusing on boundary setting and work-life balance.</p>
          </div>
          <div className="treatment-card">
            <div className="tc-icon"><Rainbow /></div>
            <h3>LGBTQ+ Affirmative Therapy</h3>
            <p>A completely inclusive, celebratory space providing culturally competent mental health support for individuals across all identities.</p>
          </div>
        </div>

        <div className="process-section">
          <div className="sp-section-label"><h2>Your Path to Wellness</h2></div>
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
            <p>Take the first step towards mental peace. Our scheduling is strictly confidential.</p>
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
