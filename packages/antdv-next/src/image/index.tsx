import type { ImageProps as VcImageProps } from '@v-c/image'
import type { App, CSSProperties } from 'vue'
import type {
  MaskType,
  SemanticClassNames,
  SemanticClassNamesType,
  SemanticStyles,
  SemanticStylesType,
} from '../_util/hooks'
import type { VueNode } from '../_util/type.ts'
import { defineComponent } from 'vue'
import PreviewGroup from './PreviewGroup'

type OriginPreviewConfig = NonNullable<Exclude<VcImageProps['preview'], boolean>>

export interface DeprecatedPreviewConfig {
  /** @deprecated Use `open` instead */
  visible?: boolean
  /** @deprecated Use `classNames.root` instead */
  rootClass?: string
  /**
   * @deprecated This has been removed.
   * Preview will always be rendered after show.
   */
  forceRender?: boolean
  /**
   * @deprecated This has been removed.
   * Preview will always be rendered after show.
   */
  destroyOnClose?: boolean
  /** @deprecated Use `actionsRender` instead */
  toolbarRender?: OriginPreviewConfig['actionsRender']
}

export type ImageSemanticName = 'root' | 'image' | 'cover'

export type PopupSemantic = 'root' | 'mask' | 'body' | 'footer' | 'actions'

export type ImageClassNamesType = SemanticClassNamesType<
  ImageProps,
  ImageSemanticName,
  { popup?: SemanticClassNames<PopupSemantic> }
>

export type ImageStylesType = SemanticStylesType<
  ImageProps,
  ImageSemanticName,
  { popup?: SemanticStyles<PopupSemantic> }
>

export type PreviewConfig = OriginPreviewConfig
  & DeprecatedPreviewConfig & {
    /** @deprecated Use `onOpenChange` instead */
    onVisibleChange?: (visible: boolean, prevVisible: boolean) => void
    /** @deprecated Use `classNames.cover` instead */
    maskClassName?: string
    mask?: MaskType | VueNode
  }
export interface ImageProps extends Omit<VcImageProps, 'preview' | 'classNames' | 'styles'> {
  preview?: boolean | PreviewConfig
  /** @deprecated Use `styles.root` instead */
  wrapperStyle?: CSSProperties
  classes?: ImageClassNamesType
  styles?: ImageStylesType
}

const Image = defineComponent<ImageProps>(
  (props, { slots, expose, emit, attrs }) => {
    return () => {
      return null
    }
  },
  {
    name: 'AImage',
    inheritAttrs: false,
  },
)

;(Image as any).install = (app: App) => {
  app.component(Image.name, Image)
  app.component(PreviewGroup.name, PreviewGroup)
}

;(Image as any).PreviewGroup = PreviewGroup

export default Image as typeof Image & {
  PreviewGroup: typeof PreviewGroup
}
