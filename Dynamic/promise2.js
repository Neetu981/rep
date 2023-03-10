console.log('Person1:shows ticket')
console.log('Person2:shows ticket')

const wifeBringingTickets=new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve('ticket')
    },3000)
})

const getPopCorn=wifeBringingTickets.then((t)=>{
    console.log('wife:i have the tics')
    console.log('husband: we should go in')
    console.log('wife:no i am hungry')

    return new Promise((resolve,reject)=>{
        resolve(`${t} popcorn`)
    })  
})

const getButter=getPopCorn.then((t)=>{
    console.log('husband:i got some popcorn')
    console.log('husband: we should go in')
    console.log('wife:i need butter on my popcorn')

    return new Promise((resolve,reject)=>{
        resolve(`${t} butter`)
    })  
})
const getColdDrink=getButter.then((t)=>{
    console.log(`wife: i need some colddrinks too`)
    console.log(`husband:ok`)
    
    return new Promise((resolve,reject)=>{
        resolve(`${t} colddrinks`)
    })
})
getColdDrink.then((t)=>console.log(t))

// getPopCorn.then((t)=>console.log(t))
console.log('Person4:shows ticket')
console.log('Person5:shows ticket')