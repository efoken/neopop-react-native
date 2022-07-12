import { defineConfig } from 'tsup';

export default defineConfig({
    entry: [
        'src/index.ts',
        'src/components/index.ts',
        'src/hooks/index.ts',
        'src/primitives/index.ts',
        'src/types/index.ts',
        'src/utils/index.ts',
    ],
    format: ['esm', 'cjs'],
    sourcemap: true,
    clean: true,
    dts: true,
});
