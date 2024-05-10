import Button from "./button/src/button.vue";
import type { App, Plugin } from "vue";
const components = [Button];

const install = (app: App) => {
  components.forEach((component: any) => {
    app.component(component.name as string, component);
  });
};

const pxelement: Plugin = { install };

export default pxelement;
