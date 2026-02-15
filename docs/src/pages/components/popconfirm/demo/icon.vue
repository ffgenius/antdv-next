<docs lang="zh-CN">
自定义提示 `icon`。
</docs>

<docs lang="en-US">
Set `icon` props to customize the icon.
</docs>

<script setup lang="ts">
import { QuestionCircleOutlined } from '@antdv-next/icons'
</script>

<template>
  <a-popconfirm
    title="Delete the task"
    description="Are you sure to delete this task?"
  >
    <template #icon>
      <QuestionCircleOutlined style="color: red" />
    </template>
    <a-button danger>
      Delete
    </a-button>
  </a-popconfirm>
</template>
