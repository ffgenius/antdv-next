<docs lang="zh-CN">
点击添加节点，拖出或者按键删除节点。
</docs>

<docs lang="en-US">
Click to add a node, drag out or press the key to delete the node.
</docs>

<script setup lang="ts">
import { ref } from 'vue'

const value = ref([20, 80])
</script>

<template>
  <a-slider
    v-model:value="value"
    :range="{ editable: true, minCount: 1, maxCount: 5 }"
  />
</template>
