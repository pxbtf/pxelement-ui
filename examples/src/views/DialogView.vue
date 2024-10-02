<template>
  <div>
    <div class="row">
      <px-Dialog v-model:visible="visible1" @close="() => (visible1 = false)">
        这是一个基本的对话框
      </px-Dialog>
    </div>
    <!-- <div class="row">
            <px-Dialog v-model:visible="visible2" title="温馨提示" width="30vw" top="40vh"
                @close="() => (visible2 = false)">
                传递了 title、width、top 这三个 prop
            </px-Dialog>
        </div> -->
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
const visible1 = ref(true)
</script>

<style scoped></style>
