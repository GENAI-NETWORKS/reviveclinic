const API_URL = import.meta.env.VITE_API_URL || '/api.php';

export const getBlogPosts = async () => {
  if (API_URL) {
    try {
      const response = await fetch(API_URL);
      if (response.ok) {
        return await response.json();
      }
    } catch (error) {
      console.error('Failed to fetch from API:', error);
    }
  }
  return [];
};

export const getBlogPost = async (id) => {
  if (API_URL) {
    try {
      const response = await fetch(`${API_URL}?id=${id}`);
      if (response.ok) {
        return await response.json();
      }
    } catch (error) {
      console.error('Failed to fetch post from API:', error);
    }
  }
  return null;
};

export const saveBlogPost = async (post) => {
  if (API_URL) {
    try {
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
        return true;
      }
    } catch (error) {
      console.error('Failed to save to API:', error);
    }
  }
  return false;
};

export const deleteBlogPost = async (id) => {
  if (API_URL) {
    try {
      const response = await fetch(`${API_URL}?id=${id}`, { method: 'DELETE' });
      if (response.ok) {
        return true;
      }
    } catch (error) {
      console.error('Failed to delete from API:', error);
    }
  }
  return false;
};
