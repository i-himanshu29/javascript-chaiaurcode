
console.log("*********************",Math.PI);

// We want that the value of pi is become 5 -> first thing came in mind to overwite the value like
Math.PI = 5;
console.log("Math.PI",Math.PI);


const descripter =  Object.getOwnPropertyDescriptor(Math,"PI")
console.log("descripter : ",descripter); //writable: false,
                        // enumerable: false,
                        // configurable: false


// obj decleration.
const chai = {
    name :'ginger chai',
    price:250,
    isAvailable:true,

    orderChai: function(){
        console.log("chai nhi bni")
    }
}
// console.log(chai)
console.log(Object.getOwnPropertyDescriptor(chai,"name"));////writable: true,
                                                            // enumerable: true,
                                                            // configurable: true

 
//property define bhi kar sakte hai                                                            
Object.defineProperty(chai,'name',{
    writable: false,
    enumerable: false
})
console.log(Object.getOwnPropertyDescriptor(chai,"name"));////writable: true,

// for-of loop --

// for (const iterator of object) {
// 
// }

// for (const [key,value] of chai) {
//     console.log(`${key}:${value}`);
// }


for (let [key,value] of Object.entries(chai)) {
    if(typeof value!=='function'){
        console.log(`${key}:${value}`);
    }
    console.log(`${key}:${value}`);
}