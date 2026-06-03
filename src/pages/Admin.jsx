import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Sparkles, ExternalLink, LogOut, BookOpen, Brain, Search, PlusCircle, Edit3, Trash2, X, Link2, Upload, Eye } from 'lucide-react';

const DEFAULT_BLOG_POSTS = [
  {
    id: "skincare-routine",
    title: "5 Essential Steps for a Glowing Summer Skin Routine",
    excerpt: "Discover the dermatologist-approved daily habits to protect your skin from UV damage while maintaining a natural, healthy glow all summer long.",
    content: "<p>Content goes here...</p>",
    category: "Dermatology & Hair Care",
    author: "Dr. Aditi",
    date: "May 12, 2026",
    image: "blog_skin.jpg",
    readTime: "4 min read"
  },
  {
    id: "hairfall-causes",
    title: "Understanding the Root Causes of Sudden Hair Fall",
    excerpt: "Experiencing unusual shedding? We break down the scientific differences between telogen effluvium, alopecia, and stress-induced hair loss.",
    content: "<p>Content goes here...</p>",
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
    content: "<p>Content goes here...</p>",
    category: "Psychiatry & Counseling",
    author: "Priya Desai, M.Sc",
    date: "May 02, 2026",
    image: "blog_mind.jpg",
    readTime: "3 min read"
  }
];

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

export default function Admin() {
  const [authenticated, setAuthenticated] = useState(false);
  const [passcode, setPasscode] = useState('');
  const [error, setError] = useState(false);
  const [shake, setShake] = useState(false);
  const [posts, setPosts] = useState([]);
  const [search, setSearch] = useState('');
  const [filter, setFilter] = useState('ALL');
  
  const [modalOpen, setModalOpen] = useState(false);
  const [imageTab, setImageTab] = useState('url'); // 'url' | 'upload'
  const fileInputRef = useRef(null);
  const [editData, setEditData] = useState({
    id: '', title: '', category: 'Dermatology & Hair Care', author: '', date: '', readTime: '4 min read', image: '', excerpt: '', content: ''
  });

  useEffect(() => {
    if (sessionStorage.getItem('revive_admin_authenticated') === 'true') {
      setAuthenticated(true);
    }
    
    let localPosts = JSON.parse(localStorage.getItem('revive_blog_posts'));
    if (!localPosts || localPosts.length === 0) {
      localPosts = DEFAULT_BLOG_POSTS;
    }
    let migrated = false;
    localPosts = localPosts.map(p => {
      if (p.category === 'Skin Care') {
        migrated = true;
        return { ...p, category: 'Dermatology & Hair Care' };
      }
      return p;
    });
    if (migrated || !localStorage.getItem('revive_blog_posts')) {
      localStorage.setItem('revive_blog_posts', JSON.stringify(localPosts));
    }
    setPosts(localPosts);
  }, []);

  const handleLogin = (e) => {
    e.preventDefault();
    if (passcode === 'revive2026') {
      sessionStorage.setItem('revive_admin_authenticated', 'true');
      setAuthenticated(true);
    } else {
      setError(true);
      setShake(true);
      setTimeout(() => setShake(false), 400);
    }
  };

  const handleLogout = () => {
    sessionStorage.removeItem('revive_admin_authenticated');
    setAuthenticated(false);
    setPasscode('');
    setError(false);
  };

  const handleSave = (e) => {
    e.preventDefault();
    let newPosts = [...posts];
    
    const newPost = {
      ...editData,
      id: editData.id || 'post-' + Date.now(),
    };

    if (editData.id) {
      const idx = newPosts.findIndex(p => p.id === editData.id);
      if (idx !== -1) newPosts[idx] = newPost;
    } else {
      newPosts.unshift(newPost);
    }

    setPosts(newPosts);
    localStorage.setItem('revive_blog_posts', JSON.stringify(newPosts));
    setModalOpen(false);
  };

  const handleDelete = (id) => {
    if (!window.confirm('Are you sure you want to delete this article? This action cannot be undone.')) return;
    const newPosts = posts.filter(p => p.id !== id);
    setPosts(newPosts);
    localStorage.setItem('revive_blog_posts', JSON.stringify(newPosts));
  };

  const handleImageFile = (e) => {
    const file = e.target.files[0];
    if (!file) return;
    const allowed = ['image/jpeg', 'image/jpg', 'image/png', 'image/webp', 'image/gif'];
    if (!allowed.includes(file.type)) {
      alert('Unsupported file type. Please upload a PNG, JPG, JPEG, WebP, or GIF image.');
      return;
    }
    const reader = new FileReader();
    reader.onload = (ev) => {
      setEditData(prev => ({ ...prev, image: ev.target.result }));
    };
    reader.readAsDataURL(file);
  };

  const openCreateModal = () => {
    setEditData({ id: '', title: '', category: 'Dermatology & Hair Care', author: '', date: '', readTime: '4 min read', image: '', excerpt: '', content: '' });
    setImageTab('url');
    setModalOpen(true);
  };

  const openEditModal = (post) => {
    setEditData(post);
    // If image is a data URL (base64), default to upload tab visual, else url tab
    setImageTab(post.image && post.image.startsWith('data:') ? 'upload' : 'url');
    setModalOpen(true);
  };

  const filteredPosts = posts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(search.toLowerCase()) || post.author.toLowerCase().includes(search.toLowerCase());
    const matchesFilter = filter === 'ALL' || post.category === filter;
    return matchesSearch && matchesFilter;
  });

  const dermaCount = posts.filter(p => p.category.includes('Skin') || p.category.includes('Hair') || p.category === 'Dermatology & Hair Care').length;
  const psychCount = posts.filter(p => p.category.includes('Psychiatry') || p.category.includes('Counseling')).length;

  return (
    <div className="admin-page">
      {!authenticated && (
        <div className="lock-screen" id="lockScreen">
          <div className={`lock-box ${shake ? 'shake' : ''}`} id="lockBox">
            <div className="lock-logo">
              <Sparkles />
              <span>REVIVE</span>
            </div>
            <div className="lock-subtitle">Administrative Blog CMS Authorization</div>
            <form onSubmit={handleLogin}>
              <div className="passcode-wrapper">
                <input 
                  type="password" 
                  className="passcode-input" 
                  value={passcode}
                  onChange={(e) => setPasscode(e.target.value)}
                  placeholder="••••••••" 
                  required 
                />
              </div>
              <button type="submit" className="lock-btn">Unlock CMS Dashboard</button>
              {error && <div className="lock-error" style={{display: 'block'}}>Incorrect administrative authorization key.</div>}
            </form>
          </div>
        </div>
      )}

      {authenticated && (
        <div className="admin-container">
          <header className="admin-header">
            <div className="admin-title-area">
              <h1><Sparkles /> Clinic CMS Dashboard</h1>
              <p>Manage, create, and edit blog posts across the entire site.</p>
            </div>
            <div className="admin-user-controls">
              <Link to="/" className="btn-logout" style={{borderColor: 'var(--primary)', color: 'var(--primary-light)'}} target="_blank">
                <ExternalLink /> View Website
              </Link>
              <button className="btn-logout" onClick={handleLogout}>
                <LogOut /> Lock CMS
              </button>
            </div>
          </header>

          <section className="admin-stats">
            <div className="stat-card">
              <div className="stat-icon"><BookOpen /></div>
              <div className="stat-info">
                <h3>{posts.length}</h3>
                <p>Total Articles</p>
              </div>
            </div>
            <div className="stat-card">
              <div className="stat-icon"><Sparkles /></div>
              <div className="stat-info">
                <h3>{dermaCount}</h3>
                <p>Dermatology Care</p>
              </div>
            </div>
            <div className="stat-card">
              <div className="stat-icon"><Brain /></div>
              <div className="stat-info">
                <h3>{psychCount}</h3>
                <p>Psychiatry Care</p>
              </div>
            </div>
          </section>

          <section className="manager-box">
            <div className="manager-toolbar">
              <div className="search-filter-area">
                <div className="search-input-wrap">
                  <Search />
                  <input 
                    type="text" 
                    className="search-bar" 
                    placeholder="Search by title or author..." 
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                  />
                </div>
                <select className="category-filter" value={filter} onChange={(e) => setFilter(e.target.value)}>
                  <option value="ALL">All Categories</option>
                  <option value="Dermatology & Hair Care">Dermatology & Hair Care</option>
                  <option value="Psychiatry & Counseling">Psychiatry & Counseling</option>
                </select>
              </div>
              <button className="btn-create" onClick={openCreateModal}>
                <PlusCircle /> Create New Article
              </button>
            </div>

            <div className="table-container">
              <table className="admin-table">
                <thead>
                  <tr>
                    <th style={{width: '50%'}}>Article Description</th>
                    <th>Category</th>
                    <th>Publish Date</th>
                    <th style={{textAlign: 'right', width: '120px'}}>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredPosts.length === 0 && (
                    <tr><td colSpan="4" style={{textAlign: 'center', color: 'var(--text-muted)', padding: '32px'}}>No matching articles found.</td></tr>
                  )}
                  {filteredPosts.map(post => {
                    let catClass = 'cat-badge--skin';
                    if (post.category.includes('Hair')) catClass = 'cat-badge--hair';
                    if (post.category.includes('Psychiatry') || post.category.includes('Counseling')) catClass = 'cat-badge--mind';
                    
                    const cleanImg = getCleanImageUrl(post.image);
                    const thumbUrl = cleanImg.type === 'webpage' ? 'https://placehold.co/100x100/1e293b/94a3b8?text=Web+Link' : cleanImg.url;

                    return (
                      <tr key={post.id}>
                        <td>
                          <div className="td-article-info">
                            <img src={thumbUrl} className="td-thumb" alt="" onError={(e) => e.target.src='https://placehold.co/100x100/1e293b/ef4444?text=Broken'} />
                            <div>
                              <div className="td-title-text">{post.title}</div>
                              <div className="td-author-text">By {post.author} · {post.readTime || '3 min read'}</div>
                              <div style={{marginTop: '4px', fontSize: '0.75rem'}}>
                                {post.image && post.image.startsWith('data:') ? (
                                  <span style={{color: '#4ade80', background: 'rgba(74,222,128,0.1)', padding: '2px 8px', borderRadius: '4px'}}>📁 Uploaded Image</span>
                                ) : cleanImg.type === 'drive' ? (
                                  <span style={{color: '#60a5fa', background: 'rgba(96,165,250,0.1)', padding: '2px 8px', borderRadius: '4px'}}>🔗 Drive Link</span>
                                ) : cleanImg.type === 'webpage' ? (
                                  <span style={{color: '#fbbf24', background: 'rgba(251,191,36,0.1)', padding: '2px 8px', borderRadius: '4px'}}>🌐 URL</span>
                                ) : post.image ? (
                                  <span style={{color: 'var(--text-muted)'}}>{post.image.length > 40 ? post.image.substring(0, 40) + '…' : post.image}</span>
                                ) : null}
                              </div>
                            </div>
                          </div>
                        </td>
                        <td>
                          <span className={`cat-badge ${catClass}`}>{post.category}</span>
                        </td>
                        <td>
                          <span style={{fontSize: '0.9rem', color: '#cbd5e1'}}>{post.date}</span>
                        </td>
                        <td>
                          <div className="action-group">
                            <button className="btn-action btn-action--edit" title="Edit Article" onClick={() => openEditModal(post)}>
                              <Edit3 />
                            </button>
                            <button className="btn-action btn-action--delete" title="Delete Article" onClick={() => handleDelete(post.id)}>
                              <Trash2 />
                            </button>
                          </div>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </section>
        </div>
      )}

      <div className={`modal-overlay ${modalOpen ? 'open' : ''}`}>
        <div className="modal-container">
          <div className="modal-header">
            <h2>{editData.id ? 'Edit Article' : 'Create New Article'}</h2>
            <button className="btn-modal-close" onClick={() => setModalOpen(false)}><X /></button>
          </div>
          <div className="modal-body">
            <form id="articleForm" onSubmit={handleSave}>
              <div className="form-row">
                <div className="form-group" style={{flex: 2}}>
                  <label>Article Title</label>
                  <input type="text" className="form-control" placeholder="e.g. 5 Habits for Glowing Skin" value={editData.title} onChange={e => setEditData({...editData, title: e.target.value})} required />
                </div>
                <div className="form-group">
                  <label>Category</label>
                  <select className="form-control" value={editData.category} onChange={e => setEditData({...editData, category: e.target.value})} required>
                    <option value="Dermatology & Hair Care">Dermatology & Hair Care</option>
                    <option value="Psychiatry & Counseling">Psychiatry & Counseling</option>
                  </select>
                </div>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label>Author / Specialist</label>
                  <input type="text" className="form-control" placeholder="e.g. Dr. Aditi" value={editData.author} onChange={e => setEditData({...editData, author: e.target.value})} required />
                </div>
                <div className="form-group">
                  <label>Publish Date</label>
                  <input type="text" className="form-control" placeholder="e.g. May 20, 2026" value={editData.date} onChange={e => setEditData({...editData, date: e.target.value})} required />
                </div>
                <div className="form-group">
                  <label>Reading Time</label>
                  <input type="text" className="form-control" placeholder="e.g. 4 min read" value={editData.readTime} onChange={e => setEditData({...editData, readTime: e.target.value})} required />
                </div>
              </div>

              <div className="form-group">
                <label>Featured Image</label>
                {/* Tab switcher */}
                <div className="img-tab-switcher">
                  <button
                    type="button"
                    className={`img-tab-btn ${imageTab === 'url' ? 'active' : ''}`}
                    onClick={() => setImageTab('url')}
                  >
                    <Link2 size={14} /> Paste URL / Drive Link
                  </button>
                  <button
                    type="button"
                    className={`img-tab-btn ${imageTab === 'upload' ? 'active' : ''}`}
                    onClick={() => { setImageTab('upload'); setTimeout(() => fileInputRef.current?.click(), 80); }}
                  >
                    <Upload size={14} /> Upload Image File
                  </button>
                </div>

                {imageTab === 'url' && (
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Paste image URL, Drive share link, or filename (e.g. blog_skin.jpg)"
                    value={editData.image.startsWith('data:') ? '' : editData.image}
                    onChange={e => setEditData({ ...editData, image: e.target.value })}
                  />
                )}

                {imageTab === 'upload' && (
                  <div
                    className="img-upload-zone"
                    onClick={() => fileInputRef.current?.click()}
                    onDragOver={e => { e.preventDefault(); e.currentTarget.classList.add('drag-over'); }}
                    onDragLeave={e => e.currentTarget.classList.remove('drag-over')}
                    onDrop={e => {
                      e.preventDefault();
                      e.currentTarget.classList.remove('drag-over');
                      const file = e.dataTransfer.files[0];
                      if (file) {
                        const fakeEv = { target: { files: [file] } };
                        handleImageFile(fakeEv);
                      }
                    }}
                  >
                    <Upload size={28} />
                    <span>Click to browse or drag & drop</span>
                    <small>PNG, JPG, JPEG, WebP, GIF supported</small>
                  </div>
                )}

                <input
                  ref={fileInputRef}
                  type="file"
                  accept="image/png,image/jpeg,image/jpg,image/webp,image/gif"
                  style={{ display: 'none' }}
                  onChange={handleImageFile}
                />

                {/* Live preview */}
                {editData.image && (() => {
                  const clean = getCleanImageUrl(editData.image);
                  const previewSrc = clean.type === 'webpage' ? null : clean.url;
                  if (!previewSrc) return (
                    <div className="img-preview-note"><Eye size={14} /> Cannot preview webpage link – it will display as a link icon.</div>
                  );
                  return (
                    <div className="img-preview-wrap">
                      <div className="img-preview-label"><Eye size={13} /> Preview</div>
                      <img
                        src={previewSrc}
                        alt="Preview"
                        className="img-preview-thumb"
                        onError={e => { e.target.src = 'https://placehold.co/400x200/1e293b/ef4444?text=Image+Not+Found'; }}
                      />
                      {clean.type === 'drive' && (
                        <div className="img-preview-badge">✓ Google Drive URL converted</div>
                      )}
                    </div>
                  );
                })()}
              </div>

              <div className="form-group">
                <label>Card Excerpt / Short Summary</label>
                <textarea className="form-control" rows="2" placeholder="Brief summary displayed on the card..." value={editData.excerpt} onChange={e => setEditData({...editData, excerpt: e.target.value})} required></textarea>
              </div>

              <div className="form-group">
                <label>Body Content (supports HTML/Paragraphs)</label>
                <textarea className="form-control" style={{minHeight: '200px'}} placeholder="Write rich paragraphs, <h2> sections, etc..." value={editData.content} onChange={e => setEditData({...editData, content: e.target.value})} required></textarea>
              </div>
              <button type="submit" id="hiddenSubmitBtn" style={{display: 'none'}}></button>
            </form>
          </div>
          <div className="modal-footer">
            <button className="btn-secondary" onClick={() => setModalOpen(false)}>Cancel</button>
            <button className="btn-save" onClick={() => document.getElementById('hiddenSubmitBtn').click()}>Save &amp; Publish</button>
          </div>
        </div>
      </div>
    </div>
  );
}
