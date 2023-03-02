// 菜单配置api：https://www.npmjs.com/package/@ant-design/pro-layout
export default [
  {
    path: '/',
    exact: true,
    name: 'home',
    component: '@/pages/index'
  },
  {
    path: '/demo',
    component: '@/layouts/index',
    exact: false,
    name: 'demo',
    icon: 'smile',
    hideChildrenMenu: true,  // 隐藏其下面所有子菜单
    routes: [
      {
        path: '/demo/user',
        exact: false,
        name: 'user',
        icon: 'crown',      // 子菜单的icon无法显示
        component: '@/pages/demo/user/index',
        wrappers: ['@/wrappers/auth'],
      },
      {
        path: '/demo/userInfo',
        name: 'userInfo',
        exact: false,
        component: '@/pages/demo/user/index',
      },
      {
        path: '/demo/sankey',
        exact: false,
        name: 'sankey',
        component: '@/pages/demo/sankey/index',
      },
      {
        path: '/demo/sankey',   // 不写name，隐藏当前菜单
        exact: false,
        hideInMenu: true,
        component: '@/pages/demo/sankey/index',
      },
      {
        path: '/demo/sankey',
        exact: false,
        hideInMenu: true,       // 加上hideInMenu:true，隐藏当前菜单
        component: '@/pages/demo/sankey/index',
      },
    ]
  },
];