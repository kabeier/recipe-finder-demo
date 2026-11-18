import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// https://vite.dev/config/
// Passing a function (not an object) gives us `mode`:
// 'development' for npm run dev, 'production' for npm run build.
export default defineConfig(({ mode }) => ({
  // GitHub Pages serves the site from a folder named after the repo:
  // https://<user>.github.io/recipe-finder/ . base makes the built page load its files from there.
  // Use YOUR repo's name. In dev the app still lives at /.
  base: mode === 'production' ? '/recipe-finder/' : '/',
  plugins: [react()],
}))
