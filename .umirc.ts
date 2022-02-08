import { defineConfig } from 'umi';

export default defineConfig({
  mfsu: {},
  nodeModulesTransform: {
    type: 'none',
  },
  routes: [
    { path: '/', component: '@/pages/index' },
    { path: '/about', component: '@/pages/About' },
  ],
  ignoreMomentLocale: true,
  fastRefresh: {},
});
