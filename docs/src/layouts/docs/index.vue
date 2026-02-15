<script setup lang="ts">
import type { Frontmatter } from '@/composables/doc-page.ts'
import { shallowRef } from 'vue'
import DocHeading from '@/components/docs/heading.vue'
import Main from '../base/main.vue'

const docRef = shallowRef<{
  frontmatter?: Frontmatter
}>()

function setDocRef(el: any) {
  docRef.value = el
}
</script>

<template>
  <Main>
    <router-view v-slot="{ Component }">
      <DocHeading :frontmatter="docRef?.frontmatter" />
      <Suspense>
        <component :is="Component" :ref="setDocRef" />
        <template #fallback>
          <a-skeleton :paragraph="{ rows: 5 }" active />
        </template>
      </Suspense>
    </router-view>
  </Main>
  <a-float-back-top />
</template>
