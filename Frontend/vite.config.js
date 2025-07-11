import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/', // ensures routing works correctly in production
  build: {
    outDir: 'dist',
  },
})

