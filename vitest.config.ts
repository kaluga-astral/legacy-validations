/// <reference types="vitest" />

import { defineConfig } from 'vitest/config';

export const createVitestConfig = () =>
  defineConfig({
    test: {
      globals: true,
      environment: 'node',
      testTimeout: 3000,
    },
  });
