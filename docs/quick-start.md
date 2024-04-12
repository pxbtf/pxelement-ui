---
outline: deep
---

# 快速开始

本节将介绍如何在项目中使用 `pxElement`。

## 用法

### 完整引入

如果你对打包后的文件大小不是很在乎，那么使用完整导入会更方便。

```ts
import { createApp } from "vue";
import App from "./App.vue";
import pxelement from "@pxelement-ui/components";
import "@pxelement-ui/theme-chalk/src/index.scss";
const app = createApp(App);
app.use(pxelement);
```
