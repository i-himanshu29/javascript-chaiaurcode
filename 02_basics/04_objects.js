//objects ->Now Singleton

const tinderUser= new Object()
console.log(tinderUser)
// or 

// const tinderUser = {}

tinderUser.id = "123abc"
tinderUser.name = "Himanshi"
tinderUser.isLoggedIn=false;
console.log(tinderUser);

const regularUser ={
    email:"some@gmail.com",
    fullname:{
        userfullname:{
            firstname:"Himanshu",
            lastname:"Maurya"
        }
    }
}
console.log(regularUser.fullname.userfullname.firstname)

const obj1={1:"a",2:"b"}
const obj2={3:"a",4:"b"}
const obj4={5:"a",6:"b"}

// const obj3={obj1,obj2};
// or 
// const obj3 = Object.assign({},obj1,obj2)
// const obj3 = Object.assign({},obj1,obj2,obj4)
// or 
const obj3= {...obj1,...obj2}
console.log("obj3->",obj3);


// database se value ayegi tab

const users=[
    {
        id:1,
        email:"himanshu@gmail.com"
    },
    {
        id:2,
        email:"himanshu@gmail.com"
    },
    {
        id:3,
        email:"himanshu@gmail.com"
    }
]

users[1].email
console.log("........",tinderUser)

console.log(Object.keys(tinderUser))
console.log(Object.values(tinderUser))
console.log(Object.entries(tinderUser))

console.log(tinderUser.hasOwnProperty('isLoggedIn'))
console.log(tinderUser.hasOwnProperty('isLogged'))


// ********************************
console.log("*********************")
const course ={
    coursename:"js in hindi",
    price:"999",
    courseInstructor:"Hitesh"
}
// course.courseInstructor
// or 
const {courseInstructor} = course
console.log(courseInstructor);
// OR 
const {courseInstructor:instructor} = course
console.log(instructor);

//object destructuring
// const navbar = ({company})=>{//destructuring

// }
// navbar(company="Hitesh")

//json.->view
// {
//     "name":"Himanshu",
//     "coursename":"js in hindi",
//     "price":"free"
// }

[
    {},
    {},
    {}
]

// understand -> by json formatter