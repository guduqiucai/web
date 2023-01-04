"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// status 只能取0 1 2 ，这时就应该使用枚举类型，以前只能使用对象模拟
const PostStatus = {
    Draft: 0,
    Unpulished: 1,
    Published: 2
};
// 现在TypeScript 直接提供了该类型
var PostStatus1;
(function (PostStatus1) {
    PostStatus1[PostStatus1["Draft"] = 0] = "Draft";
    PostStatus1[PostStatus1["Unpulished"] = 1] = "Unpulished";
    PostStatus1[PostStatus1["Published"] = 2] = "Published";
})(PostStatus1 || (PostStatus1 = {}));
// 如果不指定枚举值，默认从0开始
var PostStatus2;
(function (PostStatus2) {
    PostStatus2[PostStatus2["Draft"] = 0] = "Draft";
    PostStatus2[PostStatus2["Unpulished"] = 1] = "Unpulished";
    PostStatus2[PostStatus2["Published"] = 2] = "Published";
})(PostStatus2 || (PostStatus2 = {}));
// 指定了第一项，后面的值在第一项的基础上自增
var PostStatus3;
(function (PostStatus3) {
    PostStatus3[PostStatus3["Draft"] = 6] = "Draft";
    PostStatus3[PostStatus3["Unpulished"] = 7] = "Unpulished";
    PostStatus3[PostStatus3["Published"] = 8] = "Published";
})(PostStatus3 || (PostStatus3 = {}));
// 如果值是字符串，因为没办法增加，只能全部指定值
var PostStatus4;
(function (PostStatus4) {
    PostStatus4["Draft"] = "a";
    PostStatus4["Unpulished"] = "b";
    PostStatus4["Published"] = "c";
})(PostStatus4 || (PostStatus4 = {}));
const post = {
    title: 'hello TypeScript',
    content: 'TypeScript is a typed superset of JavaScript',
    // status: PostStatus.Unpulished, // 2 // 1 // 0
    status: PostStatus4.Draft
};
//# sourceMappingURL=07-enum-types.js.map