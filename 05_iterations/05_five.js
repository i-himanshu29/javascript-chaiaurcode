
console.log("1.********************************");
const myNumbers = [1,2,3,4,5,6,7,8,9,10];

const newNum=myNumbers.map((num)=>num+10)
//  or 
// const newNums=myNumbers.map((num)=>{ return num+10})
console.log("newNums:",newNum);

console.log("2.********************************");

// chaining--------------------------------------
const newNums = myNumbers
                .map((num)=>num*10)
                .map((num)=>num+1)

console.log("newNums b:",newNums);


const newNums1 = myNumbers
                .map((num)=>num*10)
                .map((num)=>num+1)
                .filter((num)=>num>=40)

console.log(newNums1);


// *********************************************************************
// Reduce method -> reduce() 
// shopping cart wagarh me use karte hai sum karne ke liye 
//ACCUMULATOR -> 
console.log("3.Accumulator -> reduce()*****************************")

const myNums = [1,2,3]
// (accumulator,currVal,Initial value)
const myTotal = myNums.reduce(function (acc,currVal) {
    console.log(`acc: ${acc} and currVal :${currVal}`);
    return acc+currVal
},0) // accumulator ko jo bhi value dete ho comma ke baad wo value aa jaati hai
console.log("myTotal:",myTotal);


//Try to WRITE with arrow function
const myTotal1 = myNums.reduce((acc,curr)=>acc+curr,0)
console.log("myTotal1:",myTotal1);

const shoppingCart = [
    {
        itemName:"js course",
        price:2999
    },
    {
        itemName:"py course",
        price:3999
    },
    {
        itemName:"mobile course",
        price:7999
    },
    {
        itemName:"Data Science course",
        price:9999
    },
]


const priceToPay = shoppingCart.reduce((acc,item)=>acc+item.price,0)

console.log("priceToPay",priceToPay);