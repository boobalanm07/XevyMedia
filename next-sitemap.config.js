import fetch from 'node-fetch';

export default {
  siteUrl: 'https://www.xevy.io', // Replace with your main website URL
  generateRobotsTxt: true, // Optional: to generate a robots.txt file
  sitemapSize: 5000, // Optional: split the sitemap if it's too large

  // Additional paths to include in the sitemap (Pages + Blog Posts)
  async additionalPaths() {
    const pagesResponse = await fetch('https://admin.xevy.io/wp-json/wp/v2/pages');
    const pages = await pagesResponse.json();

    const postsResponse = await fetch('https://admin.xevy.io/wp-json/wp/v2/posts');
    const posts = await postsResponse.json();

    const pagePaths = pages.map((page) => {
      // Skip adding '/home' to the sitemap and replace it with '/'
      if (page.slug === 'home') {
        return {
          loc: 'https://www.xevy.io', // Home page URL
          lastmod: new Date(page.modified).toISOString(),
          changefreq: 'weekly',
          priority: 1.0, // Higher priority for the homepage
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
      loc: `https://www.xevy.io/${post.slug}`, // Adjust if your blog URL structure is different
      lastmod: new Date(post.modified).toISOString(),
      changefreq: 'weekly',
      priority: 0.7,
    }));

    return [...pagePaths, ...postPaths]; // Combine both pages and posts
  },

  // Optional: Modify the transformation logic for other routes
  transform: async (config, path) => {
    return {
      loc: path,
      lastmod: new Date().toISOString(),
      changefreq: 'weekly',
      priority: 0.7,
    };
  },

  robotsTxtOptions: {
    // Explicitly define the robots.txt content
    additionalSitemaps: [
      'https://www.xevy.io/sitemap.xml', // Add additional sitemap locations if necessary
    ],
    policies: [
      {
        userAgent: '*',
        allow: '/',
      },
    ],
    // Don't include 'Host' directive, as it's unnecessary
    // Explicitly set content to ensure 'Host' is not added.
    customRobotsTxt: `
      # *
      User-agent: *
      Allow: /

      # Sitemaps
      Sitemap: https://www.xevy.io/sitemap.xml
    `,
  },
};
