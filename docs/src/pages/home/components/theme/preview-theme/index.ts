import type { ConfigProviderProps } from 'antdv-next'
import type { ComputedRef } from 'vue'
import { theme } from 'antdv-next'
import { computed } from 'vue'
import { useLocale } from '@/composables/use-locale'
import useBootstrapTheme from './bootstrap-theme'
import useCartoonTheme from './cartoon-theme'
import useGeekTheme from './geek-theme'
import useGlassTheme from './glass-theme'
import useIllustrationTheme from './illustration-theme'
import useMuiTheme from './mui-theme'
import useShadcnTheme from './shadcn-theme'

export interface PreviewThemeConfig {
  name: string
  key?: string
  props?: ConfigProviderProps
  bgImg?: string
  bgImgDark?: true
  dark?: boolean
}

export type UseTheme = () => ComputedRef<ConfigProviderProps>

export function usePreviewThemes() {
  const { t } = useLocale()

  const cartoonTheme = useCartoonTheme()
  const illustrationTheme = useIllustrationTheme()
  const geekTheme = useGeekTheme()
  const glassTheme = useGlassTheme()
  const muiTheme = useMuiTheme()
  const shadcnTheme = useShadcnTheme()
  const bootstrapTheme = useBootstrapTheme()

  return computed<PreviewThemeConfig[]>(() => [
    {
      name: t('homePage.previewThemes.default'),
      key: 'light',
      bgImg:
        'https://mdn.alipayobjects.com/huamei_iwk9zp/afts/img/A*T8IlRaNez08AAAAARwAAAAgAegCCAQ/original',
      props: {
        theme: {
          algorithm: theme.defaultAlgorithm,
        },
      },
    },
    {
      name: t('homePage.previewThemes.dark'),
      key: 'dark',
      dark: true,
      bgImg:
        'https://mdn.alipayobjects.com/huamei_iwk9zp/afts/img/A*ETkNSJ-oUGwAAAAAQ_AAAAgAegCCAQ/original',
      bgImgDark: true,
      props: {
        theme: {
          algorithm: theme.darkAlgorithm,
        },
      },
    },
    {
      name: t('homePage.previewThemes.mui'),
      bgImg:
        'https://mdn.alipayobjects.com/huamei_iwk9zp/afts/img/A*IFkZRpIKEEkAAAAAQzAAAAgAegCCAQ/original',
      props: muiTheme.value,
    },
    {
      name: t('homePage.previewThemes.shadcn'),
      bgImg:
        'https://mdn.alipayobjects.com/huamei_iwk9zp/afts/img/A*56tPQbwgFyEAAAAARuAAAAgAegCCAQ/original',
      props: shadcnTheme.value,
    },
    {
      name: t('homePage.previewThemes.cartoon'),
      bgImg:
        'https://mdn.alipayobjects.com/huamei_iwk9zp/afts/img/A*tgpBT7vYIUsAAAAAQ-AAAAgAegCCAQ/original',
      props: cartoonTheme.value,
    },
    {
      name: t('homePage.previewThemes.illustration'),
      bgImg:
        'https://mdn.alipayobjects.com/huamei_iwk9zp/afts/img/A*HuVGQKqOER0AAAAARsAAAAgAegCCAQ/original',
      props: illustrationTheme.value,
    },
    {
      name: t('homePage.previewThemes.bootstrap'),
      bgImg:
        'https://mdn.alipayobjects.com/huamei_iwk9zp/afts/img/A*ZrLfQIO34x4AAAAAS4AAAAgAegCCAQ/original',
      props: bootstrapTheme.value,
    },
    {
      name: t('homePage.previewThemes.glass'),
      bgImg:
        'https://mdn.alipayobjects.com/huamei_iwk9zp/afts/img/A*PbKXQLie7OAAAAAARTAAAAgAegCCAQ/original',
      bgImgDark: true,
      props: glassTheme.value,
    },
    {
      name: t('homePage.previewThemes.geek'),
      bgImg:
        'https://mdn.alipayobjects.com/huamei_iwk9zp/afts/img/A*fzA2T4ms154AAAAARtAAAAgAegCCAQ/original',
      bgImgDark: true,
      props: geekTheme.value,
    },
  ])
}

export default usePreviewThemes
