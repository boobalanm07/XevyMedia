import fetch from 'node-fetch';

const additionalPaths = async () => {
  const pagesResponse = await fetch('https://admin.xevy.io/wp-json/wp/v2/pages');
  const pages = await pagesResponse.json();

  const postsResponse = await fetch('https://admin.xevy.io/wp-json/wp/v2/posts');
  const posts = await postsResponse.json();

  const pagePaths = pages.map((page) => ({
    loc: page.slug === 'home' ? 'https://xevy.io' : `https://xevy.io/${page.slug}`,
    lastmod: new Date(page.modified).toISOString(),
    changefreq: 'weekly',
    priority: page.slug === 'home' ? 1.0 : 0.7,
  }));

  const postPaths = posts.map((post) => ({
    loc: `https://xevy.io/${post.slug}`,
    lastmod: new Date(post.modified).toISOString(),
    changefreq: 'weekly',
    priority: 0.7,
  }));

  return [...pagePaths, ...postPaths];
};

export default {
  siteUrl: 'https://xevy.io',
  generateRobotsTxt: true, // Enable robots.txt generation
  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        allow: '/', // Allow all pages
      },
    ],
    additionalSitemaps: [
      'https://xevy.io/sitemap.xml',
      'https://xevy.io/sitemap-0.xml', // Your custom sitemaps
    ],
    host: '', // Ensure no host directive is included
  },
  sitemapSize: 5000,
  additionalPaths,
};
