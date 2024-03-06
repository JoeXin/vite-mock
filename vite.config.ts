import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import { vitePluginFakeServer } from "vite-plugin-fake-server";
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
    vitePluginFakeServer({
      include: './src/mock',
      infixName: 'mock',
      enableDev: true,
      enableProd: true
    })
  ],
});
