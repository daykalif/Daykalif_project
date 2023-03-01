import { defineConfig } from 'umi';
import routes from './routes';

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  // layout: {},  // 打开会默认加载antd的菜单栏
  mfsu: {},
  fastRefresh: {},
  routes: routes,
});
