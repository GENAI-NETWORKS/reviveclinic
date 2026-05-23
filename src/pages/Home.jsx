import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  Heart, Microscope, ShieldCheck, User, Brain, ArrowRight, Calendar, 
  MapPin, Phone, MessageCircle, CheckCircle, ArrowLeftRight, Scissors
} from 'lucide-react';

import heroImg from '../assets/hero.png';
import sivaImg from '../assets/sivakumar.jpeg';
import yogeswariImg from '../assets/Yogeswari Subramanian.jpeg';
import aboutImg from '../assets/about.jpg';
import dermatologyImg from '../assets/dermatology.jpg';
import trichologyImg from '../assets/trichology.jpg';
import counselingImg from '../assets/counseling.jpg';
import blogSkinImg from '../assets/blog_skin.jpg';
import blogHairImg from '../assets/blog_hair.jpg';
import blogMindImg from '../assets/blog_mind.jpg';
import assessmentBgImg from '../assets/assessment-bg.jpg';

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
        <img src={heroImg} alt="REVIVE Clinic interior" className="hero-img" />
        <div className="hero-content">
          <div className="hero-badge">4.9 Stars · Trusted by 1100+ patients</div>
          <h1 className="hero-tagline">Revive Your Radiance &amp; Peace</h1>
          <p className="hero-sub">Expert Dermatology &amp; Hair Care · Psychiatry &amp; Counseling<br />Salem's most trusted integrative wellness clinic.</p>
          <div className="hero-actions">
            <Link to="/service-dermatology" className="btn-ghost" id="heroBookBtn">Dermatology</Link>
            <Link to="/service-psychiatry" className="btn-ghost">Psychiatry &amp; Counseling</Link>
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
            <p className="section-eyebrow">What We Offer</p>
            <h2>Two Pillars of Care</h2>
            <p className="section-desc">At REVIVE, we treat you as a whole. Our integrative care brings together expert dermatology for skin and hair with compassionate psychiatry for mental wellness.</p>
          </div>
          <div className="services-grid">
            <div className="service-card service-card--horizontal" id="card-mind" style={{ position: 'relative', overflow: 'visible' }}>
              <div style={{ position: 'absolute', top: '-14px', right: '24px', background: '#eef2ff', color: '#4338ca', padding: '6px 16px', borderRadius: '50px', fontSize: '0.8rem', fontWeight: '700', zIndex: 10, boxShadow: '0 4px 12px rgba(0,0,0,0.08)' }}>Psychiatry &amp; Counseling</div>
              <div className="service-img-wrap">
                <img src={sivaImg} alt="Dr. P.T. Sivakumar" style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'top center' }} />
                <div className="service-img-badge">Mind</div>
              </div>
              <div className="service-body">
                <div className="service-icon service-icon--mind"><Brain /></div>
                <h3 style={{ marginBottom: '4px', minHeight: '56px' }}>Dr. P.T.<br/>Sivakumar</h3>
                <p style={{ color: 'var(--primary)', fontWeight: '700', marginBottom: '16px', fontSize: '1.05rem' }}>Consultant Psychiatrist</p>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', marginBottom: '0' }}><strong>Qualifications:</strong><br/>MBBS, MD ( CMC - Vellore)</p>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', marginTop: '12px', marginBottom: '0', lineHeight: '1.6' }}>Expert in treating anxiety, depression, and stress-related disorders with a holistic, collaborative approach.</p>
                <div style={{ marginTop: 'auto', paddingTop: '24px', display: 'flex', justifyContent: 'flex-start' }}>
                  <Link to="/service-psychiatry" className="service-learn-more" style={{ width: 'fit-content', padding: '10px 20px' }}>View Psychiatry Services</Link>
                </div>
              </div>
            </div>

            <div className="service-card service-card--horizontal" id="card-derma" style={{ position: 'relative', overflow: 'visible' }}>
              <div style={{ position: 'absolute', top: '-14px', right: '24px', background: '#e6f6f4', color: 'var(--primary)', padding: '6px 16px', borderRadius: '50px', fontSize: '0.8rem', fontWeight: '700', zIndex: 10, boxShadow: '0 4px 12px rgba(0,0,0,0.08)' }}>Dermatology</div>
              <div className="service-img-wrap">
                <img src={yogeswariImg} alt="Dr. Yogeswari Subramanian" style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'top center' }} />
                <div className="service-img-badge">Skin &amp; Hair</div>
              </div>
              <div className="service-body">
                <div className="service-icon service-icon--skin"><User /></div>
                <h3 style={{ marginBottom: '4px', minHeight: '56px' }}>Dr. Yogeswari<br/>Subramanian</h3>
                <p style={{ color: 'var(--primary)', fontWeight: '700', marginBottom: '16px', fontSize: '1.05rem' }}>Board certified Dermatologist</p>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', marginBottom: '0' }}><strong>Qualifications:</strong><br/>MBBS, MD, DNB ( DVL )</p>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', marginTop: '12px', marginBottom: '0', lineHeight: '1.6' }}>Specializing in advanced acne management, scar revision, pigmentation treatments, and hair restoration.</p>
                <div style={{ marginTop: 'auto', paddingTop: '24px', display: 'flex', justifyContent: 'flex-start' }}>
                  <Link to="/service-dermatology" className="service-learn-more" style={{ width: 'fit-content', padding: '10px 20px' }}>View Dermatology Services</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="section about-section">
        <div className="container about-grid">
          <div className="about-visual">
            <img src={aboutImg} alt="REVIVE Clinic caring doctor" className="about-img" />
            <div className="about-card-stack">
              <div className="about-card-bg"></div>
              <div className="about-card-main">
                <div className="about-stat-pill">4.9 Stars Salem's Top Rated Clinic</div>
                <p className="about-card-quote">"Your wellness journey deserves a team that sees all of you."</p>
                <div className="about-card-pills">
                  <span>Skin</span><span>Hair</span><span>Mind</span>
                </div>
              </div>
            </div>
          </div>
          <div className="about-text">
            <p className="section-eyebrow">About Us</p>
            <h2>Salem's Integrative Wellness Clinic</h2>
            <p style={{ textAlign: 'justify' }}>REVIVE was founded with one belief: that true health is holistic. We bring together expert dermatology (for both skin and hair care) and compassionate psychiatry under one roof so you never have to choose between caring for your body and your mind.</p>
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
              <span className="rating-count"> from 110+ Google reviews</span>
            </div>
          </div>
          <div className="reviews-grid">
            <div className="review-card">
              <div className="review-stars">&#9733;&#9733;&#9733;&#9733;&#9733;</div>
              <p className="review-text">"Dr. at REVIVE completely transformed my skin. I had struggled with acne for years and within 3 months I saw results I never thought possible. The clinic is clean, modern, and everyone is so kind."</p>
              <div className="review-author">
                <div className="review-avatar">P</div>
                <div><strong>Priya S.</strong><span>Acne Treatment</span></div>
              </div>
            </div>
            <div className="review-card">
              <div className="review-stars">&#9733;&#9733;&#9733;&#9733;&#9733;</div>
              <p className="review-text">"I was nervous about seeking mental health support, but REVIVE made me feel completely safe and heard. The counselor is incredibly empathetic and non-judgmental. Best decision I ever made."</p>
              <div className="review-author">
                <div className="review-avatar">A</div>
                <div><strong>Arjun K.</strong><span>Counseling</span></div>
              </div>
            </div>
            <div className="review-card">
              <div className="review-stars">&#9733;&#9733;&#9733;&#9733;&#9733;</div>
              <p className="review-text">"My hair fall stopped after just 2 months of treatment here. The trichologist did a thorough scalp analysis and the PRP sessions were very professional. Highly recommend to anyone dealing with hair issues."</p>
              <div className="review-author">
                <div className="review-avatar">M</div>
                <div><strong>Meena R.</strong><span>Hair Fall & PRP</span></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ASSESSMENT TOOL */}
      <section id="assessment" className="section assessment-section">
        <div className="container">
          <div 
            className="assessment-container reveal"
            style={{ background: `linear-gradient(rgba(15, 23, 42, 0.85), rgba(15, 23, 42, 0.85)), url(${assessmentBgImg}) center/cover no-repeat` }}
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
              style={{ backgroundImage: assessment === 'dermatology' ? `url(${dermatologyImg})` : assessment === 'trichology' ? `url(${trichologyImg})` : assessment === 'psychiatry' ? `url(${counselingImg})` : 'none' }}
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
                  <h4>Mental Wellness</h4>
                  <p>Our empathetic psychiatric and counseling team is here to support you. We provide a safe, confidential space for your mental peace.</p>
                  <a href="#contact" className="btn-primary">Book Wellness Session</a>
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
            <p className="section-eyebrow">Wellness Journal</p>
            <h2>Insights & Updates</h2>
            <p className="section-desc">Stay informed with the latest tips, research, and holistic care advice from our expert dermatologists and psychiatrists.</p>
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
