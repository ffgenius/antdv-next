<docs lang="zh-CN">
可以使用 `hourStep` `minuteStep` `secondStep` 按步长展示可选的时分秒。
</docs>

<docs lang="en-US">
Show stepped options by `hourStep` `minuteStep` `secondStep`.
</docs>

<script setup lang="ts">
</script>

<template>
  <a-time-picker :minute-step="15" :second-step="10" :hour-step="1" />
</template>
