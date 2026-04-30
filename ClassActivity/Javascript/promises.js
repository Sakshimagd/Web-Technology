//promises - a promises is an object that represent future result of an asynchronous operation.
//promises means i promise to give result later
//promses has 3 steps - 1> pending - wait , 2> resolve - success, 3>rejected
//ex. -pending
  //      |
 // resolve or rejected

const { resolve } = require("node:dns");

 //syntax
 let myPromise = new Promise((resolve , reject) => {
    let success = true;
    if(success){
        resolve("data fetch");
    }
    else{
        reject("error")
    }
 })

 myPromise.then((result) => {
    console.log(result)
 }).catch((error) =>{
        console.log(error)
        
    })

//activity - why promises is better than callback

const p1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log("async task completed");
        resolve()

    },3000);
}

)

const p3 = new Promise((resolve, reject) =>{
    setTimeout(() => {
        resolve({userName : "sakshi", id : 3})
    })
})
p3.then((user) => {
    console.log(user);
    
})

//create 4 promises examples -1.variavle true then display object else error, 2>async promises,function promises , 3,4,> two any simple example


