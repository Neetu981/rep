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
        body: 'this is post three'
    },
    {
        title: 'POST4',
        createdAt: new Date().getTime(),
        body: 'this is post four'
    }
]

async function updateLastUserActivityTime(post) {
    let UpdatedTime= await new Promise((resolve, reject) => {
        var lastActivity = new Date()
        console.log(`last seen:${lastActivity}`)
        resolve()
    })
    return UpdatedTime
}
async function createPost(post) {
    
        let CreatePost= await new Promise((resolve, reject) => {
            setTimeout(()=>{
        posts.push(post)
        post.createdAt = new Date().getTime()
        resolve()
    }, 1000)
    return CreatePost
    })

}
function getPost() {

    setTimeout(() => {
        posts.forEach((post) => {
            console.log(post.title)
        })

    })
}
async function deletePost() {
    
        var DeletePost= await new Promise((resolve, reject) => {
            setTimeout(() => {
            if (posts.length > 0) {
                resolve(posts.pop())
            }
            else {
                reject("ERROR")
            }
        })
        return DeletePost
    })
    
}
// Promise.all([createPost({title: 'Post Five', body: 'This is Post Five'}), updateLastUserActivityTime()])