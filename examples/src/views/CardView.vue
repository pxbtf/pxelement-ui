<template>
  <div>
    <px-card
      width="250"
      imgSrc="../assets/1.jpg"
      summary="前端主流布局系统进阶与实战，轻松解决页面布局难题"
      imgHeight="100"
    >
      <template #footer>
        <div class="footer">
          <div class="level">中级 · 5225人报名</div>
          <div class="price">￥399.00</div>
        </div>
      </template>
    </px-card>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped>
.footer {
  padding: 0 8px;
  font-size: 12px;
  text-align: left;
}
.level {
  color: #9199a1;
  margin-bottom: 8px;
}
.price {
  color: #f01414;
}
</style>
