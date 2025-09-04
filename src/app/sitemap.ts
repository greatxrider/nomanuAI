import type { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = 'https://www.nomanuai.com'
    const routes = [
        '',
        '/aboutus',
        '/services',
        '/projects',
        '/blog',
        '/careers',
        '/clientintake',
        '/projectmanagement',
        '/billingpayment',
        '/salescrmmanagement',
        '/socialmedia',
        '/privacy',
    ]
    const now = new Date().toISOString()
    return routes.map((path) => ({
        url: `${baseUrl}${path}`,
        lastModified: now,
        changeFrequency: 'weekly',
        priority: path === '' ? 1 : 0.7,
    }))
}


