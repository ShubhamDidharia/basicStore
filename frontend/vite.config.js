import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/',  // Adjust if your app is served from a subpath
  
  server: {
    proxy: {
      '/api': 'http://localhost:5000',  // Proxy API requests to local backend in dev
    },
  },
})
