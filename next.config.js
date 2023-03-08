/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images:{
    remotePatterns:[
      {
        protocol:'https',
        hostname:"images.unsplash.com",
        port:"",
        pathname:"/photo-**"
      },
      {
        protocol:'https',
        hostname:"logos-download.com",
        port:"",
        pathname:"/wp-content/uploads/**"
      },
      {
        protocol:'https',
        hostname:"seeklogo.com",
        port:"",
        pathname:"/images/**"
      }
    ],
   
  }
}

module.exports = nextConfig
