<docs lang="zh-CN">
调试用组件，请勿直接使用。
</docs>

<docs lang="en-US">
Debug usage. Do not use in your production.
</docs>

<script setup lang="ts">
import { TimePicker } from 'antdv-next'

const InternalTimePicker = TimePicker._InternalPanelDoNotUseOrYouWillBeFired
</script>

<template>
  <InternalTimePicker />
</template>
