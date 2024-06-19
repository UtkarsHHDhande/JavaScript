const name = "utkarsh"
const repoCount = 15

console.log(` Hello my name is ${name} and my repo count is ${repoCount}`);

const gameName = new String ('Utkarsh-hd')

// console.log(gameName[0]);
// console.log(gameName.__proto__);

console.log(gameName.toUpperCase());
console.log(gameName.charAt(5));
console.log(gameName.indexOf('k'));

const newString = gameName.substring(0,4)
console.log(newString);

const anotherString = gameName.slice(-8,6)
console.log(anotherString);

const newStringOne = "  utkarsh    "
console.log(newStringOne);
console.log(newStringOne.trim());

const url ="https://ud.com/ud%20ud"

console.log(url.replace('%20', '-'));
console.log(url.includes('ud'));
console.log(gameName.split('-'));
