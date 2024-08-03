function setUserName(username) {
    //complex db calls
    this.username = username
    console.log("called");
    
}

function createUser(username, email, password) {
    setUserName.call(this, username)

    this.email=email
    this.password=password

}

const chai = new createUser("chai", "chai@mail","123")
console.log(chai);
