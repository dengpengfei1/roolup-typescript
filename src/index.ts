'use strict'

import { aaa } from './interface/index'
let a: aaa = {
    b: '2',
    a: 3
}
console.log(a)

let arr = Array.from(new Set(['a', 'b', 'c']))

export let obj = Object.assign({}, { a: 1 })
export default arr
export let p = new Promise((resolve, reject) => {
    resolve()
})
