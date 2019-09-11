import { terser } from 'rollup-plugin-terser'
import resolve from 'rollup-plugin-node-resolve'
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
        /**
         *  1. 第三方模块并不会被 rollup 正确加载，node 模块使用的是 commonJS, 它不会被 rollup 兼容因此不能直接被使用
         *  2. 直接 import Vue from 'vue/dist/vue.min' 这样引用，就不要配置这个插件了，因为 vue.min.js 不是 commonjs 模块
         */
        resolve({ 
            // main 和 browser 属性决定将 package.json 中的哪个字段对应的文件应用到 bundle 中
            mainFields: ['module', 'main']
        }),
        commonjs({
            namedExports: { // 引用 commonjs 规范的模块，转为 es 模块
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
