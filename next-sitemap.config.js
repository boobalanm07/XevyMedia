import fetch from 'node-fetch';

const additionalPaths = async () => {
  const pagesResponse = await fetch('https://admin.xevy.io/wp-json/wp/v2/pages');
  const pages = await pagesResponse.json();

  const postsResponse = await fetch('https://admin.xevy.io/wp-json/wp/v2/posts');
  const posts = await postsResponse.json();

  // Generate page paths
  const pagePaths = pages.map((page) => ({
    loc: page.slug === 'home' ? '/' : `/${page.slug}`,
    lastmod: new Date(page.modified).toISOString(),
    changefreq: 'weekly',
    priority: page.slug === 'home' ? 1.0 : 0.7,
  }));

  // Generate post paths
  const postPaths = posts.map((post) => ({
    loc: `/${post.slug}`,
    lastmod: new Date(post.modified).toISOString(),
    changefreq: 'weekly',
    priority: 0.7,
  }));

  // Remove duplicates
  const uniquePaths = Array.from(
    new Map([...pagePaths, ...postPaths].map((item) => [item.loc, item])).values()
  );

  return uniquePaths;
};

export default {
  siteUrl: 'https://xevy.io', // Production site URL
  generateRobotsTxt: true, // Generate robots.txt
  sitemapSize: 50000, // Large size to ensure a single file
  additionalPaths, // Add dynamic paths
  generateIndexSitemap: false, // Disable index sitemap
  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        allow: '/', // Allow all pages
      },
    ],
  },
};
