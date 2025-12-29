// 文档分了中文文档和英文文档的加载
import type { RouteRecordRaw } from 'vue-router'

const cnDocs = import.meta.glob('/src/pages/components/*/index.zh-CN.md')
const enDocs = import.meta.glob('/src/pages/components/*/index.en-US.md')
const otherDocs = import.meta.glob([
  '/src/pages/**/*.zh-CN.md',
  '/src/pages/**/*.en-US.md',
  '!/src/pages/components/*/index.zh-CN.md',
  '!/src/pages/components/*/index.en-US.md',
])
export function generateDocRoutes() {
  const routes: RouteRecordRaw[] = []
  // 处理中文文档
  for (const path in enDocs) {
    // 去掉路径和后缀，得到请求的路由
    const routePath = path.replace('/index.en-US.md', '').replace('/src/pages', '').toLowerCase()
    routes.push({
      path: routePath,
      component: enDocs[path] as any,
    })
    const cnPath = path.replace('index.en-US.md', 'index.zh-CN.md')
    if (cnDocs[cnPath]) {
      routes.push({
        path: `${routePath}-cn`,
        component: cnDocs[cnPath] as any,
      })
    }
  }
  return routes
}

// generate custom docs
const routePaths = [
  // '/components/overview',
  '/components/changelog',
]

function generateCustomDocRoutes() {
  const routes: RouteRecordRaw[] = []
  for (const routePath of routePaths) {
    const cnPath = `/src/pages${routePath}.zh-CN.md`
    const enPath = `/src/pages${routePath}.en-US.md`
    if (otherDocs[cnPath]) {
      routes.push({
        path: `${routePath}-cn`,
        component: otherDocs[cnPath],
      })
    }
    if (otherDocs[enPath]) {
      routes.push({
        path: routePath,
        component: otherDocs[enPath],
      })
    }
  }
  return routes
}

export default [
  {
    path: '/components',
    component: () => import('@/layouts/docs/index.vue'),
    redirect: '/components/overview',
    children: [
      ...generateCustomDocRoutes(),
      ...generateDocRoutes(),
    ],
  },
] as RouteRecordRaw[]
