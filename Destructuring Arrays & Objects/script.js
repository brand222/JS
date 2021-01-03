'use strict';

const resturant = {
  name: 'Classico Italiano',
  location: 'Via Agnelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],
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
      open: 0,
      close: 24,
    },
  },

  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  orderDelivery: function ({
    starterIndex = 1,
    mainIndex = 0,
    time = '20:00',
    address,
  }) {
    console.log(`order recieved! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]}
    will be delivered to ${address} at ${time}`);
  },
};

resturant.orderDelivery({
  time: '22:30',
  address: 'Via del Sole, 21',
  mainIndex: 2,
  starterIndex: 2,
});

resturant.orderDelivery({
  address: 'Via del sole, 21',
  starterIndex: 1,
  time: '21:32',
});

// const { name, openingHours, categories } = resturant;
// console.log(name, openingHours, categories);

const {
  name: resturauntName,
  openingHours: hours,
  categories: tags,
} = resturant;
//console.log(resturauntName, hours, tags);

//default values
const { menu = [], starterMenu: starters = [] } = resturant;
//console.log(menu, starters);

//mutating variables
let a = 111;
let b = 999;
const obj = { a: 23, b: 7, c: 14 };

// ({ a, b } = obj);
// console.log(a, b);

//NESTED OBJECTS
const {
  fri: { open: o, close: c },
} = hours;
console.log('hello');
console.log(o, c);
// //DESTRUCTURING ARRAYS
// const arr = [2, 3, 4];
// const a = arr[0];
// const b = arr[1];
// const c = arr[2];

// //here we declared 3 variables in one command
// //we just 'destructured' the array
// const [x, y, z] = arr;
// console.log(x, y, z);
// console.log(arr);

// let [first, , third] = resturant.categories;
// console.log(first, third);

// //here we switch the first and third index values of the array
// // const temp = first;
// // first = third;
// // third = temp;
// // console.log(first, third);

// [first, third] = [third, first];
// console.log(first, third);

// //recieve two return values from a function
// const [starter, main] = resturant.order(2, 0);
// console.log(starter, main);

// //nested destructuring
// const nested = [2, 4, [5, 6]];
// // const [i, , j] = nested;
// // console.log(i, j);
// const [i, , [j, k]] = nested;
// console.log(i, j, k);

// //default values
// const [p = 1, q = 1, r = 1] = [8];
// console.log(p, q, r);
