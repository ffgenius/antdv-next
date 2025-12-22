<docs lang="zh-CN">
自适应内容高度。
</docs>

<docs lang="en-US">
Height autoSize.
</docs>

<script setup lang="ts">
import type { MentionsProps } from 'antdv-next'

const options: MentionsProps['options'] = [
  {
    value: 'afc163',
    label: 'afc163',
  },
  {
    value: 'zombieJ',
    label: 'zombieJ',
  },
  {
    value: 'yesmeck',
    label: 'yesmeck',
  },
]
</script>

<template>
  <a-mentions auto-size style="width: 100%" :options="options" />
</template>
