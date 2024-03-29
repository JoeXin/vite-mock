import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import { viteMockServe } from 'vite-plugin-mock';
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  base: '/vite-mock',
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },
  plugins: [
    vue(),
    viteMockServe({
      mockPath: './src/mock',
      localEnabled: true,
      prodEnabled: true,
      injectCode: `
      import { setupProdMockServer } from '/src/mock/mockProdServer.ts';
      setupProdMockServer();
    `,
    }),
  ],
});
