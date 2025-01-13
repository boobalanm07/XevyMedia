import fetch from 'node-fetch';

export default {
  siteUrl: 'https://www.xevy.io', // Main website URL
  generateRobotsTxt: true, // Generate robots.txt file
  sitemapSize: 5000, // Split sitemap if too large

  // Additional paths to include in the sitemap (Pages + Blog Posts)
  async additionalPaths() {
    const pagesResponse = await fetch('https://admin.xevy.io/wp-json/wp/v2/pages');
    const pages = await pagesResponse.json();

    const postsResponse = await fetch('https://admin.xevy.io/wp-json/wp/v2/posts');
    const posts = await postsResponse.json();

    const pagePaths = pages.map((page) => {
      // Replace '/home' with '/'
      if (page.slug === 'home') {
        return {
          loc: 'https://www.xevy.io', // Home page URL
          lastmod: new Date(page.modified).toISOString(),
          changefreq: 'weekly',
          priority: 1.0,
        };
      }
      return {
        loc: `https://www.xevy.io/${page.slug}`,
        lastmod: new Date(page.modified).toISOString(),
        changefreq: 'weekly',
        priority: 0.7,
      };
    });

    const postPaths = posts.map((post) => ({
      loc: `https://www.xevy.io/${post.slug}`, // Blog post URL
      lastmod: new Date(post.modified).toISOString(),
      changefreq: 'weekly',
      priority: 0.7,
    }));

    return [...pagePaths, ...postPaths]; // Combine pages and posts
  },

  // Transform logic for routes
  transform: async (config, path) => {
    return {
      loc: path,
      lastmod: new Date().toISOString(),
      changefreq: 'weekly',
      priority: 0.7,
    };
  },

  robotsTxtOptions: {
    // Explicitly define robots.txt content
    additionalSitemaps: [
      'https://www.xevy.io/sitemap-0.xml', // Updated sitemap URL
    ],
    policies: [
      {
        userAgent: '*',
        allow: '/',
      },
    ],
    // Custom robots.txt content
    customRobotsTxt: `
      # *
      User-agent: *
      Allow: /

      # Sitemaps
      Sitemap: https://www.xevy.io/sitemap-0.xml
    `,
  },
};
