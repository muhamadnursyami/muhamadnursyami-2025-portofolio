import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images:{
    domains: ['via.placeholder.com', 'assets.aceternity.com','ui.aceternity.com', 'images.unsplash.com','i.imgur.com']
  },
  eslint: {
    // ⬇️ Jangan stop build karena error ESLint
    ignoreDuringBuilds: true,
  },
  typescript: {
    // ⬇️ Jangan stop build karena error type-check TS
    ignoreBuildErrors: true,
  },
};

export default nextConfig;
