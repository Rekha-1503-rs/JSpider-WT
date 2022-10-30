// console.log("Operators in js")
// let a = 10;
// let b = 4;

// console.log("a + b =",a+b)
// console.log("a - b =",a-b)
// console.log("a / b =",a/b)
// console.log("a * b =",a*b)
// console.log("a % b =",a%b)
// console.log("a ** b =",a**b)


// //Assignment Operator

// a += 5
// console.log(a)

//Comparison Operator
// let comp1 = 6;
// let comp2 = 7;

// console.log("comp1 == comp2 is ",comp1 == comp2)
// console.log("comp1 == comp2 is ",comp1 !== comp2)
// console.log("comp1 === comp2 is ",comp1 === comp2)
// console.log("comp1 !== comp2 is ",comp1 !== comp2)

//logical Operator
// let x = 5;
// let y = 6;

// console.log(x<y && x==5)//true
// console.log(x>y || x==5)//true
// console.log(!false)//true
// console.log(!true)//false

// hdfshh sfhhj single line comment
// sdfjhj
// dfhhjs

let a = prompt("Her whats your age?")
// console.log(typeof a)

a = Number.parseInt(a)//Converting the string to a number
console.log(typeof a)

// if(a>0)
// {
//     alert("This is a valid age")
// }
// else{
//     alert("This is an invalid age")
// }

if(a<0)
{
    alert("This is a invalid age")
}
else if(a<9)
{
    alert("You are a kid and you cannot even think of driving")
}
else if(a<18  && a>9)
{
    alert("You are a kid and you can even think of driving")
}
else{
    alert("You can now drive as you are above 18")
}
// Explore switch statement and write a basic program.
console.log("You can", (a<18? "not drive":"drive"))
