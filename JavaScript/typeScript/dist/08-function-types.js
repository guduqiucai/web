"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function func1(a, b) {
    return 'func1';
}
func1(100, 200); // 参数个数和类型必须相同
// 可选参数1:参数后加问号，可选参数必须放在最后
function func2(a, b) {
    return 'func2';
}
func2(100);
func2(100, 200);
// 可选参数2:参数加默认值，可选参数必须放在最后
function func3(a, b = 200) {
    return 'func3';
}
func3(100);
func3(100, 200);
// 任意个数参数值
function func4(...rest) {
    return 'func4';
}
func4(100);
func4(100, 200);
// 函数表达式方式定义， 变量func5可推断出类型
const func5 = function (a, b) {
    return 'func5';
};
// 如果函数是回调函数，就需要使用箭头函数的方式声明类型
const func6 = function (a, b) {
    return 'func6';
};
//# sourceMappingURL=08-function-types.js.map