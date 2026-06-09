import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  ChevronRight, Brain, CheckCircle, Calendar, CloudLightning, HeartCrack, Moon, Users, Briefcase, Rainbow, ChevronDown, HeartPulse, ClipboardList
} from 'lucide-react';
import sivakumarImg from '../assets/sivakumar.jpeg';
import counsellingImg from '../assets/counselling.jpg';

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
        {Array.isArray(desc) ? desc.map((p, i) => <p key={i}>{p}</p>) : <p>{desc}</p>}
      </div>
    </div>
  );
}

const PSYCHIATRY_SERVICES = [
  { id: 'psy-1', title: 'Depression', desc: 'Depression is more than temporary sadness. It is a medical condition that can affect a person\'s thoughts, emotions, physical health, and daily functioning. Symptoms may include persistent sadness, loss of interest in previously enjoyable activities, fatigue, poor concentration, sleep disturbances, feelings of hopelessness, low self-esteem, and changes in appetite. If left untreated, depression can affect relationships, work performance, physical health, and overall quality of life. At Revive Psychiatry clinic, we provide comprehensive assessment, diagnosis, medication management, counselling, and ongoing support for individuals experiencing depression.' },
  { id: 'psy-2', title: 'Anxiety Disorder', desc: 'Anxiety disorders involve excessive fear, worry, or nervousness that is difficult to control and persists beyond normal day-to-day stress. Common symptoms include overthinking, restlessness, excessive worrying, difficulty relaxing, palpitations, sweating, muscle tension, and sleep disturbances. Anxiety can interfere with work, studies, relationships, decision-making, and emotional well-being. We provide detailed evaluation, diagnosis, counselling, and evidence-based treatment for anxiety disorders.' },
  { id: 'psy-3', title: 'Panic Attack & Panic Disorder', desc: 'Panic attacks are sudden episodes of intense fear accompanied by symptoms such as chest tightness, breathlessness, dizziness, sweating, trembling, or a feeling of losing control. Repeated panic attacks can lead to avoidance of travel, social situations, public places, and daily activities. Panic disorder is highly treatable with appropriate psychiatric care. At Revive Psychiatry clinic salem, we provide comprehensive assessment and treatment to help individuals overcome panic symptoms.' },
  { id: 'psy-4', title: 'OCD (Obsessive Compulsive Disorder)', desc: 'Obsessive Compulsive Disorder (OCD) is characterized by unwanted repetitive thoughts, images, or urges that create anxiety, along with repetitive behaviours or mental rituals performed to reduce that anxiety. Common examples include excessive checking, repeated washing, reassurance seeking, counting rituals, or intrusive distressing thoughts. OCD can interfere with work, studies, family life, and emotional well-being. We provide evidence-based assessment and treatment for OCD.' },
  { id: 'psy-5', title: 'Bipolar Disorder', desc: 'Bipolar disorder is a mental health condition that causes episodes of depression and episodes of unusually increased energy or activity. During depressive episodes, a person may feel sad, tired, hopeless, and lose interest in daily activities. During manic or hypomanic episodes, they may feel unusually energetic, require less sleep, talk more than usual, become overly confident, spend money excessively, or engage in impulsive decisions. With proper treatment and regular follow-up, most individuals can lead stable and productive lives. At Revive Psychiatry clinic salem, We provide detailed evaluation, diagnosis, medication management, and ongoing support.' },
  { id: 'psy-6', title: 'Schizophrenia & Psychosis', desc: 'Psychosis is a condition in which a person may have difficulty distinguishing between what is real and what is not. Symptoms may include hearing imaginary/non existing voices, suspiciousness, unusual beliefs, confusion, social withdrawal, or changes in behaviour and thinking. Early treatment often leads to better long-term outcomes. We provide compassionate assessment, diagnosis, treatment, and long-term support.' },
  { id: 'psy-7', title: 'Sleep Disorder', desc: 'Difficulty falling asleep, frequent awakenings, poor sleep quality, early morning awakening, or excessive daytime sleepiness may indicate an underlying sleep disorder. Sleep problems can worsen stress, anxiety, depression, concentration, memory, and overall health. We provide comprehensive evaluation and treatment for insomnia and other sleep-related difficulties.' },
  { id: 'psy-8', title: 'De-Addiction & Substance Use', desc: 'Substance use disorders occur when the use of alcohol, tobacco (Smoking, Cool lip, Haans) or other substances becomes difficult to control despite negative consequences. Symptoms may include cravings, withdrawal symptoms, repeated unsuccessful attempts to stop, and continued use despite harm. Recovery is possible with appropriate treatment and support. We provide confidential assessment, de-addiction treatment, relapse prevention strategies, and long-term recovery support at our psychiatry clinic.' },
  { id: 'psy-9', title: 'Child & Adolescent Psychiatry', desc: 'Children and teenagers may experience emotional, behavioural, developmental, or academic difficulties that affect their daily functioning. Common concerns include anxiety, behavioural problems, school difficulties, emotional outbursts, social challenges, and attention problems. We provide specialized psychiatric assessment and treatment tailored to the unique needs of children, adolescents, and their families.' },
  { id: 'psy-10', title: 'ADHD', desc: 'Attention Deficit Hyperactivity Disorder (ADHD) is a neurodevelopmental condition that can affect both children and adults. Common symptoms include difficulty sustaining attention, forgetfulness, disorganization, impulsivity, restlessness, and difficulty completing tasks. Appropriate treatment can significantly improve concentration and quality of life. We provide detailed ADHD assessment and evidence-based treatment.' },
  { id: 'psy-11', title: 'Dementia & Memory Problems', desc: 'Memory difficulties can occur for many reasons, including aging, medical conditions, depression, and dementia. Symptoms may include forgetfulness, confusion, repeating questions, difficulty managing daily tasks, or changes in behaviour and personality. Early evaluation helps identify the cause and allows timely intervention. We provide assessment, diagnosis, treatment, and guidance for cognitive difficulties.' },
  { id: 'psy-12', title: 'Dissociative Disorders', desc: 'Dissociative disorders involve disruptions in memory, awareness, identity, emotions, or perception often associated with overwhelming stress or psychological trauma. Symptoms may include memory gaps, feeling detached from oneself, feeling disconnected from surroundings, trance-like episodes, or unexplained changes in behaviour. We provide confidential assessment, counselling, and evidence-based treatment.' },
  { id: 'psy-13', title: 'Women’s Mental Health', desc: 'Women may experience unique mental health challenges related to hormonal changes, pregnancy, postpartum period, infertility, menopause, caregiving responsibilities, relationship stress, and life transitions. Symptoms can include anxiety, depression, emotional distress, sleep disturbances, or difficulty coping with daily responsibilities. We provide compassionate, confidential, and specialized mental health care tailored to women\'s needs across different stages of life.' },
  { id: 'psy-14', title: 'Suicide Prevention & Crisis Intervention', desc: 'Thoughts of self-harm, hopelessness, feeling trapped, emotional overwhelm, or difficulty finding reasons to continue living should always be taken seriously. Early professional support can significantly reduce distress and improve safety. We provide confidential assessment, crisis intervention, safety planning, and ongoing psychiatric care for individuals experiencing suicidal thoughts or emotional crises.' },
  { id: 'psy-15', title: 'Geriatric Psychiatry', desc: 'Mental health concerns in older adults may include depression, anxiety, sleep problems, loneliness, memory difficulties, behavioural changes, and emotional distress. Early identification and treatment can significantly improve well-being and functioning. We provide specialized psychiatric assessment, treatment, and support for elderly individuals and their families.' },
  { id: 'psy-16', title: 'Behavioural Addiction', desc: [
    'Behavioural addictions involve repeated engagement in certain activities despite negative consequences and difficulty controlling the behaviour. Common examples include excessive mobile phone use, internet addiction, online gaming addiction, social media addiction, pornography addiction, shopping addiction, and gambling-related problems. Individuals may find themselves spending increasing amounts of time on these activities, neglecting responsibilities, relationships, studies, work, or personal well-being.',
    'Behavioural addictions can lead to emotional distress, sleep disturbances, reduced productivity, financial problems, relationship difficulties, social isolation, and loss of control over daily life. Many individuals experience guilt, frustration, and repeated unsuccessful attempts to reduce or stop the behaviour.',
    'With proper assessment and treatment, behavioural addictions can be effectively managed. At Revive Mind Clinic salem, we provide confidential evaluation, counselling, behavioural interventions, and evidence-based treatment to help individuals regain control, develop healthier habits, and improve overall well-being.'
  ] }
];

const COUNSELLING_SERVICES = [
  { id: 'coun-1', title: 'Stress Management Counselling', desc: 'Persistent stress, emotional exhaustion, irritability, overthinking, difficulty relaxing, and feeling overwhelmed by daily responsibilities can affect mental and physical well-being. We help individuals develop healthier coping strategies, improve emotional resilience, and manage stress effectively.' },
  { id: 'coun-2', title: 'Grief & Bereavement Counselling', desc: 'The loss of a loved one, relationship, or significant life change can lead to sadness, loneliness, guilt, emotional numbness, and difficulty adjusting. We provide compassionate support to help individuals process grief and gradually regain emotional balance.' },
  { id: 'coun-3', title: 'Marital Counselling', desc: 'Frequent conflicts, communication difficulties, trust issues, emotional distance, and unresolved disagreements can place strain on a marriage. Marital counselling helps couples improve communication, strengthen emotional connection, and work toward healthier relationships.' },
  { id: 'coun-4', title: 'Relationship Counselling', desc: 'Difficulties in personal, family, or romantic relationships can cause emotional distress and ongoing conflicts. Relationship counselling focuses on improving communication, resolving interpersonal difficulties, and strengthening meaningful connections.' },
  { id: 'coun-5', title: 'Crisis Intervention & Emotional Support', desc: 'Unexpected life events such as accidents, loss, separation, workplace problems, or severe stress can feel overwhelming. We provide timely psychological support to help individuals regain stability and cope effectively.' },
  { id: 'coun-6', title: 'Sex Therapy & Sexual Well-being Counselling', desc: 'Sexual concerns related to anxiety, relationship difficulties, performance fears, or emotional stress can affect confidence and intimacy. We provide confidential counselling and evidence-based interventions in a respectful environment.' },
  { id: 'coun-7', title: 'Anger Management Counselling', desc: 'Frequent anger outbursts, irritability, poor frustration tolerance, and difficulties controlling emotions can affect relationships and work performance. Counselling helps identify triggers and develop healthier emotional regulation skills.' },
  { id: 'coun-8', title: 'Parenting Guidance & Family Counselling', desc: 'Parent-child conflicts, behavioural difficulties, communication problems, and family stress can create emotional strain. Family-focused counselling helps improve understanding and healthier family relationships.' },
  { id: 'coun-9', title: 'Adolescent Counselling', desc: 'Teenagers may experience emotional difficulties, academic stress, peer pressure, self-esteem issues, behavioural concerns, and adjustment problems. Counselling provides a supportive space to address these challenges.' },
  { id: 'coun-10', title: 'Student Counselling & Academic Stress', desc: 'Examination stress, concentration difficulties, career uncertainty, fear of failure, and academic pressure can significantly affect emotional health. Counselling helps students develop coping skills and improve confidence.' },
  { id: 'coun-11', title: 'Workplace Stress & Burnout Counselling', desc: 'High job demands, professional stress, burnout, workplace conflicts, and work-life imbalance can affect mental health and productivity. Counselling focuses on resilience, coping skills, and emotional well-being.' },
  { id: 'coun-12', title: 'Personality Issues & Emotional Difficulties', desc: 'Long-standing emotional, behavioural, interpersonal, and self-esteem-related concerns can affect relationships and daily functioning. Understanding these patterns can help individuals develop healthier coping mechanisms.' },
  { id: 'coun-13', title: 'Cognitive Behavioural Therapy (CBT)', desc: 'CBT helps individuals identify and modify unhelpful thoughts, emotions, and behaviours. It is one of the most effective evidence-based treatments for anxiety, depression, and stress-related conditions.' },
  { id: 'coun-14', title: 'Interpersonal Therapy (IPT)', desc: 'Interpersonal Therapy focuses on improving relationships, communication patterns, and emotional adjustment related to grief, life transitions, and interpersonal conflicts.' }
];

const DIAGNOSTIC_ASSESSMENTS = [
  { id: 'diag-1', title: 'Personality Assessment', desc: 'Personality assessments help understand an individual\'s characteristic patterns of thinking, emotions, behaviour, coping styles, strengths, and interpersonal relationships. We provide comprehensive personality assessments using standardized psychological tools to assist in diagnosis, treatment planning, and personal development.' },
  { id: 'diag-2', title: 'Intelligence Quotient (IQ) Assessment', desc: 'IQ assessments evaluate reasoning, problem-solving, memory, attention, language abilities, and overall intellectual functioning. We provide standardized IQ testing for children, adolescents, and adults with detailed interpretation and guidance.' },
  { id: 'diag-3', title: 'ADHD Assessment', desc: 'A comprehensive ADHD assessment evaluates attention, impulsivity, hyperactivity, and functioning across different settings. We provide detailed ADHD assessments for children, adolescents, and adults using evidence-based diagnostic methods.' },
  { id: 'diag-4', title: 'Autism Spectrum Disorder (ASD) Assessment', desc: 'Autism assessments evaluate social communication, interaction, behavioural patterns, sensory concerns, and adaptive functioning. Early identification supports timely intervention and better outcomes.' },
  { id: 'diag-5', title: 'Cognitive Assessment', desc: 'Cognitive assessments evaluate memory, attention, concentration, language, executive functioning, reasoning, and other thinking abilities. These assessments help identify strengths, difficulties, and appropriate treatment recommendations.' },
  { id: 'diag-6', title: 'Learning Disability Assessment', desc: 'Children with persistent difficulties in reading, writing, spelling, mathematics, or academic performance may require evaluation for Specific Learning Disorders. We provide comprehensive assessment and educational recommendations.' },
  { id: 'diag-7', title: 'Memory Assessment for Older Adults', desc: 'Memory concerns may arise from aging, stress, depression, medical conditions, or dementia. Comprehensive assessment helps identify the cause and guide appropriate intervention.' },
  { id: 'diag-8', title: 'Neuropsychological Assessment', desc: 'Neuropsychological assessments provide a detailed evaluation of memory, attention, language, executive functioning, processing speed, and problem-solving abilities in neurological and cognitive disorders.' }
];

export default function Psychiatry() {
  const [openCard, setOpenCard] = useState(null);

  return (
    <main className="psychiatry-theme">
      <section className="sp-hero" style={{ position: 'relative' }}>
        <img
          src={counsellingImg}
          alt=""
          aria-hidden="true"
          style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', opacity: 0.28, zIndex: 0 }}
        />
        <div className="sp-hero-orb" style={{ zIndex: 1 }}></div>
        <div className="container sp-hero-inner" style={{ position: 'relative', zIndex: 1 }}>
          <div className="sp-hero-pill"><Brain /> Mental Peace</div>
          <h1>Compassionate <span>Psychiatry</span><br/>&amp; Counselling</h1>
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
          <span>Psychiatry &amp; Counselling</span>
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
                <p style={{ textAlign: 'justify' }}>Dr. P.T. Sivakumar (MBBS, MD - CMC Vellore) provides compassionate, holistic psychiatric care. He combines medical interventions with empathetic counselling to effectively treat anxiety, depression, and stress.</p>
              </div>
              <div className="doctor-profile-img">
                <img src={sivakumarImg} alt="Dr. P.T. Sivakumar" />
              </div>
            </div>
          </div>
        </div>

        <div className="sp-content-bottom">
          <div className="sp-section-label" style={{ marginTop: 0 }}><h2>1. Psychiatry Services</h2></div>
          <div className="treatments-grid">
            {PSYCHIATRY_SERVICES.map(service => (
              <TreatmentCard key={service.id} id={service.id} openCard={openCard} setOpenCard={setOpenCard} icon={<HeartPulse />} title={service.title} desc={service.desc} />
            ))}
          </div>

          <div className="sp-section-label"><h2>2. Counselling Services</h2></div>
          <div className="treatments-grid">
            {COUNSELLING_SERVICES.map(service => (
              <TreatmentCard key={service.id} id={service.id} openCard={openCard} setOpenCard={setOpenCard} icon={<Users />} title={service.title} desc={service.desc} />
            ))}
          </div>

          <div className="sp-section-label"><h2>3. Psychological &amp; Diagnostic Assessments</h2></div>
          <div className="treatments-grid">
            {DIAGNOSTIC_ASSESSMENTS.map(service => (
              <TreatmentCard key={service.id} id={service.id} openCard={openCard} setOpenCard={setOpenCard} icon={<ClipboardList />} title={service.title} desc={service.desc} />
            ))}
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
                <p>Regular counselling appointments to process emotions, learn new coping mechanisms, and track your emotional growth.</p>
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
                <li>Compassionate counsellors</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
