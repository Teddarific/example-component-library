import { resolve } from 'node:path'

import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'
import importToCdn from 'vite-plugin-cdn-import'
import dts from 'vite-plugin-dts'

export default defineConfig(async ({ command, mode }) => {
  return {
    plugins: [
      react(),
      dts({
        include: [`components/`],
      }),
      importToCdn({
        modules: [
          {
            name: 'react',
            var: 'React',
            path: 'https://cdn.skypack.dev/react',
          },
          {
            name: 'react-dom',
            var: 'ReactDOM',
            path: 'https://cdn.skypack.dev/react-dom',
          },
        ],
      }),
    ],
    build: {
      lib: {
        entry: resolve('components/index.ts'),
        name: 'Library',
        formats: ['es'],
        fileName: (format) => `library.${format}.js`,
      },
      outDir: `${__dirname}/lib`,
      emptyOutDir: true,
    },
    define: {
      'process.env.NODE_ENV': '"production"',
    },
  }
})
