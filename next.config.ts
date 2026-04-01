import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  allowedDevOrigins: ['lenard-unmummified-woodrow.ngrok-free.dev'],
  images: {
    remotePatterns: [
      new URL( 'https://placehold.co' ),
    ]
  }
};

export default nextConfig;
