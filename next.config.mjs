import createNextIntlPlugin from 'next-intl/plugin';
 
const withNextIntl = createNextIntlPlugin();

const cspHeader = `
    default-src 'self' https://umami.clmntpct.xyz;
    script-src 'self' 'unsafe-eval' 'unsafe-inline' https://umami.clmntpct.xyz;
    style-src 'self' 'unsafe-inline';
    img-src 'self' blob: data:;
    font-src 'self';
    object-src 'none';
    base-uri 'self';
    form-action 'self';
    frame-ancestors 'none';
    upgrade-insecure-requests;`
 
/** @type {import('next').NextConfig} */
const nextConfig = {

  
  headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'Content-Security-Policy',
            value: cspHeader.replace(/\n/g, ''),
          },
        ],
      },
    ]
  },
};
 
export default withNextIntl(nextConfig);