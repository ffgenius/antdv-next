<docs lang="zh-CN">
页面顶部通告形式，默认有图标且 `type` 为 'warning'。
</docs>

<docs lang="en-US">
Display Alert as a banner at top of page.
</docs>

<template>
  <a-alert title="Warning text" banner />
  <br>
  <a-alert
    title="Very long warning text warning text text text text text text text"
    banner
    closable
  />
  <br>
  <a-alert :show-icon="false" title="Warning text without icon" banner />
  <br>
  <a-alert type="error" title="Error text" banner />
</template>
