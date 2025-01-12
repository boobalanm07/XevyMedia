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
        permanent: true, // You can set this to false if it's a temporary redirect
      },
    ]
  },
};

export default nextConfig;
