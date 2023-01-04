export {}
interface Post {
    title: string; // ;可以省略
    content: string
    subtitle?: string // 可选成员
    readonly summary: string // 只读成员
}
function printPost(post: Post){
    console.log(post.title)
    console.log(post.content)
}
const hello: Post = {
    title: 'TypeScript',
    content: 'hello world',
    summary: 'ts'
}
// hello.summary = '123' // 会报错，只读属性初始化后无法修改

printPost(hello)

interface Cache {
    [key: string]: string
}

const cache: Cache = {}
cache['foo'] = 'foo'
