import axios from 'axios';

const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL || 'https://admin.xevy.io/wp-json';
const JWT_TOKEN = process.env.NEXT_PUBLIC_JWT_TOKEN || '';

const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
    Authorization: `Bearer ${JWT_TOKEN}`,
  },
});

export const getPosts = (params = {}) => api.get('/wp/v2/posts', { params });
export const getPages = (params = {}) => api.get('/wp/v2/pages', { params });

export const getSEOData = async (slug) => {
  console.log('Fetching SEO data for slug:', slug);

  try {
    let res = await api.get(`/wp/v2/pages?slug=${slug}`);
    let page = res.data[0];

    if (!page) {
      res = await api.get(`/wp/v2/posts?slug=${slug}`);
      page = res.data[0];
    }

    if (page) {
      return {
        title: page.rank_math_title || page.title.rendered || 'Default Title',
        description: page.rank_math_description || 'Default description',
        keywords: page.rank_math_focus_keyword || '',
        ogImage: page.rank_math_og_content_image || 'default-image-url.jpg',
      };
    } else {
      return {
        title: 'Page not found',
        description: 'No description available',
        keywords: '',
        ogImage: 'default-image-url.jpg',
      };
    }
  } catch (error) {
    console.error('Error fetching SEO data:', error.response?.data || error.message);
    return {
      title: 'Error loading title',
      description: 'Error loading description',
      keywords: '',
      ogImage: 'default-image-url.jpg',
    };
  }
};

export default api;
