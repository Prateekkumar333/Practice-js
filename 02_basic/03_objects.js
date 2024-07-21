// there are two ways of declaring objects one is letteral ki tarah 2nd is constructor ki tarah

// constructor se bana hua object singleton banega letteral se nahi
//Object.create


//object literals


const mySym = Symbol("key1")



const jsUser = {
    name:"prateek",
    "full name": "prateek kumar",
    [mySym]:"mykey1",
    age: 18,
    location: "delhi",
    email:"prateek@google.com",
    isLoggedIn:false,
    lastLoginDays: ["monday", "saturday"]
}

// console.log(jsUser["full name"]);
// console.log(jsUser["email"]);
// console.log(typeof jsUser[mySym]);

jsUser.email = "prateek34@gmail.com"

// Object.freeze(jsUser)
jsUser.location = "udhog"
// console.log(jsUser)


// jsUser.greeting = function(){
//     console.log("hello js user")
// }
// console.log(jsUser.greeting());

jsUser.greeting2 = function(){
    console.log(`hello js user ${this["full name"]}`);
}

console.log(jsUser.greeting2());