const accountId = 144234 
let accountEmail = "Himanshu@gmail.com"
var accountPassword = "12345"
accountCity = "Gurgaon"
let accountState;

// accountId = 2 //const keyword can't be changed - not allowed
// variable can be decleared by two methods 
// let and var
// always use let becoz it have not problem with the scope.
// Prefer not to use var becoz of issue in block scope and functional scope
accountEmail = "him@gmail.com"
accountPassword="4445"
accountCity = "Bengaluru"
console.log(accountId);

//Either you can use console.log one by one or You can write as console.table
console.table([accountId,accountEmail,accountPassword,accountCity,accountState])
