'use strict';

/*
A set cannot have duplicates*/

const foodsSet = new Set(['pizza', 'Pasta', 'pizza', 'pizza', 'rizotto']);
console.log(foodsSet);

console.log(new Set('brandon'));

//get the size of a set
console.log(`Size of set${foodsSet.size}`);

//check whether an element exists within a set
//output: true
console.log(foodsSet.has('pizza'));

//output: false
console.log(foodsSet.has('bread'));

//adding an element to a set
foodsSet.add('garlic bread');
foodsSet.add('garlic bread');

console.log(foodsSet);

//removing elements from a set
foodsSet.delete('rizotto');

console.log(foodsSet);

/*
sets do not have indexes*/

//clearing a set
// foodsSet.clear();
// console.log(foodsSet);

for (const food of foodsSet) {
  console.log(food);
}

//lets say we have an array of values
//but we want to extract duplicates to see the different positions of the resturaunt

const resturaunt = ['Chef', 'Waiter', 'Chef', 'Manager', 'Waiter'];
const staff = [...new Set(resturaunt)];
console.log(staff);

// if you wanted to only know the unique positions with less code, you can do the following:
console.log(new Set(['Chef', 'Waiter', 'Chef', 'Manager', 'Waiter']).size);
console.log(new Set('brandonclaymcdonald').size);
