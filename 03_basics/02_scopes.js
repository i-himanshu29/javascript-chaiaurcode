console.log("Scopes........................")
// let a =10;
// const b=20;
var c =3000
let a =1000
if(true){
    let a =10;
    const b =20;
    var c =30// ye var scope ke bahar bhi access ho raha hai that's a problem
    console.log("Inner a:",a)
}

console.log("outer a:",a)
// console.log(b) 
console.log("outer c:",c)//suppose someone define var c = 3000 outside the scope but when you access the c 
// you will find c =30 that is the value which is defined in the scope that's a problem
//That's the reason no one prefer var as a datatype..

// *******************************************

function one(){
    const username = "hitesh"

    function two(){
        const website = "youtube"
        console.log("username :",username);
    }
    // console.log(website); // out of scope

    two()
}
one()

// nested function hota hai too child function parent ke variable ko access kar pata hai 
// but parent function child ke variable ko access nhi kar pata hai

if(true){
    const username = "himanshu"
    if(username==="himanshu"){
        const website = "chaicode"
        console.log("username+website : ",username+website)
    }
    // console.log(website);//not access
}
// console.log(username);//not access

// +++++++++++++++++++++++++interseting+++++++++++++++++++++++++++++++
console.log(".........................")
// //way1---to represent function
function addone(num){
    return num+1
}
console.log("add-one : ",addone(5))
// //way2---to represent function
const addTwo = function(num){
    return num+2
}
console.log("add-two : ",addTwo(5))


console.log("ooh add-one : ",addoneA(5))//declearation se pahle access kar sakte iss way1-function me
function addoneA(num){
    return num+1
}

// console.log(addTwoA(5))//give error->declearation se pahle access nhi kar sakte iss way2-function me
const addTwoA = function(num){
    return num+2
}
