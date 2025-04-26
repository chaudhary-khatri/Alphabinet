/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true, // Only needed for static exports
  },
  // Add production domain configuration
  env: {
    siteUrl: process.env.SITE_URL || 'https://www.alphabinet.com',
  },
  // Enable trailing slashes for better SEO compatibility
  trailingSlash: true,
  // Optional: Add security headers
  headers: async () => {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff'
          },
          {
            key: 'X-Frame-Options',
            value: 'SAMEORIGIN'
          }
        ],
      },
    ];
  }
};

export default nextConfig;