'use strict';

/* Coding Challenge # 17
Rewrite the calcAverageHumanAge method function from the previous challenge.
But this time use arrow function and use chaining
*/

function convertToHumanYears(dogAges) {
  const humanAges = dogAges.map((age) => (age <= 2 ? 2 * age : 16 + age * 4));
  return humanAges;
}

function filterByAdultDogs(humanYears) {
  return humanYears.filter((num) => num >= 18);
}

function average(adults) {
  return adults.reduce((acc, age) => acc + age, 0) / adults.length;
}

// //convert all dog years to human years
//console.log(convertToHumanYears(ages1));
// //exclude all dogs which are under 18 human years old
//console.log(filterByAdultDogs(convertToHumanYears(ages1)));
// //calculate average human age of all adult dogs
//console.log(average(filterByAdultDogs(convertToHumanYears(ages1))));

const convertAges = (ages) => {
  const humanYears = convertToHumanYears(ages);
  const adults = filterByAdultDogs(humanYears);
  return average(adults);
};
console.log(parseInt(convertAges(ages1)));
console.log(parseInt(convertAges(ages2)));

const humanAges = dogAges;
