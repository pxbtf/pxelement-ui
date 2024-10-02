import { defineConfig } from "vitepress";

export default defineConfig({
  title: "pxElement",
  description: "基于vue3开发的组件库",
  themeConfig: {
    nav: [
      { text: "指南", link: "/install" },
      { text: "组件", link: "/components/index" },
    ],
    logo: "",
    sidebar: [
      {
        text: "开发指南",
        items: [
          { text: "安装", link: "/install" },
          { text: "快速开始", link: "/quick-start" },
        ],
      },
      {
        text: "基础组件",
        items: [{ text: "Button", link: "/components/PButton/base" },{ text: "Dialog", link: "/components/PDialog/base" }],
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
