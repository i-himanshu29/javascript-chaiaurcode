let myName = "Himanshu          "
// console.log(myName.length);
console.log(myName.trim().length);// Don't do this -> Low IQ

console.log(myName.trueLength);

let myHeros = ["thor","spiderman"]

let heroPower = {
    thor:"hammer",
    spiderman:"sling",

    getSpiderPower:function(){
        console.log(`spidy power is ${this.spiderman}`);
    }
}

Object.prototype.hitesh = function(){
    console.log('hitesh is present in all objects')
}

// heroPower.hitesh()
myHeros.hitesh()

Array.prototype.heyHitesh = function(){
    console.log(`Hitesh says hello`);
}

// heroPower.hitesh()
myHeros.hitesh()

myHeros.heyHitesh()
// heroPower.heyHitesh()// not accessiable

//inheritance--------------------------

const User = {
    name:"chai",
    email:"chai@google.com"
} 
const Teacher = {
    makeVideo:true
}

const TeachingSupport = {
    isAvailable:false
}

const TASupport = {
    makeAssignment : 'JS assignment',
    fullTime:true,
    __proto__:TeachingSupport
}

Teacher.__proto__=User

// modern syntax

Object.setPrototypeOf(TeachingSupport,Teacher)

let anotherUsername = "ChaiAurCode     "

String.prototype.trueLength = function(){
    console.log(`${this}`);
    console.log(`${this.name}`);
    console.log(`True length is:${this.trim().length}`);
}
anotherUsername.trueLength();
"hitesh".trueLength()
"iceTea".trueLength()