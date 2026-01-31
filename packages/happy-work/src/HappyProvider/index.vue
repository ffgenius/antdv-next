<script setup lang="ts">
import type { GlobalToken } from 'antdv-next'
import { computed, createApp, h, provide } from 'vue'
import DotEffect from '../DotEffect/index.vue'

export interface HappyProviderProps {
  /**
   * Enable happy mode
   * @default false
   */
  enabled?: boolean
}

const props = withDefaults(defineProps<HappyProviderProps>(), {
  enabled: false,
})

const HAPPY_MODE_KEY = Symbol('HAPPY_MODE')
provide(HAPPY_MODE_KEY, () => props.enabled)

function showEffect(
  target: HTMLElement,
  info: {
    className: string
    token: GlobalToken
    component?: string
    event: MouseEvent
    hashId: string
  },
) {
  const { token, hashId } = info

  const holder = document.createElement('div')
  holder.style.position = 'absolute'
  holder.style.left = '0px'
  holder.style.top = '0px'
  document.body.appendChild(holder)

  const app = createApp({
    render() {
      return h(DotEffect, {
        target,
        token,
        hashId,
        onFinish: () => {
          app.unmount()
          holder.remove()
        },
      })
    },
  })

  app.mount(holder)
}

const wave = computed(() => {
  return props.enabled ? { showEffect } : undefined
})

defineExpose({
  showEffect,
  wave,
})
</script>

<template>
  <slot :wave="wave" />
</template>
