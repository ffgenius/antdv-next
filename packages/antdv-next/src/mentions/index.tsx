import type {
  DataDrivenOptionProps as MentionsOptionProps,
  MentionsProps as VcMentionsProps,
  MentionsRef as VcMentionsRef,
} from '@v-c/metions'
import type { App, SlotsType } from 'vue'
import type { SemanticClassNamesType, SemanticStylesType } from '../_util/hooks'
import type { InputStatus } from '../_util/statusUtils'
import type { ComponentBaseProps, Variant } from '../config-provider/context'
import type { SizeType } from '../config-provider/SizeContext'
import { Option } from '@v-c/metions'
import { defineComponent } from 'vue'
import toList from '../_util/toList'

function loadingFilterOption() {
  return true
}

export {
  Option,
}

export type MentionPlacement = 'top' | 'bottom'

export interface OptionProps {
  value: string
  // children: React.ReactNode;
  [key: string]: any
}

type SemanticName = 'root' | 'textarea' | 'popup' | 'suffix'

export type MentionsClassNamesType = SemanticClassNamesType<MentionProps, SemanticName>
export type MentionsStylesType = SemanticStylesType<MentionProps, SemanticName>

export interface MentionProps extends
  Omit<VcMentionsProps, 'suffix' | 'classNames' | 'className' | 'styles' | 'onFocus' | 'onChange' | 'onBlur' | 'onSelect' | 'onPopupScroll' | 'onSearch'>,
  ComponentBaseProps {
  loading?: boolean
  status?: InputStatus
  options?: MentionsOptionProps[]
  popupClassName?: string
  /**
   * @since 5.13.0
   * @default "outlined"
   */
  variant?: Variant
  classes?: MentionsClassNamesType
  styles?: MentionsStylesType
  size?: SizeType
}

export interface MentionsEmits {
  'focus': (event: FocusEvent) => void
  'blur': (event: FocusEvent) => void
  'change': (value: string) => void
  'select': (value: string, prefix: string) => void
  'popupScroll': (event: Event) => void
  'search': (text: string, prefix: string) => void
  'update:value': (value: string) => void
  [key: string]: (...args: any[]) => void
}

export interface MentionsSlots {
  suffix?: () => any
  default?: () => any
}

export interface MentionsProps extends MentionProps {}

export interface MentionsRef extends VcMentionsRef {}

interface MentionsConfig {
  prefix?: string | string[]
  split?: string
}

interface MentionsEntity {
  prefix: string
  value: string
}

const InternalMentions = defineComponent<
  MentionProps,
  MentionsEmits,
  string,
  SlotsType<MentionsSlots>
>(
  (props, { slots, emit, expose, attrs }) => {
    return () => {
      return null
    }
  },
  {
    name: 'AMentions',
    inheritAttrs: false,
  },
)

const Mentions = InternalMentions as typeof InternalMentions & {
  Option: typeof Option
  getMentions: (value: string, config?: MentionsConfig) => MentionsEntity[]
  install: (app: App) => void
}

Mentions.install = (app: App): void => {
  app.component(Mentions.name, Mentions)
  app.component('AMentionsOption', Option)
}

Mentions.getMentions = (value = '', config: MentionsConfig = {}): MentionsEntity[] => {
  const { prefix = '@', split = ' ' } = config
  const prefixList: string[] = toList(prefix)

  return value
    .split(split)
    .map((str = ''): MentionsEntity | null => {
      let hitPrefix: string | null = null

      prefixList.some((prefixStr) => {
        const startStr = str.slice(0, prefixStr.length)
        if (startStr === prefixStr) {
          hitPrefix = prefixStr
          return true
        }
        return false
      })

      if (hitPrefix !== null) {
        return {
          prefix: hitPrefix,
          value: str.slice((hitPrefix as string).length),
        }
      }
      return null
    })
    .filter((entity): entity is MentionsEntity => !!entity && !!entity.value)
}

export default Mentions
