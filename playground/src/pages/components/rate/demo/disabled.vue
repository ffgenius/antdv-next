<docs lang="zh-CN">
只读，无法进行鼠标交互。
</docs>

<docs lang="en-US">
Read only, can't use mouse to interact.
</docs>

<script setup lang="ts">
import { ref } from 'vue'

const value = ref(2)
</script>

<template>
  <a-rate v-model:value="value" disabled />
</template>
