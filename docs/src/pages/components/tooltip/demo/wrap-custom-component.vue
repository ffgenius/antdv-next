<docs lang="zh-CN">
与自定义组件一起使用.
</docs>

<docs lang="en-US">
Use with a custom component.
</docs>

<script setup lang="ts">
import { defineComponent, h } from 'vue'

const ComponentWithEvents = defineComponent({
  name: 'ComponentWithEvents',
  inheritAttrs: false,
  setup(_, { attrs }) {
    return () => h('span', { ...attrs }, 'This text is inside a component with the necessary events exposed.')
  },
})
</script>

<template>
  <a-tooltip title="prompt text">
    <ComponentWithEvents />
  </a-tooltip>
</template>
