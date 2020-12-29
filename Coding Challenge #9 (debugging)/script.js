'use strict';

/*
Given an array of forcasted maximum temperatures,
the thermometer displays a string with these temperatures.

Example: [17, 21, 23] will print "... 17 degrees C in 1 days ... 21 C in
2 days... 23 degrees C in 3 days..."

Create a function 'printForcast' which takes in an array 'arr'
and logs a string like the one above to the console.

Use the problem-solving framework: Understand the problem and break it into 
sub-problemsx
*/

/*
1. Create the method name
2. create the loop which loops through the array input
3. create the logic which processes the array
4. Create the return type for the method
*/

const temperatures = [17, 21, 23];

const printForcast = function (arr) {
  let s = '';
  for (let i = 0; i <= arr.length - 1; i++) {
    s = s + `${arr[i]} degrees C in ${i + 1} days ...`;
  }
  console.log(`...${s}`);
};

printForcast(temperatures);
