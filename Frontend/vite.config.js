import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'dist'
  },
  resolve: {
    alias: {
      '@': '/src'
    }
  },
  base: '/',
  server: {
    port: 5173,
  },
  // ⬇️ this is the fix
  // Serve index.html for all routes
  // So React Router can handle them
  optimizeDeps: {},
});
