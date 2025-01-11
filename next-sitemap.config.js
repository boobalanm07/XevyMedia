import fetch from 'node-fetch'; // Use ES Module import (ensure you're using .mjs for ES module syntax)

export default {
  siteUrl: 'https://www.xevy.io', // Replace with your main website URL
  generateRobotsTxt: true, // Optional: to generate a robots.txt file
  sitemapSize: 5000, // Optional: split the sitemap if it's too large
  
  // Additional paths to include in the sitemap
  async additionalPaths() {
    // Fetch pages from your WordPress REST API
    const response = await fetch('https://admin.xevy.io/wp-json/wp/v2/pages'); // Replace with your WordPress REST API endpoint
    const pages = await response.json();

    // Map through pages to create URLs for sitemap
    return pages.map((page) => ({
      loc: `https://www.xevy.io/${page.slug}`, // Adjust if necessary based on your URL structure
      lastmod: page.modified, // Use the last modified date from WordPress
      changefreq: 'weekly', // Set frequency of updates
      priority: 0.7, // Adjust priority as needed
    }));
  },

  // Optional: Modify the transformation logic for other routes
  transform: async (config, path) => {
    return {
      loc: path, // The URL of the page
      lastmod: new Date().toISOString(), // Optionally, set the last modification time
      changefreq: 'weekly', // Set frequency of updates
      priority: 0.7, // Adjust priority as needed
    };
  },
};
