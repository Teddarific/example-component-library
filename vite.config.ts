import { resolve } from 'node:path'

import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'
import importToCdn from 'vite-plugin-cdn-import'
import dts from 'vite-plugin-dts'

export default defineConfig(async ({ command, mode }) => {
  return {
    plugins: [
      react({
        jsxRuntime: 'classic',
      }),
      dts({
        include: [`components/`],
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
    resolve: {
      alias: {
        react: 'https://esm.sh/react@18.2.0',
        'react-dom': 'https://esm.sh/react-dom@18.2.0',
      },
    },
  }
})
