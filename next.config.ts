import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export', // 启用静态导出
  images: {
    unoptimized: true, // GitHub Pages 不支持 Next.js 的图片优化
  },
  // 如果你的仓库名不是 username.github.io，需要设置 basePath
  // basePath: '/gonglab',
  // assetPrefix: '/gonglab',
};

export default nextConfig;
