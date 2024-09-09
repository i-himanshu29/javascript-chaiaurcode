//create promise
const promiseOne= new Promise(function(resolve,reject){
    // Do an async task-
            // DB calls, cryptography, network
            setTimeout(function(){
                console.log('Async task is complete');
                resolve()// jaise hi resolve execute hoga waise hi .then se connect hoga -jo neeche code likha hai
            },1000)
})
//now consume promise
promiseOne.then(function(){
    console.log("Promise consumed")
})

new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log("Async task 2")
        resolve()
    },1000)
}).then(function(){
    console.log("Async 2 resolve")
})

// promise three ------------------------------
const promiseThree = new Promise(function(resolve,reject){
    setTimeout(function(){
        resolve({username:"chai",email:"chai@example.com"})
    },1000)
})

promiseThree.then(function(user){
    console.log(user);
})


// promise four------------------------------
const promiseFour = new Promise(function(resolve,reject){
    setTimeout(function(){
        // let error = true //- apply one by one
        let error = false
        if(!error){
            resolve({username:"hitesh",password:"123"})
        }else{
            reject('ERROR:Something went wrong')
        }
    },1000)
})


promiseFour.then((user)=>{
    console.log(user);
    return user.username
}).then((username)=>{
    console.log(username)
}).catch(function(error){
    console.log(error);
}).finally(()=>console.log("The promise is either resolved or rejected"))

// promise five----------------------------
const promiseFive = new Promise(function(resolve,reject){
    setTimeout(function(){
        let error = true
        // let error = false
        if(!error){
            resolve({username:"Javascript",password:"123"})
        }else{
            reject('ERROR:JS went wrong')
        }
    },1000)
});

// async function consumePromiseFive(){
//     const response = await promiseFive 
//     console.log(response);
// }
// consumePromiseFive()

// or 

async function consumePromiseFive(){
    try{
        const response = await promiseFive
        console.log(response);
    }catch(error){
        console.log(error);
    }
}
consumePromiseFive()

// async function getAllUsers(){
//     try{
//         const response = await fetch('https://jsonplaceholder.typicode.com/users')
//         // const data = response.json()// response.json ko hi change hone me time lagta hai to ise bhi await karna padega
//         const data = await response.json()
//         console.log(data)
//     }catch(error){
//         console.log("E:",error)
//     }
// }
// getAllUsers()

// or 

// .then .catch 
fetch('https://jsonplaceholder.typicode.com/users')
.then((response)=>{
    return response.json()
})
.then((data)=>{
    console.log(data);
})
.catch((error)=>console.log(error))


