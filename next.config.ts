import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/blue-moon",
  assetPrefix: "/blue-moon/",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
