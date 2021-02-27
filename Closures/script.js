'use strict';

//a closure is not a feature that we explicitly use
//it simply happens automatically in certain situations.
//we just need to be able to recognize those situations

// const secureBooking = function () {
//   let passengerCount = 0;
//   return function () {
//     passengerCount++;
//     console.log(`${passengerCount} passengers`);
//   };
// };

// //here we are assigning 'booker' to the returned function inside of 'secureBooking'
// const booker = secureBooking();

// booker();
// booker();
// booker();
// booker();

// //a closure allows a function remember all the variables that existed
// //at the function's birth place
// //notice that the 'passengerCount' variable of 'secureBooking' has already executed
// //in yet, booker still seems to be able to manipulate that value.
// //this is the idea and power behind closures

// //A function has access to the variable environment (VE) of the execution context in which it was created
// //Closure: VE attached to the function, exactly as it was at the time and place the function was created

// //OFFICAL DEFINITION OF A CLOSURE:
// // A closure is the closed-over variable environment of the execution context in which a function was created,
// //even after that execution context is gone

// /* A closure gives a function access to to all the variables of it's parent function, even after that parent
// function has returned. The function keeps a reference to it's outer scope, which preserves the scope chain
// throughout time.*/

// //console.dir displays an interactive list of the properties of the specified JS object.
// //it's the way to see all the properties of a specified javascript object in the console
// //by which the developer can easily get the properties of the object.
// console.dir(booker);

// console.log(')))))))))))))))))))))))))))))');

//EXAMPLE 1:
let f;

const g = function () {
  const a = 23;
  //here is f's first birth place
  f = function () {
    console.log(a * 2);
  };
};

const h = function () {
  const b = 777;
  //here is f's second birth place
  f = function () {
    console.log(b * 2);
  };
};

g();
f();
console.dir(f);

//Re-assigning f function here by calling 'h' method
h();
f();
console.dir(f);

//EXAMPLE 2:
const boardPassengers = function (n, wait) {
  const perGroup = n / 3;

  //here is a timer
  setTimeout(function () {
    console.log(`We are now boarding all ${n} passengers`);
    console.log(`There are 3 groups, each with ${perGroup} passengers`);
  }, wait * 1000);

  console.log(`Will start boarding in ${wait} seconds`);
};

const perGroup = 1000;
boardPassengers(180, 3);
