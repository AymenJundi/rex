import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  plugins: [tailwindcss(), react()],
  base: './',  // Correct for static assets
  build: {
    outDir: 'dist',  // Build directory for Vercel
    rollupOptions: {
      input: {
        main: './index.html',  // Main entry for the app
      },
    },
  },
});
