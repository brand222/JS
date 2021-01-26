'use strict';

const bookings = [];
const createBooking = function (
  flightNum,
  numPassengers = 1,
  price = 199 * numPassengers
) {
  const bookingInfo = {
    flightNum,
    numPassengers,
    price,
  };
  console.log(bookingInfo);
  bookings.push(bookingInfo);
};

createBooking('LH123'); //this will output 'undefined' for numPassengers and price
//due to not passing in values for those
createBooking('1H123', 4, 2);

//skipping a default param and leaving it at it's default value is done
//by marking it as 'undefined'
createBooking('1H323', undefined, 1000);
