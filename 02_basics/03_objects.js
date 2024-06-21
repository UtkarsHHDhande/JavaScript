// singleton
// Object.create

// object literals

const mySym = Symbol("key1")


const JsUser = {
    name: "utkarsh",
    "full name" : "Utkarsh Dhande",
    [mySym]: "mykey1",
    age : 20,
    location :"mumbai",
    email : "utkarsh@google.com",
    isLoggedIn : false,
    lastLoginDays : ["Monday", "Saturday"]

}

// console.log(JsUser.email)
// console.log(JsUser["email"]);
// console.log(JsUser["full name"]);
// console.log(JsUser[mySym]);

JsUser.email ="utkarsh@tesla.com"
//Object.freeze(JsUser)
JsUser.email ="utkarsh@spacex.com"
//console.log(JsUser);

JsUser.greeting = function(){
    console.log("Hello js user");
}

JsUser.greetingTwo = function(){
    console.log(`Hello js user,${this.name}`);
}

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());
