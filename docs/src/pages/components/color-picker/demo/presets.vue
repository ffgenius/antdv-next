<docs lang="zh-CN">
设置颜色选择器的预设颜色。
</docs>

<docs lang="en-US">
Set the presets color of the color picker.
</docs>

<script setup lang="ts">
import { generate, green, presetPalettes, red } from '@ant-design/colors'
import { theme } from 'antdv-next'
import { computed, shallowRef } from 'vue'

const { useToken } = theme
const { token } = useToken()

const color = shallowRef('#1677ff')

function genPresets(presets = presetPalettes) {
  return Object.entries(presets).map(([label, colors]) => ({
    label,
    colors,
    key: label,
  }))
}

const presets = computed(() => genPresets({
  primary: generate(token.value.colorPrimary),
  red,
  green,
}) as any[])
</script>

<template>
  <a-color-picker v-model:value="color" :presets="presets" />
</template>
