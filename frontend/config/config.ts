import { defineConfig } from 'umi';
import routes from './routes';

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  layout: {},
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
});
