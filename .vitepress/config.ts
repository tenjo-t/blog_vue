import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Tenjo takashi",
  description: "A VitePress Site",
  lang: "ja-JP",

  markdown: {
    math: true,
  },
});
