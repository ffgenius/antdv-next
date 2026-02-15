<docs lang="zh-CN">
禁用颜色透明度。
</docs>

<docs lang="en-US">
Disabled color alpha.
</docs>

<script setup lang="ts">
import { shallowRef } from 'vue'

const color = shallowRef('#1677ff')
</script>

<template>
  <a-color-picker v-model:value="color" disabled-alpha />
</template>
