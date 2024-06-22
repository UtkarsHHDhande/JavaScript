
function sayMyName() {
console.log("U");
console.log("T");
console.log("K");
console.log("A");
console.log("R");
console.log("S");
console.log("H");
 }

//  sayMyName()

// function addTwoNumber(num1,num2){
//   console.log(num1 +num2)
// }

function addTwoNumber(num1,num2){

//    let result = num1 + num2
//    return result
return num1+num2
  }

const result = addTwoNumber(3,4)
// console.log("Result: ", result);

function loginUserMessage(username = "ud"){
    if(!username){
           console.log("please enter a username");
           return
    }
    return `${username} just logged in`
}

// console.log(loginUserMessage("Utkarsh"))
// console.log(loginUserMessage())

function calculateCartPrice (val1,val2,...numb1){
    return numb1
}
// console.log(calculateCartPrice(200,300,500))

const user ={
  username: "utkarsh",
  price :200
}

function handelobject(anyobject){
  console.log(`username is ${anyobject.username} and price is ${anyobject.price}`);
}

// handelobject(user)

handelobject({
  username:"ud",
  price : 200
})

const myNewArray =[200,300,400,500]

function returnSecondValue(getArray){
  return getArray[2]
}

console.log(returnSecondValue(myNewArray));