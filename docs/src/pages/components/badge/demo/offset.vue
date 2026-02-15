<docs lang="zh-CN">
设置状态点的位置偏移，格式为 `[left, top]`，表示状态点距默认位置左侧、上方的偏移量。
</docs>

<docs lang="en-US">
Set offset of the badge dot, the format is `[left, top]`, which represents the offset of the status dot from the left and top of the default position.
</docs>

<script setup lang="ts">
</script>

<template>
  <a-badge :count="5" :offset="[10, 10]">
    <a-avatar shape="square" size="large" />
  </a-badge>
</template>
