import { defineConfig } from 'tsdown'
import Vue from 'unplugin-vue/rollup'

export default defineConfig({
  entry: ['src/index.ts'],
  format: ['esm'],
  plugins: [Vue({ isProduction: true })],
  dts: {
    vue: true,
  },
  clean: true,
  external: ['vue', 'antdv-next', '@ant-design/fast-color'],
})
