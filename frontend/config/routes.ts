export default [
  { path: '/', exact: true, component: '@/pages/index' },
  {
    path: '/',
    component: '@/layouts/index',
    routes: [
      {
        path: '/user',
        exact: false,
        component: '@/pages/user/index',
      }
    ]
  },
];