import type { PropType } from 'vue'
import type { CSSVarRegisterProps } from '../src/cssinjs-utils'
import { mount } from '@vue/test-utils'
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest'

import { defineComponent, h, nextTick, ref } from 'vue'
import { genStyleUtils } from '../src/cssinjs-utils'
import { mountWithStyleProvider } from './utils'

interface TestCompTokenMap {
  TestComponent: {
    color: string
    size: number
  }
}

interface AliasToken {
  _tokenKey: string
  color: string
  TestComponent: TestCompTokenMap['TestComponent']
  [key: string]: any
}

function createMockConfig() {
  const baseComponentToken: TestCompTokenMap['TestComponent'] = {
    color: 'red',
    size: 12,
  }

  const token: AliasToken = {
    _tokenKey: 'base-token',
    color: 'brand',
    TestComponent: baseComponentToken,
  }

  const realToken: AliasToken = {
    ...token,
    TestComponent: {
      color: 'green',
      size: 14,
    },
  }

  const usePrefix = vi.fn(() => ({
    rootPrefixCls: 'ant',
    iconPrefixCls: 'anticon',
  }))

  const useToken = vi.fn(() => ({
    theme: {},
    token,
    realToken,
    hashId: 'hash',
    cssVar: {
      key: 'css-var-key',
      prefix: 'css',
    },
  }))

  const getResetStyles = vi.fn(() => ({
    '.reset': {
      margin: 0,
    },
  }))

  const getCompUnitless = vi.fn(() => ({
    size: true,
  }))

  const useCSP = vi.fn(() => ({ nonce: 'nonce' }))

  const config = {
    usePrefix,
    useToken,
    getResetStyles,
    getCompUnitless,
    useCSP,
    layer: {
      name: 'test',
      dependencies: ['parent'],
    },
  }

  return {
    config,
    mocks: {
      usePrefix,
      useToken,
      getResetStyles,
      getCompUnitless,
      useCSP,
    },
  } as any
}

describe('genStyleUtils', () => {
  beforeEach(() => {
    vi.clearAllMocks()
    document.head.innerHTML = ''
  })

  afterEach(() => {
    document.head.innerHTML = ''
  })

  it('generates style hooks', async () => {
    const { config } = createMockConfig()
    const { genStyleHooks } = genStyleUtils<TestCompTokenMap, AliasToken, AliasToken>(config)

    const styleFn = vi.fn(() => ({
      '.foo': { color: 'red' },
    }))
    const getDefaultToken = vi.fn(() => ({
      color: 'red',
      size: 16,
    }))

    const useStyle = genStyleHooks('TestComponent', styleFn, getDefaultToken)
    const resultRef = ref<ReturnType<typeof useStyle> | null>(null)

    const TestComponent = defineComponent({
      name: 'TestStyleHook',
      setup() {
        resultRef.value = useStyle('test-prefix')
        return () => null
      },
    })

    const wrapper = mountWithStyleProvider(TestComponent)
    await nextTick()

    expect(resultRef.value).toBeTruthy()
    expect(resultRef.value).toHaveLength(3)
    expect(typeof resultRef.value?.[0]).toBe('function')

    expect(styleFn).toHaveBeenCalledTimes(1)

    wrapper.unmount()
  })

  it('generates sub style component', async () => {
    const { config } = createMockConfig()
    const { genSubStyleComponent } = genStyleUtils<TestCompTokenMap, AliasToken, AliasToken>(config)

    const styleFn = vi.fn(() => ({
      '.sub': { color: 'blue' },
    }))
    const getDefaultToken = vi.fn(() => ({
      color: 'blue',
      size: 10,
    }))

    const StyledComponent = genSubStyleComponent('TestComponent', styleFn, getDefaultToken)

    const wrapper = mountWithStyleProvider(() =>
      h(StyledComponent, { prefixCls: 'test-prefix', rootCls: 'test-root' }),
    )

    await nextTick()

    const styledWrapper = wrapper.findComponent(StyledComponent)
    expect(styledWrapper.exists()).toBe(true)
    expect(styledWrapper.element.nodeType).toBe(Node.COMMENT_NODE)

    wrapper.unmount()
  })

  it('generates component style hook', async () => {
    const { config, mocks } = createMockConfig()
    const { genComponentStyleHook } = genStyleUtils<TestCompTokenMap, AliasToken, AliasToken>(config)

    const styleFn = vi.fn(() => ({
      '.component': { color: 'purple' },
    }))
    const getDefaultToken = vi.fn(() => ({
      color: 'purple',
      size: 20,
    }))

    const hook = genComponentStyleHook('TestComponent', styleFn, getDefaultToken)

    const TestComponent = defineComponent({
      name: 'ComponentStyleHook',
      props: {
        prefixCls: {
          type: String,
          required: true,
        },
        rootCls: {
          type: String,
          default: undefined,
        },
      },
      setup(props) {
        const [wrapSSR] = hook(props.prefixCls, props.rootCls ?? props.prefixCls)
        return () =>
          wrapSSR(
            h('div', { 'data-testid': 'test-component' }, 'Test'),
          )
      },
    })

    const wrapper = mountWithStyleProvider(() =>
      h(TestComponent, { prefixCls: 'test-prefix', rootCls: 'test-root' }),
    )

    await nextTick()

    expect(wrapper.get('[data-testid="test-component"]').text()).toBe('Test')
    expect(styleFn).toHaveBeenCalledTimes(1)

    const [, styleInfo] = (styleFn as any).mock.calls[0]

    expect(styleInfo.hashId).toBe('hash')
    expect(styleInfo.prefixCls).toBe('test-prefix')
    expect(styleInfo.rootPrefixCls).toBe('ant')
    expect(styleInfo.iconPrefixCls).toBe('anticon')

    expect(mocks.useToken).toHaveBeenCalled()
    expect(mocks.usePrefix).toHaveBeenCalled()

    wrapper.unmount()
  })

  it('runs without getResetStyles', async () => {
    const { config } = createMockConfig()
    const { getResetStyles: _ignored, ...restConfig } = config

    const { genComponentStyleHook } = genStyleUtils<TestCompTokenMap, AliasToken, AliasToken>(restConfig)

    const styleFn = vi.fn(() => ({
      '.no-reset': { color: 'teal' },
    }))
    const hook = genComponentStyleHook('TestComponent', styleFn, () => ({
      color: 'teal',
      size: 18,
    }))

    const TestComponent = defineComponent({
      name: 'ComponentStyleHookNoReset',
      setup() {
        const [wrapSSR] = hook('test-prefix', 'test-root')
        return () => wrapSSR(h('span', 'content'))
      },
    })

    const wrapper = mountWithStyleProvider(TestComponent)
    await nextTick()

    expect(wrapper.text()).toBe('content')
    expect(styleFn).toHaveBeenCalledTimes(1)

    wrapper.unmount()
  })

  it('renders CSSVarRegister component', () => {
    const CSSVarRegister = defineComponent({
      name: 'CSSVarRegister',
      props: {
        rootCls: {
          type: String,
          required: true,
        },
        component: {
          type: String,
          required: true,
        },
        cssVar: {
          type: Object as PropType<CSSVarRegisterProps['cssVar']>,
          default: () => ({}),
        },
      },
      setup(props: CSSVarRegisterProps) {
        return () =>
          h('div', { 'data-testid': props.rootCls }, props.cssVar?.prefix ?? '')
      },
    })

    const wrapper = mount(CSSVarRegister, {
      props: {
        rootCls: 'test-root',
        cssVar: { prefix: 'test-prefix' },
        component: 'test',
      },
    })

    expect(wrapper.get('[data-testid="test-root"]').text()).toBe('test-prefix')

    wrapper.unmount()
  })

  it('injects layer dependencies into styles', async () => {
    const { config } = createMockConfig()
    const { genSubStyleComponent } = genStyleUtils<TestCompTokenMap, AliasToken, AliasToken>(config)

    const StyledComponent = genSubStyleComponent(
      'TestComponent',
      () => ({
        '.layer-test': { color: 'orange' },
      }),
      () => ({
        color: 'orange',
        size: 22,
      }),
    )

    const wrapper = mountWithStyleProvider(
      () => h(StyledComponent, { prefixCls: 'test-prefix' }),
      { layer: true },
    )

    await nextTick()

    const cleanedHead = document.head.innerHTML.replace(/\s+/g, ' ')
    expect(cleanedHead).toMatch(/@layer\s+parent,\s*test;/)

    wrapper.unmount()
  })
})
