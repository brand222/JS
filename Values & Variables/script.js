let firstName = 'brandon';
console.log(31000 + 3500 + 3500 + 3500 + 3500 + 3500);
console.log(firstName);

/* There are 7 datatypes in javascript*/
//string
let newName = 'brandon';
let lastName = 'mcdonald';
//number (double or integer)
let newNumber = 1;

//boolean
let flag = false;

//undefined (empty value)
let nothing;

//null (also means empty value)
let anotherNothing = null;

//Symbol (ES2015)

//BigInt (Larger Integers than type number can hold)

/* Javascript has 'dynamic typing' meaning that we do not have to explicitly
define the datatype of the variable. Datatypes are determined automatically. */

//logs number data type
console.log(typeof 2.5);
//logs string data type
console.log(typeof 'hello');
//logs boolean data type
console.log(typeof true);
//logs null data type
console.log(typeof null);

//let - variables that can change later
//const - variabels that do NOT change
//var - don't use this.
//var was before ES6. it is scoped to the

const now = 2020;
const ageMadeline = 1995;
const ageBrandon = 1990;
const ageChris = 1985;
console.log(ageMadeline, ageBrandon, ageChris);

console.log(ageBrandon * 2, ageChris / 10, 2 ** 6);
console.log(firstName.toUpperCase() + ' ' + lastName.toUpperCase());
