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

//logical operators can use any data type
//they can return any date type
// and they can use 'short-circuiting' evaluation

/* 
Short circuiting means that if the first value in front
of the || operator is a truthy value, then it will return 
that truthy value. The second operand, will not even be evaluated.
*/
console.log(3 || 'brandon');
console.log('' || 'brandon');
console.log(true || 0);
// if all are falsy values, it will default to the last value
console.log(undefined || null);
//this will evaluate (short-circuit) on the first truthy value
//which is 'hello'
console.log(undefined || 0 || '' || 'hello' || 23 || null);

/* Short-circuiting with the '||' operator*/
//this returns (short-circuits) the truthy value
resturaunt.numGuests = 23;
console.log('OR--------');
//without short-ciruiting
const guests1 = resturaunt.numGuests ? resturaunt.numGuests : 10;
console.log(guests1);
//with short-circuiting
const guests2 = resturaunt.numGuests || 10;
console.log(guests2);

/* Short-circuiting with the '&&' operator*/
//this returns (short-circuits) the first falsy value
console.log('AND-------');
//returns 0
console.log(0 && 'brandon');
//this one returns the last in the list due to none being falsy
console.log(8, 'brandon');
//returns null because the expression continues until a falsy value (null)
console.log('hello' && 23 && null && 'jones');

if (resturaunt.orderPizza) {
  resturaunt.orderPizza('mushrooms', 'spinach');
}

resturaunt.orderPizza &&
  resturaunt.orderPizza('mushrooms', 'spinach', 'artichokes');

/*
  Nullish coalescing operator
\*/

//zero is a falsy value, guests will evaluate to 10.
//but if you want zero, you should use '??' (the nullish coalescing operator) instead of '||'
// this works with null and undefined values ('' and 0 are NOT falsy values with this operator)
resturaunt.numGuests = 0;
const guests = resturaunt.numGuests ?? 10;
console.log(guests);
