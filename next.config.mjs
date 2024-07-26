/** @type {import('next').NextConfig} */
const nextConfig = {
    async rewrites() {
      return [
        {
          source: '/sign-in',
          destination: '/sign-in',
        },
      ];
    },
    serverRuntimeConfig: {
      PORT: 3000,
    },
  };
  
  export default nextConfig;