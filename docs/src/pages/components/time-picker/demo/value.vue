<docs lang="zh-CN">
value 和 onChange 需要配合使用。
</docs>

<docs lang="en-US">
`value` and `onChange` should be used together,
</docs>

<script setup lang="ts">
import type { Dayjs } from 'dayjs'
import { shallowRef } from 'vue'

const value = shallowRef<Dayjs>()
</script>

<template>
  <a-time-picker v-model:value="value" />
</template>
