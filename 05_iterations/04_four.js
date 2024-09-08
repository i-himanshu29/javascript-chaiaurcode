

console.log("1.****************************************");
const coding = ["java", "cpp","python","rust","js"]

coding.forEach((item)=>{
    console.log("items:",item);
})

const values = coding.forEach((item)=>{
    // console.log(item);
    return item;
})
console.log("value:",values); // undefined


console.log("2.****************************************");

const myNums = [1,2,3,4,5,6,7,8,9,10]
// myNums.filter((num)=>num>4)

// const newNums = myNums.filter((num)=>num>4)
// console.log("newNums a:",newNums);


//IMPORTANT -> scope open karte hai to return keyword ak use karna padega
//agar nhi open karte hai too aap directly use kar sakte hai "num>4"

const newNums = myNums.filter((num)=>{
     return num>4
})

console.log("newNums b:",newNums);

//...........
// another way 
// const myNum1 = [1,2,3,4,5,6,7,8,9,10]
const newNum = []
myNums.forEach((num)=>{
    if(num>4){
        newNum.push(num)
    }
})

console.log("newNum :",newNum);


//Eg.

console.log("3.*****************************************")
const books=[
    {title:'Book One',genre:'Fiction',publish:2009,edition:2024},
    {title:'Book Two',genre:'Science',publish:2001,edition:2014},
    {title:'Book Three',genre:'History',publish:2009,edition:2023},
    {title:'Book Four',genre:'Science',publish:2009,edition:2024},
    {title:'Book Five',genre:'Non-Friction',publish:2019,edition:2024},
    {title:'Book Six',genre:'Fiction',publish:2008,edition:2021},
    {title:'Book Seven',genre:'Science',publish:2004,edition:2024},
    {title:'Book Eight',genre:'History',publish:2007,edition:2018},
    {title:'Book Nine',genre:'Fiction',publish:2009,edition:2019},
    {title:'Book Ten',genre:'Science',publish:2012,edition:2020},
];

let userBooks = books.filter((bk)=>bk.genre==='History')
userBooks = books.filter((bk)=>{
    return bk.publish>=2000
})
console.log("userBooks a:",userBooks);

// or 
console.log("4.*****************************************")

userBooks = books.filter((bk)=>{
    return bk.publish>=1995 && bk.genre === "History"
})
console.log("userBooks b:",userBooks);



