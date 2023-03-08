const posts = [
    {
        title: 'POST1',
        createdAt: new Date().getTime(),
        body: 'this is post one'
    },
    {
        title: 'POST2',
        createdAt: new Date().getTime(),
        body: 'this is post two'
    },
    {
        title: 'POST3',
        createdAt: new Date().getTime(),
        bosy: 'this is post three'
    },
    {
        title: 'POST4',
        createdAt: new Date().getTime(),
        bosy: 'this is post four'
    }
]

function updateLastUserActivityTime(post) {
    return new Promise((resolve, reject) => {
        var lastActivity = new Date()
        console.log(`last seen:${lastActivity}`)
        resolve()
    })
}
function createPost(post) {
    return new Promise((resolve, reject) => {
        posts.push(post)
        post.createdAt = new Date().getTime()
        resolve()
    }, 1000)
}
function getPost() {

    setTimeout(() => {
        posts.forEach((post) => {
            console.log(post.title)
        })

    })
}
function deletePost() {
    setTimeout(() => {
        return new Promise((resolve, reject) => {
            if (posts.length > 0) {
                resolve(posts.pop())
            }
            else {
                reject("ERROR")
            }
        })
    })
}
Promise.all([createPost({title: 'Post Five', body: 'This is Post Five'}), updateLastUserActivityTime()])