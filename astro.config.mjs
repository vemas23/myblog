import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import { remarkReadingTime } from './src/utils/remark-reading-time.mjs';

import tailwind from "@astrojs/tailwind";

import sveltiaCms from 'astro-sveltia-cms';

// https://astro.build/config
export default defineConfig({
  site: 'https://astro-theme-cody.netlify.app',
  integrations: [mdx(), sitemap(), tailwind(), sveltiaCms()],
  markdown: {
    remarkPlugins: [remarkReadingTime],
    syntaxHighlight: 'shiki',
    shikiConfig: {
      // https://docs.astro.build/en/guides/markdown-content/#syntax-highlighting
      themes: {
        light: 'catppuccin-mocha',
        dark: 'catppuccin-latte',
      },
    }
  },
  output: "server",
});

