const User = {
    _email:'himanshu@code.com',
    _password:"abc",
    //I don't want that everybody can access the email and password Hence use getter and setter

    get email(){
        return this._email.toUpperCase()
    },
    set email(value){
        this._email = value
    }
}

const tea = Object.create(User)// starting me null hota hai
console.log(tea.email);