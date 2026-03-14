import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import vercel from '@astrojs/vercel';

export default defineConfig({
  site: 'https://cumulativecomputing.org',
  adapter: vercel(),
  integrations: [mdx(), sitemap()],
  redirects: {
    '/framework/01': '/framework/01-agent-artifact-availability',
    '/framework/02': '/framework/02-artifacts-as-units-of-work',
    '/framework/03': '/framework/03-artifact-graphs',
    '/framework/04': '/framework/04-why-storage-systems-fail',
    '/framework/05': '/framework/05-artifact-availability-layer',
    '/framework/06': '/framework/06-deterministic-artifact-identity',
    '/framework/07': '/framework/07-computational-work-conservation',
  },
});
