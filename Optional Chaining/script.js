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
  order(input) {
    return `You just placed an order for: ${input}. Enjoy!`;
  },
  orderPasta: function (ing1, ing2, ing3) {
    console.log(`here is your delicious pasta with ${ing1}, ${ing2}, ${ing3}.`);
  },
  orderPizza: function (mainIngredient, ...otherIngredients) {
    console.log(mainIngredient);
    console.log(otherIngredients);
  },
};

/*
In optional chaining, if a certain property doesn't exist, then undefined is returned immediately
*/
// if (resturaunt.openingHours && resturaunt.openingHours.mon)
//   console.log(resturaunt.openingHours.mon.open);

//if (resturaunt.openingHours.fri) console.log(resturaunt.openingHours.fri.open);

//with optional chaining
//only if the property before the question mark exists, then get open
//(if its not null and not undefined)
//otherwise, return 'undefined'
//console.log(resturaunt.openingHours.mon?.open);
console.log(resturaunt.openingHours.mon?.open);
console.log(resturaunt.openingHours?.mon?.open);

const days = ['mon', 'tues', 'wed', 'thu', 'fri', 'sat', 'sun'];

//here we created a variable called 'open' which takes the optional chaining '?' operator for
//the opening hours days
//basically, the '?' says get the open hour for the day if it exists
//then we have the nullish coalescing operator to say otherwise, set open = 'closed'
for (const day of days) {
  const open = resturaunt.openingHours[day]?.open ?? 'closed';
  console.log(`On ${day} we open at ${open}`);
}

//Optional chaining on methods
//does this method exist?
//if so, do the method, otherwise, return sometheing else
resturaunt.orderPasta?.('oregano', 'salami', 'beef') ?? "Method doesn't exist";
console.log(resturaunt.order?.('blah') ?? 'method doesnt exist');
console.log(resturaunt.order2?.('blah') ?? 'method doesnt exist');

//optional chaining on arrays
const users = [
  {
    name: 'brandon',
    email: 'blah@blah.com',
  },
];
//this tests whether the value in the array exists
//otherwise, it returns something else ('user array empty)
console.log(users[0]?.name ?? 'User array empty');

//the code on line 76 is exactly the same as:
// if (users.length > 0) console.log(users[0].name);
// else console.log('user array empty');
