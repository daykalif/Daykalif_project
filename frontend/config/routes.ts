export default [
  { path: '/', exact: true, component: '@/pages/index' },
  {
    path: '/demo',
    component: '@/layouts/index',
    exact: false,
    routes: [
      {
        path: '/demo/user',
        exact: false,
        component: '@/pages/user/index',
        wrappers: ['@/wrappers/auth'],
      },
      {
        path: '/demo/userInfo',
        exact: false,
        component: '@/pages/user/index',
      }
    ]
  },
];