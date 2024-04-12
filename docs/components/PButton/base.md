## Button

常用的操作。

### 基础用法

使用 type、plain、round 和 circle 来定义的样式。

<style>
    .row button {
        margin-right:20px;
    }
</style>

  <div class="row">
    <px-button>Default</px-button>
    <px-button type="primary">primary</px-button>
    <px-button type="success">success</px-button>
    <px-button type="info">info</px-button>
    <px-button type="danger">danger</px-button>
    <px-button type="warning">warning</px-button>
  </div>

```html
<px-button>Default</px-button>
<px-button type="primary">primary</px-button>
<px-button type="success">success</px-button>
<px-button type="info">info</px-button>
<px-button type="danger">danger</px-button>
<px-button type="warning">warning</px-button>
```

<div class="row">
  <px-button plain>Plain</px-button>
  <px-button plain type="primary">primary</px-button>
  <px-button plain type="success">success</px-button>
  <px-button plain type="info">info</px-button>
  <px-button plain type="danger">danger</px-button>
  <px-button plain type="warning">warning</px-button>
</div>

```html
<px-button plain>Plain</px-button>
<px-button plain type="primary">primary</px-button>
<px-button plain type="success">success</px-button>
<px-button plain type="info">info</px-button>
<px-button plain type="danger">danger</px-button>
<px-button plain type="warning">warning</px-button>
```

  <div class="row">
    <px-button round>Round</px-button>
    <px-button round type="primary">primary</px-button>
    <px-button round type="success">success</px-button>
    <px-button round type="info">info</px-button>
    <px-button round type="danger">danger</px-button>
    <px-button round type="warning">warning</px-button>
  </div>

```html
<px-button round>Round</px-button>
<px-button round type="primary">primary</px-button>
<px-button round type="success">success</px-button>
<px-button round type="info">info</px-button>
<px-button round type="danger">danger</px-button>
<px-button round type="warning">warning</px-button>
```

  <!-- 测试 circle 属性 -->
  <div class="row">
    <px-button circle type="primary">好</px-button>
    <px-button circle type="success">学</px-button>
    <px-button circle type="info">习</px-button>
    <px-button circle type="danger">前</px-button>
    <px-button circle type="warning">端</px-button>
  </div>

```html
<px-button circle type="primary">好</px-button>
<px-button circle type="success">学</px-button>
<px-button circle type="info">习</px-button>
<px-button circle type="danger">前</px-button>
<px-button circle type="warning">端</px-button>
```

### 禁用状态

你可以使用 <b>disabled</b> 属性来定义按钮是否被禁用。

使用 <b>disabled</b> 属性来控制按钮是否为禁用状态。 该属性接受一个 <b>Boolean</b> 类型的值。

  <div class="row">
    <px-button disabled>Diabled</px-button>
    <px-button disabled type="primary">primary</px-button>
    <px-button disabled type="success">success</px-button>
    <px-button disabled round type="info">info</px-button>
    <px-button disabled round type="danger">danger</px-button>
    <px-button disabled round type="warning">warning</px-button>
  </div>

```html
<px-button disabled>Diabled</px-button>
<px-button disabled type="primary">primary</px-button>
<px-button disabled type="success">success</px-button>
<px-button disabled round type="info">info</px-button>
<px-button disabled round type="danger">danger</px-button>
<px-button disabled round type="warning">warning</px-button>
```

### 图标按钮

使用图标为按钮添加更多的含义。 你也可以单独使用图标不添加文字来节省显示区域占用。

使用 <b>icon</b> 属性来为按钮添加图标。

  <div class="row">
    <px-button icon="milk-tea"></px-button>
    <px-button type="primary" icon="camera">照相机</px-button>
    <px-button type="success" icon="wind-power" circle></px-button>
    <px-button type="info" icon="orange"></px-button>
    <px-button type="danger" icon="goblet"></px-button>
    <px-button type="warning" icon="cloudy"></px-button>
    <px-button type="info" plain icon="milk-tea">奶茶</px-button>
  </div>

```html
<px-button icon="milk-tea"></px-button>
<px-button type="primary" icon="camera">照相机</px-button>
<px-button type="success" icon="wind-power" circle></px-button>
<px-button type="info" icon="orange"></px-button>
<px-button type="danger" icon="goblet"></px-button>
<px-button type="warning" icon="cloudy"></px-button>
<px-button type="info" plain icon="milk-tea">奶茶</px-button>
```

### Button 属性

| 参数名   |                 参数描述                 | 参数类型 |  默认值 |
| :------- | :--------------------------------------: | :------: | ------: |
| type     | 类型(primary/success/warnig/danger/info) |  string  | default |
| plain    |                是否是朴素                | boolean  |   false |
| round    |                是否是圆角                | boolean  |   false |
| circle   |                是否是圆形                | boolean  |   false |
| disabled |                 是否禁用                 | boolean  |   false |
| icon     |                 图标类名                 |  string  |      无 |
