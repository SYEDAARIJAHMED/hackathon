/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true, 

  images: {
    domains: [
      "urdzines.com", 
      "emada.in-novation.tech", 
      "darkskylife.com",
      "encrypted-tbn0.gstatic.com",
      "encrypted-tbn1.gstatic.com",
      "encrypted-tbn2.gstatic.com",
      "encrypted-tbn3.gstatic.com",
    ],
  },

 
  experimental: {
    appDir: true, 
  },
};

module.exports = nextConfig;
