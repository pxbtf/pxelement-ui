// .vitepress/theme/index.js
import DefaultTheme from "vitepress/theme";
import pxelement from "@pxelement-ui/components";
import "@pxelement-ui/theme-chalk/src/index.scss";
import "./custom.css";
export default {
  ...DefaultTheme,
  enhanceApp: async ({ app }) => {
    app.use(pxelement);
  },
};
