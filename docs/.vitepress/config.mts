import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "pxElement",
  description: "vue3组件库",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: "Home", link: "/" },
      { text: "component", link: "/components/index" },
      { text: "Examples", link: "/markdown-examples" },
    ],
    logo: "",
    sidebar: [
      {
        text: "开发指南",
        items: [
          { text: "Markdown Examples", link: "/markdown-examples" },
          { text: "Runtime API Examples", link: "/api-examples" },
        ],
      },
      {
        text: "基础组件",
        items: [{ text: "Button", link: "../components/PButton/base" }],
      },
    ],

    socialLinks: [
      { icon: "github", link: "https://github.com/pxbtf/pxelement-ui" },
    ],
    footer: {
      message: "Released under the MIT License.",
      copyright: "Copyright © 2024-present Pan Xin",
    },
  },
});
