function SetUsername(username){
    //complex DB calls
    this.username = username
    console.log("called",username)
    console.log("called1",this)
}

function createUser(username,email,password){
    // SetUsername(username)  // ye fn call nhi hua hai Hence use 'call' Keyword
    // SetUsername.call(username)// call-> is used to hold the reference
    SetUsername.call(this.username)// ye apna "this" use nhi kar raha hai ..ye mera wala "this" use karega 
    this.username=username//.....added by me
    this.email = email
    this.password = password
}

const chai = new createUser("chai","chai@fb.com","123")
console.log(chai);