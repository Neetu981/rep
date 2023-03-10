console.log('Person1:shows ticket')
console.log('Person2:shows ticket')

//async fun always returns a promise=> we dont have to specify it by Promise keyword
//await is only use in body of async funtion

const preMovie = async () => {
    const wifeBringingTickets = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('ticket')
        }, 3000)
    })
    const getPopCorn = new Promise((resolve, reject) => {
        resolve(`popCorn`)
    })
    const getButter =  new Promise((resolve, reject) => {
        resolve(`butter`)
    })
    const getColdDrinks=new Promise((reject,resolve)=>{
        resolve('coldDrink')
    })


    let ticket = await wifeBringingTickets
    console.log(`wife:i have the ${ticket}`)
    console.log('husband: we should go in')
    console.log('wife:no i am hungry')

    let PopCorn=await getPopCorn
    console.log(`husband:i got some ${PopCorn}`)
        console.log('husband: we should go in')
        console.log('wife:i need butter on my popcorn')

    let butter=await getButter

    console.log(`husband: i got some ${butter} on popcorn`)
    console.log(`husband: anything else?`)
    console.log('wife:lets go we are getting late')
    console.log('husband: thans for the remainder')

    let coldDrink=await getColdDrinks
    console.log(`wife: i need some ${coldDrink} too`)
    console.log(`husband:ok`)

    return ticket// whole async funtion returing a promise(tickets)
    
}
preMovie().then((m)=>console.log(`Person3:shows ticket`))
console.log('Person4:shows ticket')
console.log('Person5:shows ticket')