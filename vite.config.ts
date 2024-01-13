import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { stylexPlugin } from "vite-plugin-stylex-dev";
import path from "path"


// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(),stylexPlugin()],
    resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
})
