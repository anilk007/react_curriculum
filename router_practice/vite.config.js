import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  test: {
    globals: true,  // This enables the use of globals like describe, test, etc.
    environment: 'jsdom',  // Ensure you're using jsdom for DOM tests
    coverage: {
      provider: 'v8', // Use V8 coverage provider
      reporter: ['text', 'html'], // Output text summary and HTML report
    },
  },
})
