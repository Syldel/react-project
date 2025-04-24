/// <reference types="vitest" />
import path from 'path'
import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd())

  return {
    base: env.VITE_BASE_PATH || '/',
    resolve: {
      alias: {
        '~/': `${path.resolve(__dirname, 'src')}/`,
      },
    },
    plugins: [
      react({
        include: '**/*.tsx',
      }),
    ],
    test: {
      include: ['test/**/*.test.{j,t}s'],
      environment: 'jsdom',
    },
  }
})
