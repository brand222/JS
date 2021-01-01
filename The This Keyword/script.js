'use strict';

//this returns the parent window
console.log(this);

//'this' in a function declaration
const calcAge = function (birthYear) {
  console.log(2020 - birthYear);
  console.log(this);
};

calcAge(1991);

//'this' in arrow functions maps to the parent scope (which in this case is 'window')
// arrows use lexical 'this' keywords (it populates with the parent scope)
const calcAgeArrow = (birthYear) => {
  console.log(2020 - birthYear);
  console.log(this);
};

calcAgeArrow(1980);

const brandon = {
  year: 1991,
  calcAge: function () {
    console.log(2020 - this.year);
  },
};

brandon.calcAge();
