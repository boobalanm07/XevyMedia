/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['admin.xevy.io'], // Add the external domain here
  },
  async redirects() {
    return [
      {
        source: '/home',
        destination: '/',
        permanent: true, // Permanent redirect
      },
      {
        source: '/p/:path*',
        destination: '/404', // Redirect to 404 page
        permanent: false, // Temporary redirect
      },
      {
        source: '/:path*.html', // Match any URL ending with .html
        destination: '/404', // Redirect to 404 page
        permanent: false, // Temporary redirect
      },
      {
        source: '/',
        has: [
          {
            type: 'query',
            key: 'x', // Match URLs with the query parameter `x`
          },
        ],
        destination: '/404', // Redirect to 404 page
        permanent: false, // Temporary redirect
      },
    ];
  },
};

export default nextConfig;
