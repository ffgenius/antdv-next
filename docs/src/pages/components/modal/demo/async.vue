<docs lang="zh-CN">
点击确定后异步关闭对话框，例如提交表单。
</docs>

<docs lang="en-US">
Asynchronously close a modal dialog when the OK button is pressed. For example, you can use this pattern when you submit a form.
</docs>

<script setup lang="ts">
import { ref } from 'vue'

const open = ref(false)
const confirmLoading = ref(false)
const modalText = ref('Content of the modal')
function showModal() {
  open.value = true
}

function handleOk() {
  modalText.value = 'The modal will be closed after two seconds'
  confirmLoading.value = true
  setTimeout(() => {
    open.value = false
    confirmLoading.value = false
  }, 2000)
}
function handleCancel() {
  console.log('Clicked cancel button')
  open.value = false
}
</script>

<template>
  <a-button type="primary" @click="showModal">
    Open Modal with async logic
  </a-button>
  <a-modal
    v-model:open="open"
    title="Title"
    :confirm-loading="confirmLoading"
    @ok="handleOk"
    @cancel="handleCancel"
  >
    <p>{{ modalText }}</p>
  </a-modal>
</template>
