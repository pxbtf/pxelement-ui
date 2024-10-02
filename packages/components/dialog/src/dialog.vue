<template>
  <transition name="dialog-fade">
    <!-- 控制对话框是否显示，根据外部所传递的 visible 这个 prop -->
    <div v-show="visible" class="pxui-dialog_wrapper">
      <!-- 控制对话框的宽度以及上面的距离 -->
      <div class="pxui-dialog" :style="{ width: width, marginTop: top }">
        <!-- 头部 -->
        <div class="pxui-dialog_header">
          <slot name="title">
            <span class="pxui-dialog_title">{{ title }}</span>
          </slot>
          <!-- 关闭按钮 -->
          <button class="pxui-dialog_headerbtn" @click="clickHandle">
            <i class="pxui-icon-close" />
          </button>
        </div>
        <!-- 中间内容部分 -->
        <div class="pxui-dialog_body">
          <slot />
        </div>
        <!-- 底部部分 -->
        <div class="pxui-dialog_footer">
          <slot v-if="$slots.footer" name="footer" />
        </div>
      </div>
    </div>
  </transition>
</template>

<script setup lang="ts">
import dialogProps from "./dialog";
defineOptions({
  name: "PxDialog",
});
defineProps(dialogProps);
const emits = defineEmits(["close"]);

const clickHandle = function () {
  emits("close");
};
</script>

<style scoped></style>
