import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: "/REPO_NAME/",
  build: {
    target: 'es2019',
    outDir: 'build'
  },
  plugins: [react()],
})
