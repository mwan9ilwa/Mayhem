/** @type {import('next').NextConfig} */
const { withContentlayer } = require("next-contentlayer");

const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      // "images.unsplash.com",
      // "media-exp1.licdn.com",
      "i.scdn.co",
      "bgdlyaidwkwtdljwukcw.supabase.co",
    ],
    dangerouslyAllowSVG: true,
  },
};

module.exports = {
  env: {
    NEXT_PUBLIC_SUPABASE_URL: 'https://your-supabase-url.com',
    NEXT_PUBLIC_SUPABASE_ANON_KEY: 'your-supabase-anon-key',
  },
};

module.exports = withContentlayer(nextConfig);
