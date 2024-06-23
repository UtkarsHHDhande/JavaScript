const user = {
    username : "ud",
    price : 1000,

    welcomeMessage: function(){
        console.log(`${this.username}, welcome to website`);
      
    }

}

// user.welcomeMessage()
// user.username = "uhd"
// user.welcomeMessage()

// console.log(this);

// function chai(){
//     let username = "utkarsh"
//     console.log(this.username);
// }

// chai()

// const chai = function (){
//     let username = "utkarsh"
//         console.log(this.username);
// }
// chai()

const chai =  () => {
    let username = "utkarsh"
        console.log(this);
}

// chai()

// const addTwo = (num1,num2) =>{
//     return num1 + num2
// }

// const addTwo = (num1, num2 ) => num1 + num2

const addTwo = ( num1,num2) => (num1 + num2)

console.log(addTwo(3,5));