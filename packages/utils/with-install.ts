import type { App, Plugin } from "vue";

export type SFCInstall<T> = T & Plugin;
export const withInstall = <T>(component: T) => {
  (component as SFCInstall<T>).install = function (app: App) {
    app.component((component as any).name, component as SFCInstall<T>);
  };
};
