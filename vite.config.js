import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react'; // or '@vitejs/plugin-vue' for Vue projects

export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      output: {
        // Naming the main entry JavaScript file
        entryFileNames: 'main.js',
        // Naming code-split chunks
        chunkFileNames: 'chunks/[name].js',
        // Naming the main CSS file
        assetFileNames: ({ name }) => {
          if (/\.css$/.test(name ?? '')) {
            return 'main.css';
          }
          return 'assets/[name].[ext]'; // For other assets
        },
      },
    },
    // Optionally configure output directory
    outDir: 'dist',
  },
  base: '/dummy-google-search-engine/',  // Base URL for deployment
});
