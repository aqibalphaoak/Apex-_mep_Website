import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// IMPORTANT: change `site` to the real production domain before you deploy.
// It is used for the sitemap, canonical URLs and Open Graph tags (all SEO-critical).
export default defineConfig({
  site: 'https://www.apexmepsolutions.ca',
  integrations: [sitemap()],
  build: {
    inlineStylesheets: 'auto',
  },
});
