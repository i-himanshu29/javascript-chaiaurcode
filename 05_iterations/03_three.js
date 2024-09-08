
// for of *******************************
console.log("1.for of*******************")

// ["","",""]
// [{},{},{}]


// for (const iterator of object) {
//
// }

const arr= [1,2,3,4,5]

for(const num of arr){
    console.log(num);
}

console.log("2*********************");
const greetings = "Hello world!"
for(const greet of greetings){
    console.log(`Each char is ${greet}`)
}


// Maps---------------------------------------------------
console.log("3.Maps*********************");
const map = new Map()
map.set('IN', "India");
map.set('USA',"United State of America")
map.set('Fr',"France")
map.set('IN',"India")

console.log(map); // return an object which is passed in set
console.log("4***************************");
for(const key of map){
    console.log("through key",key); 
}

console.log("5***************************");
for(const [key,value] of map){
    console.log(key,':-',value);
}

console.log("6***********************");

// const myObj = {        // This is not iterable
//     'game1':"NFS",
//     'game2':'Spiderman'
// }

// or 

// const myObj = {
//     game1:"NFS",
//     game2:'Spiderman'
// }

// for(const [key,value] of myObj){ // myObj that is obj not iterable but yes map is iterable
//     console.log(key,':-',value);
// }

// ***********************************************

console.log("7.for in*******************************")
const myObject = {
    js:"Javascript",
    cpp:'C++',
    rb:'ruby',
    swift:"swift by app"
}

//for in 

for (const key in myObject) {
   console.log("a:",`${key} shortcut is for ${myObject[key]}`) // Print the whole object one by one
}

const programming = ["js","rb","py","java","cpp"]
for(const key in programming){ 
    console.log("b:",key)//  we find index over there
}

for(const key in programming){
    console.log("c:",programming[key]);// we find values of index over there
}

console.log("8.*******************************")

const map1 = new Map()
map1.set('IN', "India");
map1.set('USA',"United State of America")
map1.set('Fr',"France")
map1.set('IN',"India")

for(const key in map1){//not iterable on map like this in (for in loop ) whereas it can be in (for of loop)
    console.log("..................",key);
}

// *****************************************************

//for each.....
console.log("9.for each *********************************");

const coding = ["js", "ruby","java","cpp","python"]

// coding.forEach(function name(){})// ye normal function hai
coding.forEach( function (item){ //yaha  function ka naam nhi likhte  -> callback function
    console.log("item:",item);
})

coding.forEach((item)=>{
    console.log("arrow function:",item);
})//callback function with arrow function

console.log("10.for each- way2 *********************************");

function printMe(item){
    console.log("D:",item);
}
coding.forEach(printMe)

coding.forEach((item,index,arr)=>{
    console.log("printItemIndexArr:",item,index,arr);
})

console.log("11.for each- way2 different senario*********************************");

const myCoding =[
    {
        languageName :"javascript",
        languageFileName:"js"
    },
    {
        languageName :"javascript1",
        languageFileName:"js1"
    },
    {
        languageName :"javascript2",
        languageFileName:"js2"
    },
    {
        languageName :"javascript3",
        languageFileName:"js3"
    }
]
myCoding.forEach((item)=>{
    console.log("itemLanguageName:",item.languageName);
})


