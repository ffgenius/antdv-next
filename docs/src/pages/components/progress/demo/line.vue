<docs lang="zh-CN">
标准的进度条。
</docs>

<docs lang="en-US">
A standard progress bar.
</docs>

<template>
  <a-flex gap="small" vertical>
    <a-progress :percent="30" />
    <a-progress :percent="50" status="active" />
    <a-progress :percent="70" status="exception" />
    <a-progress :percent="100" />
    <a-progress :percent="50" :show-info="false" />
  </a-flex>
</template>
