import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
  Heart, Microscope, ShieldCheck, User, Brain, ArrowRight, Calendar,
  MapPin, Phone, MessageCircle, CheckCircle, ArrowLeftRight, Feather, ChevronDown, ChevronUp, Users, Star, Sparkles, HeartPulse, Scissors
} from 'lucide-react';
import { getBlogPosts } from '../utils/blogApi';

import sivaImg from '../assets/sivakumar.jpeg';
import yogeswariImg from '../assets/Yogeswari Subramanian.jpeg';
import dermatologyImg from '../assets/dermatology.jpg';
import trichologyImg from '../assets/trichology.jpg';
import counsellingImg from '../assets/counselling.jpg';
import blogSkinImg from '../assets/blog_skin.jpg';
import blogHairImg from '../assets/blog_hair.jpg';
import blogMindImg from '../assets/blog_mind.jpg';
import assessmentBgImg from '../assets/assessment-bg.jpg';
import heroBgImage from '../assets/image.png';

import skinServiceImg from '../assets/skin.png';
import hairServiceImg from '../assets/hair.png';
import psychiatryServiceImg from '../assets/Psychiatry.png';
import counsellingServiceImg from '../assets/psychological-counseling.jpeg';

import img_1yOkU9D2peT8EsPqowkU6ntBTbY8rw5ja_w1200 from '../assets/1yOkU9D2peT8EsPqowkU6ntBTbY8rw5ja_w1200.jpg';
import img_1N5cm_vugS_Y6fIlk9gSOZdirTBzx_KFD_w800 from '../assets/1N5cm-vugS-Y6fIlk9gSOZdirTBzx_KFD_w800.jpg';
import img_1J1Vm1TuVls0uoR91UOEuobovS11_NRgi_w1000 from '../assets/1J1Vm1TuVls0uoR91UOEuobovS11_NRgi_w1000.jpg';
import img_1yOkU9D2peT8EsPqowkU6ntBTbY8rw5ja_w600 from '../assets/1yOkU9D2peT8EsPqowkU6ntBTbY8rw5ja_w600.jpg';
import img_1N5cm_vugS_Y6fIlk9gSOZdirTBzx_KFD_w600 from '../assets/1N5cm-vugS-Y6fIlk9gSOZdirTBzx_KFD_w600.jpg';
import img_1rhnpajgpuI2QsypxulxAl5uaC9b_iT_i_w600 from '../assets/1rhnpajgpuI2QsypxulxAl5uaC9b_iT_i_w600.jpg';
import img_1J1Vm1TuVls0uoR91UOEuobovS11_NRgi_w600 from '../assets/1J1Vm1TuVls0uoR91UOEuobovS11_NRgi_w600.jpg';
import img_19ipRdJ70CWRqphVNz5BEdahPp_r9_vxL_w600 from '../assets/19ipRdJ70CWRqphVNz5BEdahPp_r9-vxL_w600.jpg';

import img_1AG2mEOtX8tAo81E93IfvQYDdV9qbOYPo_w600 from '../assets/1AG2mEOtX8tAo81E93IfvQYDdV9qbOYPo_w600.jpg';
import img_1cS2GDC27NdBXekcWBUkGtRl_48DukFf4_w600 from '../assets/1cS2GDC27NdBXekcWBUkGtRl-48DukFf4_w600.jpg';
import img_16WY3VJ2f0osL6oMDfbHsCtaZ9vuRyLTC_w1920_h1080 from '../assets/16WY3VJ2f0osL6oMDfbHsCtaZ9vuRyLTC_w1920-h1080.jpg';
import img_1PgMsWg_jw6Rix5qj9M8NvrLXGF_AUP93_w1200 from '../assets/1PgMsWg-jw6Rix5qj9M8NvrLXGF-AUP93_w1200.jpg';
import img_1J1Vm1TuVls0uoR91UOEuobovS11_NRgi_w1600 from '../assets/1J1Vm1TuVls0uoR91UOEuobovS11_NRgi_w1600.jpg';

// Drive image URLs for assessment section
import assessmentNewBg from '../assets/IMG20251027192429~2.jpg.jpeg';
const ASSESSMENT_BG = assessmentNewBg;
const DERMATOLOGY_IMG = img_1yOkU9D2peT8EsPqowkU6ntBTbY8rw5ja_w1200;
const TRICHOLOGY_IMG = img_1N5cm_vugS_Y6fIlk9gSOZdirTBzx_KFD_w800;
const COUNSELLING_IMG = img_1J1Vm1TuVls0uoR91UOEuobovS11_NRgi_w1000;

function getCleanImageUrl(inputUrl) {
  if (!inputUrl) return '';
  if (typeof inputUrl !== 'string') return inputUrl;
  if (inputUrl.startsWith('data:')) return inputUrl;
  if (inputUrl.startsWith('/')) return inputUrl;

  if (inputUrl.includes('drive.google.com')) {
    const driveRegex = /\/d\/([a-zA-Z0-9_-]+)/;
    const driveRegexId = /[?&]id=([a-zA-Z0-9_-]+)/;
    const match = inputUrl.match(driveRegex) || inputUrl.match(driveRegexId);
    if (match && match[1]) {
      return `https://lh3.googleusercontent.com/d/${match[1]}`;
    }
  }

  const isUrl = inputUrl.startsWith('http://') || inputUrl.startsWith('https://');
  if (isUrl) return inputUrl;

  try {
    return new URL(`../assets/${inputUrl}`, import.meta.url).href;
  } catch (e) {
    return inputUrl;
  }
}

export default function Home() {
  const [assessment, setAssessment] = useState(null);
  const [formSuccess, setFormSuccess] = useState(false);
  const [displayPosts, setDisplayPosts] = useState([]);
  const [expandedService, setExpandedService] = useState(null);
  const [activeTab, setActiveTab] = useState('skin');

  const switchTab = (tab) => {
    setActiveTab(tab);
    setExpandedService(null); // reset to closed when switching tabs
  };

  const toggleService = (key) => setExpandedService(prev => prev === key ? null : key);

  const SERVICES = [
    {
      key: 'skin',
      title: 'Skin',
      category: 'Skin',
      icon: <Sparkles size={28} />,
      iconBg: '#e6f6f4',
      iconColor: '#2a9d8f',
      img: skinServiceImg,
      detail: 'Comprehensive medical and aesthetic dermatology services, including treatments for acne, pigmentation, allergies, and advanced chemical peels for a flawless complexion.',
    },
    {
      key: 'hair',
      title: 'Hair',
      category: 'Hair',
      icon: <Feather size={28} />,
      iconBg: '#fef3e2',
      iconColor: '#c2700f',
      img: hairServiceImg,
      detail: 'Advanced scalp analysis and targeted therapies like PRP to identify the root cause of hair fall and stimulate healthy hair regrowth.',
    },
    {
      key: 'psychiatry',
      title: 'Psychiatry',
      category: 'Psychiatry',
      icon: <HeartPulse size={28} />,
      iconBg: '#eef2ff',
      iconColor: '#4338ca',
      img: psychiatryServiceImg,
      detail: 'Evidence-based psychiatric support for anxiety, depression, sleep disorders, and mood imbalances through careful diagnosis and medical management.',
    },
    {
      key: 'counselling',
      title: 'Counselling',
      category: 'Counselling',
      icon: <MessageCircle size={28} />,
      iconBg: '#f0fdf4',
      iconColor: '#166534',
      img: counsellingServiceImg,
      detail: 'Compassionate, one-on-one talk therapy and structured sessions for individuals, couples, and families navigating stress, grief, and life transitions.',
    },
  ];

  const CATEGORY_COLORS = {
    'Skin': { bg: '#e6f6f4', color: 'var(--primary)' },
    'Hair': { bg: '#fef3e2', color: '#c2700f' },
    'Aesthetic': { bg: '#fce7f3', color: '#9d174d' },
    'Psychiatric': { bg: '#eef2ff', color: '#4338ca' },
    'Psychiatry': { bg: '#eef2ff', color: '#4338ca' },
    'Counselling': { bg: '#f0fdf4', color: '#166534' },
    'Dermatology': { bg: '#e6f6f4', color: 'var(--primary)' },
    'Hair Care': { bg: '#fef3e2', color: '#c2700f' },
  };
  const DEFAULT_COLOR = { bg: '#f1f5f9', color: '#475569' };

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const posts = await getBlogPosts();
        if (posts && posts.length > 0) {
          setDisplayPosts(posts);
        }
      } catch (e) { }
    };
    fetchPosts();
  }, []);

  // Reveal animation logic
  useEffect(() => {
    const revealObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, { threshold: 0.15 });

    document.querySelectorAll('.service-card, .review-card, .value-item, .loc-item, .assessment-container, .contact-form, .reveal').forEach(el => revealObserver.observe(el));

    return () => revealObserver.disconnect();
  }, []);

  const handleAssessmentClick = (target) => {
    setAssessment(target);
  };

  const sendWhatsApp = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const name = formData.get('name');
    const phone = formData.get('phone');
    const service = formData.get('service');
    const message = formData.get('message');

    const ownerNumber = "919025011711";
    const text = `*New Appointment Request - REVIVE Clinic*%0A%0A` +
      `*Name:* ${name}%0A` +
      `*Phone:* ${phone}%0A` +
      `*Service:* ${service}%0A` +
      `*Message:* ${message || "No message provided"}`;

    const whatsappUrl = `https://wa.me/${ownerNumber}?text=${text}`;

    e.target.querySelector('#submitBtn').textContent = 'Redirecting to WhatsApp...';

    setTimeout(() => {
      window.open(whatsappUrl, '_blank');
      setFormSuccess(true);
      e.target.querySelector('#submitBtn').textContent = 'Send Appointment Request';
      e.target.reset();
    }, 1000);
  };

  return (
    <main>
      {/* HERO */}
      <section id="hero">
        <div className="hero-overlay"></div>
        <img src={heroBgImage} alt="REVIVE Clinic interior" className="hero-img" />
        <div className="hero-layout">
          {/* LEFT: Main content */}
          <div className="hero-content">
            <div className="hero-badge">4.9 Stars · Trusted by 1100+ patients</div>
            <h1 className="hero-tagline">Revive Your Radiance &amp; Peace</h1>
            <p className="hero-sub">Expert Dermatology &amp; Hair Care · Psychiatry &amp; Counselling<br />Salem's most trusted skin &amp; mind clinic.</p>
            <div className="hero-actions">
              <Link to="/service-dermatology" className="btn-ghost">Consult for Skin &amp; Hair</Link>
              <Link to="/service-psychiatry" className="btn-ghost">Consult for Mind</Link>
            </div>
          </div>
        </div>
      </section>

      {/* TRUST SPLIT CARD */}
      <div className="trust-split">
        {/* LEFT — credentials */}
        <div className="trust-split-left">
          <p className="trust-split-eyebrow">Why Patients Choose Us</p>
          <h2 className="trust-split-heading">Salem's Most <br />Trusted Clinic</h2>
          <div className="trust-split-badges">
            <span className="trust-badge"><span className="trust-badge-check">✓</span> Qualified Specialists</span>
            <span className="trust-badge"><span className="trust-badge-check">✓</span> Modern Treatment Facility</span>
            <span className="trust-badge"><span className="trust-badge-check">✓</span> Personalized Care</span>
            <span className="trust-badge"><span className="trust-badge-check">✓</span> Evidence-Based Medicine</span>
          </div>
        </div>
        {/* RIGHT — stats */}
        <div className="trust-split-right">
          <div className="trust-stat-grid">
            <div className="trust-stat">
              <span className="trust-stat-num">4.9</span>
              <span className="trust-stat-unit">★</span>
              <span className="trust-stat-label">Google Rating</span>
            </div>
            <div className="trust-stat">
              <span className="trust-stat-num">1100</span>
              <span className="trust-stat-unit">+</span>
              <span className="trust-stat-label">Happy Patients</span>
            </div>
            <div className="trust-stat">
              <span className="trust-stat-num">2</span>
              <span className="trust-stat-unit"></span>
              <span className="trust-stat-label">Specialties</span>
            </div>
            <div className="trust-stat">
              <span className="trust-stat-num">8</span>
              <span className="trust-stat-unit">PM</span>
              <span className="trust-stat-label">Open Until Daily</span>
            </div>
          </div>
        </div>
      </div>

      {/* ABOUT */}
      <section id="about" className="section about-section">
        <div className="container about-centered">
          <div className="about-text about-text--center">
            <p className="section-eyebrow">About Us</p>

            {/* Meet Our Experts Panel */}
            <div style={{ width: '100%', maxWidth: '1000px', margin: '0 auto 40px' }}>
              <h3 style={{ fontFamily: 'var(--font-head)', fontSize: '2rem', color: 'var(--bg-dark)', marginBottom: '24px' }}>Meet Our Experts</h3>
              <div className="about-experts-direct" style={{ display: 'flex', flexWrap: 'wrap', gap: '24px', justifyContent: 'center' }}>
                <div className="expert-card" style={{ flex: '1 1 340px', background: '#fff', borderRadius: '16px', boxShadow: '0 8px 32px rgba(0,0,0,0.06)', borderBottom: 'none' }}>
                  <div className="expert-img-wrap">
                    <img src={yogeswariImg} alt="Dr. Yogeswari Subramanian" />
                  </div>
                  <div className="expert-info" style={{ textAlign: 'left' }}>
                    <h4>Dr. Yogeswari Subramanian</h4>
                    <span className="expert-qual">MBBS, MD, DNB – DVL</span>
                    <span className="expert-role skin-role">Dermatologist & Aesthetic Specialist</span>
                  </div>
                </div>
                <div className="expert-card" style={{ flex: '1 1 340px', background: '#fff', borderRadius: '16px', boxShadow: '0 8px 32px rgba(0,0,0,0.06)', borderBottom: 'none' }}>
                  <div className="expert-img-wrap">
                    <img src={sivaImg} alt="Dr. P.T. Sivakumar" />
                  </div>
                  <div className="expert-info" style={{ textAlign: 'left' }}>
                    <h4>Dr. P.T. Sivakumar</h4>
                    <span className="expert-qual">MBBS, MD – CMC Vellore</span>
                    <span className="expert-role mind-role">Consultant Psychiatrist</span>
                  </div>
                </div>
              </div>
            </div>

            <h2>Salem's Trusted Skin &amp; Mind Clinic</h2>
            <p style={{ textAlign: 'justify', maxWidth: '700px', margin: '0 auto' }}>REVIVE was founded on a simple belief true healthcare lies in balancing science with practicality and real-life needs. We believe treatment should not just focus on a disease, but on the person as a whole.</p>
            <div className="about-values about-values--row">
              <div className="value-item">
                <div className="value-icon-wrap"><Heart /></div>
                <div>
                  <h4>Inclusive &amp; Safe</h4>
                  <p>All identities welcomed and respected.</p>
                </div>
              </div>
              <div className="value-item">
                <div className="value-icon-wrap"><Microscope /></div>
                <div>
                  <h4>Evidence-Based</h4>
                  <p>Treatments grounded in the latest clinical research.</p>
                </div>
              </div>
              <div className="value-item">
                <div className="value-icon-wrap"><ShieldCheck /></div>
                <div>
                  <h4>Confidential</h4>
                  <p>Your privacy is our top priority, always.</p>
                </div>
              </div>
            </div>

            <Link to="/about" className="btn-primary" style={{ marginTop: '24px', display: 'inline-block' }}>Explore Now</Link>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="section">
        <div className="container">
          <div className="section-header">
            <p className="section-eyebrow">Our Specialties</p>
            <h2>Comprehensive Care</h2>
            <p className="section-desc">At REVIVE, we balance your physical appearance with your mental well-being. Choose a specialty below to explore our services.</p>
          </div>

          <div className="services-tabs">
            {SERVICES.map(svc => (
              <button
                key={svc.key}
                className={`service-tab-btn ${activeTab === svc.key ? 'active' : ''}`}
                onClick={() => switchTab(svc.key)}
                style={activeTab === svc.key ? { '--tab-active-color': svc.iconColor, '--tab-active-bg': svc.iconBg } : {}}
              >
                <span className="svc-tab-icon" style={{ color: activeTab === svc.key ? svc.iconColor : 'inherit' }}>
                  {svc.icon}
                </span>
                {svc.title}
              </button>
            ))}
          </div>

          <div className="services-accordion">
            {SERVICES.filter(svc => svc.key === activeTab).map(svc => {
              const isOpen = expandedService === svc.key;
              const colors = CATEGORY_COLORS[svc.category] || DEFAULT_COLOR;
              return (
                <div key={svc.key} className={`svc-bar ${isOpen ? 'svc-bar--open' : ''}`}>
                  <button className="svc-bar-header" onClick={() => toggleService(svc.key)} aria-expanded={isOpen}>
                    <div className="svc-bar-left">
                      <div className="svc-bar-icon-wrap" style={{ background: svc.iconBg, color: svc.iconColor }}>
                        {svc.icon}
                      </div>
                      <div className="svc-bar-title">
                        <span className="svc-bar-name">{svc.title}</span>
                        <span className="svc-bar-cat" style={{ background: colors.bg, color: colors.color }}>{svc.category}</span>
                      </div>
                    </div>
                    <div className="svc-bar-chevron">{isOpen ? <ChevronUp /> : <ChevronDown />}</div>
                  </button>
                  {isOpen && (
                    <div className="svc-bar-detail">
                      <div className="svc-bar-detail-img">
                        <img src={svc.img} alt={svc.title} />
                      </div>
                      <div className="svc-bar-detail-text">
                        <p>{svc.detail}</p>
                        <Link
                          to={svc.category === 'Psychiatry' || svc.category === 'Counselling' ? '/service-psychiatry' : '/service-dermatology'}
                          className="btn-primary"
                          style={{ display: 'inline-block', marginTop: '16px', background: svc.iconColor }}
                        >View All {svc.category} Services</Link>
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>



      {/* REVIEWS */}
      <section id="reviews" className="section reviews-section">
        <div className="container">
          <div className="section-header">
            <p className="section-eyebrow">Patient Stories</p>
            <h2>What Our Patients Say</h2>
            <div className="rating-display">
              <div className="stars">&#9733;&#9733;&#9733;&#9733;&#9733;</div>
              <span className="rating-num">4.9</span>
              <span className="rating-count"> from Google reviews</span>
            </div>
          </div>
        </div>

        {/* Marquee wrapper - full width, no container */}
        {(() => {
          const reviews = [
            { name: 'Navin Elango', initial: 'N', text: 'I consulted Dr. Sivakumar P.T for stress and sleep issues. He is very understanding and explains everything calmly. The consultation helped me a lot and I feel much better now. I strongly recommend him for mental health consultation.' },
            { name: 'Kani Ram', initial: 'K', text: 'Very satisfied with the treatment. Underwent chemical peel in revive clinic, had a very good experience. The procedure was explained clearly, done carefully and recovery was smooth. Noticed visible improvement. Highly satisfied.' },
            { name: 'Dhananjayan Thanigaivel', initial: 'D', text: 'I went for skin allergy treatment and got relief quickly. Dr. Yogeswari Subramanian is very knowledgeable and explains the condition clearly.' },
            { name: 'Gayathri P', initial: 'G', text: 'Good consultation and treatment. Doctor was knowledgeable and supportive. Had a great change in skin and its too good. Overall a good place for skin care!' },
            { name: 'Jeevika Sundaram', initial: 'J', text: 'Had a very reassuring experience here. Psychiatrist Dr Sivakumar listened patiently and was genuinely approachable. Felt comfortable and more confident after the consultation. Would definitely recommend for mental health care.' },
            { name: 'Harini S', initial: 'H', text: 'Visited for a persistent skin issue and saw visible improvement within weeks. The doctor was honest, practical. Professional approach and effective treatment.' },
            { name: 'Nishal K', initial: 'N', text: 'I consult the doctor newly and the dermatologist was so quite and the way she consulting the patient is so good.' },
            { name: 'M. Keerthiga', initial: 'M', text: 'My experience was very nice. Mam explanation about treatment is suitable for my skin. I am suggesting the clinic for you.' },
            { name: 'Srivarsha R', initial: 'S', text: 'I consulted Dr. Yogeshwari for my skin concerns. She was very patient, explained my condition clearly, and provided treatment that has now completely healed my issue. Her advice is genuine and truly helpful. I would definitely recommend her for skin and hair-related problems.' },
            { name: 'Rogesh Rutravel', initial: 'R', text: 'For my baby diaper rash came. Paediatrician suggested one cream but it was not effective. So we went REVIVE skin clinic. Doctor Mam given some ointment. It cured my baby skin rash issue. Clinic is very neat & clean. Doctor with smiling face answered our all doubts politely. Thank you so much mam.' },
            { name: 'Sinthiya Raj', initial: 'S', text: 'Wonderful clinic. Both the doctors are very polite in handling patients. We are very much satisfied with the treatment.' },
            { name: 'John Prabhujot', initial: 'J', text: 'This is an excellent centre for all your skin care and mental health needs. Both Dr Yogeswari and Dr Sivakumar are approachable doctors. They listen to every complaint patiently and explain the treatment options very well. You will definitely be satisfied with their service.' },
            { name: 'Gowtham Vickey', initial: 'G', text: 'I had a wonderful experience with Dr. Yogeswari Mam and Dr. Sivakumar Sir. Your care and treatment really made a difference. I truly felt comfortable and well taken care of. Feeling happy. Highly recommended.' },
            { name: 'Pravin Kumar', initial: 'P', text: 'Dr. Shivakumar is a fantastic psychiatrist really listens, understands, and gives practical advice that actually helps. The whole process was smooth, and I felt genuinely supported. Highly recommend!' },
            { name: 'Vinodhini Ravindran', initial: 'V', text: 'Doctor explains the treatment well. Very good treatment given. Best skin clinic. Fully satisfied results.' },
            { name: 'Aravindbaskar M', initial: 'A', text: "Had a very great experience for my friend's skin problem. My friend consulted in revive clinic for his skin problem. Doctor spoke very politely and explained the problem. The skin problem started disappearing in 10 days. Medicines were also affordable." },
          ];
          const renderCard = (r, i) => (
            <div className="review-card" key={i}>
              <div className="review-stars">&#9733;&#9733;&#9733;&#9733;&#9733;</div>
              <p className="review-text">&ldquo;{r.text}&rdquo;</p>
              <div className="review-author">
                <div className="review-avatar">{r.initial}</div>
                <div><strong>{r.name}</strong><span>Google Review</span></div>
              </div>
            </div>
          );
          return (
            <div className="reviews-marquee-outer">
              <div className="reviews-marquee-track">
                {reviews.map((r, i) => renderCard(r, i))}
                {reviews.map((r, i) => renderCard(r, i + reviews.length))}
              </div>
            </div>
          );
        })()}
      </section>

      {/* ASSESSMENT TOOL */}
      <section id="assessment" className="section assessment-section">
        <div className="container">
          <div
            className="assessment-container reveal"
            style={{ background: `linear-gradient(rgba(15, 23, 42, 0.85), rgba(15, 23, 42, 0.85)), url(${ASSESSMENT_BG}) center/cover no-repeat` }}
          >
            <div className="assessment-text">
              <p className="section-eyebrow">Personalized Guide</p>
              <h2>Find the Right Care for You</h2>
              <p>Not sure where to start? Select your primary concern and our system will recommend the best specialist for your needs.</p>
              <div className="assessment-options" id="assessmentOptions">
                <button className={`assess-btn ${assessment === 'dermatology' ? 'active' : ''}`} data-target="dermatology" onClick={() => handleAssessmentClick('dermatology')}>Skin</button>
                <button className={`assess-btn ${assessment === 'trichology' ? 'active' : ''}`} data-target="trichology" onClick={() => handleAssessmentClick('trichology')}>Hair</button>
                <button className={`assess-btn ${assessment === 'psychiatry' ? 'active' : ''}`} data-target="psychiatry" onClick={() => handleAssessmentClick('psychiatry')}>Psychiatric</button>
                <button className={`assess-btn ${assessment === 'counselling' ? 'active' : ''}`} data-target="counselling" onClick={() => handleAssessmentClick('counselling')}>Counselling</button>
              </div>
            </div>
            <div
              className={`assessment-result ${assessment ? 'has-bg' : ''}`}
              style={{ backgroundImage: assessment === 'dermatology' ? `url(${DERMATOLOGY_IMG})` : assessment === 'trichology' ? `url(${TRICHOLOGY_IMG})` : (assessment === 'psychiatry' || assessment === 'counselling') ? `url(${COUNSELLING_IMG})` : 'none' }}
            >
              {!assessment && (
                <div className="result-placeholder">
                  <ArrowLeftRight className="pulse" />
                  <p>Select an option to see recommendation</p>
                </div>
              )}
              {assessment === 'dermatology' && (
                <div className="result-card">
                  <User style={{ color: 'var(--teal-light)', width: '48px', height: '48px', margin: '0 auto 16px', display: 'block' }} />
                  <h4>Dermatology &amp; Skin Care</h4>
                  <p>Based on your skin concerns, we recommend a consultation with our Specialist Dermatologist for a customized skin ritual.</p>
                  <a href="#contact" className="btn-primary">Book Consultation</a>
                </div>
              )}
              {assessment === 'trichology' && (
                <div className="result-card">
                  <Scissors style={{ color: 'var(--teal-light)', width: '48px', height: '48px', margin: '0 auto 16px', display: 'block' }} />
                  <h4>Dermatology &amp; Hair Care</h4>
                  <p>For hair and scalp issues, our dermatologist will perform a deep scalp analysis to identify and treat the root cause of hair fall.</p>
                  <a href="#contact" className="btn-primary">Book Consultation</a>
                </div>
              )}
              {assessment === 'psychiatry' && (
                <div className="result-card">
                  <Brain style={{ color: 'var(--teal-light)', width: '48px', height: '48px', margin: '0 auto 16px', display: 'block' }} />
                  <h4>Psychiatric Care</h4>
                  <p>Our empathetic psychiatrist provides a safe, confidential space for diagnosis and effective medical intervention for your mental health.</p>
                  <a href="#contact" className="btn-primary">Book a Consultation</a>
                </div>
              )}
              {assessment === 'counselling' && (
                <div className="result-card">
                  <Heart style={{ color: 'var(--teal-light)', width: '48px', height: '48px', margin: '0 auto 16px', display: 'block' }} />
                  <h4>Counselling</h4>
                  <p>Connect with experienced counsellors to navigate stress, anxiety, and relationship challenges through compassionate talk therapy.</p>
                  <a href="#contact" className="btn-primary">Book a Consultation</a>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* BLOG */}
      <section id="blog" className="section blog-section">
        <div className="container">
          <div className="section-header">
            <p className="section-eyebrow">Health Journal</p>
            <h2>Insights &amp; Updates</h2>
            <p className="section-desc">Stay informed with the latest tips, research, and care advice from our expert dermatologists and psychiatrists.</p>
          </div>
          <div className="blog-grid">
            {displayPosts.map(post => (
              <article key={post.id} className="blog-card reveal">
                <div className="blog-img-wrap">
                  <img src={getCleanImageUrl(post.image)} alt={post.title} />
                  <div className="blog-category">{post.category}</div>
                </div>
                <div className="blog-content">
                  <div className="blog-meta">
                    <span className="blog-date"><Calendar /> {post.date}</span>
                    <span className="blog-author"><User /> {post.author}</span>
                  </div>
                  <h3>{post.title}</h3>
                  <p>{post.excerpt}</p>
                  <Link to={`/blog/${post.id}`} className="blog-read-more">Read Article <ArrowRight /></Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* LOCATION */}
      <section id="location" className="section location-section">
        <div className="container location-grid">
          <div className="location-info">
            <p className="section-eyebrow">Find Us</p>
            <h2>Visit REVIVE Clinic</h2>
            <div className="location-details">
              <div className="loc-item">
                <div className="loc-icon-wrap"><MapPin /></div>
                <div>
                  <strong>Address</strong>
                  <p>First floor, S.S Complex, Trichy Main Rd,above ICICI Bank, opposite to Bharath petroleum,Annamali Nagar, M G R Nagar, Seelanaickenpatti,Salem, Tamil Nadu 636201</p>
                </div>
              </div>
              <div className="loc-item">
                <div className="loc-icon-wrap"><Phone /></div>
                <div>
                  <strong>Phone</strong>
                  <p><a href="tel:+919025011711">+91 90250 11711</a></p>
                </div>
              </div>
              <div className="loc-item">
                <div className="loc-icon-wrap"><Calendar /></div>
                <div>
                  <strong>Working Hours</strong>
                  <p>Monday to Saturday : 11.30 AM to 2:00 PM, 5.30 PM to 8:00 PM<br />Sundays (only 2nd and 4th Sunday of the month) - 11.30 AM to 2:00 PM</p>
                </div>
              </div>
            </div>
            <a href="https://www.google.com/maps/search/?api=1&query=REVIVE+Skin,+Hair+and+Mind+Clinic,+First+floor,+S.S+Complex,+Trichy+Main+Rd,+above+ICICI+Bank,+opposite+to+Bharath+petroleum,+Annamali+Nagar,+M+G+R+Nagar,+Seelanaickenpatti,+Salem,+Tamil+Nadu+636201" target="_blank" rel="noopener noreferrer" className="btn-primary">Get Directions on Google Maps</a>
          </div>
          <div className="map-embed">
            <iframe
              title="REVIVE Clinic Location Map"
              src="https://maps.google.com/maps?width=100%25&height=100%25&hl=en&q=REVIVE%20Skin,%20Hair%20and%20Mind%20Clinic,%20First%20floor,%20S.S%20Complex,%20Trichy%20Main%20Rd,%20above%20ICICI%20Bank,%20opposite%20to%20Bharath%20petroleum,%20Annamali%20Nagar,%20M%20G%20R%20Nagar,%20Seelanaickenpatti,%20Salem,%20Tamil%20Nadu%20636201&t=&z=15&ie=UTF8&iwloc=B&output=embed"
              width="100%" height="100%" style={{ border: 0 }} allowFullScreen="" loading="lazy">
            </iframe>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="section contact-section">
        <div className="container">
          <div className="section-header light">
            <p className="section-eyebrow">Get In Touch</p>
            <h2>Book Your Appointment</h2>
            <p className="section-desc">Fill in your details and we'll confirm your appointment. We respond within 24 hours. All enquiries are strictly confidential.</p>
          </div>
          <div className="contact-grid">
            <form className="contact-form" id="appointmentForm" onSubmit={sendWhatsApp}>
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="name">Full Name</label>
                  <input type="text" id="name" name="name" placeholder="Your full name" required />
                </div>
                <div className="form-group">
                  <label htmlFor="phone">Phone Number</label>
                  <input type="tel" id="phone" name="phone" placeholder="Your mobile number" required />
                </div>
              </div>
              <div className="form-group">
                <label htmlFor="service">Consultation Type</label>
                <select id="service" name="service" required defaultValue="">
                  <option value="" disabled>Select a service</option>
                  <option value="dermatology">Dermatology &amp; Hair Care</option>
                  <option value="psychiatry">Psychiatry / Counselling (Mind)</option>
                  <option value="general">General Enquiry</option>
                </select>
              </div>
              <div className="form-group">
                <label htmlFor="message">Message (Optional)</label>
                <textarea id="message" name="message" rows="4" placeholder="Briefly describe your concern (completely confidential)..."></textarea>
              </div>
              <div className="form-check">
                <input type="checkbox" id="consent" name="consent" required />
                <label htmlFor="consent">I consent to REVIVE Clinic contacting me regarding my appointment. My information will be kept confidential.</label>
              </div>
              <button type="submit" className="btn-primary full-width" id="submitBtn">Send Appointment Request</button>
              {formSuccess && (
                <div className="form-success" id="formSuccess" style={{ display: 'block' }}>
                  <CheckCircle style={{ display: 'inline-block', verticalAlign: 'middle', width: '20px', height: '20px', marginRight: '8px' }} /> Thank you! We'll contact you within 24 hours to confirm your appointment.
                </div>
              )}
            </form>
            <div className="contact-info-panel">
              <div className="quick-contact">
                <h3>Quick Contact</h3>
                <a href="tel:+919025011711" className="quick-call" id="callBtn">
                  <div className="qc-icon-wrap"><Phone /></div>
                  <div><strong>Call Us Now</strong></div>
                </a>
                <a href="https://wa.me/919025011711?text=Hello%2C%20I%20would%20like%20to%20book%20an%20appointment%20at%20REVIVE%20Clinic." className="quick-whatsapp" id="whatsappBtn" target="_blank" rel="noopener noreferrer">
                  <div className="qc-icon-wrap"><MessageCircle /></div>
                  <div><strong>WhatsApp</strong></div>
                </a>
              </div>
              <div className="hours-panel">
                <h3>Hours</h3>
                <div className="hours-row" style={{ alignItems: 'flex-start', marginBottom: '12px' }}>
                  <span style={{ minWidth: '80px' }}>Mon - Sat</span>
                  <span style={{ textAlign: 'right', lineHeight: '1.4' }}>11:30 AM - 2:00 PM<br/>5:30 PM - 8:00 PM</span>
                </div>
                <div className="hours-row" style={{ alignItems: 'flex-start', marginBottom: '12px' }}>
                  <span style={{ minWidth: '80px', lineHeight: '1.2' }}>Sundays<br/><small style={{ opacity: 0.8, fontSize: '0.85em', fontWeight: 'normal' }}>(2nd &amp; 4th only)</small></span>
                  <span style={{ textAlign: 'right' }}>11:30 AM - 2:00 PM</span>
                </div>
                <div className="hours-note">Walk-ins welcome. Appointments preferred.</div>
              </div>
              <div className="lgbtq-badge">
                <p>REVIVE is an inclusive, affirming clinic. Everyone is welcome. Your identity is celebrated here.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
