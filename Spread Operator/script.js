'use strict';

const resturaunt = {
  name: 'pallazos',
  mainMenu: ['pizza', 'pasta', 'risotto', 'feteccini alfredo'],
  starterMenu: ['garlic bread', 'bread sticks', 'cheese balls', 'cheese rolls'],
  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // open 24 hrs
      close: 24,
    },
  },
  orderPasta: function (ing1, ing2, ing3) {
    console.log(`here is your delicious pasta with ${ing1}, ${ing2}, ${ing3}.`);
  },
  orderPizza: function (mainIngredient, ...otherIngredients) {
    console.log(mainIngredient);
    console.log(otherIngredients);
  },
};

const arr = [7, 8, 9];
const badNewArr = [1, 2, arr[0], arr[1], arr[2]];
console.log(badNewArr);

// '...' takes the array and puts all of it's contents into the subsequent array indexes
// it 'spreads' all the elements of the first array and puts them into the new array
const newArr = [1, 2, ...arr];

console.log(newArr);

console.log(...newArr);

//here we are expanding the previous array (mainMenu) and adding more items to it
//and storing into the 'newMenu' variable
const newMenu = [...resturaunt.mainMenu, 'Spimoni', 'Tira misu'];
console.log(newMenu);

/*
The spread operator takes all the elements from the array, and doesn't create
new variables. 
We can only use this in places where we would otherwise write values seperated
by commas
*/

//copying arrays
//here is a 'shallow copy' of the mainMenu array
const mainMenuCopy = [...resturaunt.mainMenu];

//merging arrays with the spread operator
const menu = [...resturaunt.mainMenu, ...resturaunt.starterMenu];
console.log(menu);
/*
Spread operators are avail on all 'iterables (all data structures)
*/

const str = 'Brandon';
const letters = [...str, '  ', 'S.'];
console.log(...str);
console.log(letters);

// this wouldn't work because you are usin g the operator in a
//place that doesn't accept values seperated by commas
// console.log(`${...str} Mcdonald`);

//function that accepts multiple arguments

// const ingredients = [
//   prompt("Let's make pasta! Ingredient 1?"),
//   prompt('Ingredient 2?'),
//   prompt('Ingredient 3?'),
// ];
// console.log(ingredients);
// resturaunt.orderPasta(...ingredients);

// Objects
const newResturaunt = { foundedIn: 1998, ...resturaunt, founder: 'John' };
console.log(newResturaunt);

const resturauntCopy = { ...resturaunt };
resturauntCopy.name = 'Ristrouante Roma';
console.log(resturauntCopy.name);
console.log(resturaunt.name);

/*
Spread operator 'unpacks' an arrays elements.
While Rest 'packs' elements INTO an array
*/

//SPREAD, because it's on the right side of the equals sign
// const arr2 = [1, 2, ...[3, 4]];
// console.log(arr2);

//REST, because it's on the left side of the equals sign
//also, the rest operator MUST be the LAST parameter you create
// because it populates the REST of the variables
// minus the ones you specifically call out on the
//left side of the equals sign
/*
Also, there can only be 1 rest element.
*/
// const [a, b, ...others] = [1, 2, 3, 4, 5];
// console.log(a, b, others);

// const [pizza, , risotto, ...otherFood] = [
//   ...resturaunt.mainMenu,
//   ...resturaunt.starterMenu,
// ];
// console.log(pizza, risotto, otherFood);

const { sat, ...weekDays } = resturaunt.openingHours;
console.log(weekDays);

//spead operator used in passing a variable amount of arguments into a function
const add = function (...numbers) {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
  }
  console.log(sum);
};
add(2, 3, 4, 5);
add(2, 1, 3);
add(2, 2, 4, 4, 5, 6, 6);

const x = [23, 5, 7];
add(...x);

resturaunt.orderPizza('mushrooms', 'onion', 'olives', 'spinach');
resturaunt.orderPizza('mushrooms');

/* 

KEY TAKE-AWAY:
Spread operator is used where you would enter VALUES separated by commas.
Rest operator is used where you would enter VARIABLES separated by commas ()
*/
