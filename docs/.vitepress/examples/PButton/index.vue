<template>
    <div>
        <!-- 测试按钮组件 -->
        <div class="row">
            <px-button>普通按钮</px-button>
            <px-button type="primary">primary按钮</px-button>
            <px-button type="success">success按钮</px-button>
            <px-button type="info">info按钮</px-button>
            <px-button type="danger">danger按钮</px-button>
            <px-button type="warning">warning按钮</px-button>
        </div>
        <!-- 测试 plain 属性 -->
        <div class="row">
            <px-button plain>普通按钮</px-button>
            <px-button plain type="primary">primary按钮</px-button>
            <px-button plain type="success">success按钮</px-button>
            <px-button plain type="info">info按钮</px-button>
            <px-button plain type="danger">danger按钮</px-button>
            <px-button plain type="warning">warning按钮</px-button>
        </div>
        <!-- 测试 round 属性 -->
        <div class="row">
            <px-button round>按钮</px-button>
            <px-button round type="primary">primary按钮</px-button>
            <px-button round type="success">success按钮</px-button>
            <px-button plain round type="info">info按钮</px-button>
            <px-button plain round type="danger">danger按钮</px-button>
            <px-button plain round type="warning">warning按钮</px-button>
        </div>
        <!-- 测试 diabled 属性 -->
        <div class="row">
            <px-button disabled>按钮</px-button>
            <px-button disabled type="primary">primary按钮</px-button>
            <px-button disabled type="success">success按钮</px-button>
            <px-button disabled round type="info">info按钮</px-button>
            <px-button disabled round type="danger">danger按钮</px-button>
            <px-button disabled round type="warning">warning按钮</px-button>
        </div>
        <!-- 测试 circle 属性 -->
        <div class="row">
            <px-button round circle>好</px-button>
            <px-button round circle type="primary">好</px-button>
            <px-button round circle type="success">学</px-button>
            <px-button plain round circle type="info">习</px-button>
            <px-button plain round circle type="danger">前</px-button>
            <px-button plain round circle type="warning">端</px-button>
        </div>
        <!-- 测试图标 -->
        <div class="row">
            <px-button icon="milk-tea"></px-button>
            <px-button type="primary" icon="camera">照相机</px-button>
            <px-button type="success" icon="wind-power" circle></px-button>
            <px-button type="info" icon="orange"></px-button>
            <px-button type="danger" icon="goblet"></px-button>
            <px-button type="warning" icon="cloudy"></px-button>
            <px-button type="info" plain icon="milk-tea">奶茶</px-button>
        </div>
        <!-- 测试事件 -->
        <div class="row">
            <px-button type="primary" plain @click="handleClick('pxElement')">click</px-button>
        </div>
    </div>
</template>

<script setup lang="ts">
const handleClick = (parms:string)=>{
    console.log(parms);
}
</script>

<style scoped>
.row{
    padding: 20px;
}
</style>