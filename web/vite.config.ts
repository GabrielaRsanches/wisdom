/// <reference types="vitest" />

import analog from '@analogjs/platform';
import { resolve } from 'path';
import { defineConfig, splitVendorChunkPlugin } from 'vite';
import tsConfigPaths from 'vite-tsconfig-paths';

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  return {
    publicDir: 'src/public',

    build: {
      target: ['es2020'],
      rollupOptions: {
        input: {
          main: resolve(__dirname, '../dist/index.html'),
          nested: resolve(__dirname, 'nested/index.html'),
        },
        output: {
          dir: resolve(__dirname, '../dist/index.html'),
        }
      },
    },
    plugins: [
      analog(),
      tsConfigPaths({
        root: './',
      }),
      splitVendorChunkPlugin(),
    ],
    test: {
      globals: true,
      environment: 'jsdom',
      setupFiles: ['src/test-setup.ts'],
      include: ['**/*.spec.ts'],
      cache: {
        dir: `../node_modules/.vitest`,
      },
    },
    define: {
      'import.meta.vitest': mode !== 'production',
    },
  };
});
