// object leteral

// const user = {
//     username: 'hitesh',
//     loginCount : 8,
//     signedIn : true,

//     getUserDetails: function(){
//         // console.log(`username: ${this.username}`);
//         // console.log(this);
        
        
//     }
// }
// console.log(user.username);
// console.log(user.getUserDetails());

//constructor function

// const promiseOne = new Promise()
// const date = new Date()

function user(username, loginCount, isLoggedIn) {
    this.username = username;
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn;

    this.greeting = function () {
        console.log(`welcome ${this.username}`);
        
    }

    return this
}

const userOne = new user("hitesh", 12, true)
const userTwo = new user("chaiAurCode", 11, false)
console.log(userOne.constructor);
// console.log(userTwo);
