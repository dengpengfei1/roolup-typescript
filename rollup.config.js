import { terser } from 'rollup-plugin-terser'
import babel from 'rollup-plugin-babel'
import commonjs from 'rollup-plugin-commonjs'
import rollupTypescript from 'rollup-plugin-typescript2'
import { eslint } from 'rollup-plugin-eslint'
const path = require('path')

let plugins = []
let eslintPlugin = []
if (process.env.NODE_ENV === 'production') {
    plugins.push(terser()) // 代码压缩
    eslintPlugin.push(eslint({ // eslint 放在上面先执行，放在 rollupTypescript 之前，不然在 fix 的时候，会把 ts 代码替换成 rollupTypescript 转换成的 js
        include: ['src/*'],
        fix: true
    }))
} else {
    eslintPlugin.push(eslint({
        include: ['src/*']
    }))
}

const globals = {
    // 'axios': 'Axios'
}

export default {
    input: './src/index.ts',
    output: [
        {
            file: './dist/lib.js',
            format: 'umd',
            name:'my-big-lib',
            globals
        },
        {
            file: './build/lib.js',
            format: 'esm',
            name:'my-big-lib',
            globals
        },
    ],
    watch: {
        exclude: 'node_modules/**'
    },
    external: [
        // 'axios'
    ],
    plugins: [ // 插件执行顺序，从上至下 
        ...eslintPlugin,
        commonjs({
            namedExports: { // 引用 commonjs 规范的模块
                // 'getPlatform': ['getPlatform']
            }
        }),
        rollupTypescript({
            /**
             * json 文件中 declaration 为 true，
             * 打包出的 bundle 会包含 declare 文件，
             * 作为类型标识用
             */
            tsconfig: path.resolve(__dirname, 'tsconfig.json')
        }),
        babel({
            exclude: 'node_modules/**'
        }),
        ...plugins
    ]
};
