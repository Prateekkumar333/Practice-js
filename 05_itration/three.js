// for of

const arr = [ 1,2,3,4,5, "what"]

for (const num of arr) {
    // console.log(num);
}

let greetings = "hellow world! "
for (let greet of greetings) {
    if ( greet == " ") {
        // console.log("there is space so i am breaking this string");
        break
    }
    // console.log(greet);
}


// Maps

// const map = new Map()
// map.set("IN" , "India")
// map.set("UN" , "United State of America")
// map.set("FR" , "France")
// map.set("IN" , "India")

// console.log(map);

// for (const key of map) {
//     console.log(key);
// }

// const myObject = { 
//     game1 : "nfs",
//     game2 : "spiderman"
// }

// for (const [key, vlaue] of myObject) {
//     console.log(key);
// }

const map = new Map()
map.set("IN" , "India")
map.set("UN" , "United State of America")
map.set("FR" , "France")
map.set("IN" , "India")



for (const key in map) {
    console.log(key);
}
