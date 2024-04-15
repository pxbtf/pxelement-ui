import { defineConfig } from "vite";

import { fileURLToPath, URL } from "node:url";
// 引入@vitejs/plugin-vue这个插件，让vite能够支持vue的处理
import vue from "@vitejs/plugin-vue";
const nodeEnv = process.env.NODE_ENV === "production" ? '"production"' : '"development"';
export default defineConfig({
  plugins: [vue()],
  reslove: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
  define: {
    "process.env.NODE_ENV": nodeEnv,
  },
  build: {
    outDir: "../px-element/es",
    minify: false,
    rollupOptions: {
      output: {
        globals: {
          vue: "Vue",
        },
        dir: "../px-element/es",
      },
      external: ["vue"],
    },
    lib: {
      entry: "./index.ts",
      name: "pxelement",
      fileName: "pxelement",
      formats: ["es", "cjs", "amd", "iife"],
    },
  },
});
