// @ts-check
import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://www.jonahcello.com',
  build: {
    // Emit about.html (not about/index.html) so existing links and redirects keep working.
    format: 'file',
  },
  // Keep the HTML whitespace as written; collapsing it can shift inline elements like side-by-side buttons.
  compressHTML: false,
});
