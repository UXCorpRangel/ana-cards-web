import icon from 'astro-icon';
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  base: '/ana-cards-web',
  vite: {
    build: {
      cssMinify: 'lightningcss'
    }
  },
  integrations: [icon()]
});
