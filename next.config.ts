import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",  
  images: {
    unoptimized: true, // GitHub Pages는 이미지 최적화 서버 없음
  },
  basePath: "/next16-study",
  assetPrefix: "/next16-study/",
};

export default nextConfig;