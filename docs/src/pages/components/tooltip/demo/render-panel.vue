<docs lang="zh-CN">
调试用组件，请勿直接使用。
</docs>

<docs lang="en-US">
Debug usage. Do not use in your production.
</docs>

<script setup lang="ts">
import { Tooltip } from 'antdv-next'

const InternalTooltip = Tooltip._InternalPanelDoNotUseOrYouWillBeFired
</script>

<template>
  <InternalTooltip title="Hello, Pink Pure Panel!" color="pink" />
  <InternalTooltip title="Hello, Customize Color Pure Panel!" color="#f50" />
  <InternalTooltip title="Hello, Pure Panel!" placement="bottomLeft" :style="{ width: '200px' }" />
</template>
