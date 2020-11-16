/*
Coding challenge #1

Mark and john are trying to compare their BMI (Body Mass Index),
which is calculated using the following formula:
BMI = mass / height ** 2 = mass / (height * height).
(mass in kg and height in meter).

1. Store mark's and John's mass and height in variables
2. Calculate both of their BMIs using the formula (you can even
    implement both versions
    ).
3. Create a boolean variable 'markHigherBMI' containing information
about whether Mark has a higher BMI than John.

TEST DATA 1: Mark weighs 78 kg and is 1.69 m tall.
John weighs 92 kg and is 1.95 m tall.
TEST DATA 2: Mark weighs 95 kg and is 1.88 m tall.
John weighs 85 kg and is 1.76 m tall.

Good luck!
 */

//test data 1
const markMass = 78;
const markHeight = 1.69;
const johnMass = 92;
const johnHeight = 1.95;

const markBMI = markMass / markHeight ** 2;
const johnBMI = johnMass / johnHeight ** 2;

const markHigherBMI = markBMI > johnBMI;

console.log("mark's BMI is " + markBMI);
console.log("john's BMI is " + johnBMI);
console.log("therefore, it is " + markHigherBMI + " that mark's BMI is higher than john's");
