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

async function main() {
    try {
        const users = await ajax('/api/users.json')
        console.log(users)
        const posts = await ajax('/api/posts.json')
        console.log(posts)
        const users11 = await ajax('/api/users11.json')
        console.log(users11)
    } catch (e) {
        console.log(e)
    }
}
const promise = main()
promise.then(() => {
    console.log('complate')
})




