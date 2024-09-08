
// ***********************************************************
console.log("Switch case..............")
// switch case 

// switch(key){
//     case value:

//         break;

//     default:
//         break;
// }

const month = 3
switch(month){
    case 1:
        console.log("Jan");
        break;// control flow ko break kar deta 
    case 2:
        console.log("Feb");
        break;
    case 3:
        console.log("Mar")
        break;
    case 4:
        console.log("April");
        break;
    default:
        console.log("default case match");
        break;
}

// Switch me ek baar jaha case match ho gyaya uske baad ka sara ka saara
// code match karta hai expect default 

const Month ="March"
switch(Month){
    case "Jan":
        console.log("Jan");
        break;// control flow ko break kar deta 
    case "Feb":
        console.log("Feb");
        break;
    case "March":
        console.log("Mar")
        break;
    case "April":
        console.log("April");
        break;
    default:
        console.log("default case match");
        break;
}

