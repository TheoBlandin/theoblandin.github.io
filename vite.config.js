import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { githubPagesSpa } from "@sctg/vite-plugin-github-pages-spa"

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    githubPagesSpa(),
  ],
  server: {
    host: true
  },
  base: "/",
})
