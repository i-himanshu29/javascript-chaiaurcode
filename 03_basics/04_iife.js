// Immediately Invoked Function Expressions (IIFE)

(function chai(){
    console.log(`DB CONNECTED`);
})();//explicitely ;-> semicolon lagate hai jisse neche wala function execute ho

// ()()// First parenthesis-function definition || second Parenthesis-> execution

(function chaicode(){//named IIFE
    console.log(`DB Connected Two`);
})();

// or 

// (()=>{
//     console.log(`DB Connected Two`);
// })()

((name)=>{
    console.log(`DB Connected Two ${name}`);
})('hitesh')


// IMP Line--
//IIFE  ->Jo function Immediately execute ho jaye
   //   ->Global Scope ke pollution se problem hoti hai kai baar ,
    // global scope ke variable ya declearation ko 
    //  ->hatane ke liye IIFE ka use karte hai