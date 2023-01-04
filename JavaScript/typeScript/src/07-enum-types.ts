export {}

// status 只能取0 1 2 ，这时就应该使用枚举类型，以前只能使用对象模拟
const PostStatus = {
    Draft: 0,
    Unpulished: 1,
    Published: 2
}
// 现在TypeScript 直接提供了该类型
enum PostStatus1 {
    Draft = 0,
    Unpulished = 1,
    Published = 2
}
// 如果不指定枚举值，默认从0开始
enum PostStatus2 {
    Draft,
    Unpulished,
    Published
}
// 指定了第一项，后面的值在第一项的基础上自增
enum PostStatus3 {
    Draft = 6,
    Unpulished,
    Published
}
// 如果值是字符串，因为没办法增加，只能全部指定值
enum PostStatus4 {
    Draft = 'a',
    Unpulished = 'b',
    Published = 'c'
}

const post = {
    title: 'hello TypeScript',
    content: 'TypeScript is a typed superset of JavaScript',
    // status: PostStatus.Unpulished, // 2 // 1 // 0
    status: PostStatus4.Draft
}



