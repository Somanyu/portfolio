/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        dangerouslyAllowSVG: true,
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'cdn.sanity.io',
                port: '',
            },
            {
                protocol: 'https',
                hostname: 'api.dicebear.com',
                port: '',
            },
        ],
    },
}

module.exports = nextConfig
