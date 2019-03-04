import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

/* Layout */
import Layout from '../views/layout/Layout'

export const constantRouterMap = [
  { path: '/login', component: () => import('@/views/login/index'), hidden: true },
  { path: '/register', component: () => import('@/views/login/register'), hidden: true },
  { path: '/404', component: () => import('@/views/404'), hidden: true },
  { path: '/chart', component: () => import('@/views/chart/index'), hidden: true },

  {
    path: '/',
    component: Layout,
    redirect: '/dashboard',
    name: 'Dashboard',
    children: [{
      path: 'dashboard',
      component: () => import('@/views/dashboard/index'),
      meta: { title: '主页', icon: 'home' }
    }]
  },

  {
    path: '/',
    component: Layout,
    children: [
      {
        path: 'addDB',
        name: 'addDatabase',
        component: () => import('@/views/dataBase/addDB'),
        meta: { title: '添加数据库', icon: 'database' }
      }
    ]
  },

  {
    path: '/database',
    component: Layout,
    redirect: '/database/database_1',
    name: 'Database',
    meta: { title: '数据库管理', icon: 'tree' },
    children: [
      {
        path: 'database_1',
        name: 'db_1',
        component: () => import('@/views/empty'),
        meta: { title: '数据库 1', icon: 'database' }
      },
      {
        path: 'database_2',
        name: 'db_2',
        component: () => import('@/views/empty'),
        meta: { title: '数据库 2', icon: 'database' }
      }
    ]
  },

  {
    path: '/setting',
    component: Layout,
    children: [
      {
        path: 'index',
        name: 'Setting',
        component: () => import('@/views/setting/index'),
        meta: { title: '设置', icon: 'setting' }
      }
    ]
  },
  {
    path: 'Coding',
    component: Layout,
    children: [
      {
        path: 'https://git.dev.tencent.com/Xerrors/Vintag.git',
        meta: { title: 'Coding', icon: 'link' }
      }
    ]
  },
  // {
  //   path: '/nested',
  //   component: Layout,
  //   redirect: '/nested/menu1',
  //   name: 'Nested',
  //   meta: {
  //     title: 'Nested',
  //     icon: 'nested'
  //   },
  //   children: [
  //     {
  //       path: 'menu1',
  //       component: () => import('@/views/nested/menu1/index'), // Parent router-view
  //       name: 'Menu1',
  //       meta: { title: 'Menu1' },
  //       children: [
  //         {
  //           path: 'menu1-1',
  //           component: () => import('@/views/nested/menu1/menu1-1'),
  //           name: 'Menu1-1',
  //           meta: { title: 'Menu1-1' }
  //         },
  //         {
  //           path: 'menu1-2',
  //           component: () => import('@/views/nested/menu1/menu1-2'),
  //           name: 'Menu1-2',
  //           meta: { title: 'Menu1-2' },
  //           children: [
  //             {
  //               path: 'menu1-2-1',
  //               component: () => import('@/views/nested/menu1/menu1-2/menu1-2-1'),
  //               name: 'Menu1-2-1',
  //               meta: { title: 'Menu1-2-1' }
  //             },
  //             {
  //               path: 'menu1-2-2',
  //               component: () => import('@/views/nested/menu1/menu1-2/menu1-2-2'),
  //               name: 'Menu1-2-2',
  //               meta: { title: 'Menu1-2-2' }
  //             }
  //           ]
  //         },
  //         {
  //           path: 'menu1-3',
  //           component: () => import('@/views/nested/menu1/menu1-3'),
  //           name: 'Menu1-3',
  //           meta: { title: 'Menu1-3' }
  //         }
  //       ]
  //     },
  //     {
  //       path: 'menu2',
  //       component: () => import('@/views/nested/menu2/index'),
  //       meta: { title: 'menu2' }
  //     }
  //   ]
  // },

  { path: '*', redirect: '/404', hidden: true }
]

export default new Router({
  base: '/',
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRouterMap
})
