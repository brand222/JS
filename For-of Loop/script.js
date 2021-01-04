'use strict'; // strict mode is great for debugging. Use it always

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

const menu = ['pizza', 'spagetti', 'spimoni', ...resturaunt.starterMenu];

//this is BASCIALLY a for-each loop (just like in java)
// but instead of 'in' you put 'of'
//so, for each element OF the menu array, do something as you iterate
// for (let i of menu) {
//   console.log(i);
// }

for (const [i, el] of menu.entries()) {
  console.log(`${i + 1}: ${el}`);
}
//.entries() gives you all the iterable entries of the array
// and provides an array for each array element (elementIndex, elementValue)
console.log([...menu.entries()]);
