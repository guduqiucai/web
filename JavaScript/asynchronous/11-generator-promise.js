// Promise 并行执行
function ajax(url) {
    return new Promise(function (resolve, reject){
        var xhr = new XMLHttpRequest()
        xhr.open('GET', url)
        xhr.responseType = 'json'
        xhr.onload = function () {
            if (this.status === 200) {
                resolve(this.response)
            } else {
                reject(new Error(this.statusText))
            }
        }
        xhr.send()
    })
}

function * main() {
    try {
        const users = yield ajax('/api/users.json')
        console.log(users)
        const posts = yield ajax('/api/posts.json')
        console.log(posts)
        const users11 = yield ajax('/api/users11.json')
        console.log(users11)
    } catch (e) {
        console.log(e)
    }
}

// const result = g.next()
//
// result.value.then(data => {
//     const result2 = g.next(data)
//     if (result.done) return
//     result2.value.then(data => {
//         const result3 = g.next(data)
//         if (result3.done) return
//         result3.value.then(data => {
//             g.next(data)
//         })
//     })
// })

function co(generator){
    const g = generator()
    function handleResult (result) {
        if(result.done) return // 生成器函数结束
        result.value.then(data => {
            handleResult(g.next(data))
        }, error => {
            g.throw(error)
        })
    }
    handleResult(g.next())
}

co(main)



