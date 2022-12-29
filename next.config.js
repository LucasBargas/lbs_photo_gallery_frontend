/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  compiler: {
    styledComponents: true,
  },
  images: {
    domains: ['localhost', process.env.NEXT_PUBLIC_CONFIG_IMAGES_DIR],
  },
};

module.exports = nextConfig;
