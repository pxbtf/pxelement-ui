# 对话框组件

## 如何使用

<style>
    .row button {
     margin-right:20px;
    }
</style>

<div class="row">
<px-dialog width="60%" :visible="visible1" @close="() => (visible1 = false)">Visible1</px-dialog>
<px-dialog width="30%" :visible="visible2" @close="() => (visible2 = false)">Visible2</px-dialog>
<px-button @click="openVisible1">打开普通弹窗</px-button>
<px-button type="success" @click="openVisible2">打开成功弹窗</px-button>
</div>

<script lang="ts" setup>
  import { ref } from "vue";
  const visible1 = ref(false);
  const visible2 = ref(false);
  const openVisible1 = () => {
    visible1.value = true;
  };
  const openVisible2 = () => {
    visible2.value = true;
  };
</script>

```html
<template>
  <div>
    <px-dialog width="60%" :visible="visible1" @close="() => (visible1 = false)">Visible1</px-dialog>
    <px-dialog width="30%" :visible="visible2" @close="() => (visible2 = false)">Visible2</px-dialog>
    <px-button @click="openVisible1">打开普通弹窗</px-button>
    <px-button type="success" @click="openVisible2">打开成功弹窗</px-button>
  </div>
</template>

<script lang="ts" setup>
  import { ref } from "vue";
  const visible1 = ref(false);
  const visible2 = ref(false);
  const openVisible1 = () => {
    visible1.value = true;
  };
  const openVisible2 = () => {
    visible2.value = true;
  };
</script>
```

## 支持的属性

| 属性名  | 作用           | 类型    | 是否必填 | 默认值  |
| ------- | -------------- | ------- | -------- | ------- |
| title   | 标题           | String  | 否       | ''提示" |
| width   | 宽度           | String  | 否       | 50%     |
| top     | 距离上方的距离 | String  | 否       | 15vh    |
| visible | 是否可见       | Boolean | 否       | false   |

## 支持的事件

| 事件名 | 作用       |
| ------ | ---------- |
| close  | 关闭对话框 |
