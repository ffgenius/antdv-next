<docs lang="zh-CN">
使用 `marks` 属性标注分段式滑块，使用 `value` / `defaultValue` 指定滑块位置。当 `included=false` 时，表明不同标记间为并列关系。当 `step=null` 时，Slider 的可选值仅有 `marks` 标出来的部分。
</docs>

<docs lang="en-US">
Using `marks` property to mark a graduated slider, use `value` or `defaultValue` to specify the position of thumb. When `included` is false, means that different thumbs are coordinative. when `step` is null, users can only slide the thumbs onto marks.
</docs>

<script setup lang="ts">
import { h, ref } from 'vue'

const marks = ref<Record<number, any>>({
  0: '0°C',
  26: '26°C',
  37: '37°C',
  100: {
    style: {
      color: '#f50',
    },
    label: h('strong', '100°C'),
  },
})

const value1 = ref(37)
const value2 = ref([26, 37])
const value3 = ref(37)
const value4 = ref(37)
const value5 = ref(37)
</script>

<template>
  <h4>included=true</h4>
  <a-slider v-model:value="value1" :marks="marks" />
  <a-slider v-model:value="value2" range :marks="marks" />

  <h4>included=false</h4>
  <a-slider v-model:value="value3" :marks="marks" :included="false" />

  <h4>marks & step</h4>
  <a-slider v-model:value="value4" :marks="marks" :step="10" />

  <h4>step=null</h4>
  <a-slider v-model:value="value5" :marks="marks" :step="null" />
</template>

<style scoped>
h4 {
  margin: 0 0 16px;
}

:deep(.ant-slider-with-marks) {
  margin-bottom: 44px;
}
</style>
