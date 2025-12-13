import type { SlotsType } from 'vue'
import type { ModalEmits, ModalProps, ModalSlots } from './interface.ts'
import type { VueNode } from '../_util/type.ts'
import { CloseOutlined } from '@antdv-next/icons'
import { computed, defineComponent } from 'vue'
import { DisabledContextProvider } from '../config-provider/DisabledContext.tsx'
import useLocale from '../locale/useLocale.ts'
import { getSlotPropsFnRun } from '../_util/tools.ts'
import { useModalProvider } from './context.ts'
import { getConfirmLocale } from './locale.ts'
import NormalCancelBtn from './components/NormalCancelBtn.tsx'
import NormalOkBtn from './components/NormalOkBtn.tsx'

export function renderCloseIcon(prefixCls: string, closeIcon?: VueNode) {
  closeIcon = getSlotPropsFnRun({}, { closeIcon }, 'closeIcon')

  return (
    <span class={`${prefixCls}-close-x`}>
      {closeIcon || <CloseOutlined class={`${prefixCls}-close-icon`} />}
    </span>
  )
}

export interface FooterProps
  extends Pick<
    ModalProps,
    'footer' | 'okText' | 'okType' | 'cancelText' | 'confirmLoading' | 'okButtonProps' | 'cancelButtonProps'
  > {
  onOk?: ModalEmits['ok']
  onCancel?: ModalEmits['cancel']
}

export const Footer = defineComponent<
  FooterProps,
  {},
  string,
  SlotsType<Pick<ModalSlots, 'footer' | 'okText' | 'cancelText'>>
>(
  (props, { slots }) => {
    const [locale] = useLocale('Modal', getConfirmLocale())

    const okTextLocale = computed(() => {
      return getSlotPropsFnRun(slots, props, 'okText') ?? props.okText ?? locale.value?.okText
    })
    const cancelTextLocale = computed(() => {
      return getSlotPropsFnRun(slots, props, 'cancelText') ?? props.cancelText ?? locale.value?.cancelText
    })

    const memoizedValue = computed(() => ({
      confirmLoading: props.confirmLoading,
      okButtonProps: props.okButtonProps,
      cancelButtonProps: props.cancelButtonProps,
      okTextLocale: okTextLocale.value,
      cancelTextLocale: cancelTextLocale.value,
      okType: props.okType ?? 'primary',
      onOk: props.onOk,
      onCancel: props.onCancel,
    }))

    useModalProvider(memoizedValue as any)

    return () => {
      const defaultFooter = (
        <>
          <NormalCancelBtn />
          <NormalOkBtn />
        </>
      )

      let footerNode = getSlotPropsFnRun(slots, props, 'footer', true, {
        originNode: defaultFooter,
        extra: { OkBtn: NormalOkBtn, CancelBtn: NormalCancelBtn },
      })
      if (footerNode === undefined) {
        footerNode = defaultFooter
      }

      return (
        <DisabledContextProvider disabled={false}>
          {footerNode}
        </DisabledContextProvider>
      )
    }
  },
  {
    name: 'ModalFooter',
    inheritAttrs: false,
  },
)
