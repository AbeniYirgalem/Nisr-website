import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    tailwindcss(),
    react()],
  // GitHub Pages expects the site to be served from `/Nisr-website/`.
  base: '/Nisr-website/',
  build: {
    outDir: 'docs',
  },
});
