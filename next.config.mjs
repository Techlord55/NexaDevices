// next.config.mjs
/** @type {import('next').NextConfig} */
const nextConfig = {
  // Configure allowed origins for cross-origin requests
  allowedDevOrigins: [
    "192.168.54.106:3000",
    "localhost:3000",
    "127.0.0.1:3000",
    "*.ngrok-free.app",
  ],
  
  images: {
    remotePatterns: [
      {
        protocol: 'http',
        hostname: 'localhost',
        port: '8000',
        pathname: '/media/**',
      },
      {
        protocol: 'http',
        hostname: '127.0.0.1',
        port: '8000',
        pathname: '/media/**',
      },
      {
        protocol: 'http',
        hostname: '192.168.54.106',
        port: '8000',
        pathname: '/media/**',
      },
      {
        protocol: 'https',
        hostname: '*.ngrok-free.app',
        pathname: '/media/**',
      },
      {
        protocol: 'https',
        hostname: 'img.clerk.com',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'nexadevices-backend.onrender.com',
        pathname: '/media/**',
      },
      {
        protocol: 'https',
        hostname: 'nexadevices-backend.onrender.com',
        pathname: '/api/**',
      },
    ],
    dangerouslyAllowSVG: true,
    contentDispositionType: 'attachment',
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
    unoptimized: process.env.NODE_ENV === 'development',
  },
  
  env: {
    NEXT_PUBLIC_API_URL: process.env.NEXT_PUBLIC_API_URL,
    NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY: process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY,
  },
}

export default nextConfig