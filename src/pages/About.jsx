
import img_1rX9c24pjZxgkjxC4MyXqdgaTJDHPFUjy_w1000 from '../assets/1rX9c24pjZxgkjxC4MyXqdgaTJDHPFUjy_w1000.jpg';
import img_1rhnpajgpuI2QsypxulxAl5uaC9b_iT_i_w1000 from '../assets/1rhnpajgpuI2QsypxulxAl5uaC9b_iT_i_w1000.jpg';
import img_16DhL2WHmDT6zjsVbnyLkcjG3V9niZqhb_w1000 from '../assets/16DhL2WHmDT6zjsVbnyLkcjG3V9niZqhb_w1000.jpg';
import img_1yOkU9D2peT8EsPqowkU6ntBTbY8rw5ja_w1200 from '../assets/1yOkU9D2peT8EsPqowkU6ntBTbY8rw5ja_w1200.jpg';
import img_16WY3VJ2f0osL6oMDfbHsCtaZ9vuRyLTC_w800 from '../assets/16WY3VJ2f0osL6oMDfbHsCtaZ9vuRyLTC_w800.jpg';
import img_1PgMsWg_jw6Rix5qj9M8NvrLXGF_AUP93_w1000 from '../assets/1PgMsWg-jw6Rix5qj9M8NvrLXGF-AUP93_w1000.jpg';
import img_1N5cm_vugS_Y6fIlk9gSOZdirTBzx_KFD_w800 from '../assets/1N5cm-vugS-Y6fIlk9gSOZdirTBzx_KFD_w800.jpg';
import img_19ipRdJ70CWRqphVNz5BEdahPp_r9_vxL_w1000 from '../assets/19ipRdJ70CWRqphVNz5BEdahPp_r9-vxL_w1000.jpg';
import img_1AG2mEOtX8tAo81E93IfvQYDdV9qbOYPo_w1200 from '../assets/1AG2mEOtX8tAo81E93IfvQYDdV9qbOYPo_w1200.jpg';
import img_1eE1wcDq1dazzC_Yp0AV43w0SNsmxs58O_w800 from '../assets/1eE1wcDq1dazzC-Yp0AV43w0SNsmxs58O_w800.jpg';
import img_14FafUJDHHgbhGkmrORrKMSIQa7cz3MDO_w1000 from '../assets/14FafUJDHHgbhGkmrORrKMSIQa7cz3MDO_w1000.jpg';
import img_1_QPT1_9ghEjDQchCRlLm6tIY89PJIvOG_w1000 from '../assets/1_QPT1-9ghEjDQchCRlLm6tIY89PJIvOG_w1000.jpg';
import img_1TzkYdWDgM0ayoD9PPHHGy8iFuXwEawpi_w800 from '../assets/1TzkYdWDgM0ayoD9PPHHGy8iFuXwEawpi_w800.jpg';
import img_1J1Vm1TuVls0uoR91UOEuobovS11_NRgi_w1000 from '../assets/1J1Vm1TuVls0uoR91UOEuobovS11_NRgi_w1000.jpg';
import img_1pfpnmZmHcRL7BH__4mDebQSJCbTqtIf2_w800 from '../assets/1pfpnmZmHcRL7BH_-4mDebQSJCbTqtIf2_w800.jpg';
import img_1cS2GDC27NdBXekcWBUkGtRl_48DukFf4_w1000 from '../assets/1cS2GDC27NdBXekcWBUkGtRl-48DukFf4_w1000.jpg';
import newGalleryImg from '../assets/image copy.png';
export default function About() {
  return (
    <main>
      <section className="about-hero">
        <div className="container">
          <h1>Our <span>Facility</span> &amp; Story</h1>
          <p className="about-hero-sub">Step into a space designed for healing. We bring together expert dermatology and compassionate psychiatry in a modern, comfortable environment built around your needs.</p>
        </div>
      </section>

      <section className="philosophy-section">
        <div className="philosophy-inner">
          <h2>A New Standard in Care</h2>
          <p>REVIVE was founded on a simple belief, true healthcare lies in balancing science with practicality and real-life needs. We believe treatment should not just focus on a disease, but on the person as a whole. Every patient's concerns, lifestyle, and well-being matter.At REVIVE, we provide evidence-based dermatology and compassionate mental healthcare, with personalized, high-quality care at the center of everything we do.</p>
        </div>
      </section>

      <section className="gallery-section">
        <div className="bento-grid">
          <div className="bento-item bento-text-card bento-wide">
            <h3>Explore Our Spaces</h3>
            <p>From our welcoming reception to our advanced dermatological procedure rooms and calming psychiatric counselling suites, every corner of REVIVE Clinic is built with your healing journey in mind.</p>
          </div>

          <div className="bento-item bento-tall">
            <img src={img_1rX9c24pjZxgkjxC4MyXqdgaTJDHPFUjy_w1000} alt="REVIVE Facility" loading="lazy" />
          </div>
          <div className="bento-item bento-wide">
            <img src={img_1rhnpajgpuI2QsypxulxAl5uaC9b_iT_i_w1000} alt="REVIVE Facility" loading="lazy" />
          </div>

          <div className="bento-item bento-text-card bento-small" style={{ background: 'var(--primary)', color: '#fff' }}>
            <h3 style={{ color: '#fff' }}>State of the Art</h3>
            <p style={{ color: 'rgba(255,255,255,0.8)' }}>Equipped with the latest FDA-approved technology for dermatological care.</p>
          </div>

          <div className="bento-item bento-wide">
            <img src={newGalleryImg} alt="REVIVE Facility" loading="lazy" style={{ objectFit: 'contain', width: '100%', height: '100%' }} />
          </div>
          <div className="bento-item bento-large">
            <img src={img_1yOkU9D2peT8EsPqowkU6ntBTbY8rw5ja_w1200} alt="REVIVE Facility" loading="lazy" />
          </div>
          <div className="bento-item bento-small">
            <img src={img_16WY3VJ2f0osL6oMDfbHsCtaZ9vuRyLTC_w800} alt="REVIVE Facility" loading="lazy" />
          </div>
          <div className="bento-item bento-wide">
            <img src={img_1PgMsWg_jw6Rix5qj9M8NvrLXGF_AUP93_w1000} alt="REVIVE Facility" loading="lazy" />
          </div>
          <div className="bento-item bento-small">
            <img src={img_1N5cm_vugS_Y6fIlk9gSOZdirTBzx_KFD_w800} alt="REVIVE Facility" loading="lazy" />
          </div>
          <div className="bento-item bento-wide">
            <img src={img_19ipRdJ70CWRqphVNz5BEdahPp_r9_vxL_w1000} alt="REVIVE Facility" loading="lazy" />
          </div>

          <div className="bento-item bento-large">
            <img src={img_1AG2mEOtX8tAo81E93IfvQYDdV9qbOYPo_w1200} alt="REVIVE Facility" loading="lazy" />
          </div>
          <div className="bento-item bento-small">
            <img src={img_1eE1wcDq1dazzC_Yp0AV43w0SNsmxs58O_w800} alt="REVIVE Facility" loading="lazy" />
          </div>
          <div className="bento-item bento-tall">
            <img src={img_14FafUJDHHgbhGkmrORrKMSIQa7cz3MDO_w1000} alt="REVIVE Facility" loading="lazy" />
          </div>
          <div className="bento-item bento-wide">
            <img src={img_1_QPT1_9ghEjDQchCRlLm6tIY89PJIvOG_w1000} alt="REVIVE Facility" loading="lazy" />
          </div>
          <div className="bento-item bento-small">
            <img src={img_1TzkYdWDgM0ayoD9PPHHGy8iFuXwEawpi_w800} alt="REVIVE Facility" loading="lazy" />
          </div>
          <div className="bento-item bento-wide">
            <img src={img_1J1Vm1TuVls0uoR91UOEuobovS11_NRgi_w1000} alt="REVIVE Facility" loading="lazy" />
          </div>
          <div className="bento-item bento-small">
            <img src={img_1pfpnmZmHcRL7BH__4mDebQSJCbTqtIf2_w800} alt="REVIVE Facility" loading="lazy" />
          </div>
          <div className="bento-item bento-wide">
            <img src={img_1cS2GDC27NdBXekcWBUkGtRl_48DukFf4_w1000} alt="REVIVE Facility" loading="lazy" />
          </div>
          <div className="bento-item bento-large">
            <img src={img_16DhL2WHmDT6zjsVbnyLkcjG3V9niZqhb_w1000} alt="REVIVE Facility" loading="lazy" />
          </div>
        </div>
      </section>
    </main>
  );
}
