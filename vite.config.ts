import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import tailwindcss from "@tailwindcss/vite";

// https://vite.dev/config/
export default defineConfig({
  plugins: [tailwindcss(), react()],
  // For Vercel deployment, use root base path
  base: "/",
  build: {
    outDir: "dist",
  },
});
