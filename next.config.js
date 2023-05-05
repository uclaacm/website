module.exports = {
  distDir: 'build',
  experimental: {
    craCompat: true,
  },
  images: {
    domains: ['www.netlify.com'],
  },
  target: 'serverless',
  webpack: (config) => {
    config.externals = [...config.externals, 'canvas'];
    return config;
  },
};
