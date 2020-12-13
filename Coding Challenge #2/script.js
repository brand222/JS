/* Coding Challenge #2 */


/* Use the BMI example from Challenge #1, and the code you
already wrote, and improve it:

Print a nice output to the console, saying who has the higher BMI.
The message can be either "Mark's BMI is higher than John's!" or
"John's BMI is higher than Mark's! (23.4)*/

// let markMass = prompt("What is mark's mass?");
// console.log(markMass);
// let markHeight = prompt("What is mark's height?");
// console.log(markHeight);
// let johnMass = prompt("What is john's mass?");
// console.log(johnMass);
// let johnHeight = prompt(`What is john's height?`);
// console.log(johnHeight);

// const markBMI = markMass / markHeight ** 2;
// const johnBMI = johnMass / johnHeight ** 2;

// if (Number(markBMI) > Number(johnBMI)) {
//     console.log(`Mark's BMI (${markBMI}) is higher than John's BMI (${johnBMI})`);
// }
// else if (johnBMI > markBMI) {
//     console.log(`John's BMI (${johnBMI}) is higher than Mark's BMI (${markBMI})`);
// }
// else {
//     console.log(`Both John's BMI (${johnBMI}) and Mark's BMI (${markBMI}) are EQUAL!`);
// }

let brandonMass = prompt("What is your mass brandon?");
let brandonHeight = prompt("What is your height brandon?");

let brandonBMI = Number(brandonHeight) / Number(brandonMass) ** 2;
console.log(brandonBMI);