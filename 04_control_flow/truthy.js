// *********************************************************

// Truthy and Falsy Value 

// const userEmail = "himanshu@gmail.com"
// const userEmail = ""
const userEmail = []
if(userEmail){
    console.log("Got the email")
}else{
    console.log("Don't have user email")
}


//Falsy values -> false , 0 , -0 , BigInt 0n , "" , null , undefined , NaN
//Truthy values -> true , "0" , 'false' , " " , [] , {} , function(){} 

if(userEmail.length===0){
    console.log("Array is empty:")
}

const emptyObj = {}
if(Object.keys(emptyObj).length===0){
    console.log("Object is Empty");
}

false == 0 // true
false ==''// true
0==''// true


//--------------Nullish Coalescing Operator (??): null defined------------------

let val1;
// val1 = 5 ?? 10 // specially it uses when accessing the data from database 
// database se directly responsse nhi milta hai ..apko do values milti hai
//chances hai response null ya undefined aa jaye -> uss case me pura code 
// structure pareshaan ho sakta hai 
//iseliye ise bnaya gya hai
// value null ho to null assign kar lo taki mai uss hissab se case ko adjust kar lu
// value aa rhi hai too value adjust kar lo 

// console.log(val1);


val1 = null ?? 10
console.log("value : ",val1);

val1 = undefined ?? 15 
console.log("value2 : ",val1);

val1 = null ?? 10 ?? 20
console.log("value3 : ",val1);

// Ternary operator 

// condition ? true : false
const iceTeaPrice = 100;
iceTeaPrice <= 80 ? console.log("less than 80"): console.log("more than 80")