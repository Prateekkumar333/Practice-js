// let myName = "hitesh     "
// let myChannel = "chai     "

// console.log(myName.trueLength);


let myHeros = ["thor", "spiderman"]

let heroPower = {
    thor: "hammer",
    spiderman: "sling",
    
    getSpidePower: function () {
        console.log(`Spidy power is ${this.spiderman}`);
        
    }
}

Object.prototype.hitesh = function () {
    // console.log(`hitesh is present in all objecsts`);
    
}

Array.prototype.heyHitesh = function(){
    // console.log(`hitesh says hello`);
    
}

// heroPower.hitesh()
// myHeros.hitesh()


// myHeros.heyHitesh()
// heroPower.heyHitesh()


// inheritance

const user = {
    name: "chai",
    email: "chai@gmail.com"
}

const teacher = {
    makeVidio : true
}

const teachingSupport = {
    isAvailable : false
}

const TASuport = {
    makeAssignment : `js assignment`,
    fullTime : true,
    __proto__: teachingSupport
}

teacher.__proto__ = user


// modern syntex

Object.setPrototypeOf(teachingSupport, teacher)





let anotherUserName = "chaiaurcode     "

String.prototype.trueLength = function(){
    console.log(`${this}`);

    console.log(`True lengh is: ${this.trim().length}`);
    
}

anotherUserName.trueLength()

"hitesh".trueLength()
"prateek".trueLength()
