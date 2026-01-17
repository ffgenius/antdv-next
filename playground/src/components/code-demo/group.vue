<script setup lang="ts">
import type { VNode } from 'vue'
import type { DocPage } from '@/composables/doc-page.ts'
import { computed, inject, useSlots } from 'vue'

defineOptions({
  name: 'DemoGroup',
})

const props = defineProps<{
  cols?: number // 允许外部手动覆盖列数
}>()

const slots = useSlots()
const pageInfo = inject<DocPage | null>('__pageInfo__', null)

// 配置
const gap = 8

// 从 frontmatter 或 props 获取列数配置 (默认为 1)
const colCount = computed(() => {
  if (props.cols)
    return props.cols
  return pageInfo?.frontmatter?.demo?.cols || 1
})

/**
 * 将子元素分配到多个列中
 * 采用和 React dumi DumiDemoGrid 相同的策略：
 * 按顺序将元素依次分配到每列，形成类似蛇形分布
 * 例如 cols=2，6个元素会分配为: col1=[1,3,5], col2=[2,4,6]
 */
const columns = computed(() => {
  const defaultSlot = slots.default?.()
  if (!defaultSlot)
    return []

  // 获取所有子节点，过滤掉空白节点
  const children = flattenVNodes(defaultSlot).filter((node) => {
    // 过滤掉文本节点、注释节点等
    if (typeof node === 'string' || typeof node === 'number')
      return false
    if (node.type === Comment)
      return false
    // 过滤掉空白文本
    if (node.type === Text && typeof node.children === 'string' && !node.children.trim())
      return false
    return true
  })

  const cols = colCount.value
  if (cols <= 1) {
    // 单列模式，所有元素放在一个列中
    return [children]
  }

  // 多列模式：按照 dumi 的方式分配元素
  // 元素按顺序分配到各列：0->col0, 1->col1, 2->col0, 3->col1...
  const result: VNode[][] = Array.from({ length: cols }, () => [])

  for (let i = 0; i < children.length; i += cols) {
    children.slice(i, i + cols).forEach((item, j) => {
      result[j]!.push(item as VNode)
    })
  }

  return result
})

/**
 * 展平 VNode 数组，处理 Fragment
 */
function flattenVNodes(vnodes: VNode[]): VNode[] {
  const result: VNode[] = []
  for (const node of vnodes) {
    if (node.type === Symbol.for('v-fgt') && Array.isArray(node.children)) {
      // Fragment 节点，递归展平
      result.push(...flattenVNodes(node.children as VNode[]))
    }
    else {
      result.push(node)
    }
  }
  return result
}

const containerStyle = computed(() => ({
  '--gap': `${gap}px`,
}))
</script>

<template>
  <div
    class="ant-doc-demo-group"
    :style="containerStyle"
    :class="pageInfo?.frontmatter?.demo?.class"
  >
    <section v-for="(col, index) in columns" :key="index" class="ant-doc-demo-column">
      <component :is="() => col" />
    </section>
  </div>
</template>

<style lang="less" scoped>
.ant-doc-demo-group {
  display: flex;
  margin: calc(var(--gap) * -1);
  margin-bottom: 24px;
}

.ant-doc-demo-column {
  flex: 1;
  padding: var(--gap);
  width: 0; // 配合 flex: 1 确保等宽

  :deep(> *) {
    margin-bottom: calc(var(--gap) * 2);

    &:last-child {
      margin-bottom: 0;
    }
  }
}
</style>
