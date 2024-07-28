// reduce method

const myNums = [1, 2, 3]

// const myTotal = myNums.reduce(function (acc, currval){
//     console.log(` acc : ${acc} and currval : ${currval}`);
//     return acc + currval
// }, 0) 
// console.log(myTotal);


//arrow fucntion with reduce
// const myTotal = myNums.reduce( (acc, currval)=> acc + currval, 0 ) 
// console.log(myTotal);


const shoppingCart = [
    {
        itemName: "js course", 
        price: 2999
    },
    {
        itemName: "python course", 
        price: 999
    },
    {
        itemName: "mobile dev course", 
        price: 5999
    },
    {
        itemName: "data science course", 
        price: 12999
    }
]

const addingPriceOfCourses = shoppingCart.reduce((acc, currval)=>  acc + currval.price, 0)
console.log(addingPriceOfCourses);