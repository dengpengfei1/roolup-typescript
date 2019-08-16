var arr = Array.from(new Set(['a', 'b', 'c']));
var obj = Object.assign({}, { a: 1 });
var p = new Promise(function (resolve, reject) {
    resolve();
});

export default arr;
export { obj, p };
