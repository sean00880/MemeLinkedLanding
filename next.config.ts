import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    // Set device sizes for responsive images
    deviceSizes: [320, 420, 768, 1024, 1200],
    // Set image domains if loading from external sources
    domains: [],
    // Specify allowed image formats
    formats: ['image/avif', 'image/webp'],
    // Disable the built-in Image Optimization if using a custom loader
    // loader: 'custom',
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
