import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite' // Este es el que te daba error

export default defineConfig({
  plugins: [
    tailwindcss(),
  ],
})