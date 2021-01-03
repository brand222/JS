'use strict';
//primitive types
let lastName = 'Williams';
//this creates a brand new area in memory
let oldLastName = lastName;
lastName = 'Davis';

console.log(lastName);
console.log(oldLastName);

//rerference types
const jessica = {
  firstName: 'Jessica',
  lastName: 'Williams',
  age: 27,
};

const jessica2 = {
  firstName: 'Jessica',
  lastName: 'Williams',
  age: 27,
};

//this did NOT create a new object in the heap.
//this holds a reference to the original object (jessica)
//both of these hold the same memory reference
//thus, 'referenced types'
const marriedJessica = jessica;

marriedJessica.lastName = 'Davis';

// console.log(`Before marriage`, jessica);
// console.log('After marriage', marriedJessica);

//merging objects
const jessicaCopy = Object.assign({}, jessica2);
jessicaCopy.lastName = 'Davis';
console.log('Before marriage', jessica2);
console.log('After marriage', jessicaCopy);
