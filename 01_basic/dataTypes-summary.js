// On what base primitive and nonprimitive data types has catogorised ?
// ans: kiss tarah se memory me data stored hai and kiss tarah se unhe access kr sakte hai is base pe primitive and not primitive data types ko catogorised kiya gaya hai.

// Primitive 

// 7 types : String, Number, Boolean, null, undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = 100.3
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log (id === anotherId)


const bigNumber = 446546546546549878432067984313546546459878954564n

// why typeof null is object?
// ans: may be some mistake when it is designed.



// Reference (Non primitive) //there typeof is always objects typeof functions is also functionObject

// Array, Objects, Functions

const heros = ["shaktiman", "naagraj" , "doga"]
let myObj = {
    name :"prateek",
    age : 22,
}

const myFunciton = function(){
    console.log("Hello world");
}

console.log(typeof myFunciton)






// javaScript is statically typed language or dynamically type language ?
// ans: javaScript is dynamically typed language because we don't have to specify the type of data variable holds but in java and typeScript we have to specify like const number:number = 5 this is statically typed language.