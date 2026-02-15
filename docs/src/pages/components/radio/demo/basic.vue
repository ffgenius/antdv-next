<docs lang="zh-CN">
最简单的用法。
</docs>

<docs lang="en-US">
The simplest use.
</docs>

<script setup lang="ts">
import { shallowRef } from 'vue'

const val = shallowRef()
</script>

<template>
  <a-radio v-model:checked="val">
    Radio
  </a-radio>
</template>
