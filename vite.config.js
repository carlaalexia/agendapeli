import { defineConfig } from 'vite';
import reactRefresh from '@vitejs/plugin-react-refresh';
import { createVuePlugin } from 'vite-plugin-vue2';
import tailwindcss from 'tailwindcss';

export default defineConfig({
  plugins: [
    reactRefresh(),
    createVuePlugin(),
    tailwindcss()
  ],
});