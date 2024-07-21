let myDate = new Date()
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toLocaleString());
// console.log(typeof myDate);

//let myCreatedDate = new Date(2024, 4, 23);
// let myCreatedDate = new Date(2024, 4, 23, 5, 3);
let myCreatedDate = new Date("2024-05-23");
// console.log(myCreatedDate.toLocaleString());

let dateToday = new Date()
// console.log(dateToday.toDateString())





// let myTimeStamp = Date.now()
// // console.log(myTimeStamp);
// // console.log(myCreatedDate.getTime());
// console.log(Math.floor(Date.now()/1000));


let newDate = new Date()
// console.log(newDate);
// console.log(newDate.getMonth());
// console.log(newDate.getDay());

let sentence = `On ${newDate.getDay()} i have started learning javaScript and date was ${newDate.toDateString()}. `
console.log(sentence);

let dateNew = newDate.toLocaleString('default', {
    weekday:"short",
    month:"2-digit"
})
console.log(dateNew)