import { defineConfig } from 'astro/config';

import preact from '@astrojs/preact';

// https://astro.build/config
export default defineConfig({
  site: 'https://memoblog.vercel.app',
  integrations: [preact()],
});
