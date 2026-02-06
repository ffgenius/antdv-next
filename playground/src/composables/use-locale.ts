import type { LocaleMessages } from '@/locales'
import { computed } from 'vue'
import { localeStore } from '@/composables/local-store'
import locales from '@/locales'

/**
 * Generic locale composable that provides reactive access to all translations
 * @returns Reactive locale messages object for the current language and a t function
 */
export function useLocale() {
  const messages = computed<LocaleMessages>(() => {
    const currentLocale = localeStore.value
    return locales[currentLocale] || locales['zh-CN']
  })

  /**
   * Get a nested value from locale messages using dot notation
   * @param path - The path to the locale message (e.g., 'iconSearch.themes.outlined')
   * @returns The locale message value
   */
  function t(path: string): string {
    const keys = path.split('.')
    let value: any = messages.value

    for (const key of keys) {
      if (value && typeof value === 'object' && key in value) {
        value = value[key]
      }
      else {
        return path
      }
    }

    return typeof value === 'string' ? value : path
  }

  return { messages, t }
}

/**
 * Get a specific namespace from the locale
 * @param namespace - The namespace to access (e.g., 'themeBtn', 'home', 'codeDemo')
 * @returns Reactive locale messages for the specified namespace
 */
export function useLocaleNamespace<K extends keyof LocaleMessages>(namespace: K) {
  return computed(() => {
    const currentLocale = localeStore.value
    const localeData = locales[currentLocale] || locales['zh-CN']
    return localeData[namespace]
  })
}

export function useSemanticLocale(locales: Record<'cn' | 'en', Record<string, any>>) {
  return computed(() => {
    const currentLocale = localeStore.value
    const lang = currentLocale.startsWith('zh') ? 'cn' : 'en'
    return locales[lang]
  })
}
