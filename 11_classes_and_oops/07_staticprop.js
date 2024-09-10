class User {
    constructor(username){
        this.username = username
    }

    logMe(){
        console.log(`Username:${this.username}`)
    }

    // createId(){
    //     return `123`
    // }

    static createId(){ //static-> access hone se rok deta hai
        return `123`
    }

}

const hitesh = new User("hitesh")
// console.log(hitesh.createId());

class Teacher extends User{
    constructor(username,email){
        super(username)
        this.email = email
    }
}

const iphone =new Teacher("iphone","i@phone.com")
// iphone.logMe()
console.log(iphone,createId()); // not accessed