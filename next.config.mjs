/** @type {import('next').NextConfig} */
const nextConfig = {
  sassOptions: {
    additionalData: `sass-embedded`,
  },
  images: {
    domains: ["cdnl.iconscout.com"],
  },
};

export default nextConfig;
