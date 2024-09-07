const marvalHeros = ["thor", "ironman","spiderman"]
const dcHeros = ["superman","flash","batman"]

marvalHeros.push(dcHeros)
console.log(marvalHeros)
console.log(marvalHeros[3][1])

const allHeros=marvalHeros.concat(dcHeros)
console.log("allHeros : ",allHeros)

//spread operator 
const allNewHeros = [...marvalHeros,...dcHeros]
console.log("allNewHeros : ",allNewHeros) //[ 'thor', 'ironman', 'spiderman', 'superman', 'flash', 'batman' ]

const anotherArray = [1,2,3,[4,5,6],7,[6,7,[4,5]]]
const realAnotherArray = anotherArray.flat(Infinity)//flat me depth fill karte hai...like 1, 2, 3, ... , infinity
console.log("realAnotherArray : ",realAnotherArray) //  [
                                                    //     1, 2, 3, 4, 5,
                                                    //     6, 7, 6, 7, 4,
                                                    //     5
                                                    //   ]

console.log("Hitesh : ",Array.isArray("Hitesh")) //false
console.log(Array.from("Hitesh")) // ['H','i','t','e','s','h' ]
console.log(Array.from({name:"Hitesh"}))//interesting //[]

let score1 = 100;
let score2 = 200;
let score3 = 300;

console.log(Array.of(score1,score2,score3))//Returns a new array from a set of elements. //[100,200,300]