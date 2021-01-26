'use strict';

const lufthansa = {
  airline: 'Lufthansa',
  iataCode: 'LH',
  bookings: [],
  book(flightNum, name) {
    console.log(
      `${name} booked a seat on ${this.airline} flight ${this.iataCode}${flightNum}`
    );
    this.bookings.push({
      flight: `${this.iataCode}${flightNum}`,
      name: `${name}`,
    });
  },
};

lufthansa.book(239, 'Brandon McDonald');
lufthansa.book(635, 'John Smith');
console.log(lufthansa);

const eurowings = {
  airline: 'Eurowings',
  iataCode: 'EW',
  bookings: [],
};

//here we want to re-use the book method in lufthansa object
//so we create a variable referencing that method
const book = lufthansa.book;

//however, we can't call the method like this because the 'this'
//inside of a regular function returns 'undefined'
//**WONT WORK** */
//book(23, 'Sarah Williams');

//the call method takes the method definition and applies the 'this'
//keyword to the object for which you specify as the first argument.
// In this case, 'eurowings' is the 'this' we are referring to for calling
//the method for (even though the method exists in another object)
book.call(eurowings, 23, 'Sarah Williams');
console.log(eurowings);

book.call(lufthansa, 254, 'Brian Slater');
book.call(eurowings, '666', 'Mae Reed');
console.log(lufthansa);

const swiss = {
  airline: 'Swiss Air Lines',
  iataCode: 'LX',
  bookings: [],
};

book.call(swiss, '555', 'Bill Bobby');
console.log(swiss);

//apply - does not recieve a list of arguments, it takes an array
const flightData = [582, 'George Cooper'];
book.apply(swiss, flightData);

book.call(swiss, ...flightData);

/* The 'Bind' method - Allows you to manually set the 'this' keyword for
any function call. The difference is that bind doesn't immediately call
the function. It returns a new function where the 'this' keyword is 
bound*/
const bookEW = book.bind(eurowings);
const bookLH = book.bind(lufthansa);
const bookLX = book.bind(swiss);

bookEW(23, 'Steven Williams');

//you can also create additional arguments into the bind function you are returning
//which is 'set in stone' for each time you call the funciton you create from bind

//lets take a specific airline we want to book (airline number was pre-set)
//we specified arguments beforehand (utilized partial application' here for this function meaning partial arguments
//are already set for the function)
const bookEW23 = book.bind(eurowings, 23);

//now when we call the binded function, we only need to provide the name
bookEW23('Brandon McDonald');
bookEW23('Jonas Schmedtmann');
console.log(eurowings);

//With Event Listeners
lufthansa.planes = 300;
lufthansa.buyPlane = function () {
  console.log(this);
  this.planes++;
  console.log(this.planes);
};

//here, the 'this' keyword will point to the button element and not the 'lufthansa' object

//.bind returns a new function
//we need to do bind here  because we don't want to call the funciton, we want to get the function
document
  .querySelector('.buy')
  .addEventListener('click', lufthansa.buyPlane.bind(lufthansa));

//partial application (pre-setting parameters)

const addTax = (rate, value) => value + value * rate;
console.log(addTax(0.1, 200));

//now we want to re-use addTax for a tax which always happens
//first we add 'null', for the 'this' keyword because we don't care about the this in this case
//then pre-set the rate to .23
const addVAT = addTax.bind(null, 0.3);
//addVAT = (value) => value + value * 0.23;

console.log(addVAT(100));
console.log(addVAT(1000));
console.log(addVAT(3000));

const addTaxRate = function (rate) {
  return function (value) {
    return value + value * rate;
  };
};

const addVAT2 = addTaxRate(0.3);
console.log(addVAT2(100));
