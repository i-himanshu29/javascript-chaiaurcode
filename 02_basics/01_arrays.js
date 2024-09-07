//arrays
// shallow copy-A shallow copy of an object is a copy whose properties share the same references
// deep copy-A deep copy of an object is a copy whose properties do not share the same references
//
const myArray = [1,2,3,"Himanshu"]
console.log(myArray)
console.log(myArray[3]) // access the element

const myHeros=["shaktiman","naagraj"]

const myArr = new Array(1,2,3,4)
console.log(myArr[1])

//Array methods.....
myArr.push(6)
myArr.push(5);
myArr.pop();
console.log(myArr);//[ 1, 2, 3, 4, 6 ]

//unshift
myArr.unshift(9)
console.log("unshift : ",myArr); //[9,1,2,3,4,6]

myArr.shift()
console.log("shift : ",myArr); //[1,2,3,4,6]

console.log(myArr.includes(9)) //false
console.log(myArr.indexOf(2)) //1

const newArr = myArr.join();
console.log(myArr); //
console.log("join : ",newArr)//string with comma seperated //1,2,3,4,6
console.log(typeof newArr) // string

//slice and splice----------------------
console.log("A  : ",myArr); //[ 1, 2, 3, 4, 6 ]

const myn1 = myArr.slice(1,3) //index 1 and 2 include hoga 3 nhi hoga
console.log("myn1 : ",myn1) //[2,3]
console.log("B : ",myArr) //[ 1, 2, 3, 4, 6 ]

const myn2 = myArr.splice(1,3)
console.log("C : ",myArr) //[1,6]
console.log("myn2 : ",myn2); //[ 2, 3, 4 ]

//Splice -> original array ko manipulate karta hai

//WRONG ANS-> splice range ke last element ko include karta hai
