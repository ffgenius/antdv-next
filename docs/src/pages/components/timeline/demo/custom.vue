<docs lang="zh-CN">
可以设置为图标或其他自定义元素。
</docs>

<docs lang="en-US">
Set a node as an icon or other custom element.
</docs>

<script setup lang="ts">
import { ClockCircleOutlined } from '@antdv-next/icons'
import { theme } from 'antdv-next'
import { h } from 'vue'

const { token } = theme.useToken()

const items = [
  {
    content: 'Create a services site 2015-09-01',
  },
  {
    content: 'Solve initial network problems 2015-09-01',
  },
  {
    icon: () => h(ClockCircleOutlined, {
      style: {
        fontSize: '20px',
        background: token.value.colorBgContainer,
      },
    }),
    color: 'red',
    content: 'Technical testing 2015-09-01',
  },
  {
    content: 'Network problems being solved 2015-09-01',
  },
]
</script>

<template>
  <a-timeline :items="items" />
</template>
