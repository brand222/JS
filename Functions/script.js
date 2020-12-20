'use strict'; // strict mode is great for debugging. Use it always

//defining the function
function logName() {
    console.log(`My name is brandon`);
}
//calling(invoking) the function
logName();

function fruitProcessor(apples, oranges) {
    const juice = `Juice with ${apples} apples and 
    ${oranges} oranges.`;
    return juice;
}
console.log(fruitProcessor(2, 5));

const appleOrangeJuice = fruitProcessor(2, 4);

console.log(appleOrangeJuice);

//here is a function declaration
function calcAge1(birthyear) {
    return 2020 - birthyear;
}

const age1 = calcAge1(1990);
console.log(age1);


//here is a function expression
const calcAge2 = function (birthyear) {
    return 2020 - birthyear;
}
const age2 = calcAge2(1990);

console.log(age2);