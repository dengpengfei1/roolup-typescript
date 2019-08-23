module.exports = {
    "root": true,
    parser: 'babel-eslint',
    parserOptions: {
        sourceType: 'module',
    },
    "env": {
        "es6": true,
        "browser": true,
    },
    "plugins": [],
    "globals": {
        "MOCK": false,
    },
    "rules": {
        // 以下规则  为 "off" 的  都是去除掉的规则, 不要看反了 ^-^
        "eqeqeq": "off", // 要求使用 === 和 !==
        "one-var": "off", // 强制函数中的变量要么一起声明要么分开声明
        "one-var-declaration-per-line": "off", // 要求或禁止在变量声明周围换行
        "vars-on-top": "off", // 要求所有的 var 声明出现在它们所在的作用域顶部
        "no-plusplus": "off", // 禁用一元操作符 ++ 和 --
        "no-mixed-operators": "off", // 禁止混合使用不同的操作符
        "prefer-template": "off", // 要求使用模板字面量而非字符串连接
        "no-bitwise": "off", // 禁用位运算符
        "no-multiple-empty-lines": "off", // 禁止出现多行空行
        "no-unused-expressions": "off", // 禁止出现未使用过的表达式
        "no-lonely-if": "off", // 禁止 if 作为唯一的语句出现在 else 语句中
        "block-scoped-var": "off", // 强制把变量的使用限制在其定义的作用域范围内
        "global-require": "off", // 要求 require() 出现在顶层模块作用域中
        "no-eval": "warn", // 禁用 eval

        "object-shorthand": "off", // 要求对象字面量中方法和属性使用简写语法
        "quote-props": "off", // 要求对象字面量属性名称使用引号
        "padded-blocks": "off", // 要求块前后不能出现空行

        "func-names": "off", // 要求使用命名的 function 表达式
        "prefer-arrow-callback": "off", // 要求使用箭头函数作为回调
        "no-return-assign": "off", // 禁止在 return 语句中使用赋值语句
        "consistent-return": "off", // 要求 return 语句要么总是指定返回的值，要么不指定
        // "prefer-rest-params": "off", // 要求用 rest 代替 arguments
        "no-param-reassign": "off", // 禁止对 function 的参数进行重新赋值
        "prefer-spread": "off", // 要求使用扩展运算符而非 .apply()
        "no-use-before-define": "off", // 禁止在变量定义之前使用它们

        "camelcase": "off", // 骆驼命名,
        "no-prototype-builtins": "off", // 禁止使用对象默认属性
        "no-redeclare": "off", // 禁止重新声明变量
        "max-len": ["warn", { // 忽略最大长度
            "code": 160,
            "ignoreComments": true, // 忽略注释
            "ignoreTrailingComments": true, // 忽略尾随的注释
            "ignoreUrls": true, // 忽略url
            "ignoreStrings": true, // 忽略字符串
            "ignoreTemplateLiterals": true, // 忽略字符串模板
            "ignoreRegExpLiterals": true, // 忽略正则
        }],
        "no-unused-vars": [ // 定义了变量没有使用
            "error",
            {
                "vars": "all",
                "args": "none"
            }
        ],
        'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0,
        'no-console': "off",
        "indent": [
            "error",
            4,
            { "SwitchCase": 1 }
        ],
        "no-continue": "off", // 不允许有 continue
        "no-restricted-syntax": ["error", "WithStatement"],
        "no-underscore-dangle": ["error", { "allowAfterThis": true }], // 只允许 this 后面有下划线,
        "import/prefer-default-export": "off",
        "no-new": "off",
        "import/extensions": "off",
        "default-case": "off",
    }
}
