export default function robots() {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: [
          '/api/',
          '/_next/',
          '/admin/',
          '/dashboard/',
        ],
      },
    ],
    sitemap: 'https://signature.punjabland.ca/sitemap.xml',
  }
}
