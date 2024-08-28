// Accept the marks of Robert in three subjects Maths, Computer, English respectively (each out of 100 ),
// Write a program to calculate his total marks and percentage marks.

let english = Number(prompt("Enter your English mark"));
let maths = Number(prompt("Enter your Maths mark"));
let computer = Number(prompt("Enter your Computer mark"));

function total(english, maths, computer) {
    let totalmarks = english + maths + computer;
    let percentage = (totalmarks * 100) / 300;
    return {totalmarks, percentage};
}

console.log(total(english, maths, computer));

