// const newHero = ["Hulk","spiderman"]
// newHero 

// prototype- ye hi 'new' keyword ki working de rha hai aur 'classes' and 'this'
// prototype behaviour mtlb haar nhi maanna - jo mil gya wo sahi hai but aage bhi dekhta rahta hai this also called inheritance

//Is the function is object or not??
//Js me har ek chhej object hoti hi hai - function function bhi hai aur object bhi hai
// function me function ki properties function ki tarah behave karti hai
// lekin agar aap chahe to aap object ki tarah bhi behave kara sakte hai
// js har cheej ko uper se uper tak le ke jjati rahti hai jab tak null na mil jaye
//object ka prototype null hai
function multiplyBy5(num){
    // this.num = num  -> ye yaha rahta hai but show nhi hota reference lena padta hai
    return num*5
}
multiplyBy5.power = 2

console.log("a",multiplyBy5(5));
console.log("b",multiplyBy5.power);
console.log("c",multiplyBy5.prototype);

function createUser(username,score){
    this.username = username
    this.score = score
}

createUser.prototype.increment = function(){
    this.score++//this ka mtlb ' jis ka'
}
// isko context nhi pata tha ki kisene bulaya hai -> mtlb kiski value increment karni hai
// iseliye 'this' laga ke pata layaga ab uske paas chala jayega


createUser.prototype.printMe = function(){
    console.log(`score is ${this.score}`)
}

// const chai = createUser('chai',25)
// const tea = createUser("tea",250)

const chai = new createUser('chai',25)
const tea = new createUser("tea",250)

chai.printMe()


/*

Here's what happens behind the scenes when the new keyword is used:

A new object is created:
The new keyword initiates the creation of a new JavaScript object.

A prototype is linked:
The newly created object gets linked to the prototype property of the constructor function.
This means that it has access to properties and methods defined on the constructor's prototype.

The constructor is called:
The constructor function is called with the specified arguments and this is bound to the
newly created object. If no explicit return value is specified from the constructor,
JavaScript assumes this, the newly created object, to be the intended return value.

The new object is returned: 
After the constructor function has been called, if it doesn't return a non-primitive value
(object, array, function, etc.), the newly created object is returned.

*/