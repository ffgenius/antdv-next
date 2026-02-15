<docs lang="zh-CN">
通过设置 `type` 自定义渲染结果，提供 `canvas` 和 `svg` 两个选项。
</docs>

<docs lang="en-US">
Customize the rendering results by `type`, provide options `canvas` and `svg`.
</docs>

<template>
  <a-space>
    <a-qrcode type="canvas" value="https://www.antdv-next.com" />
    <a-qrcode type="svg" value="https://www.antdv-next.com" />
  </a-space>
</template>
