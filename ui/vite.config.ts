import { defineConfig } from 'vite';
import solidPlugin from 'vite-plugin-solid';

export default defineConfig({
  plugins: [
      solidPlugin()
  ],
  server: {
    proxy: {
      '/api': 'http://localhost:5000'
    }
  },
  build: {
    target: 'esnext',
  },
});
