<docs lang="zh-CN">
输入格式对齐，通过键盘左右切换焦点。失去焦点时会尝试对齐到最后合法的日期。
</docs>

<docs lang="en-US">
Align the date format. Switch the selection by arrow keys. Will try to align the date to the last valid date when blur.
</docs>

<script setup lang="ts">
function handleChange(date: any, dateString: string | string[]) {
  console.log(date, dateString)
}
</script>

<template>
  <a-space vertical>
    <a-date-picker
      :format="{ format: 'YYYY-MM-DD', type: 'mask' }"
      @change="handleChange"
    />
    <a-date-picker
      :format="{ format: 'YYYY-MM-DD HH:mm:ss', type: 'mask' }"
      @change="handleChange"
    />
  </a-space>
</template>
