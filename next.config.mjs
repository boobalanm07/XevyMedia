/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'admin.xevy.io', // For admin subdomain
      },
      {
        protocol: 'https',
        hostname: 'xevy.io', // Add the base domain here
      },
    ],
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
