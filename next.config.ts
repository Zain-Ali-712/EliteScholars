import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  // Output a static export so it can be hosted on Namecheap shared hosting
  output: 'export',
  
  // Disable image optimization API because it requires a Node.js server
  images: {
    unoptimized: true,
  },
}

export default nextConfig
