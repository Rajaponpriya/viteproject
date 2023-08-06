import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: [
      { find: '@components', replacement: '/src/components' },
      { find: '@images', replacement: '/src/images' },
      // Add more mappings as needed
    ],
  },
})


/*
// vite.config.js
export default {
  // ...
  resolve: {
    alias: [
      { find: '@components', replacement: '/src/components' },
      { find: '@images', replacement: '/src/images' },
      // Add more mappings as needed
    ],
  },
};



*/