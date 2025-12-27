import { defineConfig } from 'tsup';

export default defineConfig({
  entry: ['src/app.ts'],
  splitting: false,
  tsconfig: './tsconfig.app.json',
  format: 'esm',
  sourcemap: true,
  clean: true,
});
