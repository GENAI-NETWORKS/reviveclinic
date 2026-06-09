import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Calendar, User, Clock } from 'lucide-react';
import { getBlogPost } from '../utils/blogApi';



function getCleanImageUrl(inputUrl) {
  if (!inputUrl) return { url: '', type: 'empty' };
  if (inputUrl.startsWith('data:')) return { url: inputUrl, type: 'base64' };
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
    const fetchPost = async () => {
      const foundPost = await getBlogPost(id);
      setPost(foundPost);
    };
    fetchPost();
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
            <h3>Ready to perfect your health routine?</h3>
            <p style={{ marginBottom: '24px', color: 'var(--text-muted)', textAlign: 'center' }}>Book a personalized consultation at REVIVE Clinic.</p>
            <Link to="/#contact" className="btn-primary" style={{ padding: '12px 28px', fontSize: '0.95rem' }}>Book Consultation</Link>
          </div>
        </div>
      </article>
    </>
  );
}
