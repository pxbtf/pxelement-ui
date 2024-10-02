# 对话框组件

## 如何使用

```html
<px-dialog v-model:visible="visible1" @close="() => (visible1 = false)"> 这是一个基本的对话框 </px-dialog>
```

```html
<px-dialog v-model:visible="visible2" title="温馨提示" width="30vw" top="40vh" @close="() => (visible2 = false)">
  传递了 title、width、top 这三个 prop
</px-dialog>
```

```html
<px-dialog v-model:visible="visible3" @close="closeDialog3" top="30vh">
  这是一个基本的对话框
  <template #footer>
    <Duyi-Button type="warning" @click="closeDialog3">取消</Duyi-Button>
    <Duyi-Button type="primary" @click="closeDialog3">确定</Duyi-Button>
  </template>
</px-dialog>
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
