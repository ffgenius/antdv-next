<docs lang="zh-CN">
设置为禁用状态。
</docs>

<docs lang="en-US">
Set to disabled state.
</docs>

<script setup lang="ts">
import { shallowRef } from 'vue'

const color = shallowRef('#1677ff')
</script>

<template>
  <a-color-picker v-model:value="color" show-text disabled />
</template>
