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
  { path: '/login', component: () => import('@/views/login/index'), hidden: true },
  { path: '/404', component: () => import('@/views/404'), hidden: true },

  {
    path: '/',
    component: Layout,
    redirect: '/dashboard',
    name: 'Dashboard',
    hidden: true,
    children: [
      {
        path: 'dashboard',
        component: () => import('@/views/dashboard/index')
      }
    ]
  },
  {
    path: '/finance',
    component: Layout,
    redirect: '/finance/companyRecharge',
    name: 'finance',
    meta: { title: '财务管理', icon: 'example' },
    children: [
      {
        path: 'companyRecharge',
        name: 'companyRecharge',
        component: () => import('@/views/finance/companyRecharge/index.vue'),
        meta: { title: '企业充值记录', icon: 'form' }
      },
      {
        path: 'membershipRecharge',
        name: 'membershipRecharge',
        component: () => import('@/views/finance/membershipRecharge/index.vue'),
        meta: { title: '会员充值记录', icon: 'form' }
      },
      {
        path: 'creditRecord',
        name: 'creditRecord',
        component: () => import('@/views/finance/creditRecord/index.vue'),
        meta: { title: '授信记录', icon: 'form' }
      }
    ]
  },
  {
    path: '/order',
    component: Layout,
    redirect: '/order/companyOrder',
    name: 'order',
    meta: { title: '订单管理', icon: 'example' },
    children: [
      {
        path: 'companyOrder',
        name: 'companyOrder',
        component: () => import('@/views/order/companyOrder/index.vue'),
        meta: { title: '企业订单记录', icon: 'form' }
      },
      {
        path: 'membershipOrder',
        name: 'membershipOrder',
        component: () =>
          import('@/views/order/membershipOrder/index.vue'),
        meta: { title: '会员订单记录', icon: 'form' }
      },
      {
        path: 'exceptionOrder',
        name: 'exceptionOrder',
        component: () =>
          import('@/views/order/exceptionOrder/index.vue'),
        meta: { title: '会员异常订单', icon: 'form' }
      }
    ]
  },
  {
    path: '/review',
    component: Layout,
    redirect: '/review/rechargeReview',
    name: 'review',
    meta: {
      title: '审核专区',
      icon: 'example'
    },
    children: [{
      path: 'rechargeReview',
      name: 'rechargeReview',
      component: () =>
          import('@/views/review/rechargeReview/index.vue'),
      meta: {
        title: '充值审核',
        icon: 'form'
      }
    },
    {
      path: 'creditReview',
      name: 'creditReview',
      component: () =>
          import('@/views/review/creditReview/index.vue'),
      meta: {
        title: '授信审核',
        icon: 'form'
      }
    },
    {
      path: 'invoiceReview',
      name: 'invoiceReview',
      component: () =>
          import('@/views/review/invoiceReview/index.vue'),
      meta: {
        title: '发票审核',
        icon: 'form'
      }
    }
    ]
  },
  {
    path: '/statistics',
    component: Layout,
    redirect: '/statistics/rechargeStatistics',
    name: 'statistics',
    meta: {
      title: '报表统计',
      icon: 'example'
    },
    children: [{
      path: 'rechargeStatistics',
      name: 'rechargeStatistics',
      component: () =>
          import('@/views/statistics/rechargeStatistics/index.vue'),
      meta: {
        title: '充值统计',
        icon: 'form'
      }
    },
    {
      path: 'consumeStatistics',
      name: 'consumeStatistics',
      component: () =>
          import('@/views/statistics/consumeStatistics/index.vue'),
      meta: {
        title: '消费统计',
        icon: 'form'
      }
    },
    {
      path: 'balanceStatistics',
      name: 'balanceStatistics',
      component: () =>
          import('@/views/statistics/balanceStatistics/index.vue'),
      meta: {
        title: '余额统计',
        icon: 'form'
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
