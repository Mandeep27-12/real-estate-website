import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite' // Ye naya plugin hai

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(), // Is line se Tailwind activate ho jayega
  ],
})