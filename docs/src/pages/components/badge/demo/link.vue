<docs lang="zh-CN">
用 a 标签进行包裹即可。
</docs>

<docs lang="en-US">
The badge can be wrapped with `a` tag to make it linkable.
</docs>

<script setup lang="ts">
</script>

<template>
  <a href="#">
    <a-badge :count="5">
      <a-avatar shape="square" size="large" />
    </a-badge>
  </a>
</template>
