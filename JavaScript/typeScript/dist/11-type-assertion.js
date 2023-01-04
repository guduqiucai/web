"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// 假定nums来自一个明确的接口
const nums = [100, 200, 300, 400];
const res = nums.find(i => i > 0);
const square = res * res;
// 断言方式1：推荐
const num1 = res;
// 断言方式2: JSX 中会冲突
const num2 = res;
//# sourceMappingURL=11-type-assertion.js.map