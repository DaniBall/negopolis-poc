import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: process.env.SITE_URL || 'https://negopolis.com',
  base: process.env.BASE_PATH || '/',
  trailingSlash: 'always',
  integrations: [sitemap({ filter: (p) => !p.includes('/gracias/') })],
});
