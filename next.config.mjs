// next.config.mjs
const nextConfig = {
  output: 'standalone', // for static export
  images: {
    unoptimized: true, // allow next/image to work in static HTML
  },
};

export default nextConfig;
