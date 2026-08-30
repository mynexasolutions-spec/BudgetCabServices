import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async rewrites() {
    return [
      { source: "/about-us", destination: "/about" },
      { source: "/contact-us", destination: "/contact" },
      { source: "/cab-booking", destination: "/search" },
    ];
  },
};

export default nextConfig;
