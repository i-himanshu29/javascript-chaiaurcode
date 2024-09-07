let score = "23"

console.log(typeof score)
// or 
console.log(typeof(score));

let valueInNumber = Number(score)
console.log(typeof valueInNumber)

console.log(valueInNumber)


let score1 = "23abc"
console.log(typeof score1)
let valueInNumber1 = Number(score1)
console.log(typeof valueInNumber1)
// don't relay on number becoz if u check type of then it show number but actually  it is Not a Number (NaN)
console.log(valueInNumber1)


let score2 = null
console.log("typeof score2:",typeof score2)
let valueInNumber2 = Number(score2)
console.log("typeof valueInNumber2:",typeof valueInNumber2)
console.log("valueInNumber2:",valueInNumber2)


let score3 = undefined
console.log("typeof score3:",typeof score3)
let valueInNumber3 = Number(score3)
console.log("typeof valueInNumber3:",typeof valueInNumber3)
console.log("valueInNumber3:",valueInNumber3)

let score4 = true
console.log("typeof score4:", typeof score4)
let valueInNumber4 = Number(score4)
console.log("typeof valueInNumber4:", typeof valueInNumber4)
console.log("valueInNumber4:",valueInNumber4)

// "33" => 33
// "33abc"=>NaN 
// true => 1; false = 0

// let isLoggedIn = 1
// let isLoggedIn = 0
// let isLoggedIn = ""
let isLoggedIn = "himanshu"

let booleanIsLoggedIn = Boolean(isLoggedIn)
console.log("booleanIsLoggedIn:",booleanIsLoggedIn);

// 1=>true; 0 => false
// ""=>false
// "hitesh" =>true

let someNumber = 33
let stringNumber = String(someNumber)
console.log(stringNumber);
console.log(typeof stringNumber);


// ***********Operations*************
console.log("Operations..................");

let value = 3;
let negValue = -value
console.log(negValue);

console.log("2+2 : ",2+2); //4
console.log("2-2 : ",2-2) //0
console.log("2*2 : ",2*2) //4
console.log("2**3 : ",2**3);//8
console.log("2/3 : ",2/3)//0.66666666
console.log("2%3 : ",2%3);//2

let str1="Hello"
let str2 = "Himanshu"
let str3 = str1 + str2
console.log(str3)
console.log(str1+" "+str2); //Hello Himanshu
console.log("1"+2); //12
console.log(1+"2"); //12
console.log("1"+"2"); //12
console.log("1"+2+2);// 122
console.log(1+2+"3") //33

console.log((3+4) * 5 % 3);  //2

console.log(true); //true
console.log(+true); //1
console.log(+""); //0

// let num1, num2, num3;
// num1=num2=num3=2+2 

let gameCounter = 100
// gameCounter++;
++gameCounter;
console.log("gameCounter:",gameCounter); //101

// Refer : https://tc39.es/ecma262/multipage/abstract-operations.html#sec-abstract-operations