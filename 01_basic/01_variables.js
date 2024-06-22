const accountId = 14453
let accountEmail = "prateek@gmail.com"
var accountPassword = "12345"
accountCity = "delhi"

//accountId = 14422 //which is not allowed as value of const variable can't be changed
accountEmail = "prateek123@gmail.com"

accountPassword = "3333366"

accountCity = "jaipur"
console.table([accountEmail,accountPassword,accountCity])
/* Prefer not to use Var
because of issue in block scope and functional scope */