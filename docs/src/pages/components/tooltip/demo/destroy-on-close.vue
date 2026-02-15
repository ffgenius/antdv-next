<docs lang="zh-CN">
通过 `destroyOnHidden` 控制提示关闭时是否销毁 dom 节点。
</docs>

<docs lang="en-US">
Setting `destroyOnHidden` to control whether destroy dom node of tooltip when hidden.
</docs>

<template>
  <a-tooltip destroy-on-hidden title="prompt text">
    <span>Dom will destroyed when Tooltip close</span>
  </a-tooltip>
</template>
