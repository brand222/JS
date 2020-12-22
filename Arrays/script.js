'use strict'

let friends = ['Michal', 'Peter', 'Brandon', 'Bob', 'Tony', 'Billy'];
//logging the whole array
console.log(friends);
//accessing an index of the array
console.log(friends[0]);

//another new array
const years = new Array(1991, 1984, 2008, 2020);

//providing the length of the array (the number of elements in it)
console.log(years.length);

//getting the last element in the array
//accessing the index is zero-based
//accessing the length of the array is NOT zero based.
console.log(friends[friends.length - 1])

//changing elements in the array
friends[2] = 'Brian';
console.log(friends);

/* NOTE: You are able to change contents of the array,
BUT not the whole array. */

const firstName = 'Brandon';
const lastName = 'McDonald';
const brandon = [firstName, lastName, 2020 - 1990, friends];
console.log(brandon);


/* array methods */

//this ADDS a value at the end of the array
friends.push('Brett');
console.log(friends);

//this ADDS a value at the beginning of the array
friends.unshift('Yanille');
console.log(friends);

//this REMOVES the last element of the array
friends.pop();
console.log(friends);

//this REMOVES  the first element of the array
friends.shift();
console.log(friends);

//this returns the position of the specified value of the array
console.log(friends.indexOf('Brian'));

//this will return '-1' for an element that doesn't exist in the array
console.log(friends.indexOf('BBSDLJF'));

//this is an ES6 method for checking array values
console.log(friends.includes('Brian'));
console.log(friends.includes('Steven'));