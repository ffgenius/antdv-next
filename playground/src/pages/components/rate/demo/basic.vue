<docs lang="zh-CN">
最简单的用法。
</docs>

<docs lang="en-US">
The simplest usage.
</docs>

<script setup lang="ts">
import { ref } from 'vue'

const value = ref(0)
</script>

<template>
  <a-rate v-model:value="value" />
</template>
