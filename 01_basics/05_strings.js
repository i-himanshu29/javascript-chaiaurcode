// Refer strings from mdn
const name= "Himanshu"
const repoCount = 20

// console.log(name +repoCount+"Value")//not recommended

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

// const gameName = new String('HimanshuGame')

const gameName = new String('Himanshu-Game')
console.log(gameName[0]); //H
console.log(gameName.__proto__); //{}

console.log(gameName.length); //13
console.log(gameName.toUpperCase()); //HIMANSHU-GAME
console.log(gameName.charAt(3))  //a
console.log(gameName.indexOf('a')) //3

//Discover all string methods

const newString = gameName.substring(0,4) // last index "4" include nhi hota
console.log(newString) // Hima

// const anotherString = gameName.slice(0,4)
// console.log(anotherString); //Hima

const anotherString = gameName.slice(-10,6)// you can also give neg value (reverse se start hota hai)
console.log(anotherString); // ans

const newStringOne="  Himanshu   "
console.log(newStringOne); 
console.log(newStringOne.trim());//work only on spaces/white  // remove space
// trimstart and trimend are also there
const url = "https://hitesh.com/hitesh%20choudhary"//%20 -> space 
console.log(url.replace('%20','_')) // https://hitesh.com/hitesh_choudhary

console.log(url.includes('hitesh')); // true
console.log(url.includes('sundar')); //false

// convert string to arrays 
const gameName1 = new String('Himanshu-Game-Tic-Tac-Toe')
console.log(gameName1.split('-')) // ['Himanshu','Game','Tic','Tac','Toe']