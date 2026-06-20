import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';
import { configDefaults } from 'vitest/config';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './src/tests/setup.ts',
    coverage: {
      provider: 'v8',
      reporter: ['text', 'json', 'html'],
      exclude: [
        ...configDefaults.coverage.exclude || [],
        'src/tests/**',
        'vite.config.ts',
        'eslint.config.js',
        'js/**',
        'css/**',
        'index.html.native',
        'src/main.tsx',
        'src/lib/db.ts',
        'src/lib/ai/gemini.ts'
      ]
    }
  }
});
