'use strict';

const flights = 'LH234';
const brandon = {
  name: 'brandon mcdonald',
  passport: 12342342552,
};

const checkIn = function (flightNum, passenger) {
  flightNum = 'LH999';
  passenger.name = 'Mr. ' + passenger.name;

  if (passenger.passport === 12342342552) {
    alert('Check in');
  } else {
    alert('Wrong passport!');
  }
};

// checkIn(flights, brandon);
// console.log(flights);
// console.log(brandon);

const newPassport = function (person) {
  person.passport = Math.random() * 10000000;
};

newPassport(brandon);
checkIn(flights, brandon);

/*
A key take-away from this is the JAVASCRIPT DOES NOT PROVIDE THE ABILITY
TO PASS VALUES BY REFERENCE, ONLY BY VALUE

Yes... this code wasn't helpful. */
