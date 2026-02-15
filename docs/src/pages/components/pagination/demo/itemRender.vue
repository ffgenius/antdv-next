<docs lang="zh-CN">
修改上一步和下一步为文字链接。
</docs>

<docs lang="en-US">
Use text link for prev and next button.
</docs>

<script setup lang="ts">
import type { PaginationProps } from 'antdv-next'
import { h } from 'vue'

const itemRender: PaginationProps['itemRender'] = (_, type, originalElement) => {
  if (type === 'prev') {
    return h('a', 'Previous')
  }
  if (type === 'next') {
    return h('a', 'Next')
  }
  return originalElement
}
</script>

<template>
  <a-pagination :total="500" :item-render="itemRender" />
</template>
