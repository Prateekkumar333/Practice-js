// const tinderUser = new Object(
    
const tinderUser = {}

tinderUser.id = "123abc"
tinderUser.name= "Sammy"
tinderUser.isLoggedIn = false

// console.log(tinderUser);

const regularUser = {
    email: "some@gmail.com",
    fullname:{
        userfullName:{
            firstName: "hitesh",
            lastName: "kumar",
        }
    }
}
// console.log(regularUser.fullname.userfullName.firstName);

const obj1 = {1: " a ", 2: "b"}
const obj2 = {3: " a ", 4: "b"}
const obj3 = {5: " a ", 6: "b"}


// const obj3 = { obj1, obj2};
// const obj4 = Object.assign({} ,obj1,obj2,obj3)

const obj4 = {...obj1, ...obj2, ...obj3} // this is spread operator glass toot gaya

// console.log(obj4);

const users = [
    {
        id: 1,
        email:"h@gmail.com",
    },
    {
        id: 1,
        email:"h@gmail.com",
    },
    {
        id: 1,
        email:"h@gmail.com",
    },
]

users[1].email

// console.log(tinderUser);

// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));

// console.log(tinderUser.hasOwnProperty("isLoggedIn"));



const course = {
    courseName:"js in hindi",
    price: "999",
    courseInstructor: "hitesh"
}

// course.courseInstructor

const {courseInstructor: instructor} = course
console.log(instructor);

// {
//     "name": "prateek",
//     "coursename": "js in hindi",
//     "price" : "free"
// }
