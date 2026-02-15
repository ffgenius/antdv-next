<docs lang="zh-CN">
小一号的圈形进度。
</docs>

<docs lang="en-US">
A smaller circular progress bar.
</docs>

<template>
  <a-flex wrap gap="small">
    <a-progress type="circle" :percent="30" :size="80" />
    <a-progress type="circle" :percent="70" status="exception" :size="80" />
    <a-progress type="circle" :percent="100" :size="80" />
  </a-flex>
</template>
