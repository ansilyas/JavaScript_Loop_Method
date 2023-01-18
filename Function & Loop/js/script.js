// Function :
/*
function addnumber(x,y){
    console.log("Done")
    return 1+(x+y)/2    
}

let a=1;
let b=2;
let c=3;

console.log("Average of a and b is",addnumber(a,b))
console.log("Average of b and c is",addnumber(b,c))
console.log("Average of a and c is",addnumber(a,c))
*/

// This problem.1 solve using (For loop):
/*
let marks={
    ans:60,
    ali:9,
    ahmed:78,
    Rafay:4
}
*/

/*
for(let i=0;i<Object.keys(marks).length;i++){
     console.log("The marks of " + Object.keys(marks)[i] + " are " + marks[Object.keys(marks)[i]])
}
*/

// This problem.2 solve using (For in loop):
/*
for (let key in marks){
    console.log("The marks of " + key + " are " + marks[key])
}
*/

// Problem:
// let cn =45
// let i
// while (i != cn){
//     console.log("Try again")
//     i=prompt("Enter a Number")
// }
// console.log("You have enter a correct number")

//Problem.4
const mean =(a,b,c,d)=>{
    return (a+b+c+d)/4
}
console.log(mean(4,5,6,7))
