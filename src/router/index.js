import Vue from 'vue'
import Router from 'vue-router'

// in development-env not use lazy-loading, because lazy-loading too many pages will cause webpack hot update too slow. so only in production use lazy-loading;
// detail: https://panjiachen.github.io/vue-element-admin-site/#/lazy-loading

Vue.use(Router)

/* Layout */
import Layout from '../views/layout/Layout'

/**
* hidden: true                   if `hidden:true` will not show in the sidebar(default is false)
* alwaysShow: true               if set true, will always show the root menu, whatever its child routes length
*                                if not set alwaysShow, only more than one route under the children
*                                it will becomes nested mode, otherwise not show the root menu
* redirect: noredirect           if `redirect:noredirect` will no redirect in the breadcrumb
* name:'router-name'             the name is used by <keep-alive> (must set!!!)
* meta : {
    title: 'title'               the name show in submenu and breadcrumb (recommend set)
    icon: 'svg-name'             the icon show in the sidebar,
  }
**/
// 通用路由表
export const constantRouterMap = [
  { path: '/login',
    component: () => import('@/views/login/index'),
    hidden: true
  },
  {
    path: '/404',
    component: () => import('@/views/404'),
    hidden: true
  },
  {
    path: '/',
    component: Layout,
    redirect: '/dashboard',
    children: [
      {
        path: 'dashboard',
        name: 'dashboard',
        meta: {
          title: '首页',
          icon: 'dashboard'
        },
        component: () => import('@/views/dashboard/index')
      }
    ]
  },
  // 基本资料
  {
    path: '/basedata',
    component: Layout,
    redirect: '/basedata/company',
    name: 'basedata',
    meta: {
      title: '基本资料',
      icon: 'basedata'
    },
    children: [{
      path: 'company',
      name: 'company',
      component: () =>
          import('@/views/basedata/company/index.vue'),
      meta: {
        title: '企业资料管理',
        icon: 'customer'
      }
    },
    {
      path: 'authority',
      name: 'authority',
      component: () =>
        import('@/views/basedata/authority/index.vue'),
      meta: {
        title: '权限管理',
        icon: 'auth'
      }
    }
    ]
  },
  // 商城管理
  {
    path: '/mall',
    component: Layout,
    alwaysShow: true,
    redirect: '/mall/goods',
    name: 'mall',
    meta: {
      title: '商城管理',
      icon: 'mall'
    },
    children: [
      {
        path: 'goods',
        name: 'goods',
        component: () =>
          import('@/views/mall/goods/index.vue'),
        meta: {
          title: '商品管理',
          icon: 'goods'
        }
      }
    ]
  },
  // 统计报表
  {
    path: '/statistics',
    component: Layout,
    redirect: '/statistics/rechargeStatistics',
    name: 'statistics',
    meta: {
      title: '报表统计',
      icon: 'active'
    },
    children: [{
      path: 'rechargeStatistics',
      name: 'rechargeStatistics',
      component: () =>
          import('@/views/statistics/rechargeStatistics/index.vue'),
      meta: {
        title: '充值统计',
        icon: 'recharge'
      }
    },
    {
      path: 'consumeStatistics',
      name: 'consumeStatistics',
      component: () =>
          import('@/views/statistics/consumeStatistics/index.vue'),
      meta: {
        title: '消费统计',
        icon: 'credit'
      }
    }
    ]
  },
  { path: '*', redirect: '/404', hidden: true }
]

// 根据权限动态加载的路由表
export const asyncRouterMap = []

// 默认只挂载通用路由表
export default new Router({
  // mode: 'history', //后端支持可开
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRouterMap
})
