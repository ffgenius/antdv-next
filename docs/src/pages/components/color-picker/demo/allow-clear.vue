<docs lang="zh-CN">
清除已选择的颜色。
</docs>

<docs lang="en-US">
Clear Color.
</docs>

<script setup lang="ts">
import type { ColorValueType } from 'antdv-next'
import { shallowRef } from 'vue'

const color = shallowRef<ColorValueType>('#1677ff')
</script>

<template>
  <a-color-picker v-model:value="color" allow-clear />
</template>
