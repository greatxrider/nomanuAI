/** @type {import('next').NextConfig} */
const nextConfig = {
    outputFileTracingRoot: __dirname,
    images: {
        domains: ['localhost', 'images.unsplash.com', 'resize.latenode.com', 'i.pravatar.cc'],
        formats: ['image/webp', 'image/avif'],
    },
    compress: true,
    poweredByHeader: false,
    reactStrictMode: true,
    experimental: {
        scrollRestoration: true,
    },
    async headers() {
        return [
            {
                source: '/(.*)',
                headers: [
                    {
                        key: 'X-Frame-Options',
                        value: 'DENY',
                    },
                    {
                        key: 'X-Content-Type-Options',
                        value: 'nosniff',
                    },
                    {
                        key: 'Referrer-Policy',
                        value: 'strict-origin-when-cross-origin',
                    },
                    {
                        key: 'X-XSS-Protection',
                        value: '1; mode=block',
                    },
                    {
                        key: 'Content-Security-Policy',
                        value: "default-src 'self'; script-src 'self' 'unsafe-eval' 'unsafe-inline' https://js.stripe.com https://maps.googleapis.com; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; font-src 'self' https://fonts.gstatic.com; img-src 'self' data: https:; connect-src 'self' https://api.supabase.co https://maps.googleapis.com; frame-src https://js.stripe.com https://lottie.host;",
                    },
                ],
            },
            {
                source: '/sitemap.xml',
                headers: [
                    {
                        key: 'Content-Type',
                        value: 'application/xml; charset=utf-8',
                    },
                    {
                        key: 'Cache-Control',
                        value: 'public, max-age=3600',
                    },
                ],
            },
        ]
    },
}

module.exports = nextConfig 