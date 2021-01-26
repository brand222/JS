'use strict';

/*
Javascript is a language that has first class functions. 
Functions are so-called 'first citizens'.
This means that functions are simply values
Functions are just another 'type' of object


What you can do with functions:

1. You can store functions in variables or properties

for example:
const add = (a,b) => a + b;
or 
const counter = {
  value: 25,
  inc: function() {this.value++;}
}

2. You can pass functions as arguments to OTHER functions
for example: 

const greet = () => console.log('hey brandon');
btnClose.addEventListener('click', greet);

3. You can return functions FROM functions

4. You can call methods on functions
for ex:
counter.inc.bind(someOtherObject);




What is a higher order function?
A function that receives another functions as an argument, that returns a new function, or both.
- This is only possible because of first-class functions

1. Functions that receive another function

const greet = () => console.log('hey brandon');

'addEventListener' is the higher-order function because it receives another function as an input greet
'greet' is the callback function because greet is not executed until a click event happens
btnClose.addEventListener('click', greet);


2. Functions that return another function
For example:

function count() { //higher order function
  let counter = 0;
  return function() { //returned function
    counter++;
  };
}

difference between first class functions and higher order functions: 
First class functions is simply the JS concept that functions are values.

Higher-order functions means that js supports firstClass functions.

*/

// FUNCTIONS ACCEPTING CALLBACK FUNCTIONS

const oneWord = function (str) {
  return str.replace(/ /g, '').toLowerCase();
};

const upperFirstWord = function (str) {
  const [first, ...others] = str.split(' ');
  return [first.toUpperCase(), ...others].join(' ');
};

//higher-order function
const transformer = function (str, fn) {
  console.log(`Original String: ${str}`);
  console.log(`Transformed string: ${fn(str)}`);

  console.log(`Transformed by ${fn.name}`);
};

//here we pass in the function as a value
transformer('JavaScript is the best!', upperFirstWord);

transformer('JavaScript is the best!', oneWord);

//JS uses callbacks all the time
const high5 = function () {
  console.log('🌊');
};

//addEventListener is the higher-order function
//high5 is the callback function
document.body.addEventListener('click', high5);

//forEach item in the array, execute the callback function (high5)
['brandon', 'madeline', 'michelle', 'brad', 'chris'].forEach(high5);

//brandon's example

//call-back function
const reverseWord = function (str) {
  let newWord = '';
  for (let i = str.length - 1; i >= 0; i--) {
    newWord += str[i];
  }
  return newWord.toLowerCase();
};

//higher order function
const isPalindrome = function (str, fn) {
  let palindrome = undefined;
  return (palindrome =
    str.toLowerCase() === fn(str) ? (palindrome = true) : (palindrome = false));
};

console.log(`the reverse of 'brandon' is: '${reverseWord('brandon')}'`);

console.log(`is brandon a palindrome? ${isPalindrome('brandon', reverseWord)}`);

console.log(`is braarb a palindrome? ${isPalindrome('braarb', reverseWord)}`);

/* FUNCTIONS RETURNING FUNCTIONS */

// const greet = function (greeting) {
//   return function (name) {
//     console.log(`${greeting} ${name}`);
//   };
// };

//here we refactored this to be in arrow function
const greet = (greeting) => {
  return (name) => {
    console.log(`${greeting} ${name}`);
  };
};

//here we are taking the result of greet('Hey')
//which is the function we are returning
// and storing that other function  into a variable
const greeterHey = greet('Hey');

greeterHey('Brandon');
greeterHey('Jonas');

//here we are calling the greet function along with the function that it's returning
//and passing in the two arguments
greet('hello')('Bob');
greet('yo')('billybob');
