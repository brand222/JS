'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

/////////////////////////////////////

let arr = ['a', 'b', 'c', 'd', 'e'];

//****SLICE METHOD****
//(you can extract any part of an array without changing the original array)

// slice(beginningAt) - returns c, d, e because it starts at position 2 (c)
// console.log(arr.slice(2));
// //slice(beginningAt, endingAtButNotIncluded) - returns c, d
// console.log(arr.slice(2, 4));
// //slice(-2) = take items from the end TO the 2nd-to-the-last
// console.log(arr.slice(-2));
// //slice(1, -2) = starting at position 1, extract everything EXCEPT the last 2 items (-2)
// console.log(arr.slice(1, -2)); //outputs b, c

//*****SPLICE METHOD***** */
//This method is very similar to slice
//but it changes the original array (it mutates that array)

//remove the last element of the array
// arr.splice(-1);
// arr.splice(1, 2);
//now it returns everything except the last element of the array
// console.log(arr);

// //********REVERSE METHOD *********
// //this method reverses the items of an array
// //NOTE: This method mutates the original array
// const arr2 = ['j', 'i', 'h', 'g', 'f'];
// console.log(arr2.reverse());
// console.log(arr2);

// //************CONCAT METHOD********* */
// //this method takes one array and concatenates it with another array
// //(connects two arrays together)
// //NOTE: this DOES NOT mutate the original array(s)
// const letters = arr.concat(arr2);
// console.log(letters);
// //a way to connect two arrays without mutating the original arrays
// console.log([...arr, ...arr2]);

// //********** JOIN METHOD******* */
// //join(seperator) means that you put a seperator between each array value
// //NOTE: DOES NOT change original array
// console.log(letters.join(' - '));
// console.log(...letters);

//***************ForEach METHOD ON ARRAYS********* */
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// for (const [i, movement] of movements.entries()) {
//   if (movement > 0) {
//     console.log(`Movement ${i + 1}: You deposited ${movement}`);
//   } else {
//     console.log(`Movement ${i + 1}: You withdrew ${Math.abs(movement)}`);
//   }
// }
console.log(`----------------------FOREACH ---------------`);
//forEach is a higher-order function
//it takes in a callback function
// movements.forEach(function (movement) {
//   if (movement > 0) {
//     console.log(`You deposited ${movement}`);
//   } else {
//     console.log(`You withdrew ${Math.abs(movement)}`);
//   }
// });

movements.forEach(function (mov, i, arrays) {
  if (mov > 0) {
    console.log(`Movement ${i + 1}: You deposited ${mov}`);
  } else {
    console.log(`Movement ${i + 1}: You withdrew ${Math.abs(mov)}`);
  }
});
//continue and break statements DO NOT work in a forEach loop
//for of loop is the one you want to use if you want to break out of the loop/continue

/* FOREACH METHOD ON MAPS */
const currencies = new Map([
  ['USD', 'United States dollar'],
  ['EUR', 'Euro'],
  ['GBP', 'Pound sterling'],
]);
//foreach(function(the value of the map, the key of the map, and the map you are iterating))
currencies.forEach(function (value, key, map) {
  console.log(`${key}: ${value}`);
});

/* FOREACH METHOD ON SETS */
const currenciesUnique = new Set(['USD', 'GBP', 'USD', 'EUR', 'EUR']);
console.log(currenciesUnique);

/*You will notice that the forEach method signature requires 3 params
It was decided to keep set's foreach as the same as maps. The main
difference here is that there are NO KEYS in a set. So it wouuld just 
be value, _, and set for the params you pass into the foreach in this case*/
//by the way, the '_' param stands for a throw-away parameter
currenciesUnique.forEach(function (value, _, set) {
  console.log(`${value}: ${value}`);
});
