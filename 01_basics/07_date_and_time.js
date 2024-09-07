// Dates ........................
let myDate = new Date()
console.log(myDate);
// console.log("tostring : ",myDate.toString()); // date in this format-- Tue Aug 06 2024 17:12:41 GMT+0530 (India Standard Time)
// console.log("dateString : ",myDate.toDateString()); // format --- Tue Aug 06 2024
// console.log("toLocalString : ",myDate.toLocaleString()); // format -- 6/8/2024, 5:15:02 pm
// console.log("toLocaleTimeString : ",myDate.toLocaleTimeString());  //format-- 5:17:16 pm
// console.log("getTimezoneOffset : ",myDate.getTimezoneOffset()); //formet--   -330

console.log(typeof myDate);


// let myCreatedDate = new Date(2023, 1, 23) 
// let myCreatedDate = new Date(2023, 1, 23,5,3) //23/2/2023, 5:03:00 am
// let myCreatedDate = new Date("2023-01-14")   //14/1/2023, 5:30:00 am
let myCreatedDate = new Date("01-14-2023")
// console.log(myCreatedDate.toDateString())
console.log("hiii : ",myCreatedDate.toLocaleString()) 

let myTimeStamp = Date.now()
console.log("myTimeStamp : ",myTimeStamp) //1722946443608
console.log(myCreatedDate.getTime())
console.log(Math.floor(Date.now()/1000));

let newDate = new Date()
console.log("newDate : ",newDate);
console.log(newDate.getMonth()+1);
console.log(newDate.getDay());

//string interpolation - backticks `${newDate.getDay()} and the time`

newDate.toLocaleString('default',{
    weekday:"long",
})
//shortcut- ctrl+space => all methods
