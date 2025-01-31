// vitest.config.ts
import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    globals: true,  // This enables the use of globals like describe, test, etc.
    environment: 'jsdom',  // Ensure you're using jsdom for DOM tests
  },
});
