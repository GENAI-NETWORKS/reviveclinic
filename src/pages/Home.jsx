import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  Heart, Microscope, ShieldCheck, User, Brain, ArrowRight, Calendar, 
  MapPin, Phone, MessageCircle, CheckCircle, ArrowLeftRight, Scissors, ChevronDown, ChevronUp
} from 'lucide-react';

import sivaImg from '../assets/sivakumar.jpeg';
import yogeswariImg from '../assets/Yogeswari Subramanian.jpeg';
import dermatologyImg from '../assets/dermatology.jpg';
import trichologyImg from '../assets/trichology.jpg';
import counselingImg from '../assets/counseling.jpg';
import blogSkinImg from '../assets/blog_skin.jpg';
import blogHairImg from '../assets/blog_hair.jpg';
import blogMindImg from '../assets/blog_mind.jpg';
import assessmentBgImg from '../assets/assessment-bg.jpg';

// Drive image URLs for assessment section
const ASSESSMENT_BG = 'https://lh3.googleusercontent.com/d/1v0nYl9dpIrqaFly6B8PCs0BZSDEYGRBF=w1920';
const DERMATOLOGY_IMG = 'https://lh3.googleusercontent.com/d/1yOkU9D2peT8EsPqowkU6ntBTbY8rw5ja=w1200';
const TRICHOLOGY_IMG = 'https://lh3.googleusercontent.com/d/1N5cm-vugS-Y6fIlk9gSOZdirTBzx_KFD=w800';
const COUNSELING_IMG = 'https://lh3.googleusercontent.com/d/1J1Vm1TuVls0uoR91UOEuobovS11_NRgi=w1000';

const DEFAULT_BLOG_POSTS = [
  {
    id: "skincare-routine",
    title: "5 Essential Steps for a Glowing Summer Skin Routine",
    excerpt: "Discover the dermatologist-approved daily habits to protect your skin from UV damage while maintaining a natural, healthy glow all summer long.",
    category: "Skin Care",
    author: "Dr. Aditi",
    date: "May 12, 2026",
    image: blogSkinImg,
  },
  {
    id: "hairfall-causes",
    title: "Understanding the Root Causes of Sudden Hair Fall",
    excerpt: "Experiencing unusual shedding? We break down the scientific differences between telogen effluvium, alopecia, and stress-induced hair loss.",
    category: "Dermatology & Hair Care",
    author: "Dr. Sharma",
    date: "May 08, 2026",
    image: blogHairImg,
  },
  {
    id: "journaling-anxiety",
    title: "The Power of Journaling for Anxiety Management",
    excerpt: "Learn how setting aside 10 minutes a day for reflective journaling can significantly reduce stress levels and improve your emotional resilience.",
    category: "Psychiatry & Counseling",
    author: "Priya Desai, M.Sc",
    date: "May 02, 2026",
    image: blogMindImg,
  }
];

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
  } catch(e) {
    return inputUrl;
  }
}

export default function Home() {
  const [assessment, setAssessment] = useState(null);
  const [formSuccess, setFormSuccess] = useState(false);
  const [displayPosts, setDisplayPosts] = useState(DEFAULT_BLOG_POSTS);
  const [expandedService, setExpandedService] = useState(null);
  const [activeTab, setActiveTab] = useState('skin'); // 'skin' or 'mind'

  const toggleService = (key) => setExpandedService(prev => prev === key ? null : key);

  const SERVICES = [
    {
      key: 'acne',
      title: 'Acne & Scar Management',
      category: 'Dermatology',
      img: 'https://lh3.googleusercontent.com/d/1yOkU9D2peT8EsPqowkU6ntBTbY8rw5ja=w600',
      detail: 'Advanced chemical peels, laser therapy, and personalized topical regimens to clear acne and resurface skin for a flawless complexion.',
    },
    {
      key: 'pigmentation',
      title: 'Pigmentation & Glow',
      category: 'Dermatology',
      img: 'https://lh3.googleusercontent.com/d/1N5cm-vugS-Y6fIlk9gSOZdirTBzx_KFD=w600',
      detail: 'Targeted Q-switch laser sessions and customized peels to treat melasma, sunspots, and uneven tone for a radiant complexion.',
    },
    {
      key: 'chemical-peel',
      title: 'Chemical Peels & Lasers',
      category: 'Dermatology',
      img: 'https://lh3.googleusercontent.com/d/1WWoGa3_PXSIsuzYZh-41CYSvwaLopxkb=w600',
      detail: 'Medical-grade chemical exfoliation and laser resurfacing for deep skin renewal, pore reduction, and texture improvement.',
    },
    {
      key: 'allergy',
      title: 'Skin Allergy & Infections',
      category: 'Dermatology',
      img: 'https://lh3.googleusercontent.com/d/1rhnpajgpuI2QsypxulxAl5uaC9b_iT_i=w600',
      detail: 'Comprehensive patch testing, allergy management, and targeted antimicrobial therapies for all skin infections and reactions.',
    },
    {
      key: 'hairfall',
      title: 'Hair Fall & Alopecia',
      category: 'Hair Care',
      img: 'https://lh3.googleusercontent.com/d/1J1Vm1TuVls0uoR91UOEuobovS11_NRgi=w600',
      detail: 'Advanced dermoscopy analysis to identify the root cause of hair fall whether Telogen Effluvium or progressive alopecia with a personalized treatment plan.',
    },
    {
      key: 'prp',
      title: 'PRP Hair Therapy',
      category: 'Hair Care',
      img: 'https://lh3.googleusercontent.com/d/19ipRdJ70CWRqphVNz5BEdahPp_r9-vxL=w600',
      detail: 'Platelet-Rich Plasma injections using your own growth factors to stimulate dormant follicles and increase hair thickness significantly.',
    },
    {
      key: 'anxiety',
      title: 'Anxiety & Stress',
      category: 'Psychiatry',
      img: 'https://lh3.googleusercontent.com/d/1v0nYl9dpIrqaFly6B8PCs0BZSDEYGRBF=w600',
      detail: 'Evidence-based therapies, including CBT, to help identify triggers, manage panic attacks, and build emotional resilience.',
    },
    {
      key: 'depression',
      title: 'Depression & Mood',
      category: 'Psychiatry',
      img: 'https://lh3.googleusercontent.com/d/1AG2mEOtX8tAo81E93IfvQYDdV9qbOYPo=w600',
      detail: 'Comprehensive support through pharmacological management and deep talk therapy to treat clinical depression and mood imbalances safely.',
    },
    {
      key: 'sleep',
      title: 'Sleep & Insomnia',
      category: 'Psychiatry',
      img: 'https://lh3.googleusercontent.com/d/1cS2GDC27NdBXekcWBUkGtRl-48DukFf4=w600',
      detail: 'Diagnosis and treatment of sleep disorders linked to psychological stress, with targeted sleep hygiene protocols.',
    },
  ];

  const CATEGORY_COLORS = {
    'Dermatology': { bg: '#e6f6f4', color: 'var(--primary)' },
    'Hair Care': { bg: '#fef3e2', color: '#c2700f' },
    'Psychiatry': { bg: '#eef2ff', color: '#4338ca' },
  };

  useEffect(() => {
    try {
      const localPosts = JSON.parse(localStorage.getItem('revive_blog_posts'));
      if (localPosts && localPosts.length > 0) {
        setDisplayPosts(localPosts);
      }
    } catch(e) {}
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
        <img src="https://lh3.googleusercontent.com/d/16WY3VJ2f0osL6oMDfbHsCtaZ9vuRyLTC=w1920-h1080" alt="REVIVE Clinic interior" className="hero-img" />
        <div className="hero-content">
          <div className="hero-badge">4.9 Stars · Trusted by 1100+ patients</div>
          <h1 className="hero-tagline">Revive Your Radiance &amp; Peace</h1>
          <p className="hero-sub">Expert Dermatology &amp; Hair Care · Psychiatry &amp; Counseling<br />Salem's most trusted skin &amp; mind clinic.</p>
          <div className="hero-actions">
            <Link to="/service-dermatology" className="btn-ghost">Consult for Skin & Hair</Link>
            <Link to="/service-psychiatry" className="btn-ghost">Consult for Mind</Link>
          </div>
        </div>
      </section>

      {/* TRUST BAR */}
      <div className="trust-bar">
        <div className="trust-item"><span className="trust-num">4.9 Stars</span><span className="trust-label">Google Rating</span></div>
        <div className="trust-divider"></div>
        <div className="trust-item"><span className="trust-num">1100+</span><span className="trust-label">Happy Patients</span></div>
        <div className="trust-divider"></div>
        <div className="trust-item"><span className="trust-num">2</span><span className="trust-label">Core Specialties</span></div>
        <div className="trust-divider"></div>
        <div className="trust-item"><span className="trust-num">Open</span><span className="trust-label">Until 8 PM Daily</span></div>
      </div>

      {/* SERVICES */}
      <section id="services" className="section">
        <div className="container">
          <div className="section-header">
            <p className="section-eyebrow">Our Specialties</p>
            <h2>Comprehensive Care</h2>
            <p className="section-desc">At REVIVE, we balance your physical appearance with your mental well-being. Choose a specialty below to explore our services.</p>
          </div>

          <div className="services-tabs">
            <button 
              className={`service-tab-btn ${activeTab === 'skin' ? 'active' : ''}`}
              onClick={() => setActiveTab('skin')}
            >
              Skin &amp; Hair Care
            </button>
            <button 
              className={`service-tab-btn ${activeTab === 'mind' ? 'active' : ''}`}
              onClick={() => setActiveTab('mind')}
            >
              Mind &amp; Psychiatry
            </button>
          </div>

          <div className="services-accordion">
            {SERVICES.filter(svc => activeTab === 'skin' ? svc.category !== 'Psychiatry' : svc.category === 'Psychiatry').map(svc => {
              const isOpen = expandedService === svc.key;
              const colors = CATEGORY_COLORS[svc.category];
              return (
                <div key={svc.key} className={`svc-bar ${isOpen ? 'svc-bar--open' : ''}`}>
                  <button className="svc-bar-header" onClick={() => toggleService(svc.key)} aria-expanded={isOpen}>
                    <div className="svc-bar-left">
                      <div className="svc-bar-thumb">
                        <img src={svc.img} alt={svc.title} />
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
                        <Link to={svc.category === 'Psychiatry' ? '/service-psychiatry' : '/service-dermatology'} className="btn-primary" style={{ display: 'inline-block', marginTop: '16px', background: svc.category === 'Psychiatry' ? '#4338ca' : '#2a9d8f' }}>View All {svc.category} Services</Link>
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="section about-section">
        <div className="container about-grid">
          <div className="about-visual">
            <img src="https://lh3.googleusercontent.com/d/1PgMsWg-jw6Rix5qj9M8NvrLXGF-AUP93=w1200" alt="REVIVE Clinic caring doctor" className="about-img" />
            <div className="about-card-stack">
              <div className="about-card-bg"></div>
              <div className="about-card-main">
                <div className="about-stat-pill">4.9 Stars Salem's Top Rated Clinic</div>
                <p className="about-card-quote">"Your health journey deserves a team that sees all of you."</p>
                <div className="about-card-pills">
                  <span>Skin</span><span>Hair</span><span>Mind</span>
                </div>
              </div>
            </div>
          </div>
          <div className="about-text">
            <p className="section-eyebrow">About Us</p>
            <h2>Salem's Trusted Skin &amp; Mind Clinic</h2>
            <p style={{ textAlign: 'justify' }}>REVIVE was founded on a simple belief true healthcare lies in balancing science with practicality and real-life needs.</p>
            <p style={{ textAlign: 'justify', marginTop: '12px' }}>We believe treatment should not just focus on a disease, but on the person as a whole. Every patient's concerns, lifestyle, and well-being matter.</p>
            <p style={{ textAlign: 'justify', marginTop: '12px' }}>At REVIVE, we provide evidence-based dermatology and compassionate mental healthcare with personalized, high-quality care at the center of everything we do.</p>
            <div className="about-values">
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
            <Link to="/about" className="btn-primary">Explore Now</Link>
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
                <button className={`assess-btn ${assessment === 'dermatology' ? 'active' : ''}`} data-target="dermatology" onClick={() => handleAssessmentClick('dermatology')}>Skin Concerns (Acne, Glow, Rash)</button>
                <button className={`assess-btn ${assessment === 'trichology' ? 'active' : ''}`} data-target="trichology" onClick={() => handleAssessmentClick('trichology')}>Hair & Scalp (Hairfall, Dandruff)</button>
                <button className={`assess-btn ${assessment === 'psychiatry' ? 'active' : ''}`} data-target="psychiatry" onClick={() => handleAssessmentClick('psychiatry')}>Mental Peace (Stress, Anxiety, Sleep)</button>
              </div>
            </div>
            <div 
              className={`assessment-result ${assessment ? 'has-bg' : ''}`} 
              style={{ backgroundImage: assessment === 'dermatology' ? `url(${DERMATOLOGY_IMG})` : assessment === 'trichology' ? `url(${TRICHOLOGY_IMG})` : assessment === 'psychiatry' ? `url(${COUNSELING_IMG})` : 'none' }}
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
                  <h4>Psychiatry &amp; Counseling</h4>
                  <p>Our empathetic psychiatric and counseling team is here to support you. We provide a safe, confidential space for your mental health.</p>
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
                  <p>First Floor, S.S. Complex, Trichy Main Road, Seelanaickenpatti, Salem<br /><em>Opposite Bharat Petroleum, above ICICI Bank</em></p>
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
                  <strong>Business Hours</strong>
                  <p>Mon - Sat: 9 AM - 8 PM | Sun: 10 AM - 4 PM<br /><span className="open-now">Open Now · Closes at 8 PM</span></p>
                </div>
              </div>
            </div>
            <a href="https://www.google.com/maps/place/REVIVE+Skin,+Hair+and+Mind+Clinic/@11.6271869,78.1455354,17z/data=!3m1!4b1!4m6!3m5!1s0x3babef3e4f401225:0x59aa31edb3388109!8m2!3d11.6271869!4d78.1481103!16s%2Fg%2F11lztc_cl8?hl=en&entry=ttu&g_ep=EgoyMDI2MDUxNy4wIKXMDSoASAFQAw%3D%3D" target="_blank" rel="noopener noreferrer" className="btn-primary">Get Directions on Google Maps</a>
          </div>
          <div className="map-embed">
            <iframe
              title="REVIVE Clinic Location Map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3907.0!2d78.15!3d11.65!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTHCsDM5JzAwLjAiTiA3OMKwMDknMDAuMCJF!5e0!3m2!1sen!2sin!4v1620000000000!5m2!1sen!2sin"
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
                  <option value="psychiatry">Psychiatry / Counseling (Mind)</option>
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
                <div className="hours-row"><span>Mon – Sat</span><span>9 AM – 8 PM</span></div>
                <div className="hours-row"><span>Sunday</span><span>10 AM – 4 PM</span></div>
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
