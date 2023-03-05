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
  }
});
