// This types are getter setter is used in past( previously) before classes
//Function based getter-setter
function User(email,password){
    this._email = email
    this._password = password

    Object.defineProperty(this,'email',{
        get:function(){
            return this._email.toUpperCase()
        },
        set:function(value){
            this._email = value
        }
    })
    Object.defineProperty(this,'password',{
        get:function(){
            return this._password.toUpperCase()
        },
        set:function(value){
            this._password = value
        }
    })
}

const chai = new User("chai@chai.com","chai")
console.log(chai.email);

// Use can also used Object based getter-setter
// refer:
// object_get_set.js  ==>  file 