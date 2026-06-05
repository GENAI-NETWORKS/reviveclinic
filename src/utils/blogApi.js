const API_URL = import.meta.env.VITE_API_URL || '/api.php';

// Helper to fetch posts with fallback to localStorage if API is not configured or fails
export const getBlogPosts = async () => {
  if (API_URL) {
    try {
      const response = await fetch(API_URL);
      if (response.ok) {
        return await response.json();
      }
    } catch (error) {
      console.error('Failed to fetch from API, falling back to localStorage:', error);
    }
  }
  
  // Fallback
  const localPosts = JSON.parse(localStorage.getItem('revive_blog_posts'));
  return localPosts || [];
};

export const getBlogPost = async (id) => {
  if (API_URL) {
    try {
      const response = await fetch(`${API_URL}?id=${id}`);
      if (response.ok) {
        return await response.json();
      }
    } catch (error) {
      console.error('Failed to fetch post from API, falling back to localStorage:', error);
    }
  }
  
  const localPosts = JSON.parse(localStorage.getItem('revive_blog_posts')) || [];
  return localPosts.find(p => p.id === id);
};

export const saveBlogPost = async (post) => {
  if (API_URL) {
    try {
      // Check if it exists to determine POST or PUT
      const exist = await fetch(`${API_URL}?id=${post.id}`);
      let method = 'POST';
      let url = API_URL;
      
      if (exist.ok) {
        const existData = await exist.json();
        if (!existData.error) {
          method = 'PUT';
          url = `${API_URL}?id=${post.id}`;
        }
      }

      const response = await fetch(url, {
        method,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(post)
      });
      
      if (response.ok) {
        // Also save to localStorage as a backup
        saveToLocalStorage(post);
        return true;
      }
    } catch (error) {
      console.error('Failed to save to API, saving to localStorage:', error);
    }
  }
  
  saveToLocalStorage(post);
  return true;
};

export const deleteBlogPost = async (id) => {
  if (API_URL) {
    try {
      await fetch(`${API_URL}?id=${id}`, { method: 'DELETE' });
    } catch (error) {
      console.error('Failed to delete from API:', error);
    }
  }
  
  const localPosts = JSON.parse(localStorage.getItem('revive_blog_posts')) || [];
  const newPosts = localPosts.filter(p => p.id !== id);
  localStorage.setItem('revive_blog_posts', JSON.stringify(newPosts));
  return true;
};

// Internal fallback helper
const saveToLocalStorage = (post) => {
  let localPosts = JSON.parse(localStorage.getItem('revive_blog_posts')) || [];
  const idx = localPosts.findIndex(p => p.id === post.id);
  if (idx !== -1) {
    localPosts[idx] = post;
  } else {
    localPosts.unshift(post);
  }
  localStorage.setItem('revive_blog_posts', JSON.stringify(localPosts));
};
