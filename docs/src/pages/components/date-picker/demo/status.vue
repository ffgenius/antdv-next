<docs lang="zh-CN">
使用 `status` 为 DatePicker 添加状态，可选 `error` 或者 `warning`。
</docs>

<docs lang="en-US">
Add status to DatePicker with `status`, which could be `error` or `warning`.
</docs>

<template>
  <a-space vertical style="width: 100%;">
    <a-date-picker status="error" style="width: 100%;" />
    <a-date-picker status="warning" style="width: 100%;" />
    <a-range-picker status="error" style="width: 100%;" />
    <a-range-picker status="warning" style="width: 100%;" />
  </a-space>
</template>
