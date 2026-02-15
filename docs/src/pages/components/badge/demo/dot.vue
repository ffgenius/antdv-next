<docs lang="zh-CN">
没有具体的数字。
</docs>

<docs lang="en-US">
This will simply display a red badge, without a specific count. If count equals 0, it won't display the dot.
</docs>

<script setup lang="ts">
import { NotificationOutlined } from '@antdv-next/icons'
</script>

<template>
  <a-space>
    <a-badge dot>
      <NotificationOutlined style="font-size: 16px" />
    </a-badge>
    <a-badge dot>
      <a href="#">Link something</a>
    </a-badge>
  </a-space>
</template>
