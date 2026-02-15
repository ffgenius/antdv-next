<docs lang="zh-CN">
使用 `Modal.destroyAll()` 可以销毁弹出的确认窗。通常用于路由监听当中，处理路由前进、后退不能销毁确认对话框的问题。
</docs>

<docs lang="en-US">
`Modal.destroyAll()` will destroy all confirmation modal dialogs. Usually, you can use it in router change event to destroy confirm modal dialog automatically.
</docs>

<script setup lang="ts">
import { ExclamationCircleOutlined } from '@antdv-next/icons'
import { Button, Modal } from 'antdv-next'
import { h } from 'vue'

const confirm = Modal.confirm

function destroyAll() {
  Modal.destroyAll()
}

function showConfirm() {
  for (let i = 0; i < 3; i += 1) {
    setTimeout(() => {
      confirm({
        icon: h(ExclamationCircleOutlined),
        content: h(Button, {
          onClick: destroyAll,
        }, {
          default: () => 'Click to destroy All',
        }),
        onOk() {
          console.log('OK')
        },
        onCancel() {
          console.log('Cancel')
        },
      })
    }, i * 500)
  }
}
</script>

<template>
  <a-button @click="showConfirm">
    Confirm
  </a-button>
</template>
