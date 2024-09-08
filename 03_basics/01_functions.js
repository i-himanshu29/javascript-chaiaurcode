function sayMyName(){
    console.log("H");
    console.log("I");
    console.log("M");
    console.log("A");
    console.log("N");
    console.log("S");
    console.log("H");
    console.log("U");
}
sayMyName();
// sayMyName; // this indicate reference

function addTwoNumber(num1,num2){//function ki definition bnate time jo bhi input lete hai use parameter bolte hai
    console.log(num1+num2)
}
addTwoNumber(3,4)//agruments inside breaket
addTwoNumber(3,null)
addTwoNumber(3,"4")
addTwoNumber(3,"a")

const result = addTwoNumber(3,5)
console.log("Result is:", result)

// function addTwoNum(num1,num2){
//     console.log(num1+num2);
// }
function addTwoNumbers(num1,num2){//parameter
    // let result=num1+num2;
    // return result;

    // or 

    return num1+num2;
}
const result2 = addTwoNumbers(4,7);
console.log("Results:",result2)
// addTwoNumbers(4,6)

function loginUserMessage(username="sam"){

    if(!username){
        console.log("Please enter the user name")
        return
    }

    // or 

    // if(username===undefined){
    //     console.log("Please enter the user name")
    //     return
    // }
    return `${username} just logged In`
}
// console.log(loginUserMessage("Himanshu"))
// console.log(loginUserMessage(""))
console.log(loginUserMessage())
console.log(loginUserMessage("Himanshu"))

// ****************************
console.log("*************************************************")
function calculateCartPrice(num1){
    return num1;
}
console.log("1 : ",calculateCartPrice(200,700,900))
console.log("1! : ",calculateCartPrice(200))
console.log("1!~ : ",calculateCartPrice(200,499))
console.log("1!~2 : ",calculateCartPrice(200,499,400,600,699))

function calculateCartPrice(...num1){//rest operator
    return num1;
}
console.log("2 : ",calculateCartPrice(200,700,900,800))
console.log("2! : ",calculateCartPrice(200,700))
console.log("2! : ",calculateCartPrice(200,700,899,766,455))

function calculateCartPrice(val1, val2, ...num1){
    return num1
}
console.log("calculateCartPrice : ",calculateCartPrice(200,700,900,700,800))
console.log("calculateCartPrice2 : ",calculateCartPrice(200,700,900,700))
console.log("calculateCartPrice3 : ",calculateCartPrice(200,700,900,700,800,1000,4999))

const user={
    username:"Himanshu",
    price:199
}
function handleObject(anyobject){
    console.log("Hey What's up1 : ",`Username is ${anyobject.username} and price is ${anyobject.price}`);
}
handleObject(user);

const user1={
    username:"Himanshu",
    prices:199
}
function handleObject(anyobject){
    console.log("Hey What's up2 : ",`Username is ${anyobject.username} and price is ${anyobject.price}`);
}
handleObject(user1);

//object directly bhi paas kar sakte the
handleObject({
    username:"sam",
    price:399
})

// arrays bhi pass kar sakte hai
console.log("arrays bhi pass kar sakte hai...............") 

const myNewArray = [200,400,100,600]
function returnSecondValue(getArray){
    return getArray[1]
}
console.log("returnSecondValue : ",returnSecondValue(myNewArray));
// or 
console.log("returnSecondValue2 : ",returnSecondValue([200,700,500,1000]));