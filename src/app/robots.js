export default function robots() {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
    },
    sitemap: `${process.env.NEXT_PUBLIC_DEV_URL || process.env.NEXT_PUBLIC_PROD_URL}/sitemap.xml`,
  }
}