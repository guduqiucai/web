const arr1 = [1, 2, 3];
const arr2 = [1, 2, 3];
// 强类型的优势示例
function sum(...args) {
    return args.reduce((prev, current) => prev + current, 0);
}
sum(1, 2, 3);
// sum(1, 2, 3, 'foo')
//# sourceMappingURL=05-array-types.js.map