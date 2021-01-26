'use strict';

const airline = 'TAP Air Portugal';
const plane = 'A320';

//accessing the index positions of a string
console.log(plane[0]);
console.log(plane[1]);
console.log(plane[2]);
console.log(plane[3]);
console.log(plane[4]);

console.log(`length of airline is ${airline.length}`);
console.log('A320'.length);

//.indexOf(item) means that you return the index digit of the item in the string
//note, it starts with the first occurance of the character in question

console.log(
  `the index of "r" in the word ${airline} is ${airline.indexOf('r')}`
);

console.log(`the last index of "r" is ${airline.lastIndexOf('r')}`);

console.log(airline.indexOf('Portugal'));

//this outputs 'Air Portugal' because it starts at the 4th index position
console.log(airline.slice(4));

//starting at index 4 (0-based), go until index 7 (1-index based)
console.log(airline.slice(4, 7));

//starting at 0, take everything until the space (indexof(' '))
console.log(airline.slice(0, airline.indexOf(' ')));

//starting at last index ' ' return everything after that ('Portugal')
console.log(airline.slice(airline.lastIndexOf(' ') + 1));

//this provides the last 2 indexes
console.log(airline.slice(-2));
//takes first index and last index away
console.log(airline.slice(1, -1));

const checkMiddleSeat = function (seat) {
  //B and E are middle seats

  //line 48 returns the last character of the string
  //and we store it into a variabel
  const s = seat.slice(-1);
  if (s === 'B' || s === 'E') {
    console.log(`you got the middle seat! Oh No!`);
  } else {
    console.log(`You Got lucky!`);
  }
};
checkMiddleSeat('11B');
checkMiddleSeat('3E');
checkMiddleSeat('22A');

//this is us creating a new string object
console.log(new String('Jonas'));
console.log(typeof new String('jonas').slice(1));

console.log(`here is toUpper method ${'brandon'.toUpperCase()}`);

//fix capitalization in name
const passenger = 'bRaNdOn';
//converts everything to lower case
const lowerCase = passenger.toLowerCase();
//create another variable with the first character of lowerCase variable concatenated
//with the letters after the first character
const passengerCorrect = lowerCase[0].toUpperCase() + lowerCase.slice(1);
console.log(passengerCorrect);

//comparing emails
const email = 'hello@brandon.io';
const loginEmail = '   Hello@brandon.IO \n';

//trimStart() and trimEnd() also exist in ES9
console.log(
  email.toLowerCase().trim() === loginEmail.toLowerCase().trim()
    ? 'they are the same'
    : 'not the same'
);

//.replace() method takes in 2 arguments (thingYouWantToReplace, theReplacingItem)
const priceGB = '288,97£';
//change it from GBP to USD
const priceUS = priceGB.replace('£', '$').replace(',', '.');
console.log(priceUS);

const announce =
  'All passengers come to the boarding door 23. Boarding door 23';

//replaceAll() takes all instances of 'door' and replaces with gate
//but we used regex with the / / around the door string
//and put /g for 'global'
console.log(announce.replace(/door/g, 'gate'));

//Booleans

const airplanee = 'A320neo';
console.log(airplanee.includes('A320'));
console.log(airplanee.startsWith('B'));
console.log(airplanee.endsWith('2'));

//practice exercise
const checkBaggage = function (items) {
  if (
    items.toLowerCase().includes('knife') ||
    items.toLowerCase().includes('gun')
  ) {
    console.log('You are NOT allowed on board');
  } else {
    console.log('Welcome aboard!');
  }
};

checkBaggage('I have a laptop, some food, and a pocket KNIFE');
checkBaggage('I have some socks, and a camera');
checkBaggage('I have some snacks, and a GuN for protection');

/* Split Method practice */
//this stores all the elements divided by '+' into an array
console.log('a+very+nice+string'.split('+'));
console.log('brandon mcdonald'.split(' '));

//you can also destructure the split array and call them as seperate values
const [firstName, lastName] = 'brandon mcdonald'.split(' ');
console.log(firstName);
console.log(lastName);

//.join method takes the contents of an array and allows
//you to create a single string composed of all those array elements
//and the argument (in this case a space) passes that value in between all
//values of the array
const newName = ['Mr.', firstName, lastName.toUpperCase()].join(' ');
console.log(newName);

console.log('brandon'.slice(0, 1));

/* This is a function which capitalizes any full name seperated by spaces that you pass
into the method*/
const capitalizeName = function (name) {
  //here we split the string into an array with values being 'split' by spaces
  const names = name.split(' ');
  //here we create a empty array that we will populate later on
  const namesUpper = [];
  //loop through each item of the names array we created with .split
  for (const n of names) {
    //here we take the empty array, and push each value from names array to it
    //and convert the first index position (n[0]) to upper case,
    //and then concatenate the remaining characters starting at position 1 (n.slice(1))
    // namesUpper.push(n[0].toUpperCase() + n.slice(1));

    //here we pretty much did the same thing as line 154, but instead, used the 'replace'
    //method which takes that specific index of 0, and replaces it with the uppercase
    //version of the character
    namesUpper.push(n.replace(n[0], n[0].toUpperCase()));
  }
  console.log(namesUpper.join(' '));
};

capitalizeName('jessica ann smith david');
capitalizeName('brandon clay mcdonald the billionaire');
capitalizeName('brandon');

/*
Padding a string 
*/

const message = 'Go to gate 23!';
const shorterString = 'blah';
//padStart(# of characters you want the string to be, character you pad with)
//padEnd(# of remaining characters to reach a # of chars, character you want to pad with)
console.log(message.padStart(25, '+').padEnd(30, '+'));
console.log(shorterString.padStart(25, '+').padEnd(30, '+'));

const maskCreditCard = function (number) {
  //convert the number to a string
  const str = number + '';
  const last = str.slice(-4);
  //return the last 4 characters (last) and pad the rest by doing
  //pad.start(the remaining length of the string, replaced with a star)
  return last.padStart(str.length, '*');
};
console.log(maskCreditCard(234534636345353));
console.log(maskCreditCard('2348273597397334535'));
console.log(maskCreditCard(2345625));

/*repeating a string
 */
const message2 = 'Bad weather... All Departures Delayed... ';
console.log(message2.repeat(5));

const planesInLine = function (n) {
  console.log(`There are ${n} planes in line ${'plane '.repeat(n)}`);
};
planesInLine(3);
