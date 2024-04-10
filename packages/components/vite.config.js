import { defineConfig } from "vite";

import { fileURLToPath, URL } from "node:url";
// 引入@vitejs/plugin-vue这个插件，让vite能够支持vue的处理
import vue from "@vitejs/plugin-vue";
export default defineConfig({
  plugins: [vue()],
  reslove: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
});
