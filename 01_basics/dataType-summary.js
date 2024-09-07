// JavaScript is a dynamic language and not static
// Primitive -> call by value
// 7 types: String , Number , Boolean , null , undefined , Symbol, BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false 
const outsideTemp = null
let userEmail;//undefined
const id = Symbol('123')
const anotherId = Symbol('123')

console.log("check",id===anotherId); //false

// const bigNumber = 344556675435567944
const bigNumber = 344556675435567944n

//Non Primitive -> Reference Type
// Array , Objects ,Functions 

const heros = ["shaktiman","naagraj","doga"];
//object
let obj = {
    name:"Himanshu",
    age:22,
}

const myfunction = function(){
    console.log("Jai Mata Di");
}
console.log("outsideTemp:",typeof(outsideTemp))
console.log("scoreValue:",typeof scoreValue)
console.log(typeof bigNumber);
myfunction();
console.log("function:",typeof myfunction)
console.log("anotherId:",typeof anotherId)




// *********************************************************************
// Stack (Primitive) Memory [copy] ,
//  Heap (Non-Primitive) [Reference -> changes on original value]

let myYoutubename="Himanshudotcom"

let anothername = myYoutubename
anothername = "chaiaurcode"

console.log("myYoutubename : ",myYoutubename);
console.log("anothername : ", anothername)

let userOne = {
    email:"user@google.com",
    upi:"user@ybl"
}

let userTwo = userOne

userTwo.email = 'himanshu@google.com'
console.log(userOne.email);
console.log(userTwo.email);

