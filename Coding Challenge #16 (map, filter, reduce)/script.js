'use strict';

/* 
1. Calculate the dog age in human years using the following formula:
if the dog is <= 2 years old, humanAge = 2 * dogAge. If the dog is 
> 2 years old, humanAge = 16 + dogAge * 4.
2. Exclude all dogs that are less than 18 human years old (which is the same
  as keeping dogs that are at least 18 years old).
3. Calculate the average human age of all adult dogs 
(you should already know from other challenges how we calculate averages) ;) 
4. Run the function for both test datasets

TEST DATA 1: [5, 2, 4, 1, 15, 8, 3]
TEST DATA 2: [16, 6, 10, 5, 6, 1, 4]

GOOD LUCK!
*/

let ages1 = [5, 2, 4, 1, 15, 8, 3];
let ages2 = [16, 6, 10, 5, 6, 1, 4];

// function convertToHumanYears(dogAges) {
//   //you could have converted to human ages using the forEach command too.
//   let convertedAges = [];
//   dogAges.forEach((age) => {
//     let humanAge = 0;
//     age <= 2 ? (humanAge = 2 * age) : (humanAge = 16 + age * 4);
//     convertedAges.push(humanAge);
//   });
//   return convertedAges;
// }

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
