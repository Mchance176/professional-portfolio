import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/professional-portfolio/',
  server: {
    port: 3000,
    open: true
  },
  assetsInclude: ['*.pdf'],
  build: {
    outDir: 'dist'
  }
})