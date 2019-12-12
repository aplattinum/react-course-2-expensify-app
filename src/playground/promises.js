const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("This is my resolved data")
        // resolve("This is other data")
        //reject("Something went wrong")
    }, 3000)
})



console.log("Before")
 
promise.then((data) => {
    console.log("1", data)
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("This is my other promise")
            // resolve("This is other data")
            //reject("Something went wrong")
        }, 3000)
    })
}).then((str) => {
    console.log('does this run?', str);
}).catch((error) => {
    console.log("error", error)
})


console.log("after")