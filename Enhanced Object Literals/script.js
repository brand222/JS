'use strict';

const weekdays = ['mon', 'tue', 'wed', 'thus', 'fri', 'sat', 'sun'];
const openingHours = {
  [weekdays[3]]: {
    open: 12,
    close: 22,
  },
  [weekdays[4]]: {
    open: 11,
    close: 23,
  },
  [`day${2 + 4}`]: {
    open: 0, // open 24 hrs
    close: 24,
  },
};

const resturaunt = {
  name: 'pallazos',
  mainMenu: ['pizza', 'pasta', 'risotto', 'feteccini alfredo'],
  starterMenu: ['garlic bread', 'bread sticks', 'cheese balls', 'cheese rolls'],

  //   openingHours: openingHours,
  //ES6 enhanced object literal
  openingHours,

  //ES6 enhanced object literal way of writing methods
  orderPasta(ing1, ing2, ing3) {
    console.log(`here is your delicious pasta with ${ing1}, ${ing2}, ${ing3}.`);
  },
  orderPizza(mainIngredient, ...otherIngredients) {
    console.log(mainIngredient);
    console.log(otherIngredients);
  },
};

console.log(resturaunt.orderPasta('blah', 'spagetti', 'blah'));
console.log(openingHours);
