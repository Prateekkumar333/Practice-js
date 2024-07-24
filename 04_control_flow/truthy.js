const userEmail = [ ]

// if (userEmail){
//     console.log("got user email");
// } else {
//     console.log("dont have user eamial");
// }

// falsy values
//fasle , 0, -0, BigInt 0n, "", null, undefined, Nan

//truthy values
// "0", "false", " ",[], {}, function(){} and all the value which are not falsy values

if (userEmail.length === 0){
    console.log("Array is empty");
}


const emptyObj = {}

if (Object.keys(emptyObj).length === 0) {
    console.log("Object is empy");
}


// Nullish Coalescing Operator (??) : null underfined

let val1;
// val1 = 5 ?? 10
//val1 = null ?? 10
// val1 = undefined ?? 15
val1 = null ?? 10 ?? 15

console.log(val1);


// Terniary Operator

//condition ? true : false

const iceTeaPrice = 100
iceTeaPrice <= 80 ? console.log("less than 80") : console.log("more than 80")
