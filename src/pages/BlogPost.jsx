import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Calendar, User, Clock } from 'lucide-react';

const DEFAULT_BLOG_POSTS = [
  {
    id: "skincare-routine",
    title: "5 Essential Steps for a Glowing Summer Skin Routine",
    excerpt: "Discover the dermatologist-approved daily habits to protect your skin from UV damage while maintaining a natural, healthy glow all summer long.",
    content: `
      <p>As the days grow longer and the sun shines brighter, it's time to transition your skincare routine for the summer months. The heat, humidity, and increased UV exposure can take a toll on your complexion if you're not properly prepared. Here are the 5 dermatologist-approved steps to keep your skin healthy and glowing all summer long.</p>
      
      <h2>1. Lighten Up Your Cleanser</h2>
      <p>Winter calls for rich, creamy cleansers, but summer humidity means your skin needs something lighter. Switch to a gentle foaming or gel-based cleanser. This helps break down excess oil and sweat without stripping your skin of its natural moisture barrier.</p>
      
      <h2>2. Vitamin C is Non-Negotiable</h2>
      <p>Vitamin C serum is your second line of defense against the sun (right behind SPF!). Applying a few drops every morning helps neutralize free radicals caused by UV rays and pollution. Plus, it suppresses melanin production to prevent dark spots and promotes collagen synthesis for that coveted summer glow.</p>
      
      <h2>3. Upgrade to a Broad-Spectrum SPF 50</h2>
      <p>If you're still using last year's half-empty bottle of sunscreen, it's time for an upgrade. Opt for a broad-spectrum sunscreen with at least SPF 50. Remember the golden rule: apply generously every single day, even when it's cloudy, and reapply every two hours if you're spending time outdoors.</p>
      
      <h2>4. Hydrate, Don't Suffocate</h2>
      <p>Just because it's hot doesn't mean you can skip moisturizer. Your skin still needs hydration, especially if you spend time in air-conditioned rooms. Swap your heavy winter cream for a lightweight, oil-free moisturizer or a hyaluronic acid-based gel that absorbs instantly.</p>
      
      <h2>5. Exfoliate Strategically</h2>
      <p>Summer means more sweat, more sunscreen, and more potential for clogged pores. Incorporate a chemical exfoliant (like a mild AHA or BHA) into your routine 1-2 times a week. This clears away dead skin cells and allows your other products to penetrate more effectively. Just be careful not to overdo it, as excessive exfoliation can make your skin more sensitive to the sun.</p>
    `,
    category: "Skin Care",
    author: "Dr. Aditi",
    date: "May 12, 2026",
    image: "blog_skin.jpg",
    readTime: "4 min read"
  },
  {
    id: "hairfall-causes",
    title: "Understanding the Root Causes of Sudden Hair Fall",
    excerpt: "Experiencing unusual shedding? We break down the scientific differences between telogen effluvium, alopecia, and stress-induced hair loss.",
    content: `
      <p>Finding more hair than usual in your brush can be alarming. While it's normal to lose 50 to 100 hairs a day, sudden and significant hair fall is often a signal from your body that something is out of balance. Here is a breakdown of the most common causes of sudden hair loss.</p>
      
      <h2>Telogen Effluvium (Stress-Induced Hair Loss)</h2>
      <p>This is one of the most common causes of sudden hair thinning. It occurs when severe stress- whether emotional (like a major life event) or physical (like an illness, surgery, or drastic weight loss)-pushes a large number of hair follicles into a resting phase. A few months later, these hairs fall out en masse. The good news? It's usually temporary and resolves once the stressor is addressed.</p>
      
      <h2>Nutritional Deficiencies</h2>
      <p>Your hair cells are some of the fastest-growing cells in the body, which means they require a lot of energy and nutrients. A sudden drop in essential vitamins and minerals, particularly Iron, Vitamin D, Zinc, and B12, can rapidly halt hair growth. A simple blood test can determine if a deficiency is to blame.</p>
      
      <h2>Hormonal Imbalances</h2>
      <p>Hormones play a massive role in hair health. Conditions like PCOS, thyroid disorders (both hyperthyroidism and hypothyroidism), and postpartum hormone drops can trigger significant hair shedding. Balancing the underlying hormonal issue is key to restoring growth.</p>
    `,
    category: "Dermatology & Hair Care",
    author: "Dr. Sharma",
    date: "May 08, 2026",
    image: "blog_hair.jpg",
    readTime: "5 min read"
  },
  {
    id: "journaling-anxiety",
    title: "The Power of Journaling for Anxiety Management",
    excerpt: "Learn how setting aside 10 minutes a day for reflective journaling can significantly reduce stress levels and improve your emotional resilience.",
    content: `
      <p>In a world filled with constant notifications, deadlines, and responsibilities, anxiety can easily become overwhelming. One of the most simple, accessible, and evidence-based tools for managing this mental load is journaling. Putting pen to paper (or fingers to keyboard) can act as a powerful release valve for a stressed mind.</p>
      
      <h2>Externalizing Your Worries</h2>
      <p>When thoughts stay in our heads, they tend to loop and magnify. Anxiety thrives on ambiguity. By writing down what you are anxious about, you force those abstract fears into concrete words. This process of externalization immediately reduces the emotional weight of the thoughts, making them feel more manageable.</p>
      
      <h2>Identifying Triggers</h2>
      <p>Consistent journaling allows you to track your mood and anxiety levels over time. As you review past entries, you may begin to notice patterns. Do you always feel anxious on Sunday nights? Is there a specific relationship that consistently drains your energy? Identifying these triggers is the first step toward developing effective coping strategies.</p>
      
      <h2>Shifting the Focus</h2>
      <p>Journaling doesn't just have to be about negative emotions. Incorporating a gratitude practice-writing down three things you are thankful for each day-can physically rewire your brain to scan for positive experiences, gradually shifting your baseline away from anxiety.</p>
    `,
    category: "Psychiatry & Counseling",
    author: "Priya Desai, M.Sc",
    date: "May 02, 2026",
    image: "blog_mind.jpg",
    readTime: "3 min read"
  }
];

function getCleanImageUrl(inputUrl) {
  if (!inputUrl) return { url: '', type: 'empty' };
  if (inputUrl.includes('drive.google.com')) {
    const driveRegex = /\/d\/([a-zA-Z0-9_-]+)/;
    const driveRegexId = /[?&]id=([a-zA-Z0-9_-]+)/;
    const match = inputUrl.match(driveRegex) || inputUrl.match(driveRegexId);
    if (match && match[1]) {
      return { url: `https://lh3.googleusercontent.com/d/${match[1]}`, type: 'drive', id: match[1] };
    }
  }
  const isUrl = inputUrl.startsWith('http://') || inputUrl.startsWith('https://');
  const hasExtension = /\.(jpg|jpeg|png|gif|webp|avif)(\?.*)?$/i.test(inputUrl);
  if (isUrl && !hasExtension) return { url: inputUrl, type: 'webpage' };
  if (!isUrl) return { url: new URL(`../assets/${inputUrl}`, import.meta.url).href, type: 'standard' };
  return { url: inputUrl, type: 'standard' };
}

export default function BlogPost() {
  const { id } = useParams();
  const [post, setPost] = useState(null);

  useEffect(() => {
    let localPosts = JSON.parse(localStorage.getItem('revive_blog_posts'));
    if (!localPosts || localPosts.length === 0) {
      localPosts = DEFAULT_BLOG_POSTS;
      localStorage.setItem('revive_blog_posts', JSON.stringify(localPosts));
    }
    const foundPost = localPosts.find(p => p.id === id);
    setPost(foundPost);
  }, [id]);

  if (!post) {
    return (
      <div style={{ paddingTop: '150px', textAlign: 'center', minHeight: '60vh' }}>
        <h2>Article not found</h2>
        <Link to="/" style={{ color: 'var(--primary)', textDecoration: 'underline' }}>Return to Home</Link>
      </div>
    );
  }

  const cleanImg = getCleanImageUrl(post.image);
  const imgUrl = cleanImg.type === 'webpage' ? 'https://placehold.co/1000x500/1e293b/94a3b8?text=Image+Preview+Unavailable' : cleanImg.url;

  return (
    <>
      <header className="article-hero">
        <div className="container">
          <div className="about-stat-pill" style={{ marginBottom: '24px' }}>{post.category}</div>
          <h1>{post.title}</h1>
          <div className="article-meta">
            <span><Calendar /> {post.date}</span>
            <span><User /> {post.author}</span>
            <span><Clock /> {post.readTime}</span>
          </div>
          <div className="article-featured-img">
            <img src={imgUrl} alt={post.title} onError={(e) => e.target.src='https://placehold.co/1000x500/1e293b/ef4444?text=Image+Not+Found'} />
          </div>
        </div>
      </header>

      <article className="container">
        <div className="article-body">
          <div dangerouslySetInnerHTML={{ __html: post.content }} />

          <hr style={{ margin: '60px 0', border: 0, borderTop: '1px solid rgba(0,0,0,0.1)' }} />
          
          <div style={{ background: 'var(--bg-light)', padding: '32px', borderRadius: 'var(--radius)', textAlign: 'center' }}>
            <h3>Ready to perfect your wellness ritual?</h3>
            <p style={{ marginBottom: '24px', color: 'var(--text-muted)', textAlign: 'center' }}>Book a personalized consultation at REVIVE Clinic.</p>
            <Link to="/#contact" className="btn-primary" style={{ padding: '12px 28px', fontSize: '0.95rem' }}>Book Consultation</Link>
          </div>
        </div>
      </article>
    </>
  );
}
