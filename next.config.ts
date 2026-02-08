import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export', // 启用静态导出
  images: {
    unoptimized: true, // GitHub Pages 不支持 Next.js 的图片优化
  },
  // 部署在 gong-bu-lab.github.io 根路径，不需要 basePath
};

export default nextConfig;
