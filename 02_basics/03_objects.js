// singleton -> literal se singleton nhi bnta hai
// -> constructor se singleton bnta hai 
// Object.create 

//object literals

//-symbol
const mySym = Symbol("key1")

const jsUser = {
    name:"Himanshu",
    "fullName":"Maurya",
    // mySym:"myKey1",// symbol cannot be decleared like this
    [mySym]:"myKey1",
    age:22,
    location:"Gurgaon",
    email:"sde.himanshu@gmail.com",
    isLoggedIn:false,
    lastLoggedinDays:["Monday","Saturday"]
}

console.log(jsUser.email) //sde.himanshu@gmail.com
//or second way of accessing element from object
console.log(jsUser["email"]) //sde.himanshu@gmail.com
console.log("yoo : ",jsUser["fullName"])// do access by this method //Maurya

// console.log(jsUser.mySym) //undefined
console.log(typeof jsUser.mySym) //undefined
console.log( "yaap : ",jsUser[mySym])

jsUser.email= "hey.himanshu@gmail.com";
// Object.freeze(jsUser)
jsUser.email = "himanshu@gmail.com";
console.log("object : ",jsUser);

jsUser.greeting = function(){
    console.log("Hello js user")
}
// console.log(jsUser.greeting);//undefined
// console.log(jsUser.greeting());

jsUser.greetingTwo = function(){
    console.log(`Hello js user,${this.name}`)
}
console.log(jsUser.greeting());
console.log(jsUser.greetingTwo());