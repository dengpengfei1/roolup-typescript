import { terser } from 'rollup-plugin-terser';
import babel from 'rollup-plugin-babel';
import rollupTypescript from 'rollup-plugin-typescript2';

export default {
    input: './src/index.ts',
    output: [
        {
            file: './dist/lib.js',
            format: 'umd',
            name:'my-big-lib'
        },
        {
            file: './build/lib.js',
            format: 'esm',
            name:'my-big-lib'
        },
    ],
    watch: {
        exclude: 'node_modules/**'
    },
    plugins: [
        rollupTypescript(),
        terser(),
        babel({
            exclude: 'node_modules/**'
        }),
    ]
};
