/* Coding Challenge #2 */


/* Use the BMI example from Challenge #1, and the code you
already wrote, and improve it:

Print a nice output to the console, saying who has the higher BMI.
The message can be either "Mark's BMI is higher than John's!" or
"John's BMI is higher than Mark's! (23.4)*/

let markMass = prompt("What is mark's mass?");
let markHeight = prompt("What is mark's height?");
let johnMass = prompt("What is john's mass?");
let johnHeight = prompt(`What is john's height?`);

const markBMI = markMass / markHeight ** 2;
const johnBMI = johnMass / johnHeight ** 2;

if (markBMI > johnBMI) {
    console.log(`Mark's BMI (${markBMI}) is higher than John's BMI (${johnBMI})`);
}
else if (johnBMI > markBMI) {
    console.log(`John's BMI (${johnBMI}) is higher than Mark's BMI (${markBMI})`);
}
else {
    console.log(`Both John's BMI (${johnBMI}) and Mark's BMI (${markBMI}) are EQUAL!`);
}