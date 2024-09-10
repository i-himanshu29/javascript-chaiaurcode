class User{
    constructor(username){
        this.username = username
    }

    logMe(){
        console.log(`USERNAME is ${this.username}`);
    }
}

class Teacher extends User{
    constructor(username,email,password){
        super(username)// super keyword refer karega kaun si class extend karni hai (User) 
        // ,ab uss class me jao aur constructor ke andar aur ye 'this' apne aap hi behind 
        // the sean le jayega aur waha usename ko set kar dega aur directly uska access le payega child wala
        this.email = email
        this.password=password
    }
    addCourse(){
        console.log(`A new course was added by ${this.username}`)
    }
}

const chai = new Teacher("chai","chai@Teacher.com","123")
// chai.addCourse() 
chai.logMe()

const masalaChai = new User("masalaChai")

masalaChai.logMe()

console.log(chai === masalaChai); //false
console.log(chai === Teacher); //false
console.log(chai instanceof Teacher);//true
console.log(chai instanceof User); //true

