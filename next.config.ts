import type { NextConfig } from "next";

// Maps every URL indexed on the live charlottetowntaxi.ca site that has no
// direct equivalent in this rebuild to the closest relevant new page, so the
// domain cutover doesn't turn indexed, bookmarked and backlinked URLs into
// 404s. Update/remove entries as dedicated pages are built for them.
const RETIRED_URL_REDIRECTS = [
  { source: '/about-us', destination: '/' },
  { source: '/contact-us', destination: '/#contact' },
  { source: '/our-fleet', destination: '/#fleet' },
  { source: '/event-transfers', destination: '/#services' },
  { source: '/island-tours', destination: '/#services' },
  { source: '/golf-transportation', destination: '/#services' },
  { source: '/taxi', destination: '/' },
  { source: '/services', destination: '/#services' },
];

const nextConfig: NextConfig = {
  trailingSlash: true,
  async redirects() {
    return [
      ...RETIRED_URL_REDIRECTS.flatMap(({ source, destination }) => [
        { source, destination, permanent: true },
        { source: `${source}/`, destination, permanent: true },
      ]),
      // Catch-all: the old site's blog was never migrated, so send any post
      // URL (not just the /blog/ index) to the homepage instead of a 404.
      { source: '/blog/:path*', destination: '/', permanent: true },
    ];
  },
};

export default nextConfig;
