import type { InjectionKey } from 'vue'
import { inject } from 'vue'

export const HAPPY_MODE_KEY: InjectionKey<() => boolean> = Symbol('HAPPY_MODE')

/**
 * Use happy mode state from HappyProvider
 * @returns A function that returns the current happy mode state
 */
export function useHappyMode() {
  const getHappyMode = inject(HAPPY_MODE_KEY, () => false)
  return getHappyMode
}
