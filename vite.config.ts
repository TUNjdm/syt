import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
// 引入node提供内置模块path
import path from 'path'
// https://vite.dev/config/
export default defineConfig({
  plugins: [vue()],
 // src文件夹别名
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src')
    }
  }
})
