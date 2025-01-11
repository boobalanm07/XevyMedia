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

    const pagePaths = pages.map((page) => ({
      loc: `https://www.xevy.io/${page.slug}`,
      lastmod: page.modified,
      changefreq: 'weekly',
      priority: 0.7,
    }));

    const postPaths = posts.map((post) => ({
      loc: `https://www.xevy.io/${post.slug}`, // Adjust if your blog URL structure is different
      lastmod: post.modified,
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
};
