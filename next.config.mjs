/** @type {import('next').NextConfig} */
const nextConfig = {
  // async rewrites() {
  //   return [
  //     {
  //       source: '/api/:path*',
  //       destination: 'http://localhost:3000/:path*',
  //     },
  //   ];
  // },
  images: {
    domains: ["cdn.dummyjson.com"],
    // remotePatterns: [
    //   {
    //     protocol: 'https',
    //     hostname: 'api.coingecko.com',
    //     port: '',
    //     pathname: '/account123/**',
    //   },
    //   {
    //     protocol: 'https',
    //     hostname: 'assets.coingecko.com',
    //     port: '',
    //     pathname: '/account123/**',
    //   },
    //   {
    //     protocol: 'https',
    //     hostname: 'assets.coingecko.com',
    //     port: '',
    //     pathname: '/account123/**',
    //   },
    //   {
    //     protocol: 'https',
    //     hostname: 'assets.coingecko.com',
    //     port: '',
    //     pathname: '/image/upload/**',
    //   },
    // ],
  },
};

export default nextConfig;

