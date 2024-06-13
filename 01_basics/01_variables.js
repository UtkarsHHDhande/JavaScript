const accountId = 144553
let accountEmail = "utkarsh@google.com"
var accountPassword = "12345"
accountCity ="Nagpur"
let accountState;


// accountId = 2 // not allowed

accountEmail ="ud@gmail.com"
accountPassword = "21212121"
accountCity = "pune"

/*
prefer not to use var
because of issues in block scope and functional scope 

*/

console.log(accountId);
console.table([accountId,accountEmail,accountPassword,accountCity,accountState])