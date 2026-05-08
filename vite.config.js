import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
import {resolve} from 'path' // Este es el que te daba error

export default defineConfig({
  plugins: [
    tailwindcss(),
  ],
  build: {
    rollupOptions:{
        input:{
            master: resolve(__dirname, 'index.html'),
            practica1: resolve(__dirname, 'practica1.html'),
            practica2: resolve(__dirname, 'practica2.html'),
            practica3: resolve(__dirname, 'practica3.html')
        }
    }
  }
})