const promiseOne = new Promise(function(resolve,reject){
    //Do an async talk
    // db calls, cryptography , network calls
    setTimeout(function(){
        console.log('async task is complete');
        resolve()
        
    }, 1000)
})

promiseOne.then(function(){
    console.log("promise consumed");
    
})

new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log("Async task 2");
        resolve()
    }, 1000)
}).then(function(){
    console.log("Async 2 resolved");
    
})


const promiseThree = new Promise(function(resolve , reject){
    setTimeout(function(){
        resolve({username: "chai", email: "chai@chaiaurcode.com"})
    }, 1000)
})

promiseThree.then(function (user) {
    console.log(user);
    
})


const promiseFour = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = true
        if (!error) {
            resolve({username: "prateek", password: "123"})
        } else {
            reject("ERROR : Something went wrong")
        }
        
    }, 1000)
})

promiseFour.then((user) => {
    console.log(user);
    return user.username
}).then((username)=> {
    console.log(username);
    
}).catch(function(error){
    console.log(error);
    
}).finally(() => console.log("then promise is either resolved or rejected"))



const promiseFive = new Promise (function(resolve,reject){
    setTimeout(function(){
        let error = true
        if (!error) {
            resolve({username: "javaScript", password: "123"})
        } else {
            reject("ERROR : JS went wrong")
        }
        
    }, 1000)
})

async function consumePromiseFive() {
    try {
        const response = await promiseFive
        console.log(response);
    } catch (error) {
        console.log(error);
        
    }
    
}
consumePromiseFive()



// async function gettAllUsers (){
//     try {
//         const response = await fetch('https://jsonplaceholder.typicode.com/users')
//         const data = await response.json()
//         console.log(data);
        
        
//     } catch (error) {
//         console.log("E: error");
        
//     }
    
// }

// gettAllUsers()


fetch('https://api.github.com/users/Prateekkumar333')
.then((response)=> {
    return response.json()
})
.then((data) => {
    console.log(data);
    
})
.catch((error) => console.log(error))


