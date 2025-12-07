import type { VNode } from 'vue'
import type { PanelProps } from '../interface'
import { filterEmpty } from '@v-c/util/dist/props-util'
import { isVNode } from 'vue'

export type ItemType = Omit<PanelProps, 'collapsible'> & {
  collapsible: {
    start?: boolean
    end?: boolean
    showCollapsibleIcon: 'auto' | boolean
  }
  _$slots?: Record<string, any>
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
export function convertChildrenToItems(children: VNode[]): ItemType[] {
  return filterEmpty(children).filter(item => isVNode(item)).map((node) => {
    const { props, children } = node
    const defaultSize = props?.['default-size'] ?? props?.defaultSize
    const { collapsible, ...restProps } = (props ?? {}) as PanelProps
    return {
      ...restProps,
      defaultSize,
      collapsible: getCollapsible(collapsible),
      _$slots: children,
    } as ItemType
  })
}
