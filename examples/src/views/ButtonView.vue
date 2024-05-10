<template>
  <div>
    <!-- 测试按钮组件 -->
    <div class="row">
      <PxButton>普通按钮</PxButton>
      <PxButton type="primary">primary按钮</PxButton>
      <PxButton type="success">success按钮</PxButton>
      <PxButton type="info">info按钮</PxButton>
      <PxButton type="danger">danger按钮</PxButton>
      <PxButton type="warning">warning按钮</PxButton>
    </div>
    <!-- 测试 plain 属性 -->
    <div class="row">
      <PxButton plain>普通按钮</PxButton>
      <PxButton plain type="primary">primary按钮</PxButton>
      <PxButton plain type="success">success按钮</PxButton>
      <PxButton plain type="info">info按钮</PxButton>
      <PxButton plain type="danger">danger按钮</PxButton>
      <PxButton plain type="warning">warning按钮</PxButton>
    </div>
    <!-- 测试 round 属性 -->
    <div class="row">
      <PxButton round>按钮</PxButton>
      <PxButton round type="primary">primary按钮</PxButton>
      <PxButton round type="success">success按钮</PxButton>
      <PxButton plain round type="info">info按钮</PxButton>
      <PxButton plain round type="danger">danger按钮</PxButton>
      <PxButton plain round type="warning">warning按钮</PxButton>
    </div>
    <!-- 测试 diabled 属性 -->
    <div class="row">
      <PxButton disabled>按钮</PxButton>
      <PxButton disabled type="primary">primary按钮</PxButton>
      <PxButton disabled type="success">success按钮</PxButton>
      <PxButton disabled round type="info">info按钮</PxButton>
      <PxButton disabled round type="danger">danger按钮</PxButton>
      <PxButton disabled round type="warning">warning按钮</PxButton>
    </div>
    <!-- 测试 circle 属性 -->
    <div class="row">
      <PxButton round circle>好</PxButton>
      <PxButton round circle type="primary">好</PxButton>
      <PxButton round circle type="success">学</PxButton>
      <PxButton plain round circle type="info">习</PxButton>
      <PxButton plain round circle type="danger">前</PxButton>
      <PxButton plain round circle type="warning">端</PxButton>
    </div>
    <!-- 测试图标 -->
    <div class="row">
      <PxButton icon="milk-tea"></PxButton>
      <PxButton type="primary" icon="camera">照相机</PxButton>
      <PxButton type="success" icon="wind-power" circle></PxButton>
      <PxButton type="info" icon="orange"></PxButton>
      <PxButton type="danger" icon="goblet"></PxButton>
      <PxButton type="warning" icon="cloudy"></PxButton>
      <PxButton type="info" plain icon="milk-tea">奶茶</PxButton>
    </div>
    <!-- 测试事件 -->
    <div class="row">
      <PxButton type="primary" plain @click="handleClick('pxelement')">click</PxButton>
    </div>
  </div>
</template>

<script setup lang="ts">
// import { PxButton } from '../../../packages/px-element/es/pxelement.mjs';
// console.log('组件样式', PxButton)

const handleClick = (parms: string) => {
  console.log(parms)
}
</script>

<style scoped>
.row {
  padding: 20px;
}
</style>
