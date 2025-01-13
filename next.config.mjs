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
        destination: '/', // Redirect to the home page
        permanent: true,
      },
      {
        source: '/:path*.html', // Match any URL ending with .html
        destination: '/', // Redirect to the home page
        permanent: true,
      },
      {
        source: '/',
        has: [
          {
            type: 'query',
            key: 'x', // Match URLs with the query parameter `x`
          },
        ],
        destination: '/', // Redirect to the home page
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
