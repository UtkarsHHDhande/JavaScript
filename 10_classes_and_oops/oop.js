const user = {
    username: "ud",
    loginCount : 8,
    signedIn : true,

    getUserDetails : function(){
      console.log("Got user details from database");
    }
}

// console.log(user.username);
// console.log(user.getUserDetails());

function User(username, loginCount, isLoggedIn){
this.username = username;
this.loginCount = loginCount;
this.isLoggedIn = isLoggedIn;

this.greetings= function(){
  console.log(`Hi, I am ${this.username}`);
}

// return this

}


const userOne = new User("Utkarsh",10,true);
const userTwo= new User("ChaiaurCode",11,false);

console.log(userOne.constructor);
console.log(userTwo);
