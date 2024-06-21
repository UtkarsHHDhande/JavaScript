// const twitterUser = new Object()
const twitterUser ={}

twitterUser.id ="123add"
twitterUser.name ="ud"
twitterUser.isLoggedIn = false

// console.log(twitterUser);

const regularUser = {
    email : "some@gmail.com",
    fullname: {
        userfullname:{
            firstname:"utkarsh",
            lastname:"dhande"
        }
    }
}

// console.log(regularUser.fullname.userfullname.firstname);

const obj1 ={1:"a", 2:"b"}
const obj2 ={3:"a", 4:"b"}
const obj3 ={5:"a", 6:"b"}


// const obj3 = {obj1,obj2}
// const obj4 = Object.assign({},obj1,obj2,obj3)

const obj4 ={...obj1,...obj2,...obj3}
// console.log(obj4);

const users =[
    {
id :1,
email: "us@gmail.com"
    },
    {
        id :1,
        email: "us@gmail.com"
            },
            {
                id :1,
                email: "us@gmail.com"
                    }
]

users[1].email
console.log(twitterUser);

console.log(Object.keys(twitterUser));
console.log(Object.values(twitterUser));
console.log(Object.entries(twitterUser));

console.log(twitterUser.hasOwnProperty('isLoggedIn'));

