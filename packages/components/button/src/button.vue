<template>
  <button
    class="pxui-button"
    :class="[
      `pxui-button-${type}`,
      {
        'is-plain': plain,
        'is-round': round,
        'is-circle': circle,
        'is-disabled': disabled,
      },
    ]"
    :disabled="disabled"
    @click="clickHandle"
  >
    <i v-if="icon" :class="`pxui-icon-${icon}`" />
    <span v-if="$slots.default">
      <slot />
    </span>
  </button>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { buttonProps } from "./button";

export default defineComponent({
  name: "PxButton",
  props: buttonProps,
  emits: ["click"],
  setup(_, { emit }) {
    function clickHandle(e: Event) {
      emit("click", e);
    }
    return {
      clickHandle,
    };
  },
});
</script>

<style scoped></style>
