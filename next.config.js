/** @type {import('next').NextConfig} */
const nextConfig = {
  // Proxy API calls to the FastAPI backend (same as Vite templates).
  async rewrites() {
    return [
      {
        source: '/api/:path*',
        destination: 'http://127.0.0.1:5112/api/:path*',
      },
    ];
  },
};

module.exports = nextConfig;
