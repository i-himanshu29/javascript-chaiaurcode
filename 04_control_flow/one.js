//IF
const isUserloggedIn = true;
const temperature = 41
// if(condition){ // condition true hogi tab hi if ke andar jayenge
//    console.log("true...")
// }
if(temperature < 50){
    console.log("less than 50");
}
 
// <, >, <=, >=, ==, !=, ===, !==,
// &&  and  ||

// if(true){
// 
// }else if(true){
//     console.log("...")
// }else{
//     console.log("...")
// }

const score = 100
if(score>90){
    let power = "fly";
    console.log(`user power:${power}`)
}

//   &&->and , ||->or 

const userLoggedIn = true
const debitCard = true
const loggedInFromGoogle = false
const loggedInFromEmail = true

if(userLoggedIn && debitCard){
    console.log("Allow to buy course");
}

if(loggedInFromGoogle || loggedInFromEmail){
    console.log("user logged in")
}