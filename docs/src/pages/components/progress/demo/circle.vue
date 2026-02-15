<docs lang="zh-CN">
圈形的进度。
</docs>

<docs lang="en-US">
A circular progress bar.
</docs>

<template>
  <a-flex gap="small" wrap>
    <a-progress type="circle" :percent="75" />
    <a-progress type="circle" :percent="70" status="exception" />
    <a-progress type="circle" :percent="100" />
  </a-flex>
</template>
