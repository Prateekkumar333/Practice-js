// array

const myArr = [0, 1, 2, 3, 4, 5,]
const myHeros = ["shaktiman", "naagraj", "superman"]


const myArr2 = new Array(1,2,3,4)



// console.log(myArr2)


// Array methods

// myArr.push(6) //to add some value
// myArr.push(7) //to add some value

// myArr.pop()  // to just remove last value



myArr.unshift(9) // to add some value on the 0 index or starting
myArr.shift(9) // to remove some value on the 0 index or starting

// console.log(myArr.includes(9))
// console.log(myArr.indexOf(9))


// const newArr = myArr.join()


// console.log(myArr);
// console.log(typeof newArr);



// slice, splice

console.log("A", myArr);

const myn1 = myArr.slice(1 , 3)

console.log (myn1);
console.log("B", myArr);

const myn2 = myArr.splice(1, 3)
console.log("c", myArr)
console.log(myn2);

// the main difference between slice and splice method is 1st point - slice does not include last range given but splice includes
                                                        //2nd point - slice does not manuplate original array but splice remove the elements from original array of whatever the range is given.