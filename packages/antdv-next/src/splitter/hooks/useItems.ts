import type { Ref } from 'vue'
import type { PanelProps } from '../interface'
import { computed, isVNode, shallowRef, watch } from 'vue'

export type ItemType = Omit<PanelProps, 'collapsible'> & {
  collapsible: {
    start?: boolean
    end?: boolean
    showCollapsibleIcon: 'auto' | boolean
  }
}

function getCollapsible(collapsible?: PanelProps['collapsible']): ItemType['collapsible'] {
  if (collapsible && typeof collapsible === 'object') {
    return {
      ...collapsible,
      showCollapsibleIcon: collapsible.showCollapsibleIcon === undefined ? 'auto' : collapsible.showCollapsibleIcon,
    }
  }

  const mergedCollapsible = !!collapsible
  return {
    start: mergedCollapsible,
    end: mergedCollapsible,
    showCollapsibleIcon: 'auto',
  }
}

/**
 * Convert `children` into `items`.
 */
function useItems(children: Ref<any[]>): Ref<ItemType[]> {
  const items = shallowRef<ItemType[]>([])

  /**
   * perf Watch children change and update items
   */
  watch(
    children,
    () => {
      const newItems = children.value?.filter(item => isVNode(item)).map((node) => {
        const { props } = node
        const { collapsible, ...restProps } = props as PanelProps
        return {
          ...restProps,
          collapsible: getCollapsible(collapsible),
        } as ItemType
      }) || []
      // 对比一下两个是否相等，避免不必要的更新
      if (newItems.length === items.value.length) {
        let isSame = true
        for (let i = 0; i < newItems.length; i++) {
          const newItem = newItems[i]
          const oldItem = items.value[i]
          if (JSON.stringify(newItem) !== JSON.stringify(oldItem)) {
            isSame = false
            break
          }
        }
        if (!isSame) {
          items.value = newItems
        }
      }
      else {
        items.value = newItems
      }
    },
  )

  return computed(() => items.value)
}

export default useItems
