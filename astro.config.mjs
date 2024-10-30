import icon from 'astro-icon';
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  site: 'https://cards.uxanarangel.com',
  image: {
    domains: ['avatars.githubusercontent.com']
  },
  vite: {
    build: {
      cssMinify: 'lightningcss'
    }
  },
  integrations: [icon()]
});
