import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  server: {
    proxy: {
      '/help': {
        target: 'https://www.chatbase.co',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/help/, '/GQ5Qh8nJ6XRvgvVFwRqZa/help')
      }
    }
  }
})
