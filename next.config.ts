import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  images: {
    // Adicione as qualidades que você quer usar
    qualities: [75, 100],
  },
  
  /* config options here */
};

export default nextConfig;
