// var c = 30

 let a =300

if(true){
    let a = 10
    const b = 20
   // console.log("inner :",a);
    function addnum(){

    }
   
}

// console.log(a);
//console.log(b);
// console.log(c);

function one(){
    const username = "utkarsh"

    function two (){
        const website = " youtube"
     console.log(username);
    }
    // console.log(website);

    two()
}

// one()

if(true){
    const username = "utkarsh"
    if (username === "utkarsh") {
        const website = " youtube"
        // console.log(username + website);
    }
    // console.log(website);
}
// console.log(username);

// +++++++++++++++++++++++++++++ interesting ++++++++++++++++++++++++++

function addone(num){
    return num + 1
}

console.log(addone(6))
addtwo(6)
const addtwo = function(num){
    return num + 1
}

console.log(addtwo)