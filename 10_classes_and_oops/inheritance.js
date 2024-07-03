class User {
    constructor(username){
        this.username = username;
    }

    logMe(){
        console.log(this.username);
    }

}

class Teacher extends User{
    constructor(username,email,password){
        super(username);
        this.email = email;
        this.password = password;
    }

  addCourse(){
        console.log(`A new course was added by ${this.username}`);
    }
}

const chai = new Teacher ("chai","chaiteacher@gmail","1234")

chai.addCourse();
const masalaChai = new User("masalaChai");

masalaChai.logMe()

console.log(chai instanceof User);