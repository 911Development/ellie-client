/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "aceternity.com",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;