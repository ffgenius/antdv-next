<docs lang="zh-CN">
通过设置 `color` 自定义二维码颜色，通过设置 `bgColor` 自定义背景颜色。
</docs>

<docs lang="en-US">
Custom Color.
</docs>

<script setup lang="ts">
import { theme } from 'antdv-next'

const { useToken } = theme
const { token } = useToken()
</script>

<template>
  <a-space>
    <a-qrcode value="https://www.antdv-next.com" :color="token.colorSuccessText" />
    <a-qrcode value="https://www.antdv-next.com" :color="token.colorInfoText" :bg-color="token.colorBgLayout" />
  </a-space>
</template>
