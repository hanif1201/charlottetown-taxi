import type { MetadataRoute } from 'next';
import { SITE_URL, SITE_IS_LIVE } from '@/lib/seo';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: '*', allow: SITE_IS_LIVE ? '/' : undefined, disallow: SITE_IS_LIVE ? undefined : '/' },
    sitemap: SITE_IS_LIVE ? `${SITE_URL}/sitemap.xml` : undefined,
  };
}
