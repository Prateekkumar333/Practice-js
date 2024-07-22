const user = {
    username : "hitesh",
    price : 999,

    welcomeMessage : function(){
        console.log(`${this.username}, welcome to webiste`);
        console.log(this);
    }
}
// user.welcomeMessage()
// user.username = "sam"
// user.welcomeMessage()

// console.log(this);

// function chai(){
//     let username = "prateek"
//     console.log(this.username);
// }
// chai()


// const chai = function(){                     //this keyword will work in objects not functions and this talks about current context.
//     let username = "prateek"
//     console.log(this);
// }

// chai()





    // const chai = () => {                    
    //     let username = "prateek"
    //     console.log(this);
        
    // }

    // chai()



// const addTwo = (num1, num2) => {
//     return num1 + num2                           //and this is ixplicit
// }             

// const addTwo = (num1, num2) => num1 + num2   
// const addTwo = (num1, num2) => (num1 + num2)  //this is implicit return method of expressing arrow function.

const addTwo = (num1, num2) => ({username: "hitesh"})   




console.log(addTwo(3 , 4));



const myArray = [2,3,5,6,7]

myArray.forEach()