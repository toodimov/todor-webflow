import { defineConfig } from 'vite'
// import eslintPlugin from 'vite-plugin-eslint'

// vite.config.js
export default defineConfig({
  // plugins: [eslintPlugin({ cache: false })],
  server: {
    host: 'localhost',
    cors: '*',
    hmr: {
      host: 'localhost',
      protocol: 'ws',
    },
  },
  build: {
    minify: true,
    manifest: false,
    rollupOptions: {
      // input: ['./src/main.js', './src/home.js'],
      input: './src/main.js',
      output: {
        dir: 'dist',
        // format: 'esm',
        format: 'umd',
        entryFileNames: 'main.js',
        esModule: false,
        compact: true,
        globals: {
          jquery: '$',
        },
      },
      external: ['jquery'],
    },
  },
})
