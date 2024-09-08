const user = {
    username:"Himanshu",
    price:999,
    welcomeMessage:function(){
        //this keyword is refer current context
        console.log(`${this.username}, welcome to website`)
        console.log("this : ",this)
    }

}
user.welcomeMessage()

user.username ="sam"
user.welcomeMessage()

console.log("this2 : ",this) // {} //agar browser me karenge to window object aayega jo ki global hai 

function chai(){
    console.log("this3 : ",this);
}

function chai(){//abhi tak hum object me hi 'this' acces kar pa raha hu na ki function me
    let username = "hitesh"
    console.log("chai : ",this.username);
}
chai()


// ......way1------arrow function

const chai1 = function (){
    let username1 = "hitesh"
    console.log("1========= : ",this);
    console.log("2========= : ",this.username1);
}
chai1()  // ise bhi nhi pata 'this' kya hai


// way2--------------arrow function

const chai3 = () => {
    let username = "Hitesh"
    // console.log(this.username);
    console.log("this1 : ",this)
}

chai3()////HENCE arrow function ko bhi nhi pata kya hai 'this'

//.........
console.log("Arrow.............................:")
const addTwos = (num1,num2)=>{  // curly baracket me wrap karne par return keeyword use karna padta hai
    return num1+num2//explicit return
}
console.log("addTwos : ",addTwos(3,4))

// const addTwos = (num1,num2)=>num1+num2 // without curly bracket me return keyword nhi use karna padta 
// or 
const addTwo = (num1,num2)=>(num1+num2)//implicit return 
console.log(addTwo(3,4))

// IMP-----object return karna ho too 
const addTwo1 = (num1,num2)=>({username:"himanshu"})
console.log(addTwo1(3,4))

