class User{
    constructor(email,password){
        this.email = email;
        this.password = password;
    }
    get email(){
        return this._email.toUpperCase();
    }
     set email(value){
        this._email = value;
    }
    get password(){
        return `${this._password} is the password`;
    }

    set password(value){
        this._password = value
    }
}
const utkarsh = new User("utkarsh@ai","abc")
console.log(utkarsh.email);