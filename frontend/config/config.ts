import { defineConfig } from 'umi';
import routes from './routes';

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  layout: { //开启antd布局
    name: "Daykalif WEB", // 网站名字
    layout: 'mix', // layout 的菜单模式， side: 左侧导航 top: 顶部导航 mix: 混合式导航
    navTheme: 'light', // 左侧导航的主题为 浅色 主题
  },  // 打开会默认加载antd的菜单栏
  mfsu: {},
  fastRefresh: {},
  routes: routes,
  dynamicImport: {
    loading: '@/components/PageLoading',
  },
  dva: {
    immer: true,
    hmr: false,
  },
  /**
   * 通过前端代理方式，访问http://localhost:8000/api/user/register
   * 会去请求: http://localhost:3000/api/user/register
   */
  proxy: {
    '/api/': {
      target: 'http://localhost:3000/',
      changeOrigin: true,
    },
  },
  mock: false,  // 关闭mock
});
