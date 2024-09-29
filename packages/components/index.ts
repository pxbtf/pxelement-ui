import Button from "./button/src/button.vue";
import Card from "./card/src/card.vue";
import type { App, Plugin } from "vue";
const components = [Button, Card];

const install = (app: App) => {
  components.forEach((component: any) => {
    app.component(component.name as string, component);
  });
};

const pxelement: Plugin = { install };

export default pxelement;
