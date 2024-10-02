<template>
  <!-- 卡片外层容器 -->
  <div class="pxui-card" :style="width ? { width: width + 'px' } : {}">
    <!-- 卡片图片 -->
    <div class="pxui-card-img" :style="imgHeight ? { height: imgHeight + 'px' } : {}">
      <img :src="imgSrc" alt="" />
    </div>
    <!-- 卡片描述 -->
    <div v-if="summary" class="pxui-card-summary">
      {{ summary }}
    </div>
    <div v-else class="pxui-card-summary">
      <slot></slot>
    </div>
    <div class="pxui-card-footer">
      <slot name="footer"></slot>
    </div>
  </div>
</template>

<script lang="ts" setup>
import CardProps from "./card";

defineOptions({ name: "PxCard" });
defineProps(CardProps);
</script>

<style scoped></style>
