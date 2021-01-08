'use strict';

const rest = new Map();
//adding elements to maps
rest.set('name', 'brandons pizzeria');
rest.set(1, 'firenze');
rest.set(2, 'lisbon');
console.log(rest);

//you can also chain set commands
rest
  .set('categories', ['pizzeria', 'italiano', 'italian food', 'yummy italian'])
  .set('open', 11)
  .set('close', 23)
  .set(true, 'we are open')
  .set(false, 'we are closed!');

//getting a property from the map
console.log(rest.get('name'));
console.log(rest.get(true));
console.log(rest.get(1));

const time = 21;
console.log(rest.get(time > rest.get('open') && time < rest.get('close')));

console.log(rest.has('categories'));

//clearing a map
// rest.clear();

//getting the size of a map
console.log(`size of the map is ${rest.size}`);
//deleting values from maps
rest.delete(2);
console.log(rest);

//setting arrays inside of maps
rest.set([1, 2], 'test');

//setting dom elements inside of a map
rest.set(document.querySelector('h1', 'Heading'));
console.log(rest);

const question = new Map([
  ['question', 'what is the best programming language in the world?'],
  [1, 'c'],
  [2, 'Java'],
  [3, 'JavaScript'],
  ['correct', 3],
  [true, 'Correct!!! YAY!'],
  [false, 'try again'],
]);

console.log(question.get('question'));

//looping through the map
for (const [key, value] of question) {
  if (typeof key === 'number') {
    console.log(`Answer ${key}: ${value}`);
  }
}
const answer = Number(prompt('Your answer'));

console.log(question.get(question.get('correct') === answer));

//converting a map back to an array
console.log([...question]);
console.log(...question.keys());
console.log(...question.values());
console.log(...question.entries());
