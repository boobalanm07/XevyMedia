import axios from 'axios';

const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;
const ACCESS_TOKEN_KEY = 'access_token';
const REFRESH_TOKEN_KEY = 'refresh_token';

// Function to get tokens from localStorage (or cookies if needed)
const getToken = (key) => typeof window !== 'undefined' && localStorage.getItem(key);

// Function to set tokens in localStorage (or cookies if needed)
const setToken = (key, value) => typeof window !== 'undefined' && localStorage.setItem(key, value);

const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Add an interceptor to include the access token in every request
api.interceptors.request.use(
  (config) => {
    const token = getToken(ACCESS_TOKEN_KEY);
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

// Handle token expiration and refresh logic
api.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;

    // Check if the error is due to an expired token
    if (error.response?.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;

      const refreshToken = getToken(REFRESH_TOKEN_KEY);
      if (refreshToken) {
        try {
          // Call the refresh token endpoint
          const { data } = await axios.post(`${API_BASE_URL}/jwt-auth/v1/token/refresh`, {
            refresh_token: refreshToken,
          });

          // Save the new tokens
          setToken(ACCESS_TOKEN_KEY, data.token);
          setToken(REFRESH_TOKEN_KEY, data.refresh_token);

          // Retry the original request with the new token
          originalRequest.headers.Authorization = `Bearer ${data.token}`;
          return api(originalRequest);
        } catch (refreshError) {
          console.error('Refresh token failed:', refreshError);
        }
      }
    }

    // If refresh also fails, reject the promise
    return Promise.reject(error);
  }
);

// Fetch posts
export const getPosts = (params = {}) => api.get('/wp/v2/posts', { params });

// Fetch pages
export const getPages = (params = {}) => api.get('/wp/v2/pages', { params });

// Fetch SEO data
export const getSEOData = async (slug) => {
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
    }

    return {
      title: 'Page not found',
      description: 'No description available',
      keywords: '',
      ogImage: 'default-image-url.jpg',
    };
  } catch (error) {
    console.error('Error fetching SEO data:', error);
    return {
      title: 'Error loading title',
      description: 'Error loading description',
      keywords: '',
      ogImage: 'default-image-url.jpg',
    };
  }
};

export default api;
