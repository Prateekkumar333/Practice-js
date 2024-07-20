const score = 400
// console.log(score);

const balance = new Number(100)
// console.log(balance);

// console.log(balance.toString().length);
// console.log(balance.toFixed(2));

const otherNumber = 123.8966

// console.log(otherNumber.toPrecision(4));

const hundreds = 1000000
// console.log(hundreds.toLocaleString('en-IN'));

// ************************** Maths ***********************************

// console.log(Math);
// console.log(Math.abs(-4));
// console.log(Math.round(4.53));
// console.log(Math.ceil(4.53));
// console.log(Math.floor(4.53));
// console.log(Math.min(4, 3, 6));

console.log(Math.random());// this give always number like 0.1, 0.2 , 0.7
console.log((Math.random()*10) + 1);// *10 shifts the value to the left //1 is added to not get the value 0 

const min = 10 
const max = 20 // In some cases you have to define min and max

console.log(Math.floor(Math.random() * (max - min + 1 )) + min )
