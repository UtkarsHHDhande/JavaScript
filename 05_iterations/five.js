const coding = ["js", "ruby","java","python","cpp"]

// coding.forEach( function (item) {
//     console.log(item);
// } )

// coding.forEach( (item) => {
//     console.log(item);
// } )

// function printMe (item){
//     console.log(item);
// }

// coding.forEach(printMe)

// coding.forEach ((item, index , arr) => {
//     console.log(item, index, arr);
// })

const myCoding = [
    {
        lannguageName : "javascript",
        lannguageFileName : "js"
    },
    {
        lannguageName : "C++",
        lannguageFileName : "cpp"
    },
    {
        lannguageName : "Python",
        lannguageFileName : "py"
    }
]

myCoding.forEach((item) => {
    console.log(item.lannguageName);
})