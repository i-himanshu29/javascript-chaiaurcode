const score =400;

const balance = new Number(100)
// console.log(balance); // [Number:100]
// console.log(balance.toString().length); //3
// console.log(balance.toFixed(2)); //100.00

// const otherNumber = 23.8966
// console.log(otherNumber.toPrecision(3)) //23.9

// const otherNumber = 123.8966
// console.log("otherNumber",otherNumber.toPrecision(3)) //124

// const otherNumbers = 1123.8966
// console.log(otherNumbers.toPrecision(3)) //1.12e+3

// const otherNumber1 = 123.8966
// console.log(otherNumber1.toPrecision(4))//123.9

// const hundreds = 100000000000
// console.log(hundreds.toLocaleString('en-IN'));

// ************************MATHS******************
console.log("Maths part................")
console.log("Math : ",Math);// check this on browser it give more idea
console.log("Math.abs(-4) : ",Math.abs(-4)); //4
console.log("Math.round(4.3) : ",Math.round(4.3)); //4
console.log("Math.ceil(4.6) : ",Math.ceil(4.6)); //5
console.log("Math.floor(4.6) : ",Math.floor(4.6)); //4
console.log("Math.min(4,3,6,8) : ",Math.min(4,3,6,8)); //3
console.log("Math.max(4,3,6,8) : ",Math.max(4,3,6,8)); //8

console.log("ab dekho",Math.random());//kuch bhi
console.log("(Math.random()*10)+1 : ",(Math.random()*10)+1); // dot ek digit right aa jata hai
// console.log((Math.random()*10)+1);
console.log("Math.floor(Math.random()*10)+1 : ",Math.floor(Math.random()*10)+1); 
console.log("Math.ceil(Math.random()*10)+1 : ",Math.ceil(Math.random()*10)+1);

//IMP----
const min =10;
const max =20;
console.log("imp",Math.floor(Math.random()*(max-min+1))+min) //random no. ayega