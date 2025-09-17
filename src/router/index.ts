// createRouter方法，用于创建路由器实例，管理多个路由
import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  // 路由模式历史模式设置
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      // 懒加载，动态导入（如要用的时候才请求路径）
      component: () => import('@/pages/home/index.vue')
    },
    {
      path: '/hospital',
      component: () => import('@/pages/hospital/index.vue')
    }
  ],
  // 控制滚动行为,让页面切换滚动条回到原点
  scrollBehavior() {
    return {
      left: 0,
      top: 0
    }
  }
})

export default router