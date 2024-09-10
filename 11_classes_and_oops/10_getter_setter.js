class User{
    constructor(email,password){
        this.email =  email;
        this.password = password
    }

    //getter *****
    // get password(){
    //     return this.password.toUpperCase()
    // }

    //setter*****
    // set password(value){
    //     this.password = value.toUpperCase()
    // }

    //The problem is arrises becoz constructor and the setter both are setting the value (acutually both are racing)
    //  that's why give an error -> Maximum call stack size exceeded

    // Hence While setting the value in setter we have to make a new property 
    
    // set password(value){
    //     this._password = value.toUpperCase()
    // }

    //OR

    set password(value){
        this._password = value
    }
    
    // also we have to make changes in getter 
    // get password(){
    //     return this._password.toUpperCase()
    // }

    // OR

    //variable
    get password(){
        return `${this._password}hitesh`
    }

    // ******************************************
    // getter setter bnane hai to property ka same as it is name method ka likhna padega 

    // get email(){
    //     return this.email.toUpperCase()
    // }

    // set email(value){
    //     this.email = value
    // }

    //RACING HAPPEN
    //HENCE USE 

    get email(){
        return this._email.toUpperCase() // '_' = avoid racing
    }

    set email(value){
       this._email = value
    }
    
    // getter return the value
    //setter does not return value

}

const hitesh = new User("hitesh@ai.com","123")
// const hitesh = new User("hitesh@ai.com","abc")
console.log(hitesh.password);