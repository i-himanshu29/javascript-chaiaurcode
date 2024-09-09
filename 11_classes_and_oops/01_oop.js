const user = {
    username:"Himanshu",
    loginCount:8,
    signedIn:true,

    getUserDetails:function(){
        // console.log("Got user details from databse");
        console.log(`Username :${this.username}`);
        // console.log(this);
    }
}

console.log(user.username);
console.log(user.getUserDetails());
// console.log(this)

//......

// const promiseOne = new Promise()
// const date = new Date()//new-> constructor hai-> jo ki allow karta hai ki ek hi object literal se multiple instances bna sakta hu

function User(username,loginCount,isLoggedIn){
    this.username= username// right wali value wo hai jo pass ki ja rhi hai and left wali value variable hai
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn

    //you can also write method , not necessary to write properties
    this.greeting = function(){
        console.log(`Welcome ${this.user}`);
    }

    return this
}

// const userOne = User("hitesh",12,true)
// const userTWO = User("ChaiAurCode",11,false)
// console.log(userOne);

const userOne =new User("hitesh",12,true)
const userTwo =new User("ChaiAurCode",11,false)
console.log(userOne);
console.log(userTwo);

console.log(userOne.constructor);

//** Study about instances */

// new -> 
//  1- Created an object
// 2- Constructor function call hota hai new keyword se
// 3- This keyword ke andar object inject ho jata hai 
// 4- Mil jata hai function ke andar

//If you don't want to write return this then there is no problem in the User