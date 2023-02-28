import defaultNextConfig from '@sushiswap/nextjs-config'

/** @type {import('next').NextConfig} */
const nextConfig = {
  ...defaultNextConfig,
  basePath: '/earn',
  transpilePackages: [
    '@sushiswap/redux-token-lists',
    '@sushiswap/redux-localstorage',
    '@sushiswap/wagmi',
    '@sushiswap/ui',
  ],
  async redirects() {
    return [
      {
        source: '/',
        destination: '/earn',
        permanent: true,
        basePath: false,
      },
      {
        source: '/index/:path*',
        destination: '/',
        permanent: true,
      },
    ]
  },
}

export default nextConfig
