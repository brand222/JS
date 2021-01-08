'use strict';
//you can access this array via index
const brandonArray = [
  'Brandon',
  'McDonald',
  2020 - 1990,
  'Entreprenuer',
  ['brandon', 'mcdonald', 30],
];

//here is an object literal
//you can access this object by key/value pair reference
// const brandon = {
//     firstName: 'Brandon',
//     lastName: 'McDonald',
//     age: 2020 - 1990,
//     job: 'programmer',
//     friends: ['Max', 'Micah', 'Parker']
// }
// console.log(brandonArray);
// console.log(brandon);

// //accessing through dot notation
// console.log(brandon.firstName);

// //accessing through brackets notation
// console.log(brandon["lastName"]);

// //with brackets notation, you can create expressions within the bracket notation
// //i.e. performing calculations or processing the data somehow
// //otherwise, just use the dot notation
// const nameKey = 'Name';
// console.log(brandon['first' + nameKey]);
// console.log(brandon['last' + nameKey]);

// //bracket notation allows us to use this interestedIn expression
// const interestedIn = prompt(`what do you want to know about brandon? choose
// between firstName, lastName, age, job, and friends`);

// //if this evaluates to true
// if (brandon[interestedIn]) {
//     console.log(brandon[interestedIn]);
// }
// //if this evaluates to false (or UNDEFINED)
// else {
//     console.log(`Wrong request! choose
//     between firstName, lastName, age, job, and friends`);
// }

// brandon.location = 'Sunset, Texas';
// brandon['twitter'] = 'thebrandonmcdonald';
// console.log(brandon);

// // challenge
// // "brandon has 3 friends, and his best friend is called Micah"
// console.log(`${brandon.firstName} has ${brandon.friends.length} friends, and his best
// friend is called ${brandon.friends[brandon.friends.indexOf("Max")]}`);

const brandon = {
  firstName: 'Brandon',
  lastName: 'McDonald',
  birthYear: 1990,
  job: 'programmer',
  friends: ['Max', 'Micah', 'Parker'],
  hasDriversLicense: true,
  //any function that is attached to an object is a method
  calcAge: function () {
    this.age = 2020 - this.birthYear;
    return this.age;
  },
  getSummary: function () {
    return `${this.firstName} is a ${this.age} year-old ${this.job}, and he 
        has ${this.hasDriversLicense ? 'a' : 'no'} drivers license!`;
  },
};

console.log(brandon.calcAge());
console.log(`${brandon.firstName} is ${brandon.age} years old`);
console.log(brandon.age);
console.log(`brandon is ${brandon['calcAge']()} years old.`);

console.log(brandon.getSummary());

/*
property names of an object
*/
const properties = Object.keys(brandon);
console.log(properties);
for (const day of Object.keys(brandon)) {
  console.log(day);
}

/*
property values of an object
*/
const values = Object.values(brandon);
console.log(values);

/*
property names and values together
*/
const keyValuePairs = Object.entries(brandon);
console.log(keyValuePairs);

for (const [keys, values] of keyValuePairs) {
  console.log(`${keys} and ${values}`);
}
