import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  build: {
    target: 'esnext',
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true,
      },
    },
    rollupOptions: {
      output: {
        manualChunks: {
          'vendor-react': ['react', 'react-dom', 'react-router-dom', 'react-helmet-async'],
          'vendor-icons': ['lucide-react'],
          'vendor-animation': ['framer-motion'],
        },
      },
    },
    cssCodeSplit: false,
    assetsInlineLimit: 10000,
    chunkSizeWarningLimit: 1000,
  },
  preview: {
    host: true,
    allowedHosts: 'all'
  }
})
