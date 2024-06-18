// primitive
  
// 7 types : String, Number , Boolean , null , undefined , Symbol ,BigInt

const score = 100
const scoreValue = 100.5

const  isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol ('123')
const anotherId = Symbol('123')

console.log (id === anotherId)

const bigNumber = 222423443338544645n


// reference (Non primitive)

// Array, Objects , Functions

const heros =["batman","ironman","spiderman"]
let myObj = {
    name : "utkarsh" ,
    age : 20,

}

const myFunction = function(){
    console.log("Namaste Duniya");
}

console.log(typeof scoreValue);


/////////////////////////////////////////

/* typeof values of various datatypes

Undefined => undefined
Null => object
Boolean => boolean
Number =>  number
String => string
Symbol => Symbol
Function => Object Function
non primitive datatype => function
