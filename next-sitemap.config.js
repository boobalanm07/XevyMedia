import fetch from 'node-fetch';

const additionalPaths = async () => {
  const pagesResponse = await fetch('https://admin.xevy.io/wp-json/wp/v2/pages');
  const pages = await pagesResponse.json();

  const postsResponse = await fetch('https://admin.xevy.io/wp-json/wp/v2/posts');
  const posts = await postsResponse.json();

  const pagePaths = pages.map((page) => ({
    loc: page.slug === 'home' ? 'https://www.xevy.io' : `https://www.xevy.io/${page.slug}`,
    lastmod: new Date(page.modified).toISOString(),
    changefreq: 'weekly',
    priority: page.slug === 'home' ? 1.0 : 0.7,
  }));

  const postPaths = posts.map((post) => ({
    loc: `https://www.xevy.io/${post.slug}`,
    lastmod: new Date(post.modified).toISOString(),
    changefreq: 'weekly',
    priority: 0.7,
  }));

  return [...pagePaths, ...postPaths];
};

export default {
  siteUrl: 'https://www.xevy.io',
  generateRobotsTxt: true, // Enable robots.txt generation
  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        allow: '/', // Allow all pages
      },
    ],
    additionalSitemaps: [
      'https://www.xevy.io/sitemap.xml',
      'https://www.xevy.io/sitemap-0.xml', // Your custom sitemaps
    ],
    host: '', // Ensure no host directive is included
  },
  sitemapSize: 5000,
  additionalPaths,
};
